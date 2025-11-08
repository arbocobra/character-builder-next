import BaseClass from '@/lib/base/classes/base-class';
import { Simple_Weapons, Martial_Melee_Weapons, Skills, Musical_Instruments, Simple_Melee_Weapons, ArtisansTools, Martial_Weapons } from '@/lib/init-data'

export class Barbarian extends BaseClass {
   constructor(level) {
      super('barbarian', level);
      this.hitDice = 12;
      this.asiLevels = [4,8,12,16,19]
      this.proficiencies.savingThrows = ['Strength', 'Constitution'];
      this.proficiencies.armour = ['Light Armour', 'Medium Armour', 'Shields'];
      this.proficiencies.weapons = ['Simple Weapons', 'Martial Weapons'];
      this.proficiencies.selectFromList.skills = [{ list: ['Animal Handling', 'Athletics', 'Intimidation', 'Survival'], count: 2, title: 'Select 2 skills', type: 'simple_select' }];
      this.items.weapons = ['4 javelins'];
      this.items.equipment = ['explorer\'s pack']
      this.items.selectFromList.weapons = [
         {list: ['Greataxe', Martial_Melee_Weapons], count: 1, title: 'Greataxe OR Any martial melee weapon', type: 'iterating_group_select' }, 
         {list: ['2 Handaxes', Simple_Weapons], count: 1, title: 'Two handaxes OR Any simple weapon', type: 'iterating_group_select'}]
      this.special = this.getSpecial();
      this.subName = 'Primal Path';
      this.subLevel = 3;
      this.spellcasting = false;
   }

   getSpecial(level) {
      let rages = level < 3 ? 2 : level < 6 ? 3 : level < 12 ? 4 : level < 17 ? 5 : level < 20 ? 6 : 'unlimited'
      let rageDamage = level < 9 ? '+2' : level < 16 ? '+3' : '+4'
      let brutalCritical = level < 9 ? null : level < 13 ? '+1 damage die' : level < 17 ? '+2 damage die' : '+3 damage die'
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
      this.proficiencies.selectFromList.skills = [{ list: Skills, count: 3, title: 'Select 3 skills', type: 'simple_select' }];
      this.proficiencies.selectFromList.tools = [{ list: Musical_Instruments, count: 3, title: 'Select 3 Musical Instruments', type: 'simple_select' }];
      this.items.weapons = ['dagger'];
      this.items.armour = ['leather armour']
      this.items.equipment = ['explorer\'s pack']
      this.items.selectFromList.weapons = [{list: ['Rapier', 'Longsword', Simple_Weapons], count: 1, title: 'Rapier OR Longsword OR Any simple weapon', type: 'group_select' }]
      this.items.selectFromList.tools = [{list: Musical_Instruments, count: 1, title: 'Lute OR Any other instrument', type: 'simple_select' }]
      this.items.selectFromList.equipment = [{list: ['Diplomat\'s Pack', 'Entertainer\'s Pack'], count: 1, title: 'Diplomat\'s Pack OR Entertainer\'s Pack', type: 'simple_select' }]
      this.special = this.getSpecial();
      this.subName = 'Bard College',
      this.subLevel = 3;
      this.spellcasting = true;
   }

   getSpecial(level) {
      let bardicInspiration = level < 5 ? '1d6' : level < 10 ? '1d8' : level < 15 ? '1d10' : '1d12'
      let songOfRest = level < 2 ? null : level < 9 ? '1d6' : level < 13 ? '1d8' : level < 17 ? '1d10' : 'd12'
      let expertise = level < 3 ? 0 : level < 10 ? 2 : 4
      let magicalSecrets = level < 10 ? 0 : level < 14 ? 2 : level < 18 ? 4 : 6
      return {
         'bardic inspiration': bardicInspiration,
         'song of rest': songOfRest,
         expertise,
         'magical secrets': magicalSecrets
      }
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
      this.proficiencies.selectFromList.skills = [{ list: ['History', 'Insight', 'Medicine', 'Persuasion', 'Religion'], count: 2, title: 'Select 2 skills', type: 'simple_select' }];
      this.items.armour = ['shield']
      this.items.equipment = ['holy symbol']
      this.items.selectFromList.armour = [{list: ['Scale Mail', 'Leather Armour', 'Chain Main'], count: 1, title: 'Scale mail OR Leather armour OR Chain mail (if proficient)', type: 'simple_select' }]
      this.items.selectFromList.weapons = [
         {list: ['Mace', 'Warhammer'], count: 1, title: 'Mace OR Warhammer (if proficient)', type: 'iterating_simple_select' }, 
         {list: ['Light Crossbow + 20 bolts', Simple_Weapons], count: 1, title: 'Light crossbow and 20 bolts OR Any simple weapon', type: 'iterating_group_select'}];
      this.items.selectFromList.equipment = [{list: ['Priest\'s Pack', 'Explorer\'s Pack'], count: 1, title: 'Priest\'s Pack OR Explorer\'s Pack', type: 'simple_select'}]
      this.special = this.getSpecial();
      this.subName = 'Bard College',
      this.subLevel = 3;
      this.spellcasting = true;
   }

