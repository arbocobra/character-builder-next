export interface HitPoints {
   base: number,
   modifierList: HitPointsList,
   total: number
}

export interface HitPointsList {
   list: HitPointsItem[],
   total: number
}

export interface HitPointsItem {
   name: string,
   level: number,
   value: number
}

export const setBaseHP = (hitDice: number, level: number, con: number, current:any): HitPoints => {
   let avg = hitDice / 2 + 1
   let result = 0
   for (let i = 0; i < level; i++) {
      if (i == 0) result += hitDice + con
      else result += avg + con
   }
   return calculateTotal(current, result)
}

export const addToList = (mod:HitPointsItem, current:HitPoints): HitPoints => {
   let newHPList = {...current.modifierList}
   let tempList = [...newHPList.list, mod]
   newHPList.list = tempList
   // newHPList.list.push(mod)
   newHPList.total = getListTotal(newHPList.list)
   return calculateTotal(current, newHPList)
}

export const removeFromList = (id: string | number, current:HitPoints): HitPoints => {
   let newHPList = {...current.modifierList}
   if (typeof id === 'string') {
      newHPList.list.filter(mod => mod.name !== id);
   } else if (typeof id === 'number') {
      newHPList.list.filter(mod => mod.level >= id);
   }
   newHPList.total = getListTotal(newHPList.list)
   return calculateTotal(current, newHPList)
}

export const clearHitPoint = (cat:string, current:HitPoints): HitPoints => {
   if (cat === 'modifiers') {
      let newList:HitPointsList = {list: [], total: 0}
      return calculateTotal(current, newList)
   } else return calculateTotal(current, 0)
}

const calculateTotal = (currentHP: HitPoints, updatedValue: number | HitPointsList): HitPoints => {
   let newHP: HitPoints = {...currentHP};
   if (typeof updatedValue === "number") {
      newHP.base = updatedValue
   } else {
      newHP.modifierList = updatedValue
   }
   newHP.total = newHP.base + newHP.modifierList.total
   return newHP;
}

const getListTotal = (list:HitPointsItem[]): number => {
   let total = 0;
   list.forEach(el => total += el.value)
   return total
}