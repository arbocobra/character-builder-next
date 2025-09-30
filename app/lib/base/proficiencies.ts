export interface Proficiencies {
   class:BaseProficiencies,
   species:BaseProficiencies,
   background:BaseProficiencies,
   feats:ProficienciesList,
   total: {
      armour:string[],
      weapons:string[],
      tools:string[],
      savingThrows:string[],
      skills:string[],
      languages:string[]
   }
}

export interface BaseProficiencies {
   armour:string[],
   weapons:string[],
   tools:string[],
   savingThrows:string[],
   skills:string[],
   languages:string[],
   selectFromList: {
      armour:string[],
      weapons:string[],
      tools:string[],
      savingThrows:string[],
      skills:string[],
      languages:string[],
   }
}

interface ProficienciesList {
   list:ProficienciesItem[],
   total: BaseProficiencies,
}

interface ProficienciesItem {
   name:string,
   level:number,
   value:string,
}

export const updateValue = (val:object, current:Proficiencies, keys:string|string[]):Proficiencies => {
   if (typeof keys === 'string') return calculateTotal(current, val, keys)
   else {
      type Props = { armour:string[], weapons:string[], tools:string[], savingThrows:string[], skills:string[], languages:string[], selectFromList:object }
      type CurrentKeys = keyof typeof current
      const getCategory = (key:CurrentKeys) => current[key];
      let newCategory:Props = getCategory(keys[0] as keyof Proficiencies) as Props
      newCategory[keys[1] as keyof Props] = val as string[]
      return calculateTotal(current, newCategory, keys[0])
   }
}
// const addToList = () => {}

// const removeFromList = () => {}

// const clearCategory = () => {}

const isList = (val: object | ProficienciesList): val is ProficienciesList => {
   return (val as ProficienciesList).list !== undefined;
};

const calculateTotal = (current:Proficiencies, updatedValue:object | ProficienciesList, type:string):Proficiencies => {
   let newPros:Proficiencies = {...current}
   if (isList(updatedValue)) newPros.feats = updatedValue
   else {
      if (type === 'class') newPros.class = updatedValue as BaseProficiencies
      else if (type === 'species') newPros.species = updatedValue as BaseProficiencies
      else if (type === 'background') newPros.background = updatedValue as BaseProficiencies
   }

   let total:{[key:string]: string[]} = {
      armour: [], weapons: [], tools: [], savingThrows: [], skills: [], languages: [] 
   } 
   let data:{[key:string]: BaseProficiencies} = {
      class: newPros.class, 
      species: newPros.species, 
      background: newPros.background, 
      feats: newPros.feats.total
   }

   const addModifiers = (category:BaseProficiencies) => {
      type PropKeys = keyof typeof category
      for (let props of Object.keys(category)) {
         if (props !== 'selectFromList') {
            const getProp = (key:PropKeys) => category[key];
            let prop = getProp(props as keyof BaseProficiencies) as string[];
            prop.forEach(item => {
               if (!total[props].includes(item)) {
                  let tempList = [...total[props], item]
                  total[props] = tempList;
               }
            })
         }
      }
   }

   for (let key of Object.keys(data)) addModifiers(data[key])

   newPros.total = total as Proficiencies['total'];

   return newPros;

}


const getListTotal = () => {}