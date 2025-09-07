import baseItems from './base-items';

class Items {
   constructor(current) {
      this.class = current ? current.class : new baseItems();
      this.species = current ? current.species : new baseItems();
      this.background = current ? current.background : new baseItems();
      this.feats = current ? current.feats : new baseItems();
      this.total = this.calculateTotal();
   }
   calculateTotal() {
      let total = { armour: [], weapons: [], equipment: [], currency: [], tools: [] }
      const addModifiers = (source) => {
         ['armour', 'weapons', 'equipment', 'currency', 'tools'].forEach((prop) => {
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
}

export default Items;