import BaseProficiencies from '@/lib/base/base-proficiencies'
import BaseItems from '@/lib/base/base-items'
import { features, featureList, descObject } from './class-features';

class BaseClass {
   constructor(className, level) {
      this.name = className;
      this.proficiencies = new BaseProficiencies();
      this.items = new BaseItems()
      this.features = this.getFeatures(className, level)
      // this.features = features[className]
   }

   getFeatures(className, level) {
      const feats = features[className]
      return feats.filter(el => el.level <= level)
   }
}

export default BaseClass;