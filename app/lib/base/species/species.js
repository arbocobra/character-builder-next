import BaseSpecies from '@/lib/base/species/base-species';
import { Languages, Skills } from '@/lib/init-data';

export class Dwarf extends BaseSpecies {
   constructor(level, sub) {
      super('dwarf', level, sub);
      this.subspecies = sub;
      this.speed = 25;
      this.proficiencies.languages = ['Common', 'Dwarvish'];
      this.proficiencies.weapons = ['Battleaxe','Handaxe', 'Light Hammer', 'Warhammer'];
      this.abilityImprovement = sub === 'hill dwarf' ? [0,0,2,0,1,0] : [2,0,2,0,0,0];
      this.proficiencies.armour = sub === 'mountain dwarf' ? ['Light Armour', 'Medium Armour'] : [];
      this.proficiencies.selectFromList.tools = [{list: ['Smith\'s Tools', 'Brewer\'s Supplies', 'Mason\'s Tools'], count: 1, title: 'Select Tool Prficiency'}]
   }
}

export class Elf extends BaseSpecies {
   constructor(level, sub) {
      super('elf', level, sub);
      this.subspecies = sub;
      this.abilityImprovement = sub === 'high elf' ? [0,2,0,1,0,0] : sub === 'wood elf' ? [0,2,0,0,1,0] : [0,2,0,0,0,1];
      this.speed = sub === 'wood elf' ? 35 : 30;
      this.proficiencies.languages = ['Common', 'Elvish'];
      this.proficiencies.weapons = sub === 'dark elf' ? ['Rapier', 'Shortsword', 'Hand Crossbow'] : ['Longsword', 'Shortsword', 'Shortbow', 'Longbow'];
      this.proficiencies.skills = ['perception'];
      this.proficiencies.selectFromList.languages = sub === 'high elf'? [{list: Languages, count: 1, title: 'Select Extra Language'}] : null;
   }
}

export class Halfling extends BaseSpecies {
   constructor(level, sub) {
      super('halfling', level, sub);
      this.subspecies = sub;
      this.speed = 25;
      this.size = 'small';
      this.abilityImprovement = sub === 'lightfoot halfling' ? [0,2,0,0,0,1] : [0,2,1,0,0,0];
      this.proficiencies.languages = ['Common', 'Halfling'];
   }
}

export class Human extends BaseSpecies {
   constructor(level, sub = null) {
      super('human', level, sub);
      this.subspecies = sub;
      this.abilityImprovement = [1,1,1,1,1,1];
      this.proficiencies.languages = ['Common'];
      this.proficiencies.selectFromList.languages = [{list: Languages, count: 1, title: 'Select Extra Language'}];
   }
}

export class Dragonborn extends BaseSpecies {
   constructor(level, sub = null) {
      super('dragonborn', level, sub);
      this.subspecies = sub;
      this.abilityImprovement = [2,0,0,0,0,1];
      this.proficiencies.languages = ['Common', 'Draconic'];
   }
}

export class Gnome extends BaseSpecies {
   constructor(level, sub = null) {
      super('gnome', level, sub);
      this.subspecies = sub;
      this.speed = 25;
      this.size = 'small';
      this.abilityImprovement = sub === 'forest gnome' ? [0,1,0,2,0,0] : [0,0,1,2,0,0];
      this.proficiencies.languages = ['Common', 'Gnomish'];
   }
}

export class HalfElf extends BaseSpecies {
   constructor(level, sub = null) {
      super('half-elf', level, sub);
      this.subspecies = sub;
      this.abilityImprovement = [0,0,0,0,0,2];
      this.proficiencies.languages = ['Common', 'Elvish'];
      this.proficiencies.selectFromList.languages = [{list: Languages, count: 1, title: 'Select Extra Language'}];
      this.proficiencies.selectFromList.skills = [{list: Skills, count: 2, title: 'Select Two Skill Proficiencies'}];
   }
} // need to include select ability increase

export class HalfOrc extends BaseSpecies {
   constructor(level, sub = null) {
      super('half-orc', level, sub);
      this.subspecies = sub;
      this.abilityImprovement = [2,0,1,0,0,0];
      this.proficiencies.skills = ['intimidation'];
      this.proficiencies.languages = ['Common', 'Orcish'];
   }
}

export class Tiefling extends BaseSpecies {
   constructor(level, sub = null) {
      super('tiefling', level, sub);
      this.subspecies = sub;
      this.abilityImprovement = [0,0,0,1,0,2];
      this.proficiencies.languages = ['Common', 'Infernal'];
   }
}