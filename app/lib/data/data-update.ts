'use server'
import postgres from 'postgres';
import { BaseProficienciesSchema, ProficiencyItemSchema, BaseItemSchema, ItemSchema, DefaultModifiedSchema, DefaultModifiedListItemSchema, AbilitiesSchema, AbilityItemSchema } from '@/lib/query-types';
import {updateProficiencies} from '@/lib/data/proficiencies-data';
import {updateItems} from '@/lib/data/items-data';
import {updateAbilities} from '@/lib/data/abilities-data';
import {updateHitPoints} from '@/lib/data/hp-data';
import {updateArmourClass} from '@/lib/data/ac-data';
import {updateSpeed} from '@/lib/data/speed-data';

const sql = postgres<any>(process.env.POSTGRES_URL!, { ssl: 'require' });

type Row = { [key:string]: any }

export const updateCharacter = async (char:any, id:string) => {
   // getCharacterIds(char, id).then((r) => updateCategories(r, char, id))
   updateSimple(char, id).then((_id) => updateCategories(char, id))
}

const updateSimple = async (char:any, id:string) => {
   const catArray = ['hit_points', 'proficiencies', 'abilities', 'speed', 'armour_class', 'items', 'features']
   try {
      const data:any = await sql<Row[]>`SELECT * FROM update_character(${id}, ${char.name}, ${char.level}, ${char.class}, ${char.subclass}, ${char.species}, ${char.background}, ${char.proficiency_bonus}, ${char.hit_dice}, ${char.initiative_bonus}, ${char.class_asi_levels}, ${char.size})`
      return data[0]
   } catch (e) {}
}

const updateCategories = async (char:any, char_id:string) => {
   const _proficiencies = await updateProficiencies(char_id, char.proficiencies);
   const _items = await updateItems(char_id, char.items);
   const _abilities = await updateAbilities(char_id, char.abilities);
   const _hitPoints = await updateHitPoints(char_id, char.hit_points);
   const _armourClass = await updateArmourClass(char_id, char.armour_class);
   const _speed = await updateSpeed(char_id, char.speed);
}

const updateFeatures = async (id:string, profs:any) => {}
const updateFeaturesList = async (id:string, list:any[]) => {}