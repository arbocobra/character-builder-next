import { species } from '../init-data';
import baseProficiencies from './baseProficiencies';

class Proficiencies {
   constructor(currentProficiencies) {
      if (!currentProficiencies) {
         this.Class = new baseProficiencies();
         this.Species = new baseProficiencies();
         this.Background = new baseProficiencies();
         this.Feats = new baseProficiencies();
         this.Total = new baseProficiencies();
      } else {
         this.Class = currentProficiencies.Class;
         this.Species = currentProficiencies.Species;
         this.Background = currentProficiencies.Background;
         this.Feats = currentProficiencies.Feats;
         this.Total = this.calculateTotal();
      }
   }
   calculateTotal() {
      let total = new baseProficiencies();
      const addModifiers = (source) => {
         ['Armour', 'Weapons', 'Tools', 'SavingThrows', 'Skills', 'Languages'].forEach((prop) => {
            source[prop].forEach((item) => {
               if (!total[prop].includes(item)) {
                  total[prop].push(item);
               }
            });
         });
      }
      addModifiers(this.Class);
      addModifiers(this.Species);
      addModifiers(this.Background);
      addModifiers(this.Feats);
      return total;
   }
   
   getProficiencies() {
      // return Object.assign({}, this.Class, this.Species, this.Background, this.Total)
      return {
         class: this.Class,
         species: this.Species,
         background: this.Background,
         feats: this.Feats,
         total: this.Total
      }
   }

}

export default Proficiencies;