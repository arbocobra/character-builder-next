import BaseClass from '@/lib/base/classes/base-class';
import { simpleWeapons, MartialWeaponsMelee } from '@/lib/init-data'

export class Barbarian extends BaseClass {
   constructor(level) {
      super('barbarian', level);
      this.hitDice = 12;
      this.proficiencies.savingThrows = ['Strength', 'Constitution'];
      this.proficiencies.armour = ['Light Armour', 'Medium Armour', 'Shields'];
      this.proficiencies.weapons = ['Simple Weapons', 'Martial Weapons'];
      this.proficiencies.selectFromList.skills = { list: ['Animal Handling', 'Athletics', 'Intimidation', 'Survival'], count: 2 };
      this.items.weapons = ['4 javelins'];
      this.items.equipment = ['explorer\'s pack']
      this.items.selectFromList.weapons = {list: ['Greataxe', [MartialWeaponsMelee]], count: 1, name: ['Greataxe', 'Any martial melee weapon']}
      this.items.selectFromList.weapons = {list: ['2 Handaxes', [simpleWeapons]], count: 1, name: ['2 Handaxes', 'Any simple weapon']}
   }
}