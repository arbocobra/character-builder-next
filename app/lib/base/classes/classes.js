import BaseClass from './base-class';

export class Barbarian extends BaseClass {
   constructor(level) {
      super('barbarian', level);
      this.hitDice = 12;
      this.proficiencies.savingThrows = ['Strength', 'Constitution'];
      this.proficiencies.armour = ['Light Armour', 'Medium Armour', 'Shields'];
      this.proficiencies.weapons = ['Simple Weapons', 'Martial Weapons'];
      this.proficiencies.selectFromList.skills = { list: ['Animal Handling', 'Athletics', 'Intimidation', 'Survival'], count: 2 };
   }
}