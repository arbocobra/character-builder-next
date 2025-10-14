export default Speed;
type Speed = {
   base: number,
   modifierList: SpeedList,
   total: number
}

type SpeedList = {
   list: SpeedItem[],
   total: number
}

type SpeedItem = {
   name: string,
   level: number,
   value: number
}

export const setBase = (val:number, current:Speed):Speed => {
   return calculateTotal(current, val)
}

export const addToList = (mod:SpeedItem, current:Speed): Speed => {
   let newSpeedList = {...current.modifierList}
   let repeatedIndex = newSpeedList.list.findIndex(el => el.name == mod.name)
   if (repeatedIndex >= 0) {
      newSpeedList.list[repeatedIndex] = mod
   } else {
      let tempList = [...newSpeedList.list, mod]
      newSpeedList.list = tempList
   }
   newSpeedList.total = getListTotal(newSpeedList.list)
   return calculateTotal(current, newSpeedList)
}

export const removeFromList = (id: string | number, current:Speed): Speed => {
   let newSpeedList = {...current.modifierList}
   if (typeof id === 'string') {
      newSpeedList.list.filter(mod => mod.name !== id);
   } else if (typeof id === 'number') {
      newSpeedList.list.filter(mod => mod.level >= id);
   }
   newSpeedList.total = getListTotal(newSpeedList.list)
   return calculateTotal(current, newSpeedList)
}

export const clearHitPoint = (cat:string, current:Speed): Speed => {
   if (cat === 'modifiers') {
      let newList:SpeedList = {list: [], total: 0}
      return calculateTotal(current, newList)
   } else return calculateTotal(current, 0)
}

const calculateTotal = (current: Speed, updatedValue: number | SpeedList): Speed => {
   let newSpeed: Speed = {...current};
   if (typeof updatedValue === 'number') {
      newSpeed.base = updatedValue
   } else {
      newSpeed.modifierList = updatedValue
   }
   newSpeed.total = newSpeed.base + newSpeed.modifierList.total
   return newSpeed;
}

const getListTotal = (list:SpeedItem[]): number => {
   let total = 0;
   list.forEach(el => total += el.value)
   return total
}