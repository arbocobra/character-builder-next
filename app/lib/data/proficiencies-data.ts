import postgres from 'postgres';
// import {z} from 'zod';
import { BaseProficienciesSchema, ProficiencyItemSchema } from '@/lib/query-types';
// import { Character, CharacterPreview, defaultProficiencies, defaultItems, defaultAbilities, defaultArmourClass, defaultHP, defaultSpeed } from '@/lib/definitions'
import Proficiencies, {BaseProficiencies, ProficienciesItem, ProficienciesList} from '@/lib/base/proficiencies.ts';

const sql = postgres<any>(process.env.POSTGRES_URL!, { ssl: 'require' });
type Row = { [key:string]: any }

const samplePList = [{name: 'skilled', prop: 'skills', level: 4, value: ['stealth', 'insight']}, {name: 'skilled', prop: 'tools', level: 4, value: ['thieve\'s tools']}]

export const createProficiencies = async (profs:any, char_id:string) => {
   const modifiedProfs = {
      ...profs, 
      feats: { list:samplePList, total:{...profs.feats.total, skills: ['stealth', 'insight'], tools: ['thieve\'s tools']} },
      total: {...profs.total, skills: [...profs.total.skills, 'stealth', 'insight'], tools: [...profs.total.tools, 'thieve\'s tools']}
   }
   console.log(modifiedProfs)
   Promise.all([
      setBaseProficiencies(modifiedProfs.class),
      setBaseProficiencies(modifiedProfs.species),
      setBaseProficiencies(modifiedProfs.background),
      setBaseProficiencies(modifiedProfs.feats.total),
      setBaseProficiencies(modifiedProfs.total)
   ]).then((arr) => setProficiencies(arr, char_id)
   ).then((val) => setProficienciesList(modifiedProfs.feats.list, val))
}

const setProficiencies = async (profIds:string[], char_id:string) => {
   const [classId, speciesId, backgroundId, featsId, totalId] = profIds;
   try {
         const result = await sql`SELECT * FROM set_proficiencies(${char_id}, ${classId}, ${speciesId}, ${backgroundId}, ${featsId}, ${totalId})`
         return result[0].set_proficiencies;
      } catch (e) {
         console.error('Database Error:', e);
         throw new Error(`Failed to create proficiencies.`); 
      }
}

const setBaseProficiencies = async (prof:any) => {
   let {armour, languages, savingThrows, selectFromList, skills, tools, weapons} = prof
   const validatedProficiencies = BaseProficienciesSchema.safeParse({
      armour, languages, savingThrows, selectFromList, skills, tools, weapons
   })

   if (!validatedProficiencies.success) {
      return { message: 'Something is wrong. NCR', prof };
   } 

   const {armour: Armour, languages: Languages, savingThrows: SavingThrows, selectFromList: SelectFromList, skills: Skills, tools: Tools, weapons: Weapons} = validatedProficiencies.data;

   try {
      const result = await sql`SELECT * FROM set_base_prof(${Armour}, ${Languages}, ${SavingThrows}, ${SelectFromList as any}, ${Skills}, ${Tools}, ${Weapons})`
      return result[0].set_base_prof;
   } catch (e) {
      console.error('Database Error:', e);
      throw new Error(`Failed to insert base proficiency.`); 
   }
}

const setProficienciesList = async (list:any[], list_id:string) => {
   if (list.length < 1) return
   for (let i = 0; i < list.length; i++) {
      const {name, prop, level, value} = list[i]
      const validatedItems = ProficiencyItemSchema.safeParse({name, prop, level, value, listId: list_id})
      
      if (!validatedItems.success) {
         return { message: 'Something is wrong. NCR', value };
      } 
      const { name: Name, prop: Prop, level: Level, value: Value, listId: ListId } = validatedItems.data;
      try {
         const result = await sql`SELECT * FROM update_prof_list(${ListId}, ${Name}, ${Prop}, ${Level}, ${Value})`
      } catch (e) {
         console.error('Database Error:', e);
         throw new Error(`Failed to insert proficiency list item.`); 
      }
   }
}

