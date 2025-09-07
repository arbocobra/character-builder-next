import { Barbarian } from '@/lib/base/classes/classes';
import Proficiencies from './base/Proficiencies';
import baseProficiencies from './base/baseProficiencies';
import HitPoints from './base/hit-points';
import Abilities, { ClassASI } from './base/Abilities';

export const getClassObject = (val, level) => {
   switch (val) {
      case 'barbarian':
         const base = new Barbarian(level);
         return base;
      case 'bard':
         return 'make Bard class';
      case 'cleric':
         return 'make Cleric class';
      case 'druid':
         return 'make Druid class';
      case 'fighter':
         return 'make Fighter class';
      case 'monk':
         return 'make Monk class';
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

export const applyClass = (className, level, state) => {
   const classObject = getClassObject(className, level);

   const currentProficiencies = state.proficiencies;
   currentProficiencies.class = classObject.proficiencies;
   const updatedProficiencies = new Proficiencies(currentProficiencies)

   state.hit_points.calculateBaseHP(classObject.hitDice, level, state.abilities.modifiers[2])
   // const currentHP = state.hit_points;
   // currentHP.class = calcHP(level, classObject.hitDice, state.abilities.modifiers[2])
   // const updatedHP = new HitPoints(currentHP)

   return {
      hit_dice: classObject.hitDice,
      features: {...state.features, class: classObject.features},
      proficiencies: updatedProficiencies,
      // hit_points: state.hit_points,
   }
}

export const calcHP = (level, ditDice, con) => {
   let avg = ditDice / 2 + 1
   let result = 0
   for (let i = 0; i < level; i++) {
      if (i == 0) result += ditDice + con
      else result += avg + con
   }

   return result
}

export const updateProficiences = (obj, path, value) => {
   let current = obj;
   let keys = path.split('.');
   current[keys[0]][keys[1]] = value
   const updatedProficiencies = new Proficiencies(obj)
   return updatedProficiencies;
}

export const clearFromGrouped = (current, category, group) => {
   let updated;

   if (category == 'proficiencies') {
      current[group] = new baseProficiencies()
      updated = new Proficiencies(current)
   } else if (category == 'hit points') {
      current[group] = 0;
      updated = new HitPoints(current)
   } else if (category == 'abilities') {
      if (group == 'class') {
         current.ASI = new ClassASI()
         current.class = current.ASI.total
      } else current[group] = [0,0,0,0,0,0]
      updated = new Abilities(current)
   }
   return updated;
}