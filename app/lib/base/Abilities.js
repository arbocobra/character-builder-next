class Abilities {
   constructor(base, classMods, speciesMods, featMods) {
      this.Base = base || [10,10,10,10,10,10];
      this.Class = classMods || [0,0,0,0,0,0];
      this.Species = speciesMods || [0,0,0,0,0,0];
      this.Feats = featMods || [0,0,0,0,0,0];
      this.Total = this.calculateTotal();
      this.Modifiers = this.calculateModifiers();
   }

   calculateTotal() {
      const total = [...this.Base];
      const addModifiers = (modArray) => {
         modArray.forEach((mod, index) => {
            if (typeof mod === 'number') {
               total[index] += mod;
            }
         });
      };
      addModifiers(this.Class);
      addModifiers(this.Species);
      addModifiers(this.Feats);
      return total;
   }

   calculateModifiers() {
      return this.Total.map(score => Math.floor((score - 10) / 2));
   }

   getAbilities() {
      return {
         base: this.Base,
         class: this.Class,
         species: this.Species,
         feats: this.Feats,
         total: this.Total,
         modifiers: this.Modifiers
      }
   }
}

export class ClassASI {
   constructor(currentASIlist, newASI) {
      if (!newASI) this.ASI_list = currentASIlist || [];
      else this.ASI_list = currentASIlist.push(newASI)

      this.Total = this.calculateTotal();
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
