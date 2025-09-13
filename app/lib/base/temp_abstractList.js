// includes Proficiencies, Features, Items

class ClassName {
   constructor(){
      this.class = new BaseClass();
      this.species = new BaseClass();
      this.background = new BaseClass();
      this.feats = new ModifierGroup();
      this.total = {} //blank version of BaseClass without select list
   }

   calculateTotal() {
      let total = 0
      // function...
      this.total = total
   }

   updateValue(key, value) {
      if (typeof key === 'object') {
         this[key[0]][key[1]] = value
      } else {
         this[key] = value
      }
      this.calculateTotal();
   }

   addToList(mod) {
      this.instantiatedField.push(mod)
      this.instantiatedField.calculateTotal()
      this.calculateTotal()
   }

   removeFromList(id, cat) {
      // if more than one instantiatedField use this[cat]
      if (typeof id === 'string') {}// filter this.instantiatedField.list by !name
      else if (typeof id === 'number') {} // filter this.instantiatedField.list <= level
      this.instantiatedField.calculateTotal()
      this.calculateTotal()
   }

   clearCategory(cat) {
      if (cat === instantiatedField) this.instantiatedField = new ModifierGroup();
      else this[cat] = 0 || 'default'
      this.calculateTotal()
   }

}

class ModifierGroup {
   // listObject = { name, level, value = new BaseClass() }
   constructor() {
      this.modifier_list = [];
      this.total
   }
   
   calculateTotal() {
      let total = 0
      // function...
      this.total = total
   }
}

class BaseClass {
   constructor() {}
   categoryA = [];
   categoryB = [];
   categoryC = [];

   toBeSelected = {
      categoryA: null,
      categoryB: null,
      categoryC: null
   }
}