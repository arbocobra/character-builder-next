import { Barbarian, Bard, Cleric, Druid, Fighter, Monk, Paladin, Ranger, Rogue, Sorcerer, Warlock, Wizard } from '@/lib/base/classes/classes';
import { Dwarf, Elf, Halfling, Human, Dragonborn, Gnome, HalfElf, HalfOrc, Tiefling } from '@/lib/base/species/species'
import { updateValue as updateValueP } from './base/proficiencies.ts';
import { setBaseHP } from '@/lib/base/hit-points.ts'

export const applyClass = (val, level) => {
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
         return new Paladin(level);
      case 'ranger':
        return new Ranger(level);
      case 'rogue':
         return new Rogue(level);
      case 'sorcerer':
         return new Sorcerer(level);
      case 'warlock':
         return new Warlock(level);
      case 'wizard':
         return new Wizard(level);
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
      case 'halfling':
         return new Halfling(level, sub);
      case 'human':
         return new Human(level, sub);
      case 'dragonborn':
         return new Dragonborn(level, sub);
      case 'gnome':
         return new Gnome(level, sub);
      case 'half-elf':
         return new HalfElf(level, sub);
      case 'half-orc':
         return new HalfOrc(level, sub);
      case 'tiefling':
         return new Tiefling(level, sub);
      default:
         throw new Error(`Species ${val} not implemented`);
   }
}

// export const applyClass = (className, level, state) => {
//    const classObject = getClassObject(className, level);
//    // state.proficiencies.updateValue('class', classObject.proficiencies)
//    // state.hit_points.calculateBaseHP(classObject.hitDice, level, state.abilities.modifiers[2])
//    state.features.applyClassFeature(className, level)
//    state.equipment.updateValue('class', classObject.items)
//    const updatedPros = updateValue(classObject.proficiencies, state.proficiencies, 'class')

//    return {
//       hit_dice: classObject.hitDice,
//       class_ASI_levels: classObject.asiLevels,
//       proficiencies: updatedPros
//    }
// }

export const changeClass = (className, state) => {
   const classObject = getClassObject(className, state.level);
   state.proficiencies.updateValue('class', classObject.proficiencies)
   state.hit_points.calculateBaseHP(classObject.hitDice, state.level, state.abilities.modifiers[2])
   state.features.applyClassFeature(className, state.level)
   state.equipment.updateValue('class', classObject.items)

   return {
      hit_dice: classObject.hitDice,
      class_ASI_levels: classObject.asiLevels,
   }
}

export const applySpecies = (species, subspecies, state) => {
   const speciesObject = getSpeciesObject(species, subspecies, state.level);
   state.proficiencies.updateValue('species', speciesObject.proficiencies);
   state.abilities.updateValue('species', speciesObject.abilityImprovement)
   state.features.species = speciesObject.features;
   return {
      // species: subspecies ? subspecies : species,
      size: speciesObject.size,
      speed: speciesObject.speed
   }
}

export const changeSpecies = (species, subspecies, state) => {
   const speciesObject = getSpeciesObject(species, subspecies, state.level);
   state.proficiencies.updateValue('species', speciesObject.proficiencies)
   state.abilities.updateValue('species', speciesObject.abilityImprovement)
   state.features.species = speciesObject.features

   return {
      size: speciesObject.size,
      speed: speciesObject.speed
   }
}

export const getLevelObject = (level, hasClass, state) => {
   let proficBonus = Math.ceil(level / 4) + 1;
   let updatedHP;
   if (hasClass) {
      updatedHP = setBaseHP(state.hit_dice, level, state.abilities.modifiers[2], state.hit_points)
      // features after
   }
   return {
      proficiency_bonus: proficBonus, 
      hit_points: updatedHP
      // features after
   }
}

export const getClassObject = (className, level, state) => {
   const classObject = applyClass(className, level);
   state.features.applyClassFeature(className, level)
   state.equipment.updateValue('class', classObject.items)
   const hitPoints = setBaseHP(classObject.hitDice, level, state.abilities.modifiers[2], state.hit_points)
   const proficiencies = updateValueP(classObject.proficiencies, state.proficiencies, 'class')
   return {
      hit_dice: classObject.hitDice,
      hit_points: hitPoints,
      class_ASI_levels: classObject.asiLevels,
      proficiencies: proficiencies
   }
}

export const getPathObject = (val, cat, state, group, prop) => {
   if (cat === 'proficiencies') {
      let proficiencies = updateValueP(val, state.proficiencies, [group, prop])
      return { update: proficiencies }
   }  // else tbd
   return {}
}