export const fetchProficiencies = async (id:string) => {
   let result:{[key:string]:any} = {}
   let list:{[key:string]:any} = {}
   try {
      const data = await sql<Row[]>`SELECT * FROM get_proficiencies(${id})`
      for (let row of data) {
         const { category, saving_throws, select_from_list, ...rest } = row;
         if (category === 'total') {
            const finalVal = {savingThrows: saving_throws, ...rest}
            result.total = finalVal as BaseProficiencies;
         } else {
            const finalVal = {savingThrows: saving_throws, selectFromList: select_from_list, ...rest}
            if (category === 'feats') { 
               list.total = finalVal as BaseProficiencies; 
            } else { 
               result[category] = finalVal as BaseProficiencies; 
            }
         }
      }
   } catch (e) {
      console.error('Database Error:', e);
      throw new Error(`Failed to fetch proficiencies.`); 
   }

   try {
      const listData = await sql`SELECT * FROM get_proficiency_list(${id})`
      list.list = listData.map((row:any) => row as ProficienciesItem)
      result.feats = list as ProficienciesList;
   } catch (e) {
      console.error('Database Error:', e);
      throw new Error(`Failed to fetch proficiencies list.`); 
   }

   return result as Proficiencies;
}

export const updateProficiencies = async (id:string, profs:any) => {
   const modifiedProfs = {
      ...profs, 
      feats: { list:samplePList, total:{...profs.feats.total, skills: ['stealth', 'insight'], tools: ['thieve\'s tools']} },
      total: {...profs.total, skills: [...profs.total.skills, 'stealth', 'insight'], tools: [...profs.total.tools, 'thieve\'s tools']}
   }
   const data = await sql<Row[]>`SELECT * FROM update_proficiencies(${id})`
   Promise.all([
      updateBaseProficiencies(data[0].class, profs.class),
      updateBaseProficiencies(data[0].species, profs.species),
      updateBaseProficiencies(data[0].background, profs.background),
      updateBaseProficiencies(data[0].feats, profs.feats.total),
      updateBaseProficiencies(data[0].total, profs.total)
   ]).then(() => setProficienciesList(profs.feats.list, data[0].list))
}
const updateBaseProficiencies = async (id:string, prof:any) => {
   const validatedProficiencies = BaseProficienciesSchema.safeParse({
      armour: prof.armour, languages: prof.languages, savingThrows: prof.savingThrows, selectFromList: prof.selectFromList, skills: prof.skills, tools: prof.tools, weapons: prof.weapons
   })
   if (!validatedProficiencies.success) {
      return { message: 'Something is wrong. NCR', prof };
   } 
   const {armour, languages, savingThrows, selectFromList, skills, tools, weapons} = validatedProficiencies.data;
   try {
      await sql`SELECT * FROM update_base_prof(${id}, ${armour}, ${languages}, ${savingThrows}, ${selectFromList as any}, ${skills}, ${tools}, ${weapons})`
   } catch (e) {
      console.error('Database Error:', e);
      throw new Error(`Failed to insert base proficiency.`); 
   }
}

const updateProficienciesList = async (id:string, list:any[]) => {
   if (list.length < 1) return
   for (let i = 0; i < list.length; i++) {
      const validatedProfs = ProficiencyItemSchema.safeParse({name: list[i].name, prop:list[i].prop, level:list[i].level, value:list[i].value, listId: id})
      
      if (!validatedProfs.success) return { message: 'Something is wrong. NCR', list };
      const { name, prop, level, value, listId } = validatedProfs.data;

      try {
         await sql`SELECT * FROM update_prof_list(${listId}, ${name}, ${prop}, ${level}, ${value})`
      } catch (e) {
         console.error('Database Error:', e);
         throw new Error(`Failed to insert proficiency list item.`); 
      }
   }
}

export const deleteProficiencies = async (id:string) => {
   try {
      await sql<object[]>`SELECT * FROM delete_proficiencies(${id})`
   } catch (e) {
      console.error('Database Error:', e);
      throw new Error(`Failed to delete proficiencies.`); 
   }
}