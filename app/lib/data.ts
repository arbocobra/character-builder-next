import postgres from 'postgres';
import { Character, CharacterPreview } from '@/lib/definitions'
import { SelectProficiencies } from '@/lib/query-types'
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

type ProficiencyRow = { [key:string]: any }

const fetchCharacterCategories = async(id:string) => {
   const baseData = await sql<ProficiencyRow[]>`SELECT * FROM get_proficiencies(${id})`
   let result:{[key:string]:any} = {}
   let list:{[key:string]:any} = {}
   for (let row of baseData) {
      const { category, saving_throws, select_from_list, ...val } = row;
      if (category === 'total') {
         const finalVal = {savingThrows: saving_throws, ...val}
         result.total = finalVal as BaseProficiencies;
      } else {
         const finalVal = {savingThrows: saving_throws, selectFromList: select_from_list, ...val}
         if (category === 'feats') { list.total = finalVal as BaseProficiencies; }
         else { result[category] = finalVal as BaseProficiencies; }
      }
      // const {category, ...val} = row;
      // if (category === 'total') {
      //    const {select_from_list, ...finalVal} = val;
      //    result.total = finalVal as BaseProficiencies;
      // }
      // else if (category === 'feats') { list.total = val as BaseProficiencies; }
      // else { result[category] = val as BaseProficiencies; }
   }
   const listData = await sql`SELECT * FROM get_proficiency_list(${id})`
   list.list = listData.map((row:any) => row as ProficienciesItem)
   result.feats = list as ProficienciesList;

   return result as Proficiencies;
}