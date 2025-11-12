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
import {fetchItems} from '@/lib/data/items-data';
import { fetchAbilities } from '@/lib/data/abilities-data';


const sql = postgres<any>(process.env.POSTGRES_URL!, { ssl: 'require' });
type Row = { [key:string]: any }

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

export const getCharacter = async (char_id:string) => {
   return fetchCharacter(char_id)
   .then((char) => getCategories(char, char_id))
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

const getCategories = async (char:Character, char_id:string) => {
   const idArray = [char?.proficiencies, char?.hit_points, char?.speed, char?.armour_class, char?.items, char?.features, char?.abilities];
   const [p_id, hp_id, sp_id, ac_id, i_id, f_id, a_id] = idArray;
   
   // const proficiencies = p_id ? await fetchProficiencies(p_id) : defaultProficiencies;
   const proficiencies = await fetchProficiencies(char_id)
   const items = await fetchItems(char_id)
   const abilities = await fetchAbilities(char_id);
   const hit_points = defaultHP;
   const speed = defaultSpeed;
   const armour_class = defaultArmourClass;

   // const items = i_id ? await fetchItems(i_id) : defaultItems;
   // const abilities = a_id ? await fetchAbilities(a_id) : defaultAbilities;
   // const hit_points = hp_id ? await fetchHP(hp_id) : defaultHP;
   // const speed = sp_id ? await fetchSpeed(sp_id) : defaultSpeed;
   // const armour_class = ac_id ? await fetchAC(ac_id) : defaultArmourClass;

   return {...char, proficiencies, items, abilities, hit_points, speed, armour_class}
}

