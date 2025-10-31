'use server'
import postgres from 'postgres';
import { SelectProficiencies, BaseProficienciesSchema } from '@/lib/query-types'

const sql = postgres<any>(process.env.POSTGRES_URL!, { ssl: 'require' });

const sampleData = {
   s: {armour: [], languages: ["Common", "Dwarvish"], savingThrows: [], selectFromList: undefined, skills: [], tools: ["mason's tools"], weapons: ["Battleaxe", "Handaxe", "Light Hammer", "Warhammer"]},
   b: {armour: [], languages: ["abyssal"], savingThrows: [], selectFromList: undefined, skills: ["Athletics", "Survival"], tools: ["bagpipes"], weapons: []},
   f: {armour: [], languages: [], savingThrows: [], selectFromList: undefined, skills: ["acrobatics", "stealth"], tools: ["thieve's tools"], weapons: []},
   t: {armour: ["All Armour", "Shields" ], languages: ["Common", "Dwarvish", "abyssal"], savingThrows: ["strength","constitution"], selectFromList: {}, skills: ["acrobatics", "stealth", "Athletics", "Survival", "intimidation","perception"], tools: ["mason's tools", "thieve's tools", "bagpipes"], weapons: [ "Simple Weapons", "Martial Weapons", "Battleaxe", "Handaxe", "Light Hammer", "Warhammer"]}
}


export const updateCharacter = async (char:any, id:string) => {

   // get Profic ID from character user Character Id //
   // get BaseProfic IDs from Proficiencies using Profic ID
   // update each BP row using BaseProfic Ids
   // (update all nested categories like this)
   // update character

   getCharacterIds(id).then((r) => updateCategories(r, char))

   // Promise.all([
   //    updateSingleCat(char.proficiencies.class),
   //    insertSingleCat(s),
   //    insertSingleCat(b),
   //    insertSingleCat(t),
   // ]).then((arr) => insertCharacterCategories(arr), (e) => console.error(e, 'insertCharacterCategories')
   // ).then((profId) => insertCharacter(char, profId, id), (e) => console.error(e, 'insertCharacter')
   // ).then(() => console.log('I worked?'))
}

const getCharacterIds = async (id:string) => {
   const catArray = ['hit_points', 'proficiencies', 'abilities', 'speed', 'armour_class', 'items', 'features']
   try {
      const idList:any = await sql`
         SELECT hit_points, proficiencies, abilities, speed, armour_class, items, features
         FROM characters WHERE id = ${id};
      `
      let result = idList[0]
      let resultObject:{[key:string]: string} = {}
      Object.keys(result).forEach(el => {
         if (typeof result[el] === 'string') resultObject[el] = result[el]
      })
      return resultObject;
   } catch (e) {}
}

const updateCategories = async (idObject:any, char:any) => {
   // const nestedCategories = ['proficiencies', 'abilities', 'items', 'features']
   // const currentCategories = ['hit_points', 'speed', 'armour_class']
   
   const currentCategories = Object.keys(idObject)

   // const result = [];

   if (currentCategories.includes('hit_points')) {
      // const hp = await sql`UPDATE hit_points SET WHERE id = ${idObject.hit_points};`
      const hp = await sql`SELECT * FROM update_hp(${idObject.hit_points}, 14, 20)`
      // const list = await sql`SELECT * FROM hi`
      console.log(hp)
      // console.log(char.hit_points)
   }

}

const getSimple = async (id:string, cat:string) => {
   let data = await sql`
      SELECT * FROM hit_points WHERE id = ${id};
   `
   return data[0]
   // console.log(data[0])
}

// const insertCharacter = async (char:any, profId:any, userId:string) => {

//       try {
//       const id = await sql`
//          INSERT into characters (user_id, name, level, class, subclass, species, background, proficiency_bonus, hit_dice, initiative_bonus, class_asi_levels, proficiencies)
//          VALUES (${userId}, ${char.name}, ${char.level}, ${char.class}, ${char.subclass}, 'hill dwarf', 'outlander', ${char.proficiency_bonus}, ${char.hit_dice}, ${char.initiative_bonus}, ${char.class_ASI_levels}, ${profId})
//          RETURNING id;
//       `
//       return id[0].id
//    } catch (e) {

//    }
// }

// const updateCharacterCategories = async (profIds:any) => {
//    const [classId, speciesId, backgroundId, totalId] = profIds; 

//    try {
//       const profic = await sql`
//          INSERT into proficiencies (class, species, background, total)
//          VALUES (${classId}, ${speciesId}, ${backgroundId}, ${totalId})
//          RETURNING id;
//       `
//       return profic[0].id
//    } catch (e) {
//       console.error('Database Error:', e);
//       throw new Error('Failed to insert proficiencies.'); 
//    }
// }

const updateSingleCat = async (prof:any) => {

   // let {armour, languages, savingThrows, selectFromList, skills, tools, weapons} = prof
   // const validatedProficiencies = BaseProficienciesSchema.safeParse({
   //    armour, languages, savingThrows, selectFromList, skills, tools, weapons
   // })

   // if (!validatedProficiencies.success) {
   //    return {
   //       errors: validatedProficiencies.error.flatten().fieldErrors,
   //       message: 'Something is wrong. NCR',
   //    };
   // } 

   // const {armour: Armour, languages: Languages, savingThrows: SavingThrows, selectFromList: SelectFromList, skills: Skills, tools: Tools, weapons: Weapons} = validatedProficiencies.data

   // try {
   //    const result = await sql`
   //       INSERT into base_proficiencies (armour, languages, saving_throws, select_from_list, skills, tools, weapons)
   //       VALUES (${Armour}, ${Languages}, ${SavingThrows}, ${SelectFromList as any}, ${Skills}, ${Tools}, ${Weapons})
   //       RETURNING id;
   //    `
   //    return result[0].id;
   // } catch (e) {
   //    console.error('Database Error:', e);
   //    throw new Error(`Failed to insert base proficiency.`); 
   // }
}