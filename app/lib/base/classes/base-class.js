import BaseProficiencies from '@/lib/base/base-proficiencies'
import BaseItems from '@/lib/base/base-items'
import { features, subFeatures } from './class-features';

class BaseClass {
   constructor(className, level, subName) {
      this.name = className;
      this.proficiencies = new BaseProficiencies();
      this.items = new BaseItems()
      this.features = this.getFeatures(className, level, subName)
      this.featureUpdates;
   }

   getFeatures(className, level, subName = null) {
      const feats = features[className]
      const subfeats = subName ? subFeatures[className][subName] : [];
      const fullFeats = [feats, subfeats].map(f => f.filter(el => el.level <= level))
      this.featureUpdates = this.getFeatureUpdates(fullFeats)
      return fullFeats;
   }

   getFeatureUpdates(feats) {
      const list = feats.map(group => group.filter(feat => Object.hasOwn(feat, 'apply')).map(f => f.apply)).flat()
      // list.forEach(el => )
      // const final = {}
      return list
   }
}

export default BaseClass;