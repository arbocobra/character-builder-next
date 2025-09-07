import BaseProficiencies from '@/lib/base/base-proficiencies'
import BaseItems from '@/lib/base/base-items'
import { featureList, features } from '@/lib/base/classes/class-features';

class BaseClass {
   constructor(className, level) {
      this.name = className;
      this.features = this.GrantFeatures(className, level);
      this.proficiencies = new BaseProficiencies();
      this.items = new BaseItems()
   }

   GrantFeatures(className, level) {
      let list = featureList[className].filter((_,i) => i < level).flat();
      return list.map(feature => features[className].find(f => f.name === feature))
   }
   // UnlockSubclass(level) {}
}

export default BaseClass;