import Proficiencies, {BaseProficiencies, ProficienciesItem, ProficienciesList} from '@/lib/base/proficiencies.ts';
import Items, {BaseItems, ItemsList, Item} from '@/lib/base/items.ts';
import HitPoints, {HitPointsList, HitPointsItem} from '@/lib/base/hit-points.ts';
import Speed, {SpeedList, SpeedItem} from '@/lib/base/speed.ts';
import Abilities, {AbilitiesList} from '@/lib/base/abilities.ts';
import ArmourClass, {ArmourClassList, ArmourClassItem} from '@/lib/base/armour-class.ts';

export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
};

export type Character = {
  id:string,
   name:string;
   level:number;
   class:string;
   subclass?:string;
   species:string;
   background:string;
   proficiency_bonus:number;
   hit_dice?:number;
   hit_points?:undefined;
   proficiencies?:any;
   abilities?:undefined;
   speed?:undefined;
   initiative_bonus?:number;
   armour_class?:undefined;
   items:undefined;
   features?:undefined;
}

export type CharacterPreview = Pick<Character, 'id' | 'name' | 'class' | 'species' | 'background' | 'level'>

const defaultBaseProficiencies:BaseProficiencies = {
   armour: [],
   languages: [],
   savingThrows: [],
   skills: [],
   tools: [],
   weapons: [],
   selectFromList: {
      armour: null,
      languages: null,
      savingThrows: null,
      skills: null,
      tools: null,
      weapons: null
   },
}

export const defaultProficiencies:Proficiencies = {
   class: defaultBaseProficiencies,
   species: defaultBaseProficiencies,
   background: defaultBaseProficiencies,
   feats: {list: [], total: defaultBaseProficiencies} as ProficienciesList,
   total: {
      armour: [],
      languages: [],
      savingThrows: [],
      skills: [],
      tools: [],
      weapons: []
   }
}

const defaultBaseItems:BaseItems = {
  armour: [],
   weapons: [],
   equipment: [],
   tools: [],
   currency: 0,
   selectFromList: {
      armour: null,
      weapons: null,
      equipment: null,
      tools: null
   }
}

export const defaultItems:Items = {
  class: defaultBaseItems,
  background: defaultBaseItems,
  purchased: {list: [], total: defaultBaseItems} as ItemsList,
  total: {
    armour: [],
    weapons: [],
    equipment: [],
    tools: [],
    currency: 0,
  }
}

export const defaultAbilities:Abilities = {
   base: [10,10,10,10,10,10],
   class: {total: [0,0,0,0,0,0,], list: []} as AbilitiesList,
   species: [0,0,0,0,0,0],
   feats: {total: [0,0,0,0,0,0,], list: []} as AbilitiesList,
   total: [0,0,0,0,0,0],
   modifiers: [0,0,0,0,0,0]
}

export const defaultArmourClass:ArmourClass = {
   base: 10,
   dexMod: 0,
   modifierList: {list: [], total: 0} as ArmourClassList,
   total: 10
}

export const defaultSpeed:Speed = {
   base: 30,
   modifierList: {list: [], total: 0} as SpeedList,
   total: 30
}

export const defaultHP:HitPoints = {
   base: 0,
   modifierList: {list: [], total: 0} as HitPointsList,
   total: 0
}