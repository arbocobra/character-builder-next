class Features {
   constructor() {
      this.class = [];
      this.species = [];
      this.background = [];
      this.feats = [];
   }

   addFeatures(key, values) {
      let current = [...this[key]]
      values.forEach(val => {
         let i = current.findIndex(el => el.name == val.name)
         if (i >= 0) {
            if (val.level !== current[i].level) current.push(val)
         } else current.push(val)
      })
      this[key] = current
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

/*
sample feature
{
   name:
   level:
   description:
}
*/

// class FeatList {
//    constructor(){
//       this.list = [];
//    }
// }

export default Features;