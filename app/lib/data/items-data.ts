import postgres from 'postgres';
// import {z} from 'zod';
import { BaseItemSchema, ItemSchema } from '@/lib/query-types';
// import { Character, CharacterPreview, defaultProficiencies, defaultItems, defaultAbilities, defaultArmourClass, defaultHP, defaultSpeed } from '@/lib/definitions'
import Items, {BaseItems, ItemsList, Item} from '@/lib/base/items.ts';

const sql = postgres<any>(process.env.POSTGRES_URL!, { ssl: 'require' });
type Row = { [key:string]: any }

const sampleIList = [{value: 'bracers of defense', prop: 'armour'}]
const sampleIListUpd = [{value: 'bracers of defense', prop: 'armour'}, {value: 'thieve\'s tools', prop: 'tools'}]

export const createItems = async (items:any, char_id:string) => {
   const modifiedItems = {
      ...items, 
      purchased: { list: sampleIList, total: {...items.purchased.total, armour: ['bracers of defence']} }, 
      total: {...items.total, armour: [...items.total.armour, 'bracers of defence']}
   }
   console.log(modifiedItems)
   Promise.all([
      setBaseItems(modifiedItems.class),
      setBaseItems(modifiedItems.background),
      setBaseItems(modifiedItems.purchased.total),
      setBaseItems(modifiedItems.total)
   ]).then((arr) => setItems(arr, char_id)
   ).then((val) => setItemsList(modifiedItems.purchased.list, val))

}

const setItems = async (itemIds:string[], char_id:string) => {
   const [classId, backgroundId, purchasedId, totalId] = itemIds;
   try {
      const result = await sql`SELECT * FROM set_items(${char_id}, ${classId}, ${backgroundId}, ${purchasedId}, ${totalId})`
      return result[0].set_items;
   } catch (e) {
      console.error('Database Error:', e);
      throw new Error(`Failed to create items.`); 
   }
}

const setBaseItems = async (item:any) => {
   // let {armour, weapons, tools, equipment, currency, selectFromList} = item
   const validatedItems = BaseItemSchema.safeParse({
      armour: item.armour, weapons: item.weapons, equipment: item.equipment, tools: item.tools, currency: item.currency, selectFromList: item.selectFromList
   })
   
   if (!validatedItems.success) {
      return { message: 'Something is wrong. NCR', item };
   } 
   const {armour, weapons, tools, equipment, currency, selectFromList} = validatedItems.data;
   // const {armour: Armour, weapons: Weapons, equipment: Equipment, tools: Tools, currency: Currency, selectFromList: SelectFromList} = validatedItems.data;

   try {
      const result = await sql`SELECT * FROM set_base_items(${armour}, ${weapons}, ${equipment}, ${tools}, ${currency}, ${selectFromList as any})`
      return result[0].set_base_items;
   } catch (e) {
      console.error('Database Error:', e);
      throw new Error(`Failed to insert base items.`); 
   }
}

const setItemsList = async (list:any[], list_id:string) => {
   if (list.length < 1) return
   for (let i = 0; i < list.length; i++) {
      const {prop, value} = list[i]
      const validatedItems = ItemSchema.safeParse({prop, value, listId: list_id})
      
      if (!validatedItems.success) {
         return { message: 'Something is wrong. NCR', value };
      } 
      const { prop: Prop, value: Value, listId: ListId } = validatedItems.data;

      try {
         const result = await sql`SELECT * FROM update_item_list(${ListId}, ${Prop}, ${Value})`
      } catch (e) {
         console.error('Database Error:', e);
         throw new Error(`Failed to insert item list item.`); 
      }
   }
}

export const fetchItems = async (id:string) => {
   let result:{[key:string]:any} = {}
   let list:{[key:string]:any} = {}
   try {
      const data = await sql<Row[]>`SELECT * FROM get_items(${id})`
      for (let row of data) {
         const { category, armour, weapons, equipment, tools, currency, selectFromList } = row;
         if (category === 'total') result.total = {armour, weapons, equipment, tools, currency} as BaseItems;
         else if (category === 'purchased') list.total = {armour, weapons, equipment, tools, currency, selectFromList} as BaseItems;
         else result[category] = {armour, weapons, equipment, tools, currency, selectFromList} as BaseItems;
      }
   } catch (e) {
      console.error('Database Error:', e);
      throw new Error('Failed to fetch item data.'); 
   }
   try {
      const listData = await sql<Row[]>`SELECT * FROM get_items_list(${id})`
      list.list = listData.map((row:Row) => row as Item)
      result.purchased = list as ItemsList;
   } catch (e) {
      console.error('Database Error:', e);
      throw new Error('Failed to fetch item list data.'); 
   }
   return result as Items;
}

export const updateItems = async (id:string, items:any) => {
   const modifiedItems = {
      ...items, 
      purchased: { ...items.purchased, list: sampleIListUpd }, 
      // total: {...items.total, armour: ['bracers of defense'], tools: ['thieve\'s tools']}
   }
   console.log(modifiedItems)
   const data = await sql<Row[]>`SELECT * FROM update_items(${id})`
   Promise.all([
      updateBaseItems(data[0].class, modifiedItems.class),
      updateBaseItems(data[0].background, modifiedItems.background),
      updateBaseItems(data[0].purchased, modifiedItems.purchased.total),
      updateBaseItems(data[0].total, modifiedItems.total)
   ]).then(() => setItemsList(modifiedItems.purchased.list, data[0].list))
}

const updateBaseItems = async (id:string, item:any) => {
   const validatedItems = BaseItemSchema.safeParse({
      armour: item.armour, weapons: item.weapons, equipment: item.equipment, tools: item.tools, currency: item.currency, selectFromList: item.selectFromList
   })
   
   if (!validatedItems.success) {
      return { message: 'Something is wrong. NCR', item };
   } 
   const {armour, weapons, tools, equipment, currency, selectFromList} = validatedItems.data;
   
   try {
      await sql`SELECT * FROM update_base_items(${id}, ${armour}, ${weapons}, ${equipment}, ${tools}, ${currency}, ${selectFromList as any})`
   } catch (e) {
      console.error('Database Error:', e);
      throw new Error(`Failed to update base item.`); 
   }
}

export const deleteItems = async (id:string) => {
   try {
      await sql<object[]>`SELECT * FROM delete_items(${id})`
   } catch (e) {
      console.error('Database Error:', e);
      throw new Error(`Failed to delete items.`); 
   }
}


