import BaseProficiencies from '@/lib/base/base-proficiencies'
import BaseItems from '@/lib/base/base-items'
import { features, featureList, descObject } from './class-features';

class BaseClass {
   constructor(className, level) {
      this.name = className;
      this.proficiencies = new BaseProficiencies();
      this.items = new BaseItems()
      // this.features = this.getFeatures(className, level)
      // this.classFeatures = features[className]
   }

   // getFeatures(className, level) {
   //    let list = featureList[className].filter((_,i) => i < level).flat();
   //    let fullList = list.map(feature => features[className].find(f => f.name === feature))
      
   //    let withDesc = fullList.map((feature, i) => {
   //       let newF = feature.name.toLowerCase()
   //       let lastdigit = Number.parseInt(newF.slice(-1))
   //       if (Number.isInteger(lastdigit)) {
   //          newF = newF.slice(0,-2)
   //       }
   //       if (newF in descObject) {
   //          fullList[i].description = descObject[newF]
   //       }
   //       return feature
   //    })
   //    return withDesc;
   // }
}

export default BaseClass;