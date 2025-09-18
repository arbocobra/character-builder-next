import BaseProficiencies from '@/lib/base/base-proficiencies'
import BaseItems from '@/lib/base/base-items'

class BaseClass {
   constructor(className) {
      this.name = className;
      this.proficiencies = new BaseProficiencies();
      this.items = new BaseItems()
   }
}

export default BaseClass;