'use server'
import postgres from 'postgres';
import {z} from 'zod';
import { Character, CharacterPreview } from '@/lib/definitions'
import { SelectProficiencies, BaseProficienciesSchema } from '@/lib/query-types'
import Proficiencies, {BaseProficiencies, ProficienciesItem, ProficienciesList} from '@/lib/base/proficiencies.ts';

const sql = postgres<any>(process.env.POSTGRES_URL!, { ssl: 'require' });

let s = {armour: [], languages: ["Common", "Dwarvish"], savingThrows: [], selectFromList: undefined, skills: [], tools: ["mason's tools"], weapons: ["Battleaxe", "Handaxe", "Light Hammer", "Warhammer"]}

let b = {armour: [], languages: ["abyssal"], savingThrows: [], selectFromList: undefined, skills: ["Athletics", "Survival"], tools: ["bagpipes"], weapons: []}

let t = {armour: ["All Armour", "Shields" ], languages: ["Common", "Dwarvish", "abyssal"], savingThrows: ["strength","constitution"], selectFromList: {}, skills: ["Athletics", "Survival", "intimidation","perception"], tools: ["mason's tools", "bagpipes"], weapons: [ "Simple Weapons", "Martial Weapons", "Battleaxe", "Handaxe", "Light Hammer", "Warhammer"]}

export const fetchCharactersPreview = async (id:string) => {
   try {
      const data = await sql<CharacterPreview[]>`
      SELECT id, name, level, class, species, background FROM characters
      WHERE user_id = ${id}
      `;
      return data;
   } catch (e) {
      console.error('Database Error:', e);
      throw new Error('Failed to fetch character data.'); 
   }
}

export const fetchCharacter = async (id:string) => {
   try {
      const data = await sql<Character[]>`SELECT * FROM characters WHERE id = ${id}`;
      let result:Character = data[0]
      if (result.proficiencies) {
         const proficiencies = await fetchCharacterCategories(result.proficiencies as string)
         result.proficiencies = proficiencies
      }
      return result;
   } catch (e) {
      console.error('Database Error:', e);
      throw new Error('Failed to fetch character data.'); 
   }
}

type ProficiencyRow = { [key:string]: any }

const fetchCharacterCategories = async(id:string) => {
   const baseData = await sql<ProficiencyRow[]>`SELECT * FROM get_proficiencies(${id})`
   let result:{[key:string]:any} = {}
   let list:{[key:string]:any} = {}
   for (let row of baseData) {
      const { category, saving_throws, select_from_list, ...val } = row;
      if (category === 'total') {
         const finalVal = {savingThrows: saving_throws, ...val}
         result.total = finalVal as BaseProficiencies;
      } else {
         const finalVal = {savingThrows: saving_throws, selectFromList: select_from_list, ...val}
         if (category === 'feats') { list.total = finalVal as BaseProficiencies; }
         else { result[category] = finalVal as BaseProficiencies; }
      }
   }
   const listData = await sql`SELECT * FROM get_proficiency_list(${id})`
   list.list = listData.map((row:any) => row as ProficienciesItem)
   result.feats = list as ProficienciesList;

   return result as Proficiencies;
}

export const createCharacter = async (char:any) => {
   
   Promise.all([
      insertSingleCat(char.proficiencies.class),
      insertSingleCat(s),
      insertSingleCat(b),
      insertSingleCat(t),
   ]).then((arr) => insertCharacterCategories(arr), (e) => console.error(e, 'insertCharacterCategories')
   ).then((id) => insertCharacter(char, id), (e) => console.error(e, 'insertCharacter')
   ).then(() => console.log('I worked?'))


   // const proficiencies = await insertCharacterCategories(char.proficiencies)

   // let user = "2db54255-9fe7-4055-86e0-c577f1254faf";
   // try {
   //    const id = await sql`
   //       INSERT into characters (user_id, name, level, class, subclass, species, background, proficiency_bonus, hit_dice, initiative_bonus, class_asi_levels)
   //       VALUES (${user}, ${char.name}, ${char.level}, ${char.class}, ${char.subclass}, 'hill dwarf', 'outlander', ${char.proficiency_bonus}, ${char.hit_dice}, ${char.initiative_bonus}, ${char.class_ASI_levels})
   //       RETURNING id;
   //    `
   //    return id[0].id
   // } catch (e) {

   // }
   // // first insert categories, return each id
   // // char.profic -> name, level, class, (bg), (sp), class_ASI_levels, hit_dice, initiative_bonus, subclass, 
}

