import {deleteProficiencies} from '@/lib/data/proficiencies-data';
import {deleteItems} from '@/lib/data/items-data';

import postgres from 'postgres';

const sql = postgres<any>(process.env.POSTGRES_URL!, { ssl: 'require' });
type Row = { [key:string]: any }

export const deleteCharacter = async (char_id:any) => {
   deleteCategories(char_id)
      .then(() => deleteSimple(char_id))
}

const deleteSimple = async (char_id:string) => {
   try {
      const name = await sql<Row[]>`SELECT * FROM delete_character(${char_id})`
      console.log(`${name[0].delete_character} was deleted`)
   } catch (e) {
      console.error('Database Error:', e);
      throw new Error(`Failed to delete character.`); 
   }
}

const deleteCategories = async (char_id:string) => {
   const _proficiencies = await deleteProficiencies(char_id);
   const _items = await deleteItems(char_id);
}

export const DELETE_USER = async (user:string) => {
   try {
      const data = await sql `SELECT id FROM characters WHERE user_id = ${user}`
      for (let d in data) {
         await deleteCharacter(data[d].id)
      }
      const _user = await sql `DELETE FROM USERS WHERE id = ${user}`
   } catch (e) {}
}