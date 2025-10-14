import BaseProficiencies from '@/lib/base/base-proficiencies'
import BaseItems from '@/lib/base/base-items'

class BaseBackground {
   constructor(background){
      this.name = background;
      this.proficiencies = new BaseProficiencies();
      this.items = new BaseItems()
   }
}

export default BaseBackground;