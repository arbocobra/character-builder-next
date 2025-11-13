import postgres from 'postgres';
import {z} from 'zod';
import { DefaultModifiedSchema, DefaultModifiedListItemSchema } from '@/lib/query-types';
import Speed, {SpeedList, SpeedItem} from '@/lib/base/speed.ts';

const sql = postgres<any>(process.env.POSTGRES_URL!, { ssl: 'require' });
type Row = { [key:string]: any }

export const createSpeed = async (sp:Speed, char_id:string) => {
   // const updateSpeed = {...sp, modifierList: {list: [{name: 'fast movement', level: 20, value: 10}], total: 10}, total: sp.total + 10}
   setSpeed(sp, char_id).then((listId) => setSpeedList(sp.modifierList.list, listId))
}

const setSpeed = async (sp:Speed, char_id:string) => {
   const validatedSpeed = DefaultModifiedSchema.safeParse({
      charId: char_id, base: sp.base, total: sp.total, modifierTotal: sp.modifierList.total
   })
   if (!validatedSpeed.success) { return { message: 'Something is wrong. NCR', sp } } 
   const {charId, base, total, modifierTotal} = validatedSpeed.data;

   try {
      const result = await sql`SELECT * FROM set_speed(${charId}, ${base}, ${modifierTotal}, ${total})`
      return result[0].set_speed;
   } catch (e) {
      console.error('Database Error:', e);
      throw new Error(`Failed to insert speed.`); 
   }
}

const setSpeedList = async (spList:SpeedItem[], list_id:string) => {
   if (spList.length < 1) return

   for (let i = 0; i < spList.length; i++) {
      const validatedItems = DefaultModifiedListItemSchema.safeParse({name: spList[i].name, level: spList[i].level, value: spList[i].value, listId: list_id})
      
      if (!validatedItems.success) { return { message: 'Something is wrong. NCR', spList } } 
      const { name, level, value, listId } = validatedItems.data;
      try {
         const result = await sql`SELECT * FROM update_speed_list(${listId}, ${name}, ${level}, ${value})`
      } catch (e) {
         console.error('Database Error:', e);
         throw new Error(`Failed to insert speed list item.`); 
      }
   }
}
export const fetchSpeed = async (char_id:string) => {
   let result:{[key:string]:any} = {}
   let list:{[key:string]:any} = {}
   let listId;
   try {
      const data = await sql<Row[]>`SELECT * FROM get_speed(${char_id})`
      result.base = data[0].base;
      result.total = data[0].total;
      list.total = data[0].modifiers;
      listId = data[0].list;
   } catch (e) {
      console.error('Database Error:', e);
      throw new Error('Failed to fetch speed data.'); 
   }
   try {
      const listData = await sql<Row[]>`SELECT name, level, value FROM get_speed_list(${listId})`
      list.list = listData.map((row:Row) => row as SpeedItem)
      result.modifierList = list as SpeedList;
   } catch (e) {
      console.error('Database Error:', e);
      throw new Error('Failed to fetch speed list data.'); 
   }
   return result as Speed;
}

export const updateSpeed = async (char_id:string, sp:Speed) => {
   const updateSpeed = {...sp, modifierList: {list: [{name: 'mobile', level: 12, value: 10}], total: 10}, total: 40}
   resetSpeed(updateSpeed, char_id).then((listId) => setSpeedList(updateSpeed.modifierList.list, listId))
}

const resetSpeed = async (sp:Speed, char_id:string) => {
   const validatedHitPoints = DefaultModifiedSchema.safeParse({
      charId: char_id, base: sp.base, total: sp.total, modifierTotal: sp.modifierList.total
   })
   if (!validatedHitPoints.success) { return { message: 'Something is wrong. NCR', sp } } 
   const {charId, base, total, modifierTotal} = validatedHitPoints.data;

   try {
      const result = await sql`SELECT * FROM update_speed(${charId}, ${base}, ${modifierTotal}, ${total})`
      return result[0].update_speed;
   } catch (e) {
      console.error('Database Error:', e);
      throw new Error(`Failed to insert hit points.`); 
   }
}