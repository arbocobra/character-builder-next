import postgres from 'postgres';
// import {z} from 'zod';
import { AbilitiesSchema, AbilityItemSchema } from '@/lib/query-types';
import Abilities, {AbilitiesList, AbilitiesItem} from '@/lib/base/abilities.ts';

const sql = postgres<any>(process.env.POSTGRES_URL!, { ssl: 'require' });
type Row = { [key:string]: any }

const sampleCList:AbilitiesItem[] = [{name: 'class-asi-4', level: 4, value: [0,0,1,1,0,0]}, {name: 'class-asi-19', level: 19, value: [2,0,0,0,0,0]}, {name: 'class-asi-12', level: 12, value: [0,2,0,0,0,0]}, {name: 'class-asi-16', level: 16, value: [0,0,2,0,0,0]}]
const sampleFList:AbilitiesItem[] = [{name: 'athlete', level: 8, value: [0,1,0,0,0,0]}]

export const createAbilities = async (abs:Abilities, char_id:string) => {
   // const adjustedAbs:Abilities = {...abs, class: {list: sampleCList, total: [2,2,3,1,0,0]}, feats: {list: sampleFList, total: [1,0,0,0,0,0]}, total: [18,18,16,10,10,12], modifiers: [4,4,2,0,0,0]}

   await setAbilities(abs, char_id).then((valArr) => setListObj(valArr, abs))
}

const setAbilities = async (abs:Abilities, char_id:string) => {
   const validatedAbilities = AbilitiesSchema.safeParse({
      base: abs.base, classTotal: abs.class.total, species: abs.species, featsTotal: abs.feats.total, total: abs.total, modifiers: abs.modifiers, characterId: char_id
   })
   if (!validatedAbilities.success) {
      return { message: 'Something is wrong. NCR', abs };
   }
   const {base, classTotal, species, featsTotal, total, modifiers, characterId} = validatedAbilities.data;

   try {
      const result = await sql<Row[]>`SELECT * FROM set_abilities(${characterId}, ${base}, ${classTotal}, ${species}, ${featsTotal}, ${total}, ${modifiers})`
      return result;
   } catch (e) {
      console.error('Database Error:', e);
      throw new Error(`Failed to insert abilities.`); 
   }

}

const setListObj = async (id_obj:any, abs:Abilities) => {
   const class_id:string = id_obj[0].id;
   const feats_id:string = id_obj[1].id;
   const class_list:AbilitiesItem[] = abs.class.list;
   const feats_list:AbilitiesItem[] = abs.feats.list;
   await setAbilitiesList(class_list, class_id).then(() => setAbilitiesList(feats_list, feats_id))
}

const setAbilitiesList = async (list:AbilitiesItem[], id:string) => {
   if (list.length < 1) return
   for (let i = 0; i < list.length; i++) {
      const validatedItems = AbilityItemSchema.safeParse({name: list[i].name, level: list[i].level, value: list[i].value, listId: id});
      if (!validatedItems.success) {
         return { message: 'Something is wrong. NCR', list };
      } 
      const { name, level, value, listId } = validatedItems.data;
      try {
         const result = await sql`SELECT * FROM update_ability_item(${listId}, ${name}, ${level}, ${value})`
      } catch (e) {
         console.error('Database Error:', e);
         throw new Error(`Failed to insert ability list item.`); 
      }
   }

}

export const fetchAbilities = async (char_id:string) => {
   let result:{[key:string]:any} = {}
   let listClass:{[key:string]:any} = {}
   let listFeats:{[key:string]:any} = {}
   let classId, featId;
   try {
      const data = await sql<Row[]>`SELECT * FROM get_abilities(${char_id})`
      result = {base: data[0].base, species: data[0].species, total: data[0].total, modifiers: data[0].modifiers}
      listClass.total = data[0].class;
      listFeats.total = data[0].feats;
      classId = data[0].class_list;
      featId = data[0].feats_list;
      // const {base, class_val, species, feats, total, modiefiers, class_list, feats_list} = data[0]
   } catch(e) {
      console.error('Database Error:', e);
      throw new Error(`Failed to fetch abilities.`); 
   }
   try {
      const cData = await sql<Row[]>`SELECT * FROM get_ability_list(${classId})`
      listClass.list = cData.map((row:any) => row as AbilitiesItem);
      result.class = listClass as AbilitiesList;
   } catch(e) {
      console.error('Database Error:', e);
      throw new Error(`Failed to fetch abilities class list`); 
   }
   try {
      const fData = await sql<Row[]>`SELECT * FROM get_ability_list(${featId})`
      listFeats.list = fData.map((row:any) => row as AbilitiesItem);
      result.feats = listFeats as AbilitiesList;
   } catch(e) {
      console.error('Database Error:', e);
      throw new Error(`Failed to fetch abilities feats list`); 
   }
   return result as Abilities;
}

export const updateAbilities = async (id:string, abs:Abilities) => {
   // const newAbilities = {
   //    ...abs, feats: {list: sampleFListUpd, total: [0,1,0,0,0,0]},
   //    total: [15, 16, 14, 10, 10, 15], modifiers: [2,3,2,0,0,2]
   // }
   // const adjustedAbs:Abilities = {...abs, class: {list: sampleASIList, total: [0,1,2,1,0,0]}, feats: {list: sampleFList, total: [1,0,0,0,0,0]}, total: [16, 14, 14, 10, 10, 16], modifiers: [3,2,2,0,0,3]}

   await resetAbilities(id, abs).then((valArr) => setListObj(valArr, abs))
}

const resetAbilities = async (char_id:string, abs:Abilities) => {

   const validatedAbilities = AbilitiesSchema.safeParse({
      base: abs.base, classTotal: abs.class.total, species: abs.species, featsTotal: abs.feats.total, total: abs.total, modifiers: abs.modifiers, characterId: char_id
   })
   if (!validatedAbilities.success) {
      return { message: 'Something is wrong. NCR', abs };
   }
   const {base, classTotal, species, featsTotal, total, modifiers, characterId} = validatedAbilities.data;

   try {
      const result = await sql<Row[]>`SELECT * FROM update_abilities(${characterId}, ${base}, ${classTotal}, ${species}, ${featsTotal}, ${total}, ${modifiers})`
      return result;
   } catch (e) {
      console.error('Database Error:', e);
      throw new Error(`Failed to update abilities.`); 
   }
}