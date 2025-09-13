import BaseSpecies from '@/lib/base/species/base-species';
import { Languages } from '@/lib/init-data';

export class Dwarf extends BaseSpecies {
   constructor(level, sub) {
      super('dwarf', level, sub);
      this.subspecies = sub;
      this.speed = 25;
      this.proficiencies.languages = ['common', 'dwarvish'];
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
      this.proficiencies.languages = ['common', 'elvish'];
      this.proficiencies.weapons = sub === 'dark elf' ? ['Rapier', 'Shortsword', 'Hand Crossbow'] : ['Longsword', 'Shortsword', 'Shortbow', 'Longbow'];
      this.proficiencies.skills = ['perception']
      this.proficiencies.selectFromList.languages = sub === 'high elf'? [{list: Languages, count: 1, title: 'Select Extra Language'}] : [];
   }
}