const insertCharacter = async (char:any, profId:any) => {
   let userId = "2db54255-9fe7-4055-86e0-c577f1254faf";
      try {
      const id = await sql`
         INSERT into characters (user_id, name, level, class, subclass, species, background, proficiency_bonus, hit_dice, initiative_bonus, class_asi_levels, proficiencies)
         VALUES (${userId}, ${char.name}, ${char.level}, ${char.class}, ${char.subclass}, 'hill dwarf', 'outlander', ${char.proficiency_bonus}, ${char.hit_dice}, ${char.initiative_bonus}, ${char.class_ASI_levels}, ${profId})
         RETURNING id;
      `
      return id[0].id
   } catch (e) {

   }
}

const insertCharacterCategories = async (profIds:any) => {

   // c = fighter/ skills: Intimidation Perception
   const [classId, speciesId, backgroundId, totalId] = profIds; 

   try {
      const profic = await sql`
         INSERT into proficiencies (class, species, background, total)
         VALUES (${classId}, ${speciesId}, ${backgroundId}, ${totalId})
         RETURNING id;
      `
      return profic[0].id
   } catch (e) {
      console.error('Database Error:', e);
      throw new Error('Failed to insert proficiencies.'); 
   }
}

const insertSingleCat = async (prof:any) => {

   let {armour, languages, savingThrows, selectFromList, skills, tools, weapons} = prof
   const validatedProficiencies = BaseProficienciesSchema.safeParse({
      armour, languages, savingThrows, selectFromList, skills, tools, weapons
   })

   if (!validatedProficiencies.success) {
      return {
         errors: validatedProficiencies.error.flatten().fieldErrors,
         message: 'Something is wrong. NCR',
      };
   } 

   const {armour: Armour, languages: Languages, savingThrows: SavingThrows, selectFromList: SelectFromList, skills: Skills, tools: Tools, weapons: Weapons} = validatedProficiencies.data

   console.log(Armour, Languages, SavingThrows, SelectFromList, Skills, Tools, Weapons)

   try {
      const result = await sql`
         INSERT into base_proficiencies (armour, languages, saving_throws, select_from_list, skills, tools, weapons)
         VALUES (${Armour}, ${Languages}, ${SavingThrows}, ${SelectFromList as any}, ${Skills}, ${Tools}, ${Weapons})
         RETURNING id;
      `
      return result[0].id;
   } catch (e) {
      console.error('Database Error:', e);
      throw new Error(`Failed to insert base proficiency.`); 
   }
}

const insertTotalCat = async (prof:any) => {
   let {armour, languages, savingThrows, skills, tools, weapons} = prof
   const validatedProficiencies = BaseProficienciesSchema.safeParse({
      armour, languages, savingThrows, skills, tools, weapons
   })

   if (!validatedProficiencies.success) {
      return {
         errors: validatedProficiencies.error.flatten().fieldErrors,
         message: 'Something is wrong. NCR',
      };
   } 

   const {armour: Armour, languages: Languages, savingThrows: SavingThrows, skills: Skills, tools: Tools, weapons: Weapons} = validatedProficiencies.data

   console.log(Armour, Languages, SavingThrows, Skills, Tools, Weapons)

   try {
      const result = await sql`
         INSERT into base_proficiencies (armour, languages, saving_throws, skills, tools, weapons)
         VALUES (${Armour}, ${Languages}, ${SavingThrows}, ${Skills}, ${Tools}, ${Weapons})
         RETURNING id;
      `
      return result[0].id;
   } catch (e) {
      console.error('Database Error:', e);
      throw new Error(`Failed to insert base proficiency. - total`); 
   }
}
