import BaseClass from '@/lib/base/classes/base-class';
import { Simple_Weapons, Martial_Melee_Weapons, Skills, Musical_Instruments, Simple_Melee_Weapons, ArtisansTools } from '@/lib/init-data'

export class Barbarian extends BaseClass {
   constructor(level) {
      super('barbarian', level);
      this.hitDice = 12;
      this.asiLevels = [4,8,12,16,19]
      this.proficiencies.savingThrows = ['Strength', 'Constitution'];
      this.proficiencies.armour = ['Light Armour', 'Medium Armour', 'Shields'];
      this.proficiencies.weapons = ['Simple Weapons', 'Martial Weapons'];
      this.proficiencies.selectFromList.skills = { list: ['Animal Handling', 'Athletics', 'Intimidation', 'Survival'], count: 2, title: 'Select 2 skills from list' };
      this.items.weapons = ['4 javelins'];
      this.items.equipment = ['explorer\'s pack']
      this.items.selectFromList.weapons = [{list: ['Greataxe', Martial_Melee_Weapons], count: 1, title: 'Greataxe OR Any martial melee weapon' }, {list: ['2 Handaxes', Simple_Weapons], count: 1, title: 'Two handaxes OR Any simple weapon'}]
      this.special = this.getSpecial()
   }

   getSpecial(level) {
      let rages, rageDamage, brutalCritical;
      rages = level < 3 ? 2 : level < 6 ? 3 : level < 12 ? 4 : level < 17 ? 5 : level < 20 ? 6 : 'unlimited'
      rageDamage = level < 9 ? '+2' : level < 16 ? '+3' : '+4'
      brutalCritical = level > 16 ? '+3 damage die' : level > 12 ? '+2 damage die' : level > 8 ? '+1 damage die' : null
      return {
         rages,
         'rage damage': rageDamage, 
         'brutal critical': brutalCritical
      }
   }
}

