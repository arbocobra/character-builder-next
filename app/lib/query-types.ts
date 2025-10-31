
import {z} from 'zod';

export type SelectProficiencies = {
   category:string,
   armour?:string[],
   weapons?:string[],
   tools?:string[],
   savingThrows?:string[],
   skills?:string[],
   languages?:string[],
}

const lowercaseSort = (arr:string[]):string[] => {
   if (!Array.isArray(arr) || arr === undefined || arr === null) return [];
   const transformedArr = arr.map((i:string) => i.toLowerCase()).sort();
   return transformedArr;
}

let selectType = z.array(z.looseObject({})).nullable().default(null);
let arrayType = z.array(z.string()).transform(lowercaseSort);

const SelectSchema = z.object({
   armour: selectType,
   languages: selectType,
   savingThrows: selectType,
   skills: selectType,
   tools: selectType,
   weapons: selectType,
})
z.toJSONSchema(SelectSchema)

const BaseProficienciesDefaultArraySchema = z.object({
   armour: arrayType,
   languages: arrayType,
   savingThrows: arrayType,
   skills: arrayType,
   tools: arrayType,
   weapons: arrayType
})

export const BaseProficienciesSchema = z.object({
   ...BaseProficienciesDefaultArraySchema.shape,
   selectFromList: z.preprocess((arg) => {
      if (arg === undefined) return {};
      return arg;
   }, SelectSchema)
});

export const ProficiencyItemSchema = z.object({
   name: z.string(),
   prop: z.string(),
   level: z.int(),
   value: arrayType,
   listId: z.string()
});

export const DefaultModifiedSchema = z.object({
   charId: z.string(),
   base: z.int(),
   total: z.int(),
   modifierTotal: z.int(),
})

export const DefaultModifiedListItemSchema = z.object({
   name: z.string(),
   level: z.int(),
   value: z.int(),
   listId: z.string()
})



// export const BaseProficienciesTotalSchema = z.object({
//    ...BaseProficienciesDefaultArraySchema.shape,
// });
//
// const PartialBaseProficienciesSchema = z.object({
//    armour: z.array(z.string().toLowerCase()),
//    languages: z.array(z.string().toLowerCase()),
//    savingThrows: z.array(z.string().toLowerCase()),
//    skills: z.array(z.string().toLowerCase()),
//    tools: z.array(z.string().toLowerCase()),
//    weapons: z.array(z.string().toLowerCase())
// })
//
// const BaseProficienciesNullableSelectSchema = z.object({
//    armour: selectType,
//    languages: selectType,
//    savingThrows: selectType,
//    skills: selectType,
//    tools: selectType,
//    weapons: selectType,
// })