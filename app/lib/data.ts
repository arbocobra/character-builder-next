import postgres from 'postgres';
import { Character, CharacterPreview } from '@/lib/definitions'

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

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
      const data = await sql<CharacterPreview[]>`SELECT * FROM characters WHERE id = ${id}`;
      return data;
   } catch (e) {
      console.error('Database Error:', e);
      throw new Error('Failed to fetch character data.'); 
   }
}

export const fetchCharTest = async () => {
   try {
      const data = await sql<Character[]>`
      SELECT name, level, class, species, background, proficiency_bonus FROM characters
      WHERE user_id = '410544b2-4001-4271-9855-fec4b6a6442a'
      `;
      return data;
   } catch (e) {
      console.error('Database Error:', e);
      throw new Error('Failed to fetch character data.'); 
   }
}