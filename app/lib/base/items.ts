export default Items
type Items = {
   class:BaseItems,
   background:BaseItems,
   purchased:ItemsList,
   total: {
      armour:string[],
      weapons:string[],
      equipment:string[],
      tools:string[],
      currency: number,
   }
}

type BaseItems = {
   armour:string[],
   weapons:string[],
   equipment:string[],
   tools:string[],
   currency: number,
   selectFromList?: {
      armour?:string[],
      weapons?:string[],
      equipment?:string[],
      tools?:string[],
   }
}

type ItemsList = {
   list:Item[],
   total: BaseItems,
}

type Item = {
   prop:string,
   value:string,
}

export const updateValue = (val:object, current:Items, keys:string|string[]):Items => {
  let copy:{[key:string]:any} = {...current}
  if (typeof keys === 'string') copy[keys] = val
  else {
    let category:{[key:string]:any} = copy[keys[0]]
    if (Array.isArray(category[keys[1]])) category[keys[1]] = val
    else category[keys[1]][keys[2]] = val
  }
    return calculateTotal(copy as Items)
}

const addToList = () => {}

const removeFromList = () => {}

const clearCategory = () => {}

const calculateTotal = (update:Items) => {
   let total:{[key:string]: any} = {
      armour: [], weapons: [], equipment: [], tools: [],  currency: 0
   }
     
   const addModifiers = (category:BaseItems) => {
      let cat:{[key:string]:any} = {...category}
      for (let prop of Object.keys(cat)) {
         if (prop !== 'selectFromList') {
            let val = cat[prop]
            if (typeof val === 'number') {
               let temp = 0;
               if (val > 0) temp =+ val
               total[prop] = temp;
            } else {
               let tempList = [...total[prop]] as string[]
               if (val.length) {
                  val.forEach((item:string) => {
                  if (!tempList.includes(item)) tempList.push(item)
                  })
               }
               total[prop] = tempList;
            }
         }
      }
   }
   
   let categories:{[key:string]: BaseItems} = {
      class: update.class,  
      background: update.background, 
      purchased: update.purchased.total
   }
   
   Object.keys(categories).forEach(el => addModifiers(categories[el]))
   update.total = total as Items['total'];
   return update;
}

const getListTotal = () => {}