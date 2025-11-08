import { Barbarian, Bard, Cleric, Druid, Fighter, Monk, Paladin, Ranger, Rogue, Sorcerer, Warlock, Wizard } from '@/lib/base/classes/classes';
import { Dwarf, Elf, Halfling, Human, Dragonborn, Gnome, HalfElf, HalfOrc, Tiefling } from '@/lib/base/species/species'
import { Acolyte, Charlatan, Criminal, Entertainer, FolkHero, GuildArtisan, Hermit, Noble, Outlander, Sage, Sailor, Soldier, Urchin } from '@/lib/base/backgrounds/backgrounds'
import { updateValue as updateValueP, addToList as addToListP } from '@/lib/base/proficiencies.ts';
import { setBaseHP } from '@/lib/base/hit-points.ts'
import { updateValue as updateValueA, addToList as addToListA } from '@/lib/base/abilities.ts';
import { updateValue as updateValueI } from '@/lib/base/items.ts';
import { setDexMod } from '@/lib/base/armour-class.ts'
import { setBase } from '@/lib/base/speed.ts'
import { updateValue as updateValueF, addToList as addToListF, removeFromList as removeFromListF } from '@/lib/base/features.ts'

const applyClass = (val, level) => {
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

const applySpecies = (val, sub, level) => {
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

const applyBackground = (val) => {
   switch (val) {
      case 'acolyte':
         return new Acolyte();
      case 'charlatan':
         return new Charlatan();
      case 'criminal':
         return new Criminal();
      case 'entertainer':
         return new Entertainer();
      case 'folk hero':
         return new FolkHero();
      case 'guild artisan':
         return new GuildArtisan();
      case 'hermit':
         return new Hermit();
      case 'noble':
         return new Noble();
      case 'outlander':
         return new Outlander();
      case 'sage':
         return new Sage();
      case 'sailor':
         return new Sailor();
      case 'soldier':
         return new Soldier();
      case 'urchin':
         return new Urchin();
      default:
         throw new Error(`Background ${val} not implemented`);
   }
}

export const getSavedCharacterObject = (char, state) => {
   let keys = Object.keys(char)
   let updateState = {}
   keys.forEach(k => {
      if (char[k]) {
         if (typeof char[k] === 'string' && typeof state[k] === 'object') updateState[k] = state[k]
         else updateState[k] = char[k]
      } else {
         updateState[k] = state[k]
      }
   })
   return updateState;
}

export const getLevelObject = (payload, hasClass, state) => {
   let {name, level} = payload;
   let proficiencyBonus = Math.ceil(level / 4) + 1;
   let hitPoints, features, subclass;
   if (hasClass) {
      const classObject = applyClass(state.class, level);
      hitPoints = setBaseHP(state.hit_dice, level, state.abilities.modifiers[2], state.hit_points)
      if (level > state.level) {features = updateValueF(state.features, 'class', classObject.features)}
      else {
         features = removeFromListF(level, state.features, 'class')
         subclass = level < classObject.subLevel ? undefined : state.subclass;
      }
   } else {
      features = state.features
      hitPoints = state.hit_points;
   }
   return {
      name,
      level,
      subclass,
      proficiencyBonus,
      hitPoints,
      features
   }
}

export const getClassObject = (className, state) => {
   const classObject = applyClass(className, state.level);
   const features = updateValueF(state.features, 'class', classObject.features)
   // const features = updateValueF(state.features, level, 'class', className)
   const hitPoints = setBaseHP(classObject.hitDice, state.level, state.abilities.modifiers[2], state.hit_points)
   const proficiencies = updateValueP(classObject.proficiencies, state.proficiencies, 'class')
   const items = updateValueI(classObject.items, state.items, 'class')
   return {
      hitDice: classObject.hitDice,
      hitPoints,
      class_ASI_levels: classObject.asiLevels,
      proficiencies,
      items,
      features
   }
}

export const getPathObject = (payload, state) => {
   const value = payload.value;
   let [category, group, prop, opt] = payload.path.split('.');
   if (category === 'proficiencies') {
      let proficiencies = updateValueP(value, state.proficiencies, [group, prop, opt])
      return { update: proficiencies, name:'proficiencies' }
   } else if (category === 'items') {
      let items;
      if (prop) items = updateValueI(value, state.items, [group, prop, opt])
      else items = updateValueI(value, state.items, group)
      return { update: items, name:'items' }
   }
     // else tbd
   return {}
}

export const getAbilitiesUpdateObject = (payload, state) => {
   let abilities = updateValueA(payload, state.abilities, 'base')
   let modifiers = abilities.modifiers
   let updatedHP = setBaseHP(state.hit_dice ?? 6, state.level, modifiers[2], state.hit_points)
   let updatedAC = setDexMod(modifiers[1], state.armour_class)
   return { abilities: abilities, armour_class: updatedAC, hit_points: updatedHP }
}

export const getAddToListObject = (payload, state) => {
   const value = payload.val;
   let [category, group, prop, opt] = payload.cat
   if (category === 'abilities') {
      let abilities = addToListA(value, state.abilities, group)
      let modifiers = abilities.modifiers
      let updatedHP = setBaseHP(state.hit_dice ?? 6, state.level, modifiers[2], state.hit_points)
      let updatedAC = setDexMod(modifiers[1], state.armour_class)
      return { abilities: abilities, armour_class: updatedAC, hit_points: updatedHP }
   }
}

export const getSpeciesObject = (payload, state) => {
   const {species, subspecies} = payload;
   const speciesObject = applySpecies(species, subspecies, state.level);
   const proficiencies = updateValueP(speciesObject.proficiencies, state.proficiencies, 'species')
   const speed = setBase(speciesObject.speed, state.speed)
   const abilities = updateValueA(speciesObject.abilityImprovement, state.abilities, 'species')
   // const features = updateValueF(state.features, state.level, 'species', species, subspecies)
   const features = updateValueF(state.features, 'species', speciesObject.features)

   return {
      species: subspecies ? subspecies : species,
      speed: speed,
      size: speciesObject.size,
      proficiencies,
      features,
      abilities
   }
}

export const getBackgroundObject = (payload, state) => {
   const background = payload
   const backgroundObject = applyBackground(background)
   const proficiencies = updateValueP(backgroundObject.proficiencies, state.proficiencies, 'background')
   const items = updateValueI(backgroundObject.items, state.items, 'background')
   const features = updateValueF(state.features, 'background', backgroundObject.features)
   return {
      background,
      proficiencies,
      features,
      items
   }
}

export const getInitialProficiencyList = (cat, id) => {
   let result;
   if (cat === 'class') result = applyClass(id, 1)
   else if (cat === 'background') result = applyBackground(id)
   else if (cat === 'species') {
      let species = id.split(' ')[1]
      let subspecies = id
      result = applySpecies(species, subspecies)
   }
   return result.proficiencies;
}

export const getInitialItemList = (cat, id) => {
   let result;
   if (cat === 'class') result = applyClass(id, 1)
   else if (cat === 'background') result = applyBackground(id)
   else if (cat === 'species') {
      let species = id.split(' ')[1]
      let subspecies = id
      result = applySpecies(species, subspecies)
   }
   return result.items;
}

export const changeClass = (className, state) => {}
export const changeSpecies = (species, subspecies, state) => {}