import baseProficiencies from './baseProficiencies';

class Proficiencies {
   constructor(currentProficiencies) {
      this.class = currentProficiencies ? currentProficiencies.class : new baseProficiencies();
      this.species = currentProficiencies ? currentProficiencies.species : new baseProficiencies();
      this.background = currentProficiencies ? currentProficiencies.background : new baseProficiencies();
      this.feats = currentProficiencies ? currentProficiencies.feats : new baseProficiencies();
      this.total = this.calculateTotal();
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
      [this.class, this.species, this.background, this.feats].forEach(mod => addModifiers(mod))

      return total;
   }

   clearCategory(cat) {
      this[cat] = new baseProficiencies();
      this.total = this.calculateTotal();
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