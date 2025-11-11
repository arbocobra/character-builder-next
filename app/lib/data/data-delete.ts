import {deleteProficiencies} from '@/lib/data/proficiencies-data';
import {deleteItems} from '@/lib/data/items-data';

import postgres from 'postgres';

const sql = postgres<any>(process.env.POSTGRES_URL!, { ssl: 'require' });
type Row = { [key:string]: any }

export const deleteCharacter = async (char_id:any) => {
   deleteCategories(char_id)
      .then(() => deleteSimple(char_id))
}

// export const deleteCharacter = async (char_id:any) => {
//    const char = await sql<Row[]>`SELECT * FROM characters WHERE id = ${char_id}`;
//    deleteCategories(char[0])
//       .then(() => deleteChar(char_id))
// }

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

// const deleteCategories = async (char:any) => {
//    const {proficiencies, ...rest} = char;
//    try {
//       await sql<object[]>`SELECT * FROM delete_p(${proficiencies})`
//    } catch (e) {
//       console.error('Database Error:', e);
//       throw new Error(`Failed to delete character.`); 
//    }
// }