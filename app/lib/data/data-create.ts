import postgres from 'postgres';
import {z} from 'zod';
import { BaseProficienciesSchema, ProficiencyItemSchema, BaseItemSchema, ItemSchema, DefaultModifiedSchema, DefaultModifiedListItemSchema, AbilitiesSchema, AbilityItemSchema } from '@/lib/query-types';
import {createProficiencies} from '@/lib/data/proficiencies-data';
import {createItems} from '@/lib/data/items-data';
import {createAbilities} from '@/lib/data/abilities-data';

const sql = postgres<any>(process.env.POSTGRES_URL!, { ssl: 'require' });

// const sampleHPList = [{name: 'tough', level: 20, value: 40}]
const sampleSpList = [{name: 'unarmoured movement', level: 10, value: 20}]
// const sampleSpList = [{name: 'fast movement', level: 20, value: 10}]
const sampleACList = [{name: 'bracers of defense', level: 10, value: 2}, {name: 'unarmoured defense', level: 10, value: 3}]
// const sampleASIList = [{name: 'class-asi-4', level: 4, value: [0,1,0,0,1,0]}, {name: 'class-asi-8', level: 8, value: [0,1,0,0,1,0]}]

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
   const _proficiencies = await createProficiencies(char.proficiencies, char_id);
   const _items = await createItems(char.items, char_id);
   const _abilities = await createAbilities(char.abilities, char_id)
   // const hitPoints = await createHitPoints(char.hit_points, char_id);
   // const speed = await createSpeed(char.speed, char_id);
   // const armourClass = await createAC(char.armour_class, char_id);
   // const items = await createItems(char.items, char_id)
   // const abilities = await createAbilities(char.abilities, char_id)
   // console.log(char.items)
}



// const createItems = async (items:any, char_id:string) => {
//    const modifiedItems = {
//       ...items, 
//       purchased: {
//          list:[{value: 'bracers of defense', prop: 'armour'}], 
//          total: {...items.purchased.total, armour: ['bracers of defence']}}, 
//       total: {...items.total, armour: [...items.total.armour, 'bracers of defence']}
//    }
//    Promise.all([
//       setBaseItems(modifiedItems.class),
//       setBaseItems(modifiedItems.background),
//       setBaseItems(modifiedItems.purchased.total),
//       setBaseItems(modifiedItems.total)
//    ]).then((arr) => setItems(arr, char_id)
//    ).then((val) => setItemsList(modifiedItems.purchased.list, val))

// }

// const setItems = async (itemIds:string[], char_id:string) => {
//    const [classId, backgroundId, purchasedId, totalId] = itemIds;
//    try {
//          const result = await sql`SELECT * FROM set_items(${char_id}, ${classId}, ${backgroundId}, ${purchasedId}, ${totalId})`
//          return result[0].set_items;
//       } catch (e) {
//          console.error('Database Error:', e);
//          throw new Error(`Failed to create items.`); 
//       }
// }

// const createAbilities = async (abs:any, char_id:string) => {
//    const adjustedAbs = {...abs, class: {list: sampleASIList, total: [0,2,0,0,2,0]}, total: [10,18,13,10,16,12], modifiers: [0,4,1,0,3,1]}
//    const {class_id, feats_id} = await setAbilities(adjustedAbs, char_id);
//    const _classInsert = await setAbilitiesList(adjustedAbs.class.list, class_id)
//    const _featInsert = await setAbilitiesList(adjustedAbs.feats.list, feats_id)
// }

// const setAbilities = async (abs:any, char_id:string) => {
//    const validatedAbilities = AbilitiesSchema.safeParse({
//       base: abs.base, classTotal: abs.class.total, species: abs.species, featsTotal: abs.feats.total, total: abs.total, modifiers: abs.modifiers
//    })
//    if (!validatedAbilities.success) {
//       return { message: 'Something is wrong. NCR', abs };
//    }
//    const {base, classTotal, species, featsTotal, total, modifiers} = validatedAbilities.data;
//    try {
//       const result = await sql`SELECT * FROM set_abilities(${char_id}, ${base}, ${classTotal}, ${species}, ${featsTotal}, ${total}, ${modifiers})`
//       return result[0].set_abilities;
//    } catch (e) {
//       console.error('Database Error:', e);
//       throw new Error(`Failed to insert hit points.`); 
//    }

// }

const createHitPoints = async (hp:any, char_id:string) => {
   // const adjustedHP = {base: 205, modifierList: { list: hp.modifierList.list, total: hp.modifierList.total }, total: 245}
   setHitPoints(hp, char_id).then((listId) => setHPList(hp.modifierList.list, listId))
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
   const adjustedSpeed = { ...speed, modifierList: { list: sampleSpList, total: 20 }, total: 45 }
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
   const adjustedAC = {...ac, dexMod: 4, modifierList: { list: sampleACList, total: 5 }, total: 19}
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



// const setBaseItems = async (item:any) => {
//    let {armour, weapons, tools, equipment, currency, selectFromList} = item
//    const validatedItems = BaseItemSchema.safeParse({
//       armour, weapons, equipment, tools, currency, selectFromList
//    })
   
//    if (!validatedItems.success) {
//       return { message: 'Something is wrong. NCR', item };
//    } 

//    const {armour: Armour, weapons: Weapons, equipment: Equipment, tools: Tools, currency: Currency, selectFromList: SelectFromList} = validatedItems.data;

//    try {
//       const result = await sql`SELECT * FROM set_base_item(${Armour}, ${Weapons}, ${Equipment}, ${Tools}, ${Currency}, ${SelectFromList as any})`
//       return result[0].set_base_item;
//    } catch (e) {
//       console.error('Database Error:', e);
//       throw new Error(`Failed to insert base item.`); 
//    }
// }

// const setItemsList = async (list:any[], list_id:string) => {
//    if (list.length < 1) return
//    for (let i = 0; i < list.length; i++) {
//       const {name, prop, level, value} = list[i]
//       const validatedItems = ItemSchema.safeParse({name, prop, level, value, listId: list_id})
      
//       if (!validatedItems.success) {
//          return { message: 'Something is wrong. NCR', value };
//       } 
//       const { prop: Prop, value: Value, listId: ListId } = validatedItems.data;

//       try {
//          const result = await sql`INSERT INTO items_item (prop, value, list_id) VALUES (${Prop}, ${Value}, ${ListId})`
//       } catch (e) {
//          console.error('Database Error:', e);
//          throw new Error(`Failed to insert item list item.`); 
//       }
//    }
// }

// const setAbilitiesList = async (list:any[], id:string) => {
//    if (list.length < 1) return
//    for (let i = 0; i < list.length; i++) {
//       const validatedItems = AbilityItemSchema.safeParse({name: list[i].name, level: list[i].level, value: list[i].value, listId: id});
//       if (!validatedItems.success) {
//          console.log('did not validate')
//          return { message: 'Something is wrong. NCR', list };
//       } 
//       const { name, level, value, listId } = validatedItems.data;
//       try {
//          const result = await sql`SELECT * FROM update_ability_item(${listId}, ${name}, ${level}, ${value})`
//       } catch (e) {
//          console.error('Database Error:', e);
//          throw new Error(`Failed to insert ability list item.`); 
//       }
//    }

// }

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