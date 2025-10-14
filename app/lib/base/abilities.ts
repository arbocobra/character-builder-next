// strength = [0], dex = [1], con = [2], int = [3], wis = [4], cha = [5]
export default Abilities;
type Abilities = {
   base: number[],
   species: number[],
   class: AbilitiesList,
   feats: AbilitiesList,
   total: number[],
   modifiers: number[]
}

export type AbilitiesList = {
   list: AbilitiesItem[],
   total: number[]
}

export type AbilitiesItem = {
   name: string,
   level: number,
   value: number[],
}

export const addToList = (mod:AbilitiesItem, current:Abilities, type:string):Abilities => {
   let newList:AbilitiesList
   if (type === 'class') {newList = {...current.class}}
   else if (type === 'feats') newList = {...current.feats}
   else {
      throw new Error("Invalid type for addToList: " + type);
   }
   let repeatedIndex = newList.list.findIndex(el => el.name == mod.name)
   if (repeatedIndex >= 0) {
      newList.list[repeatedIndex] = mod
   } else {
      let tempList = [...newList.list, mod]
      newList.list = tempList
   }
   newList.total = getListTotal(newList.list)
   return calculateTotal(current, newList, type)
}

export const removeFromList = (id: string | number, current:Abilities, type:string):Abilities => {
   let newList:AbilitiesList
   if (type === 'class') newList = {...current.class}
   else if (type === 'feats') newList = {...current.feats}
   else {
      throw new Error("Invalid type for addToList: " + type);
   }
   if (typeof id === 'string') newList.list.filter(mod => mod.name !== id);
   else if (typeof id === 'number') newList.list.filter(mod => mod.level <= id);
   newList.total = getListTotal(newList.list)
   return calculateTotal(current, newList, type)
}

export const updateValue = (value:number[], current:Abilities, type:string, ):Abilities => calculateTotal(current, value, type)

export const clearCategory = (current:Abilities, type:string, ):Abilities => {
   if (type === 'class' || type === 'feats') return calculateTotal(current, { list:[], total:[] }, type) 
   else return calculateTotal(current, [0,0,0,0,0,0], type)
}

const isList = (val: number[] | AbilitiesList): val is AbilitiesList => {
   return (val as AbilitiesList).list !== undefined;
};

const calculateTotal = (current: Abilities, updatedValue: number[] | AbilitiesList, type:string): Abilities => {
   let newAbs: Abilities = {...current};
   if (isList(updatedValue)) {
      if (type === 'class') newAbs.class = updatedValue
      if (type === 'feats') newAbs.feats = updatedValue
   } else {
      if (type === 'base') newAbs.base = updatedValue
      else if (type === 'species') newAbs.species = updatedValue
   }
   let total:number[] = [0,0,0,0,0,0];
   [newAbs.base, newAbs.species, newAbs.class.total, newAbs.feats.total].forEach(mod => {
      if (Array.isArray(mod)) {
         mod.forEach((val:number, i:number) => total[i] += val)
      }
   })
   newAbs.modifiers = calculateModifiers(total)
   newAbs.total = total
   return newAbs
}

const calculateModifiers = (total:number[]):number[] => {
   return total.map(val => Math.floor((val - 10) / 2));
}

const getListTotal = (list:AbilitiesItem[]): number[] => {
   let total = [0,0,0,0,0,0];
   list.forEach(mod => mod.value.forEach((asi:number, i:number) => total[i] += asi))
   return total
}