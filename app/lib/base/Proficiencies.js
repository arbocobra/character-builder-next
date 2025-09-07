import BaseProficiencies from '@/app/lib/base/base-proficiencies';

class Proficiencies {
   // constructor(currentProficiencies) {
   //    this.class = currentProficiencies ? currentProficiencies.class : new BaseProficiencies();
   //    this.species = currentProficiencies ? currentProficiencies.species : new BaseProficiencies();
   //    this.background = currentProficiencies ? currentProficiencies.background : new BaseProficiencies();
   //    this.feats = currentProficiencies ? currentProficiencies.feats : new FeatList();
   //    this.total = { armour: [], weapons: [], tools: [], savingThrows: [], skills: [], languages: [] }
   // }
   constructor() {
      this.class = new BaseProficiencies();
      this.species = new BaseProficiencies();
      this.background = new BaseProficiencies();
      this.feats = new FeatList();
      this.total = { armour: [], weapons: [], tools: [], savingThrows: [], skills: [], languages: [] }
   }
   calculateTotal() {
      let total = { armour: [], weapons: [], tools: [], savingThrows: [], skills: [], languages: [] }
      
      const addModifiers = (source) => {
         ['armour', 'weapons', 'tools', 'savingThrows', 'skills', 'languages'].forEach((prop) => {
            source[prop].forEach((item) => {
               if (!total[prop].includes(item)) {
                  total[prop].push(item);
               }
            });
         });
      }

      [this.class, this.species, this.background, this.feats.total].forEach(mod => addModifiers(mod))
      this.total = total;
   }

   updateProficiency(key, value) {
      if (typeof key === 'object') {
         this[key[0]][key[1]] = value
      } else this[key] = value
      this.calculateTotal();
   }

   addToFeats(value) {
      this.feats.list.push(value)
      this.feats.calculateTotal()
      this.calculateTotal()
   }

   removeFeat(id) {
      this.feats.list = this.feats.list.filter(feat => feat.name !== id)
      this.feats.calculateTotal()
      this.calculateTotal()
   }

   clearCategory(cat) {
      if (cat === 'feat') this.feats = new FeatList();
      else this[cat] = new BaseProficiencies();
      this.calculateTotal();
   }
   
   getProficiencies() {
      return {
         class: this.class,
         species: this.species,
         background: this.background,
         feats: this.feats,
         total: this.total
      }
   }
}

export default Proficiencies;

class FeatList {
   constructor() {
      this.list = [];
      this.total = new BaseProficiencies();
   }
   calculateTotal() {
      let total = { armour: [], weapons: [], tools: [], savingThrows: [], skills: [], languages: [] }
      ['armour', 'weapons', 'tools', 'savingThrows', 'skills', 'languages'].forEach((prop) => {
         this.list.forEach((item) => {
            if (!total[prop].includes(item)) {
               total[prop].push(item);
            }
         });
      });
      this.total = total;
   }
}