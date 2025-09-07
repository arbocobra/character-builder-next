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
      this.modifierList.list.push(mod)
      this.modifierList.calculateTotal()
      this.calculateTotal()
   }

   clearArmour(cat, name = '') {
      if (cat === 'modifiers') {
         this.modifierList.list = this.modifierList.list.filter(mod => mod.name !== name)
         this.modifierList.calculateTotal()
      } else this[cat] = 0
      this.calculateTotal()
   }

   calculateTotal() {
      this.total = this.base + this.dexMOd + this.modifierList.total
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
      this.featList.forEach(el => total += el.value)
      this.total = total
   }
}