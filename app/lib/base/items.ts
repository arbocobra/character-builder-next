interface Items {
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

interface BaseItems {
   armour:string[],
   weapons:string[],
   equipment:string[],
   tools:string[],
   currency: number,
   selectFromList: {
      armour:string[],
      weapons:string[],
      equipment:string[],
      tools:string[]
   }
}

interface ItemsList {
   list:Item[],
   total: BaseItems,
}

interface Item {
   name:string,
   level:number,
   value:string,
}


const addToList = () => {}

const removeFromList = () => {}

const clearCategory = () => {}

const calculateTotal = () => {}

const getListTotal = () => {}