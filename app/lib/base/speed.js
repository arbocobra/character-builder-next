class Speed {
   constructor() {
      this.base = 30;
      this.modifierList = new SpeedModifiers();
      this.total = 30;
   }

   calculateTotal() {
      this.total = this.base + this.dexMOd + this.modifierList.total
   }

   addToList(mod) {
      this.modifierList.addToList(mod)
      this.calculateTotal()
   }

   removeModifier(id) {
      this.modifierList.removeFromList(id)
      this.calculateTotal()
   }

   updateBase(val) {
      this.base = val;
      this.calculateTotal();
   }
}

export default Speed;

export class SpeedModifiers {
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
      this.list.push(val)
      this.calculateTotal();
   }

   removeFromList(id) {
      if (typeof id === 'string') this[cat].list = this.list.filter(mod => mod.name !== id);
      else if (typeof id === 'number') this[cat].list = this.list.filter(mod => mod.level !== level);
      this.calculateTotal();
   }
}