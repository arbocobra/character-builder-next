import postgres from 'postgres';
import {z} from 'zod';
import { DefaultModifiedSchema, DefaultModifiedListItemSchema } from '@/lib/query-types';
import ArmourClass, { ArmourClassList, ArmourClassItem } from '@/lib/base/armour-class.ts'

const sql = postgres<any>(process.env.POSTGRES_URL!, { ssl: 'require' });
type Row = { [key:string]: any }

const acListItemA:ArmourClassItem[] = [{name: 'unarmoured defense', level: 20, value: 2}]
// const acListItemB:ArmourClassItem[] = [{name: 'shield', level: 12, value: 2}] //base:16 - dex:0

export const createArmourClass = async (ac:ArmourClass, char_id:string) => {
   // const adjustedAC:ArmourClass = {base: 10, dexMod: 4, modifierList: {list: acListItemA, total: 2}, total: 16}
   setArmourClass(ac, char_id).then((listId) => setACList(ac.modifierList.list, listId))
}

const setArmourClass = async (ac:ArmourClass, char_id:string) => {
   const ACSchema = DefaultModifiedSchema.extend({ dexMod: z.int() })
   const validatedAC = ACSchema.safeParse({
      charId: char_id, base: ac.base, dexMod: ac.dexMod, total: ac.total, modifierTotal: ac.modifierList.total
   })

   if (!validatedAC.success) { return { message: 'Something is wrong. NCR', ac } } 

   const {charId, base, dexMod, total, modifierTotal} = validatedAC.data;

   try {
      const result = await sql`SELECT * FROM set_ac(${charId}, ${base}, ${dexMod}, ${modifierTotal}, ${total})`
      return result[0].set_ac;
   } catch (e) {
      console.error('Database Error:', e);
      throw new Error(`Failed to insert ac.`); 
   }
}

const setACList = async (list:ArmourClassItem[], list_id:string) => {
   if (list.length < 1) return
   for (let i = 0; i < list.length; i++) {
      const validatedItems = DefaultModifiedListItemSchema.safeParse({name: list[i].name, level: list[i].level, value: list[i].value, listId: list_id})
      
      if (!validatedItems.success) { return { message: 'Something is wrong. NCR', list } } 

      const { name, level, value, listId } = validatedItems.data;
      try {
         const result = await sql`SELECT * FROM update_ac_list(${listId}, ${name}, ${level}, ${value})`
      } catch (e) {
         console.error('Database Error:', e);
         throw new Error(`Failed to insert ac list item.`); 
      }
   }
}

export const fetchArmourClass = async (char_id:string) => {
   let result:{[key:string]:any} = {}
   let list:{[key:string]:any} = {}
   try {
      const data = await sql<Row[]>`SELECT * FROM get_ac(${char_id})`
      result.base = data[0].base;
      result.dexMod = data[0].dex_mod;
      result.total = data[0].total;
      list.total = data[0].modifiers;
   } catch (e) {
      console.error('Database Error:', e);
      throw new Error('Failed to fetch item data.'); 
   }
   try {
      const listData = await sql<Row[]>`SELECT * FROM get_ac_list(${char_id})`
      list.list = listData.map((row:Row) => row as ArmourClassItem)
      result.modifierList = list as ArmourClassList;
   } catch (e) {
      console.error('Database Error:', e);
      throw new Error('Failed to fetch item list data.'); 
   }
   return result as ArmourClass;
}

export const updateArmourClass = async (char_id:string, ac:ArmourClass) => {
   // const adjustedAC:ArmourClass = {...ac, modifierList: {list: acListItemA, total: 5}, total: ac.total + 5}
   resetArmourClass(ac, char_id).then((listId) => setACList(ac.modifierList.list, listId))
}

const resetArmourClass = async (ac:ArmourClass, char_id:string) => {
   const ACSchema = DefaultModifiedSchema.extend({ dexMod: z.int() })
   const validatedAC = ACSchema.safeParse({
      charId: char_id, base: ac.base, dexMod: ac.dexMod, total: ac.total, modifierTotal: ac.modifierList.total
   })

   if (!validatedAC.success) { return { message: 'Something is wrong. NCR', ac } } 

   const {charId, base, dexMod, total, modifierTotal} = validatedAC.data;

   try {
      const result = await sql`SELECT * FROM update_ac(${charId}, ${base}, ${dexMod}, ${modifierTotal}, ${total})`
      return result[0].update_ac;
   } catch (e) {
      console.error('Database Error:', e);
      throw new Error(`Failed to update ac.`); 
   }
}