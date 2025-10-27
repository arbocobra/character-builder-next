
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

let selectType = z.array(z.looseObject({})).nullable().default(null)

const SelectSchema = z.object({
   armour: selectType,
   languages: selectType,
   savingThrows: selectType,
   skills: selectType,
   tools: selectType,
   weapons: selectType,
})

z.toJSONSchema(SelectSchema)

const BaseProficienciesNullableSelectSchema = z.object({
   armour: selectType,
   languages: selectType,
   savingThrows: selectType,
   skills: selectType,
   tools: selectType,
   weapons: selectType,
})

const BaseProficienciesDefaultArraySchema = z.object({
   armour: z.array(z.string().toLowerCase()).default([]),
   languages: z.array(z.string().toLowerCase()).default([]),
   savingThrows: z.array(z.string().toLowerCase()).default([]),
   skills: z.array(z.string().toLowerCase()).default([]),
   tools: z.array(z.string().toLowerCase()).default([]),
   weapons: z.array(z.string().toLowerCase()).default([]),
})

const PartialBaseProficienciesSchema = z.object({
   armour: z.array(z.string().toLowerCase()),
   languages: z.array(z.string().toLowerCase()),
   savingThrows: z.array(z.string().toLowerCase()),
   skills: z.array(z.string().toLowerCase()),
   tools: z.array(z.string().toLowerCase()),
   weapons: z.array(z.string().toLowerCase())
})

export const BaseProficienciesSchema = z.object({
   ...BaseProficienciesDefaultArraySchema.shape,
   selectFromList: z.preprocess((arg) => {
      if (arg === undefined) return {};
      return arg;
   }, SelectSchema)
});

export const BaseProficienciesTotalSchema = z.object({
   ...BaseProficienciesDefaultArraySchema.shape,
});

// const selectToJson = (arg) => {
//    if (arg === undefined) return {};
//    return arg;
// }

    //selectList = key === 'total' ? null : selectFromList === undefined ? emptyList : selectFromList;

// const BaseProficienciesSchema = z.object({
//    //let {armour, languages, savingThrows, selectFromList, skills, tools, weapons} = prof
//    armour: z.array(z.string().toLowerCase()),
//    languages: z.array(z.string().toLowerCase()),
//    savingThrows: z.array(z.string().toLowerCase()),
//    selectFromList: z.nullable(z.object()),
//    skills: z.array(z.string().toLowerCase()),
//    tools: z.array(z.string().toLowerCase()),
//    weapons: z.array(z.string().toLowerCase()),
//    // customerId: z.string({ invalid_type_error: 'Please select a customer.' }),
//    // amount: z.coerce.number().gt(0, { message: 'Please enter an amount greater than $0.' }),
//    // status: z.enum(['pending', 'paid'], {
//    //    invalid_type_error: 'Please select an invoice status.'
//    // }),
//    // date: z.string(),
// });