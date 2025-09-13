class Abilities {
   constructor() {
      this.base = [10,10,10,10,10,10];
      this.species = [0,0,0,0,0,0];
      this.class = new AbilityScoreImprovements();
      this.feats = new AbilityScoreImprovements();
      this.total = [10,10,10,10,10,10];
      this.modifiers = [0,0,0,0,0,0];
   }

   // strength = [0], dex = [1], con = [2], int = [3], wis = [4], cha = [5]

   calculateTotal() {
      let total = [0,0,0,0,0,0];
      [this.base, this.species, this.class.total, this.feats.total].forEach(mod => mod.forEach((val, i) => total[i] += val))

      this.total = total;
      this.calculateModifiers(total)
   }

   calculateModifiers(total) {
      let mods = total.map(score => Math.floor((score - 10) / 2));
      this.modifiers = mods
   }

   addToList(abilityObj, cat) {
      this[cat].addToList(abilityObj)
      this.calculateTotal()
   }

   removeFromList(id, cat) { 
      this[cat].removeFromList(id)
      this.calculateTotal();
   }

   setCategory(cat, value) {
      this[cat] = value;
      this.calculateTotal()
   }

   clearCategory(cat) {
      if (cat === 'class' || cat == 'feats') {
         this[cat] =  new AbilityScoreImprovements();
      } else this[cat] = [0,0,0,0,0,0]
      this.calculateTotal()
   }
}

export class AbilityScoreImprovements {
   // list: [{name: '', level: 0, score: [0,0,...]}, ...]
   constructor() {
      this.list = [];
      this.total = [];
   }

   calculateTotal() {
      // return total array of ability score increases from list
      let total = [0,0,0,0,0,0];
      this.list.forEach(asi => {
         asi.score.forEach((scoreIncrease, index) => {
            if (typeof scoreIncrease === 'number') {
               total[index] += scoreIncrease;
            }
         });
      });
      this.total = total;
   }

   addToList(val) {
      this.list.push(val);
      this.calculateTotal()
   }

   removeFromList(id) {
      if (typeof id === 'string') this[cat].list = this.list.filter(asi => asi.name !== id);
      else if (typeof id === 'number') this[cat].list = this.list.filter(asi => asi.level !== level);
      this.calculateTotal();
   }
}

export default Abilities;
