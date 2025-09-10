import BaseClass from '@/lib/base/classes/base-class';
import { Simple_Weapons, Martial_Melee_Weapons, Skills, Musical_Instruments } from '@/lib/init-data'

export class Barbarian extends BaseClass {
   constructor(level) {
      super('barbarian', level);
      this.hitDice = 12;
      this.proficiencies.savingThrows = ['Strength', 'Constitution'];
      this.proficiencies.armour = ['Light Armour', 'Medium Armour', 'Shields'];
      this.proficiencies.weapons = ['Simple Weapons', 'Martial Weapons'];
      this.proficiencies.selectFromList.skills = { list: ['Animal Handling', 'Athletics', 'Intimidation', 'Survival'], count: 2, title: 'Select 2 skills from list' };
      this.items.weapons = ['4 javelins'];
      this.items.equipment = ['explorer\'s pack']
      this.items.selectFromList.weapons = [{list: ['Greataxe', Martial_Melee_Weapons], count: 1, title: 'Greataxe OR Any martial melee weapon' }, {list: ['2 Handaxes', Simple_Weapons], count: 1, title: 'Two handaxes OR Any simple weapon'}]

      this.proficiencies.skills = ['test'];
   }
}

export class Bard extends BaseClass {
   constructor(level) {
      super('bard', level);
      this.hitDice = 8;
      this.proficiencies.savingThrows = ['Dexterity', 'Charisma'];
      this.proficiencies.armour = ['Light Armour'];
      this.proficiencies.weapons = ['Simple Weapons', 'Hand Crossbows', 'Longswords', 'Rapier', 'Shortswords'];
      this.proficiencies.selectFromList.skills = { list: Skills, count: 3, title: 'Select 3 skills from list' };
      this.proficiencies.selectFromList.tools = { list: Musical_Instruments, count: 3, title: 'Select 3 Musical Instruments' };
      this.items.weapons = ['dagger'];
      this.items.armour = ['leather armour']
      this.items.equipment = ['explorer\'s pack']
      this.items.selectFromList.weapons = [{list: ['Rapier', 'Longsword', Simple_Weapons], count: 1, title: 'Rapier OR Longsword OR Any simple weapon' }]
      this.items.selectFromList.tools = [{list: Musical_Instruments, count: 1, title: 'Lute OR Any other instrument' }]
      this.items.selectFromList.equipment = [{list: ['Diplomat\'s Pack', 'Entertainer\'s Pack'], count: 1, title: 'Diplomat\'s Pack OR Entertainer\'s Pack'}]
   }
}