export class Bard extends BaseClass {
   constructor(level) {
      super('bard', level);
      this.hitDice = 8;
      this.asiLevels = [4,8,12,16,19]
      this.proficiencies.savingThrows = ['Dexterity', 'Charisma'];
      this.proficiencies.armour = ['Light Armour'];
      this.proficiencies.weapons = ['Simple Weapons', 'Hand Crossbow', 'Longsword', 'Rapier', 'Shortsword'];
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

export class Cleric extends BaseClass {
   constructor(level) {
      super('cleric', level);
      this.hitDice = 8;
      this.asiLevels = [4,8,12,16,19]
      this.proficiencies.savingThrows = ['Wisdom', 'Charisma'];
      this.proficiencies.armour = ['Light Armour', 'Medium Armour', 'Shields'];
      this.proficiencies.weapons = ['Simple Weapons'];
      this.proficiencies.selectFromList.skills = { list: ['History', 'Insight', 'Medicine', 'Persuasion', 'Religion'], count: 2, title: 'Select 2 skills from list' };
      this.items.armour = ['shield']
      this.items.equipment = ['holy symbol']
      this.items.selectFromList.armour = [{list: ['Scale Mail', 'Leather Armour', 'Chain Main'], count: 1, title: 'Scale mail OR Leather armour OR Chain mail (if proficient)' }]
      this.items.selectFromList.weapons = [{list: ['Mace', 'Warhammer'], count: 1, title: 'Mace OR Warhammer (if proficient)' }, {list: ['Light Crossbow + 20 bolts', Simple_Weapons], count: 1, title: 'Light crossbow and 20 bolts OR Any simple weapon'}];
      this.items.selectFromList.equipment = [{list: ['Priest\'s Pack', 'Explorer\'s Pack'], count: 1, title: 'Priest\'s Pack OR Explorer\'s Pack'}]
   }
}

export class Druid extends BaseClass {
   constructor(level) {
      super('druid', level);
      this.hitDice = 8;
      this.asiLevels = [4,8,12,16,19]
      this.proficiencies.savingThrows = ['Intelligence', 'Wisdom'];
      this.proficiencies.armour = ['Light Armour', 'Medium Armour', 'Shields (non-metal)'];
      this.proficiencies.weapons = ['Club', 'Dagger', 'Dart', 'Javelin', 'Mace', 'Quarterstaff', 'Scimitar', 'Sickle', 'Sling', 'Spear'];
      this.proficiencies.tools = ['Herbalism Kit'];
      this.proficiencies.selectFromList.skills = { list: ['Arcana', 'Animal Handling', 'Insight', 'Medicine', 'Nature', 'Perception', 'Religion', 'Survival'], count: 2, title: 'Select 2 skills from list' };
      this.items.armour = ['leather armour']
      this.items.equipment = ['explorer\'s pack', 'druidic focus']
      this.items.selectFromList.weapons = [{list: ['Scimitar', Simple_Melee_Weapons], count: 1, title: 'Scimitar OR Any simple melee weapon' }]
      // need to figure out how to make shield OR weapon option
   }
}

export class Fighter extends BaseClass {
   constructor(level) {
      super('fighter', level);
      this.hitDice = 10;
      this.asiLevels = [4,6,8,12,14,16,19]
      this.proficiencies.savingThrows = ['Strength', 'Constitution'];
      this.proficiencies.armour = ['All Armour', 'Shields'];
      this.proficiencies.weapons = ['Simple Weapons', 'Martial Weapons'];
      this.proficiencies.selectFromList.skills = { list: ['Acrobatics', 'Animal Handling', 'Athletics', 'History', 'Insight', 'Intimidation', 'Perception', 'Survival'], count: 2, title: 'Select 2 skills from list' };
      this.items.selectFromList.weapons = [{list: ['Light Crossbow + 20 bolts', '2 Handaxes'], count: 1, title: 'Light crossbow and 20 bolts OR Two handaxes'}];
      this.items.selectFromList.equipment = [{list: ['Dungeoneer\'s pack', 'Explorer\'s Pack'], count: 1, title: 'Dungeoneer\'s Pack OR Explorer\'s Pack' }];
      // need to figure out how to make shield OR weapon option
   }
}

export class Monk extends BaseClass {
   constructor(level) {
      super('monk', level);
      this.hitDice = 8;
      this.asiLevels = [4,8,12,16,19]
      this.proficiencies.savingThrows = ['Strength', 'Dexterity'];
      this.proficiencies.weapons = ['Simple Weapons', 'Shortsword'];
      this.proficiencies.selectFromList.skills = { list: ['Acrobatics', 'Athletics', 'History', 'Insight', 'Religion', 'Stealth'], count: 2, title: 'Select 2 skills from list' };
      this.proficiencies.selectFromList.tools = { list: [ArtisansTools, Musical_Instruments], count: 1, title: 'Any artisan\'s tools OR Any musical instrument' };
      this.items.weapons = ['10 darts'];
      this.items.selectFromList.weapons = [{list: ['Shortword', Simple_Weapons], count: 1, title: 'Shortword OR Any simple weapon' }]
      this.items.selectFromList.equipment = [{list: ['Dungeoneer\'s pack', 'Explorer\'s Pack'], count: 1, title: 'Dungeoneer\'s Pack OR Explorer\'s Pack' }];
   }
}

export class Paladin extends BaseClass {
   constructor(level) {
      super('paladin', level);
      this.hitDice = 10;
      this.asiLevels = [4,8,12,16,19]
      this.proficiencies.savingThrows = ['Wisdom', 'Charisma'];
      this.proficiencies.weapons = ['Simple Weapons', 'Martial Weapons'];
      this.proficiencies.armour = ['All Armour', 'Shields'];
      this.proficiencies.selectFromList.skills = { list: ['Athletics', 'Insight', 'Intimidation', 'Medicine', 'Persuasion', 'Religion'], count: 2, title: 'Select 2 skills from list' };
      this.items.armour = ['chainmail'];
      this.items.equipment = ['holy symbol']
      this.items.weapons = ['10 darts'];
      this.items.selectFromList.weapons = [{list: ['5 Javelins', Simple_Melee_Weapons], count: 1, title: 'Five javelins OR Any simple selee weapon' }]
      this.items.selectFromList.equipment = [{list: ['Priest\'s pack', 'Explorer\'s Pack'], count: 1, title: 'Priest\'s Pack OR Explorer\'s Pack' }];
      // need to figure out how to make shield OR weapon option
   }
}

export class Ranger extends BaseClass {
   constructor(level) {
      super('ranger', level);
      this.hitDice = 10;
      this.asiLevels = [4,8,12,16,19]
      this.proficiencies.savingThrows = ['Strength', 'Dexterity'];
      this.proficiencies.armour = ['Light Armour', 'Medium Armour', 'Shields'];
      this.proficiencies.weapons = ['Simple Weapons', 'Martial Weapons'];
      this.proficiencies.selectFromList.skills = { list: ['Animal Handling', 'Athletics', 'Insight', 'Investigation', 'Nature', 'Perception', 'Stealth', 'Survival'], count: 3, title: 'Select 3 skills from list' };
      this.items.weapons = ['longbow', '20 arrows'];
      this.items.selectFromList.armour = [{list: ['Scale Mail', 'Leather Armour'], count: 1, title: 'Scale mail OR Leather armour' }]
      // this.items.selectFromList.weapons = [{list: ['2 Shortwords', Simple_Melee_Weapons], count: 1, title: 'Shortword OR Any simple weapon' }]
      this.items.selectFromList.equipment = [{list: ['Dungeoneer\'s pack', 'Explorer\'s Pack'], count: 1, title: 'Dungeoneer\'s Pack OR Explorer\'s Pack' }];
      // need to figure out 2 shortwords OR 2 simple melee weapon option
   }
}

export class Rogue extends BaseClass {
   constructor(level) {
      super('rogue', level);
      this.hitDice = 8;
      this.asiLevels = [4,8,10,12,16,19]
      this.proficiencies.savingThrows = ['Dexterity', 'Intelligence'];
      this.proficiencies.weapons = ['Simple Weapons', 'Hand crossbow', 'Longsword', 'Rapier', 'Shortsword'];
      this.proficiencies.tools = ['Thieve\'s Tools'];
      this.proficiencies.armour = ['Light Armour'];
      this.proficiencies.selectFromList.skills = { list: ['Acrobatics', 'Athletics', 'Deception', 'Insight', 'Intimidation', 'Investigaion', 'Performance', 'Perception', 'Persuasion', 'Sleight of Hand', 'Stealth'], count: 4, title: 'Select 4 skills from list' };
      this.items.weapons = ['2 Daggers'];
      this.items.tools = ['Thieve\'s Tools'];
      this.items.armour = ['Light Armour'];
      this.items.selectFromList.weapons = [{ list: ['Rapier', 'Shortsword'], count: 1, title: 'Rapier OR Shortsword'}, { list: ['Shortbow + 20 Arrows', 'Shortsword'], count: 1, title: 'Shortbow with 20 Arrows OR Shortsword'}];
      this.items.selectFromList.equipment = [{list: ['Burglar\'s Pack', 'Dungeoneer\'s Pack', 'Explorer\'s Pack'], count: 1, title: 'Burglar\'s Pack OR Dungeoneer\'s Pack OR Explorer\'s Pack' }];
   }
}

export class Sorcerer extends BaseClass {
   constructor(level) {
      super('sorcerer', level);
      this.hitDice = 6;
      this.asiLevels = [4,8,12,16,19]
      this.proficiencies.savingThrows = ['Constitution', 'Charisma'];
      this.proficiencies.weapons = ['Dagger', 'Dart', 'Sling', 'Quarterstaff', 'Light Crossbow'];
      this.proficiencies.selectFromList.skills = { list: ['Arcana', 'Deception', 'Insight', 'Intimidation', 'Persuasion', 'Religion'], count: 2, title: 'Select 2 skills from list' };
      this.items.weapons = ['2 Daggers'];
      this.items.selectFromList.weapons = [{list: ['Light Crossbow + 20 bolts', Simple_Weapons], count: 1, title: 'Light crossbow and 20 bolts OR Any simple weapon'}];
      this.items.selectFromList.equipment = [{list: ['Component Pouch', 'Arcane Focus'], count: 1, title: 'Component Pouch OR Arcane focus' }, {list: ['Dungeoneer\'s pack', 'Explorer\'s Pack'], count: 1, title: 'Dungeoneer\'s Pack OR Explorer\'s Pack' }];
   }
}

export class Warlock extends BaseClass {
   constructor(level) {
      super('warlock', level);
      this.hitDice = 8;
      this.asiLevels = [4,8,12,16,19]
      this.proficiencies.savingThrows = ['Wisdom', 'Charisma'];
      this.proficiencies.armour = ['Light Armour'];
      this.proficiencies.weapons = ['Simple Weapons'];
      this.proficiencies.selectFromList.skills = { list: ['Arcana', 'Deception', 'History', 'Intimidation', 'Investigation', 'Nature', 'Religion'], count: 2, title: 'Select 2 skills from list' };
      this.items.weapons = ['2 Daggers'];
      this.items.armour = ['Light Armour'];
      this.items.selectFromList.weapons = [{list: ['Light Crossbow + 20 bolts', Simple_Weapons], count: 1, title: 'Light crossbow and 20 bolts OR Any simple weapon'}, {list: [Simple_Weapons], count: 1, title: 'Any simple weapon'}];
      this.items.selectFromList.equipment = [{list: ['Component Pouch', 'Arcane Focus'], count: 1, title: 'Component Pouch OR Arcane focus' }, {list: ['Dungeoneer\'s pack', 'Scholar\'s Pack'], count: 1, title: 'Dungeoneer\'s Pack OR Scholar\'s Pack' }];
   }
}

export class Wizard extends BaseClass {
   constructor(level) {
      super('wizard', level);
      this.hitDice = 6;
      this.asiLevels = [4,8,12,16,19]
      this.proficiencies.savingThrows = ['Intelligence', 'Wisdom'];
      this.proficiencies.weapons = ['Dagger, Dart, Sling, Quarterstaff, Light Crossbow'];
      this.proficiencies.selectFromList.skills = { list: ['Arcana', 'History', 'Insight', 'Investigation', 'Medicine', 'Religion'], count: 2, title: 'Select 2 skills from list' };
      this.items.equipment = ['Spellbook'];
      this.items.selectFromList.weapons = [{ list: ['Quarterstaff', 'Rapier'], count: 1, title: 'Quarterstaff OR Rapier'}];
      this.items.selectFromList.equipment = [{list: ['Component Pouch', 'Arcane Focus'], count: 1, title: 'Component Pouch OR Arcane focus' }, {list: ['Scholar\'s pack', 'Explorer\'s Pack'], count: 1, title: 'Scholar\'s Pack OR Explorer\'s Pack' }];
   }
}