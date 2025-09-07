class Features {
   constructor(currentFeatures) {
      if (!currentFeatures) {
         this.Class = {};
         this.Species = {};
         this.Background = {};
         this.Feats = {};
         this.Total = {};
      } else {
         this.Class = currentFeatures.Class;
         this.Species = currentFeatures.Species;
         this.Background = currentFeatures.Background;
         this.Feats = currentFeatures.Feats;
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
   
   getFeatures() {
      return {
         class: this.Class,
         species: this.Species,
         background: this.Background,
         feats: this.Feats,
         total: this.Total
      }
   }

}

export default Features;

class BaseFeatures {
   constructor() {}

}