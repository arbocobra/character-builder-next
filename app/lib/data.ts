'use server'
import postgres from 'postgres';
import {z} from 'zod';
import { Character, CharacterPreview, defaultProficiencies, defaultItems, defaultAbilities, defaultArmourClass, defaultHP, defaultSpeed } from '@/lib/definitions'
import Proficiencies, {BaseProficiencies, ProficienciesItem, ProficienciesList} from '@/lib/base/proficiencies.ts';
import Items, {BaseItems, ItemsList, Item} from '@/lib/base/items.ts';
import HitPoints, {HitPointsList, HitPointsItem} from '@/lib/base/hit-points.ts';
import Speed, {SpeedList, SpeedItem} from '@/lib/base/speed.ts';
import Abilities, {AbilitiesList, AbilitiesItem} from '@/lib/base/abilities.ts';
import ArmourClass, {ArmourClassList, ArmourClassItem} from '@/lib/base/armour-class.ts';
import {fetchProficiencies} from '@/lib/data/proficiencies-data';

const sql = postgres<any>(process.env.POSTGRES_URL!, { ssl: 'require' });

let s = {armour: [], languages: ["Common", "Dwarvish"], savingThrows: [], selectFromList: undefined, skills: [], tools: ["mason's tools"], weapons: ["Battleaxe", "Handaxe", "Light Hammer", "Warhammer"]}

let b = {armour: [], languages: ["abyssal"], savingThrows: [], selectFromList: undefined, skills: ["Athletics", "Survival"], tools: ["bagpipes"], weapons: []}

let t = {armour: ["All Armour", "Shields" ], languages: ["Common", "Dwarvish", "abyssal"], savingThrows: ["strength","constitution"], selectFromList: {}, skills: ["Athletics", "Survival", "intimidation","perception"], tools: ["mason's tools", "bagpipes"], weapons: [ "Simple Weapons", "Martial Weapons", "Battleaxe", "Handaxe", "Light Hammer", "Warhammer"]}

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

// export const fetchCharacter = async (id:string) => {
//    try {
//       const data = await sql<Character[]>`SELECT * FROM characters WHERE id = ${id}`;
//       let result:Character = data[0]
//       if (result.proficiencies) {
//          const proficiencies = await fetchCharacterCategories(result.proficiencies as string)
//          result.proficiencies = proficiencies
//       }
//       return result;
//    } catch (e) {
//       console.error('Database Error:', e);
//       throw new Error('Failed to fetch character data.'); 
//    }
// }

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
   }
   const listData = await sql`SELECT * FROM get_proficiency_list(${id})`
   list.list = listData.map((row:any) => row as ProficienciesItem)
   result.feats = list as ProficienciesList;

   return result as Proficiencies;
}

// get character => call fetch character then get categories

export const getCharacter = async (char_id:string) => {
   return fetchCharacter(char_id)
   .then((char) => getCategories(char))
}

const fetchCharacter = async (id:string) => {
   try {
      const data = await sql<Character[]>`SELECT * FROM characters WHERE id = ${id}`;
      return data[0]
   } catch (e) {
      console.error('Database Error:', e);
      throw new Error('Failed to fetch character data.'); 
   }
}
type Row = { [key:string]: any }

const getCategories = async (char:Character) => {
   
   const idArray = [char?.proficiencies, char?.hit_points, char?.speed, char?.armour_class, char?.items, char?.features, char?.abilities];
   const [p_id, hp_id, sp_id, ac_id, i_id, f_id, a_id] = idArray;
   
   const proficiencies = p_id ? await fetchProficiencies(p_id) : defaultProficiencies;
   const items = i_id ? await fetchItems(i_id) : defaultItems;
   const abilities = a_id ? await fetchAbilities(a_id) : defaultAbilities;
   const hit_points = hp_id ? await fetchHP(hp_id) : defaultHP;
   const speed = sp_id ? await fetchSpeed(sp_id) : defaultSpeed;
   const armour_class = ac_id ? await fetchAC(ac_id) : defaultArmourClass;

   return {...char, proficiencies, items, abilities, hit_points, speed, armour_class}
}

