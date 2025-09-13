// includes Abilities, AC, HP, Speed

class ClassName {
   constructor(){
      this.fields = 0 || 'default';
      this.instantiatedField = new ModifierGroup();
      this.total = 0 || 'default';
   }

   calculateTotal() {
      let total = 0
      // function...
      this.total = total
   }

   addToList(cat,mod) {
      this[cat].addToList(mod)
      this.calculateTotal()
   }

   removeFromList(id, cat) {
      // if more than one instantiatedField use this[cat]
      this[cat].removeFromList(id)
      this.calculateTotal()
   }

   updateValue(cat, value) {
      this[cat] = value;
      this.calculateTotal()
   }

   clearCategory(cat) {
      if (cat === instantiatedField) this.instantiatedField = new ModifierGroup();
      else this[cat] = 0 || 'default'
      this.calculateTotal()
   }
}

class ModifierGroup {
   // listObject = { name, level, value }
   constructor() {
      this.modifier_list = [];
      this.total
   }
   
   calculateTotal() {
      let total = 0
      // function...
      this.total = total
   }

   addToList(val) {
      this.list.push(val);
      this.calculateTotal()
   }

   removeFromList(id) {
      this.list = this.list.filter(el => list.name !== id)
      this.calculateTotal()
   }
}