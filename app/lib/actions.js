import { Barbarian, Bard, Cleric, Druid, Fighter, Monk } from '@/lib/base/classes/classes';

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