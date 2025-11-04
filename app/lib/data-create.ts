import postgres from 'postgres';
import {z} from 'zod';
import { BaseProficienciesSchema, ProficiencyItemSchema, DefaultModifiedSchema, DefaultModifiedListItemSchema } from '@/lib/query-types';

const sql = postgres<any>(process.env.POSTGRES_URL!, { ssl: 'require' });
// Create Character

// 1. create new with base vals - return id
// 2. create categories(char id)
//  a - each category has create func
// 3. create [cat] - saved function(char id)
//  a - if base table - loop each, then create func which updates character
//  b - if reg - create func (auto updates)
//  c - if mod lists - loop

const samplePData = {
   b: {armour: ['background'], languages: [], savingThrows: [], selectFromList: undefined, skills: ["Animal Handling", "Survival"], tools: ["Land Vehicles", "woodcarver's tools"], weapons: []},
   f: {armour: ['feats'], languages: [], savingThrows: [], selectFromList: {}, skills: ['stealth', 'athletics'], tools: ['thieve\'s tools'], weapons: []},
   t: {armour: ["Total"], languages: ["Common", "Gnomish"], savingThrows: ["strength", "dexterity"], selectFromList: {}, skills: ["Animal Handling", "athletics", "Survival", "stealth", "acrobatics", "insight"], tools: ["brewer's supplies", "Land Vehicles", "woodcarver's tools", "thieve's tools"], weapons: [ "Simple Weapons", "shortsword"]}
}
const samplePList = [{name: 'skilled', prop: 'skills', level: 4, value: ['stealth', 'athletics']}, {name: 'skilled', prop: 'tools', level: 4, value: ['thieve\'s tools']}]
const sampleHPList = [{name: 'tough', level: 20, value: 40}]
// const sampleSpList = [{name: 'unarmoured movement', level: 10, value: 20}]
const sampleSpList = [{name: 'fast movement', level: 20, value: 10}]
const sampleACList = [{name: 'bracers of defense', level: 20, value: 2}, {name: 'unarmoured defense', level: 20, value: 3}]

export const createCharacter = async (char:any, user_id:string) => {
   setCharacter(char, user_id)
      .then((obj) => createCategories(char, obj.id))
}

const setCharacter = async (char:any, user_id:string):Promise<any> => {
   try {
      const id = await sql<object[]>`
         INSERT into characters (user_id, name, level, class, subclass, species, background, proficiency_bonus, hit_dice, initiative_bonus, class_asi_levels, size)
         VALUES (${user_id}, ${char.name}, ${char.level}, ${char.class}, ${char.subclass}, ${char.species}, ${char.background}, ${char.proficiency_bonus}, ${char.hit_dice}, ${char.initiative_bonus}, ${char.class_ASI_levels}, ${char.size})
         RETURNING id;
      `
      return id[0]
   } catch (e) {

   }
} // returns char_id

const createCategories = async (char:any, char_id:string) => {
   const proficiencies = await createProficiencies(char.proficiencies, char_id);
   const hitPoints = await createHitPoints(char.hit_points, char_id);
   const speed = await createSpeed(char.speed, char_id);
   const armourClass = await createAC(char.armour_class, char_id);
}

const createProficiencies = async (profs:any, char_id:string) => {
   Promise.all([
      setBaseProficiencies(profs.class),
      setBaseProficiencies(profs.species),
      setBaseProficiencies(profs.background),
      setBaseProficiencies(profs.feats.total),
      setBaseProficiencies(profs.total)
   ]).then((arr) => setProficiencies(arr, char_id)
   ).then((val) => setProficienciesList(profs.feats.list, val))
}

const setProficiencies = async (profIds:string[], char_id:string) => {
   const [classId, speciesId, backgroundId, featsId, totalId] = profIds;
   try {
         const result = await sql`SELECT * FROM set_proficiencies(${char_id}, ${classId}, ${speciesId}, ${backgroundId}, ${featsId}, ${totalId})`
         return result[0].set_proficiencies;
      } catch (e) {
         console.error('Database Error:', e);
         throw new Error(`Failed to create proficiencies.`); 
      }
}

const createHitPoints = async (hp:any, char_id:string) => {
   const adjustedHP = {base: 205, modifierList: { list: sampleHPList, total: 40 }, total: 245}
   setHitPoints(adjustedHP, char_id).then((listId) => setHPList(adjustedHP.modifierList.list, listId))
}

const setHitPoints = async (hp:any, char_id:string) => {
   const validatedHitPoints = DefaultModifiedSchema.safeParse({
      charId: char_id, base: hp.base, total: hp.total, modifierTotal: hp.modifierList.total
   })

   if (!validatedHitPoints.success) {
      return { message: 'Something is wrong. NCR', hp };
   } 

   const {charId, base, total, modifierTotal} = validatedHitPoints.data;

   try {
      const result = await sql`SELECT * FROM set_hp(${charId}, ${base}, ${total}, ${modifierTotal})`
      return result[0].set_hp;
   } catch (e) {
      console.error('Database Error:', e);
      throw new Error(`Failed to insert hit points.`); 
   }
}

const createSpeed = async (speed:any, char_id:string) => {
   const adjustedSpeed = { ...speed, modifierList: { list: sampleSpList, total: 10 }, total: 40 }
   setSpeed(adjustedSpeed, char_id).then((listId) => setSpeedList(adjustedSpeed.modifierList.list, listId))
}

