import { Barbarian, Bard, Cleric, Druid, Fighter, Monk } from '@/lib/base/classes/classes';
import { Dwarf, Elf } from '@/lib/base/species/species'

export const getClassObject = (val, level) => {
   switch (val) {
      case 'barbarian':
         return new Barbarian(level);
      case 'bard':
         return new Bard(level);
      case 'cleric':
         return new Cleric(level);
      case 'druid':
         return new Druid(level);
      case 'fighter':
         return new Fighter(level);
      case 'monk':
         return new Monk(level);
      case 'paladin':
         return 'make Paladin class';
      case 'ranger':
         return 'make Ranger class';
      case 'rogue':
         return 'make Rogue class';
      case 'sorcerer':
         return 'make Sorcerer class';
      case 'warlock':
         return 'make Warlock class';
      case 'wizard':
         return 'make Wizard class';
      default:
         throw new Error(`Class ${val} not implemented`);
   }
}

const getSpeciesObject = (val, sub, level) => {
   switch (val) {
      case 'dwarf':
         return new Dwarf(level, sub);
      case 'elf':
         return new Elf(level, sub);
      default:
         throw new Error(`Species ${val} not implemented`);
   }
}

export const applyClass = (className, level, state) => {
   const classObject = getClassObject(className, level);
   state.proficiencies.updateValue('class', classObject.proficiencies)
   state.hit_points.calculateBaseHP(classObject.hitDice, level, state.abilities.modifiers[2])
   state.features.class = classObject.features
   state.equipment.updateValue('class', classObject.items)

   return {
      hit_dice: classObject.hitDice,
   }
}

export const changeClass = (className, state) => {
   const classObject = getClassObject(className, state.level);
   state.proficiencies.updateValue('class', classObject.proficiencies)
   state.hit_points.calculateBaseHP(classObject.hitDice, state.level, state.abilities.modifiers[2])
   state.features.class = classObject.features
   state.equipment.updateValue('class', classObject.items)

   return {
      hit_dice: classObject.hitDice,
   }
}

export const applySpecies = (species, subspecies, state) => {
   const speciesObject = getSpeciesObject(species, subspecies, state.level);
   state.proficiencies.updateValue('species', speciesObject.proficiencies);
   state.abilities.setCategory('species', speciesObject.abilityImprovement)
   state.features.species = speciesObject.features;
   return {
      // species: subspecies ? subspecies : species,
      size: speciesObject.size,
      speed: speciesObject.speed
   }
}