   getSpecial(level) {
      let channelDivinity = level < 2 ? 0 : level < 6 ? 1 : level < 18 ? 2 : 3
      let destroyUndead = level < 5 ? null : level < 8 ? 'CR 1/2' : level < 11 ? 'CR 1' : level < 14 ? 'CR 2' : level < 17 ? 'CR 3' : 'CR 4'
      return {
         'channel divinity': channelDivinity,
         'destroy undead': destroyUndead
      }
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
      this.proficiencies.selectFromList.skills = [{ list: ['Arcana', 'Animal Handling', 'Insight', 'Medicine', 'Nature', 'Perception', 'Religion', 'Survival'], count: 2, title: 'Select 2 skills', type: 'simple_select' }];
      this.items.armour = ['leather armour']
      this.items.equipment = ['explorer\'s pack', 'druidic focus']
      this.items.selectFromList.weapons = [{list: ['Scimitar', Simple_Melee_Weapons], count: 1, title: 'Scimitar OR Any simple melee weapon', type: 'group_select'}]
      this.items.selectFromList.special = [{list: ['Wooden Shield', Simple_Weapons], count: 1, title: 'Wooden Shield OR Any simple weapon', categories: ['armour', 'weapons'], type: 'special_select_1', special: {val: 'wooden shield', index: 0}, selected: []}]
      this.special = this.getSpecial();
      this.subName = 'Druid Circle',
      this.subLevel = 2;
      this.spellcasting = true;
   }

   getSpecial(level) {
      let wildShape = level < 2 ? null : level < 4 ? 'CR 1/4 - cannot fly or swim' : level < 8 ? 'CR 1/2 - can swim, cannot fly' : 'CR 1 - can swim or fly'
      return {
         'wild shape': wildShape
      }
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
      this.proficiencies.selectFromList.skills = [{ list: ['Acrobatics', 'Animal Handling', 'Athletics', 'History', 'Insight', 'Intimidation', 'Perception', 'Survival'], count: 2, title: 'Select 2 skills', type: 'simple_select' }];
      this.items.selectFromList.weapons = [{list: ['Light Crossbow + 20 bolts', '2 Handaxes'], count: 1, title: 'Light crossbow and 20 bolts OR Two handaxes', type: 'simple_select'}];
      this.items.selectFromList.equipment = [{list: ['Dungeoneer\'s pack', 'Explorer\'s Pack'], count: 1, title: 'Dungeoneer\'s Pack OR Explorer\'s Pack', type: 'simple_select' }];
      this.items.selectFromList.special = [
         {list: ['Chain Mail', 'Leather armor AND Longbow + 20 arrows'], count: 1, title: 'Chain Mail OR Leather armor AND Longbow + 20 arrows', categories: ['armour', ['armour', 'weapons']], type: 'special_select_2', special: {val: 'longbow + 20 arrows', index: 1}, selected: []}, 
         {list: [['Martial weapon and a shield', '2 Martial weapons'], Martial_Weapons], count: [1,2], title: 'Martial weapon and a shield OR 2 Martial weapons', categories: [['armour', 'weapons'], 'weapons'], type: 'special_select_3', special: {val: 'shield', index: 0},selected: []}]
      this.special = this.getSpecial();
      this.subName = 'Martial Archetype',
      this.subLevel = 3;
      this.spellcasting = false;
   }

   getSpecial(level) {
      let secondWind = `1d10 + ${level}`
      let actionSurge = level < 2 ? 0 : level < 17 ? 1 : 2
      let extraAttack = level < 5 ? null : level < 11 ? '+ 1' : level < 20 ? '+ 2' : '+ 3' 
      let indomitable = level < 9 ? 0 : level < 13 ? 1 : level < 17 ? 2 : 3

      return {
         'second wind': secondWind,
         'action surge': actionSurge,
         'extra attack': extraAttack,
         indomitable
      }
   }
}

