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

   addToList(mod) {
      this.modifierList.list.push(mod)
      this.modifierList.calculateTotal()
      this.calculateTotal()
   }

   clearHitPoint(cat, name = '') {
      if (cat === 'modifiers') {
         this.modifierList.list = this.modifierList.list.filter(mod => mod.name !== name)
         this.modifierList.calculateTotal()
      } else this.base = 0
      this.calculateTotal()
   }

   calculateTotal() {
      this.total = this.base + this.modifierList.total
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
      this.featList.forEach(el => total += el.value)
      this.total = total
   }
}