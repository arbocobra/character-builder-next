import baseProficiencies from '../baseProficiencies';
import { featureList, features } from './class-features';

class BaseClass {
   constructor(className, level) {
      this.name = className;
      this.features = this.GrantFeatures(className, level);
      this.proficiencies = new baseProficiencies();
   }

   GrantFeatures(className, level) {
      let list = featureList[className].filter((_,i) => i < level).flat();
      return list.map(feature => features[className].find(f => f.name === feature))
   }
   // UnlockSubclass(level) {}
}

export default BaseClass;