// get categories profs, hp, sp, ac, items etc... = (get...)
// const fetchProficiencies = async (id:string) => {
//    const data = await sql<Row[]>`SELECT * FROM get_proficiencies(${id})`
//    let result:{[key:string]:any} = {}
//    let list:{[key:string]:any} = {}
//    for (let row of data) {
//       const { category, saving_throws, select_from_list, ...rest } = row;
//       if (category === 'total') {
//          const finalVal = {savingThrows: saving_throws, ...rest}
//          result.total = finalVal as BaseProficiencies;
//       } else {
//          const finalVal = {savingThrows: saving_throws, selectFromList: select_from_list, ...rest}
//          if (category === 'feats') { 
//             list.total = finalVal as BaseProficiencies; 
//          } else { 
//             result[category] = finalVal as BaseProficiencies; 
//          }
//       }
//    }
//    const listData = await sql`SELECT * FROM get_proficiency_list(${id})`
//    list.list = listData.map((row:any) => row as ProficienciesItem)
//    result.feats = list as ProficienciesList;

//    return result as Proficiencies;
// }

const fetchItems = async (id:string) => {
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

const fetchAbilities = async (id:string) => {
   let result:{[key:string]:any} = {}
   let listC:{[key:string]:any} = {}
   let listF:{[key:string]:any} = {}
   try {
      const data = await sql<Row[]>`SELECT base, class_total, species, feats_total, total, modifiers FROM get_abilities(${id})`
      Object.keys(data[0]).forEach(k => {
         if (k === 'class_total') listC.total = data[0][k];
         else if (k === 'feats_total') listF.total = data[0][k];
         else result[k] = data[0][k];
      })
   } catch (e) {
      console.error('Database Error:', e);
      throw new Error('Failed to fetch abilities data.'); 
   }
   try {
      const listDataC = await sql<Row[]>`SELECT * FROM get_ability_class_list(${id})`
      listC.list = listDataC.map((row:Row) => row as AbilitiesItem)
      result.class = listC as AbilitiesList;
   } catch (e) {
      console.error('Database Error:', e);
      throw new Error('Failed to fetch abilities list data.'); 
   }
   try {
      const listDataF = await sql<Row[]>`SELECT * FROM get_ability_feats_list(${id})`
      listF.list = listDataF.map((row:Row) => row as AbilitiesItem)
      result.feats = listF as AbilitiesList;
   } catch (e) {
      console.error('Database Error:', e);
      throw new Error('Failed to fetch abilities list data.'); 
   }
   return result as Abilities;
}

const fetchHP = async (id:string) => {
   let result:{[key:string]:any} = {}
   let list:{[key:string]:any} = {}
   try {
      const data = await sql<Row[]>`SELECT * FROM get_hp(${id})`
      result.base = data[0].base;
      result.total = data[0].total;
      list.total = data[0].modifiers;
   } catch (e) {
      console.error('Database Error:', e);
      throw new Error('Failed to fetch hp data.'); 
   }
   try {
      const listData = await sql<Row[]>`SELECT * FROM get_hp_list(${id})`
      list.list = listData.map((row:Row) => row as HitPointsItem)
      result.modifierList = list as HitPointsList;
   } catch (e) {
      console.error('Database Error:', e);
      throw new Error('Failed to fetch hp list data.'); 
   }
   return result as HitPoints;
}

const fetchAC = async (id:string) => {
   let result:{[key:string]:any} = {}
   let list:{[key:string]:any} = {}
   try {
      const data = await sql<Row[]>`SELECT * FROM get_ac(${id})`
      result.base = data[0].base;
      result.dex_mod = data[0].dex_mod;
      result.total = data[0].total;
      list.total = data[0].modifiers;
   } catch (e) {
      console.error('Database Error:', e);
      throw new Error('Failed to fetch item data.'); 
   }
   try {
      const listData = await sql<Row[]>`SELECT * FROM get_ac_list(${id})`
      list.list = listData.map((row:Row) => row as ArmourClassItem)
      result.modifierList = list as ArmourClassList;
   } catch (e) {
      console.error('Database Error:', e);
      throw new Error('Failed to fetch item list data.'); 
   }
   return result as ArmourClass;
}

const fetchSpeed = async (id:string) => {
   let result:{[key:string]:any} = {}
   let list:{[key:string]:any} = {}
   try {
      const data = await sql<Row[]>`SELECT * FROM get_speed(${id})`
      result.base = data[0].base;
      result.total = data[0].total;
      list.total = data[0].modifiers;
   } catch (e) {
      console.error('Database Error:', e);
      throw new Error('Failed to fetch speed data.'); 
   }
   try {
      const listData = await sql<Row[]>`SELECT * FROM get_speed_list(${id})`
      list.list = listData.map((row:Row) => row as SpeedItem)
      result.modifierList = list as SpeedList;
   } catch (e) {
      console.error('Database Error:', e);
      throw new Error('Failed to fetch speed list data.'); 
   }
   return result as Speed;
}