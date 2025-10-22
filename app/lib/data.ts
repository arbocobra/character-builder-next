import postgres from 'postgres';
import { Character, CharacterPreview } from '@/lib/definitions'
import Proficiencies, {BaseProficiencies, ProficienciesItem, ProficienciesList} from '@/lib/base/proficiencies.ts';

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

type ProficiencyRow<T> = { [Property in keyof T as Exclude<Property, 'category'>]: T[Property] }

const fetchCharacterCategories = async(id:string) => {
   const baseData = await sql`SELECT * FROM get_proficiencies(${id})`
   let result:{[key:string]:any} = {}
   let list:{[key:string]:any} = {}
   for (let row of baseData) {
      let id:string = row.category;
      let val:ProficiencyRow<typeof row> = row;
      if (id === 'feat') list.total = val
      else result[id] = val as BaseProficiencies;
   }
   const listData = await sql`SELECT * FROM get_proficiency_list(${id})`
   list.list = listData.map((row:any) => row as ProficienciesItem)
   result.feat = list as ProficienciesList;

   return result as Proficiencies;
}