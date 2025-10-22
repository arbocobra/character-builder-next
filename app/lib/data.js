import postgres from 'postgres';
// import { Character, CharacterPreview } from '@/lib/definitions'

const sql = postgres(process.env.POSTGRES_URL, { ssl: 'require' });

export const fetchCharactersPreview = async (id) => {
   try {
      const data = await sql`
      SELECT id, name, level, class, species, background FROM characters
      WHERE user_id = ${id}
      `;
      return data;
   } catch (e) {
      console.error('Database Error:', e);
      throw new Error('Failed to fetch character data.'); 
   }
}

export const fetchCharacter = async (id) => {
   try {
      const data = await sql`SELECT * FROM characters WHERE id = ${id}`;
      const proficiencies = await fetchCharacterCategories(data[0].proficiencies)
      data[0].proficiencies = proficiencies
      return data[0];
   } catch (e) {
      console.error('Database Error:', e);
      throw new Error('Failed to fetch character data.'); 
   }
}

const fetchCharacterCategories = async(id) => {
   // const update:Character = {...char}
   const result = await sql`SELECT * FROM get_proficiencies(${id})`
   let c = result.find(x => x.category === 'class')
   let s = result.find(x => x.category === 'species')
   let b = result.find(x => x.category === 'background')
   let f = result.find(x => x.category === 'feats')
   let t = result.find(x => x.category === 'total')
   const listResult = await sql`SELECT * FROM get_proficiency_list(${id})`
   let l = listResult.map(el => el)

   const output = {
      class: c,
      species: s,
      background: b,
      feats: {list: l, total: f},
      total: t
   }

   // const proficiencies:any = char.proficiencies ?
   //    await sql`SELECT * from get_proficiencies(${char.proficiencies as any})` : null
   // console.log(result)
   // console.log(listResult)

   return output
}