const setSpeed = async (speed:any, char_id:string) => {
   const validatedSpeed = DefaultModifiedSchema.safeParse({
      charId: char_id, base: speed.base, total: speed.total, modifierTotal: speed.modifierList.total
   })

   if (!validatedSpeed.success) {
      return { message: 'Something is wrong. NCR', speed };
   } 

   const {charId, base, total, modifierTotal} = validatedSpeed.data;

   try {
      const result = await sql`SELECT * FROM set_speed(${charId}, ${base}, ${total}, ${modifierTotal})`
      return result[0].set_speed;
   } catch (e) {
      console.error('Database Error:', e);
      throw new Error(`Failed to insert hit points.`); 
   }
}

const createAC = async (ac:any, char_id:string) => {
   const adjustedAC = {...ac, dexMod: 1, modifierList: { list: sampleACList, total: 5 }, total: 16}
   setAC(adjustedAC, char_id).then((listId) => setACList(adjustedAC.modifierList.list, listId));
   // setAC(adjustedAC, char_id).then((listId) => console.log(listId))
}

const setAC = async (ac:any, char_id:string) => {
   const ACSchema = DefaultModifiedSchema.extend({ dexMod: z.int() })
   const validatedAC = ACSchema.safeParse({
      charId: char_id, base: ac.base, dexMod: ac.dexMod, total: ac.total, modifierTotal: ac.modifierList.total
   })

   if (!validatedAC.success) {
      return { message: 'Something is wrong. NCR', ac };
   } 

   const {charId, base, dexMod, total, modifierTotal} = validatedAC.data;

   try {
      const result = await sql`SELECT * FROM set_ac(${charId}, ${base}, ${dexMod}, ${total}, ${modifierTotal})`
      return result[0].set_ac;
   } catch (e) {
      console.error('Database Error:', e);
      throw new Error(`Failed to insert ac.`); 
   }
}

// later set... abilities, items, ac, speed

const setBaseProficiencies = async (prof:any) => {
   let {armour, languages, savingThrows, selectFromList, skills, tools, weapons} = prof
   const validatedProficiencies = BaseProficienciesSchema.safeParse({
      armour, languages, savingThrows, selectFromList, skills, tools, weapons
   })

   if (!validatedProficiencies.success) {
      return { message: 'Something is wrong. NCR', prof };
   } 

   const {armour: Armour, languages: Languages, savingThrows: SavingThrows, selectFromList: SelectFromList, skills: Skills, tools: Tools, weapons: Weapons} = validatedProficiencies.data;

   try {
      const result = await sql`SELECT * FROM set_base_prof(${Armour}, ${Languages}, ${SavingThrows}, ${SelectFromList as any}, ${Skills}, ${Tools}, ${Weapons})`
      return result[0].set_base_prof;
   } catch (e) {
      console.error('Database Error:', e);
      throw new Error(`Failed to insert base proficiency.`); 
   }
}

const setProficienciesList = async (list:any[], list_id:string) => {
   if (list.length < 1) return
   for (let i = 0; i < list.length; i++) {
      const {name, prop, level, value} = list[i]
      const validatedItems = ProficiencyItemSchema.safeParse({name, prop, level, value, listId: list_id})
      
      if (!validatedItems.success) {
         return { message: 'Something is wrong. NCR', value };
      } 
      const { name: Name, prop: Prop, level: Level, value: Value, listId: ListId } = validatedItems.data;
      console.log(Name,Prop,Level,Value,ListId);
      try {
         const result = await sql`SELECT * FROM update_prof_list(${ListId}, ${Name}, ${Prop}, ${Level}, ${Value})`
         // return result[0].update_prof_list;
      } catch (e) {
         console.error('Database Error:', e);
         throw new Error(`Failed to insert proficiency list item.`); 
      }
   }
}

const setHPList = async (list:any[], list_id:string) => {
   if (list.length < 1) return
   for (let i = 0; i < list.length; i++) {
      const validatedItems = DefaultModifiedListItemSchema.safeParse({name: list[i].name, level: list[i].level, value: list[i].value, listId: list_id})
      
      if (!validatedItems.success) {
         console.log('did not validate')
         return { message: 'Something is wrong. NCR', list };
      } 
      const { name, level, value, listId } = validatedItems.data;
      // console.log(name, level, value, listId);
      try {
         const result = await sql`SELECT * FROM update_hp_list(${listId}, ${name}, ${level}, ${value})`
      } catch (e) {
         console.error('Database Error:', e);
         throw new Error(`Failed to insert hp list item.`); 
      }
   }
}

const setSpeedList = async (list:any[], list_id:string) => {
   if (list.length < 1) return
   for (let i = 0; i < list.length; i++) {
      const validatedItems = DefaultModifiedListItemSchema.safeParse({name: list[i].name, level: list[i].level, value: list[i].value, listId: list_id})
      
      if (!validatedItems.success) {
         console.log('did not validate')
         return { message: 'Something is wrong. NCR', list };
      } 
      const { name, level, value, listId } = validatedItems.data;
      // console.log(name, level, value, listId);
      try {
         const result = await sql`SELECT * FROM update_speed_list(${listId}, ${name}, ${level}, ${value})`
      } catch (e) {
         console.error('Database Error:', e);
         throw new Error(`Failed to insert speed list item.`); 
      }
   }
}

const setACList = async (list:any[], list_id:string) => {
   if (list.length < 1) return
   for (let i = 0; i < list.length; i++) {
      const validatedItems = DefaultModifiedListItemSchema.safeParse({name: list[i].name, level: list[i].level, value: list[i].value, listId: list_id})
      
      if (!validatedItems.success) {
         console.log('did not validate')
         return { message: 'Something is wrong. NCR', list };
      } 
      const { name, level, value, listId } = validatedItems.data;
      console.log(name, level, value, listId);
      try {
         const result = await sql`SELECT * FROM update_ac_list(${listId}, ${name}, ${level}, ${value})`
      } catch (e) {
         console.error('Database Error:', e);
         throw new Error(`Failed to insert ac list item.`); 
      }
   }
}