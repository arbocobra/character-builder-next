import BaseItems from '@/lib/base/base-items';

class Items {
   constructor() {
      this.class = new BaseItems();
      this.background = new BaseItems();
      this.total = { armour: [], weapons: [], equipment: [], currency: [], tools: [] }
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

      addModifiers(this.class)
      addModifiers(this.background)
      this.total = total
   }

   updateItems(key, value) {
      if (typeof key === 'object') {
         this[key[0]][key[1]] = value
      } else this[key] = value
      this.calculateTotal();
   }
}

export default Items;