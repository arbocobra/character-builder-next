import BaseProficiencies from '@/lib/base/base-proficiencies'
// import BaseItems from '@/lib/base/base-items'
import { features } from '@/lib/base/species/species-features';

class BaseSpecies {
   constructor(speciesName, level, subspecies = null) {
      this.name = speciesName;
      this.subspecies = subspecies;
      this.size = 'medium';
      this.speed = 30
      this.features = this.getFeatures(speciesName, subspecies);
      this.proficiencies = new BaseProficiencies();
   }

   getFeatures(speciesName, subspecies) {
      let feats = features[speciesName]
      if (subspecies) {
         return feats.filter(el => el.species === 'base' || el.species === subspecies)
      } else return feats
   }
}

export default BaseSpecies;