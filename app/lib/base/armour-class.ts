export default ArmourClass;
type ArmourClass = {
   base: number,
   dexMod: number,
   modifierList: ArmourClassList,
   total: number
}

export type ArmourClassList = {
   list: ArmourClassItem[],
   total: number
}

export type ArmourClassItem = {
   name: string,
   level: number,
   value: number
}

export const setDexMod = (val:number, current:ArmourClass):ArmourClass => {
   return calculateTotal(current, val, 'dex')
}

export const addToList = (mod:ArmourClassItem, current:ArmourClass): ArmourClass => {
   let newACList = {...current.modifierList}
   let tempList = [...newACList.list, mod]
   newACList.list = tempList
   newACList.total = getListTotal(newACList.list)
   return calculateTotal(current, newACList)
}

export const removeFromList = (id: string | number, current:ArmourClass): ArmourClass => {
   let newACList = {...current.modifierList}
   if (typeof id === 'string') {
      newACList.list.filter(mod => mod.name !== id);
   } else if (typeof id === 'number') {
      newACList.list.filter(mod => mod.level >= id);
   }
   newACList.total = getListTotal(newACList.list)
   return calculateTotal(current, newACList)
}

export const clearHitPoint = (cat:string, current:ArmourClass): ArmourClass => {
   if (cat === 'modifiers') {
      let newList:ArmourClassList = {list: [], total: 0}
      return calculateTotal(current, newList)
   } else return calculateTotal(current, 0)
}

const calculateTotal = (currentAC: ArmourClass, updatedValue: number | ArmourClassList, type?:string): ArmourClass => {
   let newAC: ArmourClass = {...currentAC};
   if (typeof updatedValue === 'number') {
      if (type === 'base') newAC.base = updatedValue
      else if (type === 'dex') newAC.dexMod = updatedValue
   } else {
      newAC.modifierList = updatedValue
   }
   newAC.total = newAC.base + newAC.dexMod + newAC.modifierList.total
   return newAC;
}

const getListTotal = (list:ArmourClassItem[]): number => {
   let total = 0;
   list.forEach(el => total += el.value)
   return total
}