export class Monk extends BaseClass {
   constructor(level) {
      super('monk', level);
      this.hitDice = 8;
      this.asiLevels = [4,8,12,16,19]
      this.proficiencies.savingThrows = ['Strength', 'Dexterity'];
      this.proficiencies.weapons = ['Simple Weapons', 'Shortsword'];
      this.proficiencies.selectFromList.skills = [{ list: ['Acrobatics', 'Athletics', 'History', 'Insight', 'Religion', 'Stealth'], count: 2, title: 'Select 2 skills', type: 'simple_select' }];
      this.proficiencies.selectFromList.tools = [{ list: [ArtisansTools, Musical_Instruments], count: 1, title: 'Any artisan\'s tools OR Any musical instrument', type: 'group_select' }];
      this.items.weapons = ['10 darts'];
      this.items.selectFromList.weapons = [{list: ['Shortword', Simple_Weapons], count: 1, title: 'Shortword OR Any simple weapon', type: 'group_select' }]
      this.items.selectFromList.equipment = [{list: ['Dungeoneer\'s pack', 'Explorer\'s Pack'], count: 1, title: 'Dungeoneer\'s Pack OR Explorer\'s Pack', type: 'simple_select' }];
      this.spellcasting = false;
      this.special = this.getSpecial();
      this.subName = 'Martial Archetype',
      this.subLevel = 3;
   }

   getSpecial(level) {
      let ki = level < 2 ? 0 : level
      let martialArts = level < 5 ? '1d4' : level < 11 ? '1d6' : level < 17 ? '1d8' : '1d10'
      let unarmouredMovement = level < 2 ? 0 : level < 6 ? 10 : level < 10 ? 15 : level < 14 ? 20 : level < 18 ? 25 : 20
      let deflectMissiles = level < 3 ? null : `1d10 + DEX mod + ${level}`

      return {
         ki,
         'martial arts': martialArts,
         'unarmoured movement': unarmouredMovement,
         'deflect missiles': deflectMissiles
      }
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
      this.proficiencies.selectFromList.skills = [{ list: ['Athletics', 'Insight', 'Intimidation', 'Medicine', 'Persuasion', 'Religion'], count: 2, title: 'Select 2 skills', type: 'simple_select' }];
      this.items.armour = ['chainmail'];
      this.items.equipment = ['holy symbol']
      this.items.weapons = ['10 darts'];
      this.items.selectFromList.weapons = [{list: ['5 Javelins', Simple_Melee_Weapons], count: 1, title: 'Five javelins OR Any simple selee weapon', type: 'group_select' }];
      this.items.selectFromList.equipment = [{list: ['Priest\'s pack', 'Explorer\'s Pack'], count: 1, title: 'Priest\'s Pack OR Explorer\'s Pack', type: 'simple_select' }];
      this.items.selectFromList.special = [{list: [['Martial weapon and a shield', '2 Martial weapons'], Martial_Weapons], count: [1,2], title: 'Martial weapon and a shield OR 2 Martial weapons', categories: [['armour', 'weapons'], 'weapons'], type: 'special_select_4', special: {val: 'shield', index: 0}, selected: []}]
      this.spellcasting = true;
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
      this.proficiencies.selectFromList.skills = [{ list: ['Animal Handling', 'Athletics', 'Insight', 'Investigation', 'Nature', 'Perception', 'Stealth', 'Survival'], count: 3, title: 'Select 3 skills', type: 'simple_select' }];
      this.items.weapons = ['longbow', '20 arrows'];
      this.items.selectFromList.armour = [{list: ['Scale Mail', 'Leather Armour'], count: 1, title: 'Scale mail OR Leather armour', type: 'simple_select' }]
      this.items.selectFromList.special = [{list: [['2 Shortwords', '2 Simple melee weapons'], Simple_Melee_Weapons], count: 2, title: '2 Shortwords OR 2 Simple melee weapons', categories: 'weapons', type: 'special_select_5', special: {val: '2 shortwords', index: 0}, selected: []}]
      this.items.selectFromList.equipment = [{list: ['Dungeoneer\'s pack', 'Explorer\'s Pack'], count: 1, title: 'Dungeoneer\'s Pack OR Explorer\'s Pack', type: 'simple_select' }];
      this.spellcasting = false;
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
      this.proficiencies.selectFromList.skills = [{ list: ['Acrobatics', 'Athletics', 'Deception', 'Insight', 'Intimidation', 'Investigaion', 'Performance', 'Perception', 'Persuasion', 'Sleight of Hand', 'Stealth'], count: 4, title: 'Select 4 skills', type: 'simple_select' }];
      this.items.weapons = ['2 Daggers'];
      this.items.tools = ['Thieve\'s Tools'];
      this.items.armour = ['Light Armour'];
      this.items.selectFromList.weapons = [
         { list: ['Rapier', 'Shortsword'], count: 1, title: 'Rapier OR Shortsword', type: 'iterating_simple_select'}, 
         { list: ['Shortbow + 20 Arrows', 'Shortsword'], count: 1, title: 'Shortbow with 20 Arrows OR Shortsword', type: 'iterating_simple_select'}];
      this.items.selectFromList.equipment = [{list: ['Burglar\'s Pack', 'Dungeoneer\'s Pack', 'Explorer\'s Pack'], count: 1, title: 'Burglar\'s Pack OR Dungeoneer\'s Pack OR Explorer\'s Pack', type: 'simple_select' }];
      this.spellcasting = false;
   }
}

