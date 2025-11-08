class BaseItems {
   constructor() {}
   armour = [];
   weapons = [];
   equipment = [];
   currency = 0;
   tools = [];

   selectFromList = {
      armour: null,
      weapons: null,
      equipment: null,
      tools: null,
      special: null
   }
}

export default BaseItems;