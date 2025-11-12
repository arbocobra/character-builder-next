'use server'
import postgres from 'postgres';
import { BaseProficienciesSchema, ProficiencyItemSchema, BaseItemSchema, ItemSchema, DefaultModifiedSchema, DefaultModifiedListItemSchema, AbilitiesSchema, AbilityItemSchema } from '@/lib/query-types';
import {updateProficiencies} from '@/lib/data/proficiencies-data';
import {updateItems} from '@/lib/data/items-data';
import { updateAbilities } from '@/lib/data/abilities-data';

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
   const _abilities = await updateAbilities(char_id, char.abilities)
}

// const updateCategories = async (idObject:any, char:any, char_id:string) => {
//    // const nestedCategories = ['proficiencies', 'abilities', 'items', 'features']
//    // const currentCategories = ['hit_points', 'speed', 'armour_class']
//    const {p_id, i_id, hp_id, a_id, sp_id, ac_id, f_id} = idObject
//    // const proficiencies = await updateProficiencies(p_id, char.proficiencies);
//    const proficiencies = await updateProficiencies(char_id, char.proficiencies);
//    // const items = await updateItems(i_id, char.items);
//    // const hit_points = await updateHP(hp_id, char.hit_points);
//    // const abilities = await updateAbilities(a_id, char.abilities);
//    // const speed = await updateSpeed(sp_id, char.speed);
//    // const armour_class = await updateAC(ac_id, char.armour_class);
//    // const features = await updateFeatures(f_id, char.features);
// }

// const updateProficiencies = async (id:string, profs:any) => {
//    const data = await sql<Row[]>`SELECT * FROM update_proficiencies(${id})`
//    Promise.all([
//       updateBaseProficiencies(data[0].class, profs.class),
//       updateBaseProficiencies(data[0].species, profs.species),
//       updateBaseProficiencies(data[0].background, profs.background),
//       updateBaseProficiencies(data[0].feats, profs.feats.total),
//       updateBaseProficiencies(data[0].total, profs.total)
//    ]).then(() => updateProficienciesList(data[0].list, profs.feats.list))
// }

// const updateItems = async (id:string, items:any) => {
//    const data = await sql<Row[]>`SELECT * FROM update_items(${id})`
//    Promise.all([
//       updateBaseItems(data[0].class, items.class),
//       updateBaseItems(data[0].background, items.background),
//       updateBaseItems(data[0].purchased, items.purchased.total),
//       updateBaseItems(data[0].total, items.total)
//    ]).then(() => updateItemsList(data[0].list, items.purchased.list))
// }
const updateHP = async (id:string, profs:any) => {}
// const updateAbilities = async (id:string, profs:any) => {}
const updateSpeed = async (id:string, profs:any) => {}
const updateAC = async (id:string, profs:any) => {}
const updateFeatures = async (id:string, profs:any) => {}

// const updateBaseProficiencies = async (id:string, prof:any) => {
//    const validatedProficiencies = BaseProficienciesSchema.safeParse({
//       armour: prof.armour, languages: prof.languages, savingThrows: prof.savingThrows, selectFromList: prof.selectFromList, skills: prof.skills, tools: prof.tools, weapons: prof.weapons
//    })
//    if (!validatedProficiencies.success) {
//       return { message: 'Something is wrong. NCR', prof };
//    } 
//    const {armour, languages, savingThrows, selectFromList, skills, tools, weapons} = validatedProficiencies.data;
//    try {
//       await sql`SELECT * FROM update_base_prof(${id}, ${armour}, ${languages}, ${savingThrows}, ${selectFromList as any}, ${skills}, ${tools}, ${weapons})`
//    } catch (e) {
//       console.error('Database Error:', e);
//       throw new Error(`Failed to insert base proficiency.`); 
//    }
// }
// const updateBaseItems = async (id:string, item:any) => {

//    const validatedItems = BaseItemSchema.safeParse({
//       armour:item.armour, weapons:item.weapons, equipment:item.equipment, tools:item.tools, currency:item.currency, selectFromList:item.selectFromList
//    })
   
//    if (!validatedItems.success) return { message: 'Something is wrong. NCR', item };

//    const {armour, weapons, tools, equipment, currency, selectFromList} = validatedItems.data;
//    try {
//       await sql`SELECT * FROM update_base_items(${id}, ${armour}, ${weapons}, ${equipment}, ${tools}, ${currency}, ${selectFromList as any})`
//    } catch (e) {
//       console.error('Database Error:', e);
//       throw new Error(`Failed to insert base items.`); 
//    }
// }

// const updateProficienciesList = async (id:string, list:any[]) => {
//    if (list.length < 1) return
//    for (let i = 0; i < list.length; i++) {
//       const validatedProfs = ProficiencyItemSchema.safeParse({name: list[i].name, prop:list[i].prop, level:list[i].level, value:list[i].value, listId: id})
      
//       if (!validatedProfs.success) return { message: 'Something is wrong. NCR', list };
//       const { name, prop, level, value, listId } = validatedProfs.data;

//       try {
//          await sql`SELECT * FROM update_prof_list(${listId}, ${name}, ${prop}, ${level}, ${value})`
//       } catch (e) {
//          console.error('Database Error:', e);
//          throw new Error(`Failed to insert proficiency list item.`); 
//       }
//    }
// }
// const updateItemsList = async (id:string, list:any[]) => {
//    if (list.length < 1) return
//    for (let i = 0; i < list.length; i++) {
//       const validatedItems = ItemSchema.safeParse({prop:list[i].prop, value:list[i].value, listId: id})
      
//       if (!validatedItems.success) return { message: 'Something is wrong. NCR', list };
//       const { prop, value, listId } = validatedItems.data;

//       try {
//          await sql`SELECT * FROM update_prof_list(${listId}, ${prop}, ${value})`
//       } catch (e) {
//          console.error('Database Error:', e);
//          throw new Error(`Failed to insert item list item.`); 
//       }
//    }
// }
const updateHPList = async (id:string, list:any[]) => {}
// const updateAbilitiesList = async (id:string, list:any[]) => {}
const updateSpeedList = async (id:string, list:any[]) => {}
const updateACList = async (id:string, list:any[]) => {}
const updateFeaturesList = async (id:string, list:any[]) => {}