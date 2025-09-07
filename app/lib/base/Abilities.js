class Abilities {
   constructor(currentAbilities) {
   // constructor(currentAbilities, base, classMods, speciesMods, featMods) {
      this.base = currentAbilities ? currentAbilities.base : [10,10,10,10,10,10];
      this.ASI = currentAbilities ? currentAbilities.ASI : new ClassASI()
      this.class = currentAbilities ? currentAbilities.class : this.ASI.total;
      this.species = currentAbilities ? currentAbilities.species : [0,0,0,0,0,0];
      this.feats = currentAbilities ? currentAbilities.feats : [0,0,0,0,0,0];
      this.total = currentAbilities ? currentAbilities.total : this.calculateTotal();
      this.modifiers = currentAbilities ? currentAbilities.modifiers : this.calculateModifiers();
   }

   // strength = [0], dex = [1], con = [2], int = [3], wis = [4], cha = [5]

   calculateTotal() {
      const total = [...this.base];
      const addModifiers = (modArray) => {
         modArray.forEach((mod, index) => {
            if (typeof mod === 'number') {
               total[index] += mod;
            }
         });
      };
      addModifiers(this.class);
      addModifiers(this.species);
      addModifiers(this.feats);
      return total;
   }

   calculateModifiers() {
      return this.total.map(score => Math.floor((score - 10) / 2));
   }

   clearCategory(cat) {
      if (cat === 'class') {
         this.ASI =  new ClassASI()
         this.class = this.ASI.total
      } else this[cat] = [0,0,0,0,0,0]
      this.modifiers = this.calculateModifiers()
      this.total = this.calculateTotal()
   }
}

export class ClassASI {
   constructor(currentASIlist, newASI) {
      if (!newASI) this.ASI_list = currentASIlist || [];
      else this.ASI_list = currentASIlist.push(newASI)

      this.total = this.calculateTotal();
   }

   // addToASI(level, score) { 
   //    this.ASI_list.push({ level, score }) 
   //    calculateTotal()
   // }

   removeFromASI(level) { 
      this.ASI_list = this.ASI_list.filter(asi => asi.level !== level) 
      calculateTotal()
   }

   calculateTotal() {
      // return total array of ability score increases from ASI_list
      let total = [0,0,0,0,0,0];
      this.ASI_list.forEach(asi => {
         asi.score.forEach((scoreIncrease, index) => {
            if (typeof scoreIncrease === 'number') {
               total[index] += scoreIncrease;
            }
         });
      });
      return total;
   }
}

export default Abilities;
