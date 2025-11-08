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

const SelectItemSchema = z.object({
   armour: selectType,
   equipment: selectType,
   special: selectType,
   tools: selectType,
   weapons: selectType,
})
z.toJSONSchema(SelectItemSchema)

const BaseProficienciesDefaultArraySchema = z.object({
   armour: arrayType,
   languages: arrayType,
   savingThrows: arrayType,
   skills: arrayType,
   tools: arrayType,
   weapons: arrayType
})

const BaseItemsDefaultScheme = z.object({
   armour: arrayType,
   equipment: arrayType,
   tools: arrayType,
   weapons: arrayType,
   currency: z.int()
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

export const BaseItemSchema = z.object({
   ...BaseItemsDefaultScheme.shape,
   selectFromList: z.preprocess((arg) => {
      if (arg === undefined) return {};
      return arg;
   }, SelectItemSchema)
});

export const ItemSchema = z.object({
   prop: z.string(),
   value: arrayType,
   listId: z.string()
});

export const AbilitiesSchema = z.object({
   base: z.array(z.int()),
   classTotal: z.array(z.int()),
   species: z.array(z.int()),
   featsTotal: z.array(z.int()),
   total: z.array(z.int()),
   modifiers: z.array(z.int()),
})

export const AbilityItemSchema = z.object({
   name: z.string(),
   level: z.int(),
   value: z.array(z.int()),
   listId: z.string()
})

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