export class Sorcerer extends BaseClass {
   constructor(level) {
      super('sorcerer', level);
      this.hitDice = 6;
      this.asiLevels = [4,8,12,16,19]
      this.proficiencies.savingThrows = ['Constitution', 'Charisma'];
      this.proficiencies.weapons = ['Dagger', 'Dart', 'Sling', 'Quarterstaff', 'Light Crossbow'];
      this.proficiencies.selectFromList.skills = [{ list: ['Arcana', 'Deception', 'Insight', 'Intimidation', 'Persuasion', 'Religion'], count: 2, title: 'Select 2 skills', type: 'simple_select' }];
      this.items.weapons = ['2 Daggers'];
      this.items.selectFromList.weapons = [{list: ['Light Crossbow + 20 bolts', Simple_Weapons], count: 1, title: 'Light crossbow and 20 bolts OR Any simple weapon', type: 'group_select'}];
      this.items.selectFromList.equipment = [
         {list: ['Component Pouch', 'Arcane Focus'], count: 1, title: 'Component Pouch OR Arcane focus', type: 'iterating_simple_select' }, 
         {list: ['Dungeoneer\'s pack', 'Explorer\'s Pack'], count: 1, title: 'Dungeoneer\'s Pack OR Explorer\'s Pack', type: 'iterating_simple_select' }];
      this.spellcasting = true;
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
      this.proficiencies.selectFromList.skills = [{ list: ['Arcana', 'Deception', 'History', 'Intimidation', 'Investigation', 'Nature', 'Religion'], count: 2, title: 'Select 2 skills', type: 'simple_select' }];
      this.items.weapons = ['2 Daggers'];
      this.items.armour = ['Light Armour'];
      this.items.selectFromList.weapons = [
         {list: ['Light Crossbow + 20 bolts', Simple_Weapons], count: 1, title: 'Light crossbow and 20 bolts OR Any simple weapon', type: 'iterating_group_select'}, 
         {list: Simple_Weapons, count: 1, title: 'Any simple weapon', type: 'iterating_simple_select'}];
      this.items.selectFromList.equipment = [
         {list: ['Component Pouch', 'Arcane Focus'], count: 1, title: 'Component Pouch OR Arcane focus', type: 'iterating_simple_select' }, 
         {list: ['Dungeoneer\'s pack', 'Scholar\'s Pack'], count: 1, title: 'Dungeoneer\'s Pack OR Scholar\'s Pack', type: 'iterating_simple_select' }];
      this.spellcasting = true;
   }
}

export class Wizard extends BaseClass {
   constructor(level) {
      super('wizard', level);
      this.hitDice = 6;
      this.asiLevels = [4,8,12,16,19]
      this.proficiencies.savingThrows = ['Intelligence', 'Wisdom'];
      this.proficiencies.weapons = ['Dagger, Dart, Sling, Quarterstaff, Light Crossbow'];
      this.proficiencies.selectFromList.skills = [{ list: ['Arcana', 'History', 'Insight', 'Investigation', 'Medicine', 'Religion'], count: 2, title: 'Select 2 skills', type: 'simple_select' }];
      this.items.equipment = ['Spellbook'];
      this.items.selectFromList.weapons = [{ list: ['Quarterstaff', 'Rapier'], count: 1, title: 'Quarterstaff OR Rapier', type: 'simple_select'}];
      this.items.selectFromList.equipment = [
         {list: ['Component Pouch', 'Arcane Focus'], count: 1, title: 'Component Pouch OR Arcane focus', type: 'iterating_simple_select' }, 
         {list: ['Scholar\'s pack', 'Explorer\'s Pack'], count: 1, title: 'Scholar\'s Pack OR Explorer\'s Pack', type: 'iterating_simple_select' }];
      this.spellcasting = true;
   }
}