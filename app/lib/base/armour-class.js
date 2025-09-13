class ArmourClass {
   constructor() {
      this.base = 10;
      this.dexMod = 0;
      this.modifierList = new ACModifiers();
      this.total = 10;
   }

   setDexMod(val) {
      this.dexMod = val;
      this.calculateTotal();
   }

   addToList(mod) {
      this.modifierList.addToList(mod)
      this.calculateTotal()
   }

   removeFromList(id) {
      this.modifierList.removeFromList(id)
      this.calculateTotal();
   }

   setCategory(cat, val) {
      this[cat] = val;
      this.calculateTotal();
   }

   clearCategory(cat) {
      if (cat === 'modifiers') this.modifierList = new ACModifiers();
      else this[cat] = 0
      this.calculateTotal()
   }

   calculateTotal() {
      this.total = this.base + this.dexMod + this.modifierList.total
   }
}

export default ArmourClass;

export class ACModifiers {
   constructor() {
      this.list = []
      this.total = 0
   }

   calculateTotal() {
      let total = 0;
      this.list.forEach(el => total += el.value)
      this.total = total
   }

   addToList(val) {
      this.list.push(val);
      this.calculateTotal()
   }

   removeFromList(id) {
      this.list = this.list.filter(el => el.name !== id)
      this.calculateTotal()
   }
}