import BaseItems from '@/lib/base/base-items';

class Items {
   constructor() {
      this.class = new BaseItems();
      this.background = new BaseItems();
      this.base = { armour: [], weapons: [], equipment: [], currency: 0, tools: [] }
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

   updateValue(key, value) {
      if (typeof key === 'object') {
         this[key[0]][key[1]] = value
      } else {
         this[key] = value
      }
      this.calculateTotal();
   }

   addToBase(key, value) {
      this.base[key].push(value)
      this.calculateTotal()
   }

   removeFromBase(key, value) {
      this.base[key] = this.base[key].filter(el => el !== value)
      this.calculateTotal()
   }

   clearCategory(cat) {
      this[cat] = new BaseItems();
      this.calculateTotal();
   }
}

export default Items;