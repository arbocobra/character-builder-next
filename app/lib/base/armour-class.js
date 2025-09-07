// class ArmourClass {
//    constructor(currentAC) {
//       this.class = currentAC ? currentAC.class : 0;
//       this.equipList = currentAC ? currentAC.equipList : new EquipList();
//       this.equipped = currentAC ? currentAC.equipped : this.equipList.total;
//       this.bonus = currentAC ? currentAC.bonus : 0;
//       this.total = 10 + this.class + this.equipped + this.bonus;
//    }
// }

// export default ArmourClass;

// export class EquipList {
//    constructor(current, update) {
//       if (!update) this.featList = current || [];
//       else this.featList = current.push(update)

//       this.total = this.calculateTotal()
//    }

//    calculateTotal() {
//       let total = 0;
//       this.featList.forEach(el => total += el.value)
//       return total
//    }
// }

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