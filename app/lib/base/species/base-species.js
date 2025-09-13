import BaseProficiencies from '@/lib/base/base-proficiencies'
// import BaseItems from '@/lib/base/base-items'
import { featureList, features } from '@/lib/base/species/species-features';

class BaseSpecies {
   constructor(speciesName, level, subspecies = null) {
      this.name = speciesName;
      this.subspecies = subspecies;
      this.size = 'medium';
      this.speed = 30
      this.features = this.GrantFeatures(speciesName, subspecies);
      this.proficiencies = new BaseProficiencies();
   }

   GrantFeatures(speciesName, subspecies) {
      let subspeciesList = subspecies ? featureList[subspecies] : null
      let list = [...featureList[speciesName], ...subspeciesList]
      return list.map(feature => features[speciesName].find(f => f.name === feature))
   }
}

export default BaseSpecies;