class HitPoints {
   constructor() {
      this.base = 0;
      this.modifierList = new HPModifiers();
      this.total = 0;
   }

   calculateBaseHP(hitDice, level, con) {
      let avg = hitDice / 2 + 1
      let result = 0
      for (let i = 0; i < level; i++) {
         if (i == 0) result += hitDice + con
         else result += avg + con
      }
      this.base = result
      this.calculateTotal()
   }

   calculateTotal() {
      this.total = this.base + this.modifierList.total
   }

   addToList(mod) {
      this.modifierList.addToList(mod)
      this.calculateTotal()
   }

   removeFromList(id) {
      this.modifierList.removeFromList(id)
      this.calculateTotal()
   }

   clearHitPoint(cat) {
      if (cat === 'modifiers') this.modifierList = new HPModifiers();
      else this.base = 0;
      this.calculateTotal()
   }
}

export default HitPoints;

export class HPModifiers {
   constructor() {
      this.list = []
      this.total = 0
   }

   calculateTotal() {
      let total = 0;
      this.list.forEach(el => total += el.value)
      this.total = total
   }

   addToList(mod) {
      this.list.push(mod)
      this.calculateTotal()
   }

   removeFromList(id) {
      if (typeof id === 'string') this[cat].list = this.list.filter(mod => mod.name !== id);
      else if (typeof id === 'number') this[cat].list = this.list.filter(mod => mod.level !== level);
      this.calculateTotal();
   }
}