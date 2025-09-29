import { features, featureList, descObject } from './classes/class-features';
class Features {
   // feature = {name, level, description} -- later incorporate update functions
   constructor() {
      this.class = [];
      this.species = [];
      this.background = [];
      this.feats = [];
   }

   addFeatures(key, value) {
      if (Array.isArray(value)) value.forEach(val => this[key].push(val))
      else this[key].push(value)
   }

   applyClassFeature(className, newLevel = 1) {
      let list = featureList[className].filter((_,i) => i < newLevel).flat();
      let fullList = list.map(feature => features[className].find(f => f.name === feature))

      let sample = fullList.map((feature, i) => {
         let newF = feature.name.toLowerCase()
         let lastdigit = Number.parseInt(newF.slice(-1))
         if (Number.isInteger(lastdigit)) {
            newF = newF.slice(0,-2)
         }
         if (newF in descObject) {
            fullList[i].description = descObject[newF]
         } else {
            // console.log(feature.name)
         }
         return feature
      })
      // console.log(sample)
      this.class = fullList
   }

   removeByName(key, name) {
      this[key].filter(el => el.name !== name)
   }

   removeByLevel(newLevel) {
      let currentC = [...this.class].filter(c => c.level <= newLevel)
      let currentS = [...this.species].filter(s => s.level <= newLevel)
      let currentB = [...this.background].filter(b => b.level <= newLevel)
      let currentF = [...this.feats].filter(f => f.level <= newLevel)
      this.class = currentC;
      this.species = currentS;
      this.background = currentB;
      this.feats = currentF;
   }
}

export default Features;

class FeatList {
   constructor() {
      this.list = [];
      this.total = [];
   }
}



// class Features {
//    // feature = {name, level, description} -- later incorporate update functions
//    constructor() {
      
//    }

//    addFeatures(key, value) {
      
//    }

//    removeByName(key, name) {
      
//    }

//    removeByLevel(newLevel) {
      
//    }
// }

// export default Features;

// class FeatList {
//    constructor() {
//       this.list = [];
//       this.total = [];
//    }
// }

// class BaseFeature {
//    constructor() {};

// }