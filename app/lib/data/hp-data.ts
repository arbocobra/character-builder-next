import postgres from 'postgres';
import {z} from 'zod';
import { DefaultModifiedSchema, DefaultModifiedListItemSchema } from '@/lib/query-types';
import HitPoints, {HitPointsList, HitPointsItem} from '@/lib/base/hit-points.ts';

const sql = postgres<any>(process.env.POSTGRES_URL!, { ssl: 'require' });
type Row = { [key:string]: any }

const hpListItem = [{name: 'tough', level: 11, value: 22}]

export const createHitPoints = async (hp:HitPoints, char_id:string) => {
   // const adjustedHP:HitPoints = {...hp, modifierList: {list: hpListItem, total: 20}, total: hp.total + 20}
   setHitPoints(hp, char_id).then((listId) => setHPList(hp.modifierList.list, listId))
}

const setHitPoints = async (hp:HitPoints, char_id:string) => {
   const validatedHitPoints = DefaultModifiedSchema.safeParse({
      charId: char_id, base: hp.base, total: hp.total, modifierTotal: hp.modifierList.total
   })
   if (!validatedHitPoints.success) { return { message: 'Something is wrong. NCR', hp } } 
   const {charId, base, total, modifierTotal} = validatedHitPoints.data;

   try {
      const result = await sql`SELECT * FROM set_hp(${charId}, ${base}, ${modifierTotal}, ${total})`
      return result[0].set_hp;
   } catch (e) {
      console.error('Database Error:', e);
      throw new Error(`Failed to insert hit points.`); 
   }
}

const setHPList = async (hpList:HitPointsItem[], list_id:string) => {
   if (hpList.length < 1) return

   for (let i = 0; i < hpList.length; i++) {
      const validatedItems = DefaultModifiedListItemSchema.safeParse({name: hpList[i].name, level: hpList[i].level, value: hpList[i].value, listId: list_id})
      
      if (!validatedItems.success) { return { message: 'Something is wrong. NCR', hpList } } 
      const { name, level, value, listId } = validatedItems.data;
      try {
         const result = await sql`SELECT * FROM update_hp_list(${listId}, ${name}, ${level}, ${value})`
      } catch (e) {
         console.error('Database Error:', e);
         throw new Error(`Failed to insert hp list item.`); 
      }
   }
}

export const fetchHitPoints = async (char_id:string) => {
   let result:{[key:string]:any} = {}
   let list:{[key:string]:any} = {}
   let listId;
   try {
      const data = await sql<Row[]>`SELECT * FROM get_hp(${char_id})`
      result.base = data[0].base;
      result.total = data[0].total;
      list.total = data[0].modifiers;
      listId = data[0].list;
   } catch (e) {
      console.error('Database Error:', e);
      throw new Error('Failed to fetch hp data.'); 
   }
   try {
      const listData = await sql<Row[]>`SELECT name, level, value FROM get_hp_list(${listId})`
      list.list = listData.map((row:Row) => row as HitPointsItem)
      result.modifierList = list as HitPointsList;
   } catch (e) {
      console.error('Database Error:', e);
      throw new Error('Failed to fetch hp list data.'); 
   }
   return result as HitPoints;
}

export const updateHitPoints = async (char_id:string, hp:HitPoints) => {
   // const adjustedHP:HitPoints = {...hp, modifierList: {list: hpListItem, total: 22}, total: hp.total}
   resetHitPoints(hp, char_id).then((listId) => setHPList(hp.modifierList.list, listId))
}

const resetHitPoints = async (hp:HitPoints, char_id:string) => {
   const validatedHitPoints = DefaultModifiedSchema.safeParse({
      charId: char_id, base: hp.base, total: hp.total, modifierTotal: hp.modifierList.total
   })
   if (!validatedHitPoints.success) { return { message: 'Something is wrong. NCR', hp } } 
   const {charId, base, total, modifierTotal} = validatedHitPoints.data;

   try {
      const result = await sql`SELECT * FROM update_hp(${charId}, ${base}, ${modifierTotal}, ${total})`
      return result[0].update_hp;
   } catch (e) {
      console.error('Database Error:', e);
      throw new Error(`Failed to insert hit points.`); 
   }
}