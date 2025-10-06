import { getLevelObject, getClassObject, getPathObject, getAbilitiesUpdateObject, getAddToListObject, getSpeciesObject } from './actions';
import Proficiencies from '@/lib/base/proficiencies.ts';
import HitPoints from '@/lib/base/hit-points.ts'
import ArmourClass from '@/lib/base/armour-class.ts'
import Abilities from '@/lib/base/abilities.ts';
import Features from './base/features';
// import Items from './base/items';
import Items from '@/lib/base/items.ts';
import Speed from '@/lib/base/speed.ts'

type characterState = {
   name?:string,
   level:number,
   class?:string,
   species?:string,
   background?:string,
   proficiency_bonus:number,
   hit_dice?:number,
   hit_points:HitPoints
   proficiencies:Proficiencies,
   abilities:Abilities,
   speed:Speed,
   initiative_bonus: 0,
   armour_class: ArmourClass,
   features: any,
   items: Items,
}

type characterActions = 
  | { type: string, payload: any } 
  | { type: 'CREATE_CHARACTER', payload: { name: string, level: number } }
  | { type: 'UPDATE_LEVEL', payload:number }
  | { type: 'UPDATE_ABILITIES', payload:number[] }
  

const characterReducer = (state:characterState, action:characterActions) => {
   // let updatedHP, updatedAC, updatedAbilities, modifiers
   switch (action.type) {
      case 'CREATE_CHARACTER':
         return {
            ...state, 
            name: action.payload.name, 
            level: action.payload.level, 
            // features: new Features(),
         };
      case 'UPDATE_LEVEL':
         let updateLevel = getLevelObject(action.payload, state.class ? true : false, state)
         return {
            ...state, 
            level: action.payload, 
            proficiency_bonus: updateLevel.proficiencyBonus, 
            hit_points: updateLevel.hitPoints,
            features: updateLevel.features
         }; 
      case 'UPDATE_STAT_BY_NAME':
         return {...state, [action.payload.name]: action.payload.value};
      case 'UPDATE_BY_PATH':
         const updateByPath = getPathObject(action.payload, state)
         return { ...state, [updateByPath.name as keyof characterState]: updateByPath.update };
      case 'SET_CLASS':
         const {className, level} = action.payload;
         const setClass = getClassObject(className, level, state)
         return {
            ...state, 
            class: className,
            hit_dice: setClass.hit_dice,
            class_ASI_levels: setClass.class_ASI_levels,
            hit_points: setClass.hit_points,
            proficiencies: setClass.proficiencies,
            items: setClass.items,
            features: setClass.features
         };
      case 'CHANGE_CLASS':
         // probably need new function when class applying/removing features
         const changeClass = getClassObject(action.payload, state.level, state)
         return {
            ...state, 
            class: action.payload,
            hit_dice: changeClass.hit_dice,
            class_ASI_levels: changeClass.class_ASI_levels,
            hit_points: changeClass.hit_points,
            proficiencies: changeClass.proficiencies
         }
      case 'SET_SPECIES':
         const setSpecies = getSpeciesObject(action.payload, state)
         return {
            ...state,
            species: setSpecies.species,
            size: setSpecies.size,
            speed: setSpecies.speed,
            proficiencies: setSpecies.proficiencies,
            abilities: setSpecies.abilities,
            features: setSpecies.features
         }
      case 'CHANGE_SPECIES':
         const changeSpecies = getSpeciesObject(action.payload, state)
         return {
            ...state,
            species: changeSpecies.species,
            size: changeSpecies.size,
            speed: changeSpecies.speed,
            proficiencies: changeSpecies.proficiencies,
            abilities: changeSpecies.abilities,
            features: {...state.features, species: changeSpecies.features} // still to correct
         }
      case 'UPDATE_ABILITIES':
         const updateAbilities = getAbilitiesUpdateObject(action.payload, state)
         return {
             ...state, 
             abilities: updateAbilities.abilities as Abilities, 
             armour_class: updateAbilities.armour_class as ArmourClass, 
             hit_points: updateAbilities.hit_points as HitPoints 
            }
      case 'ADD_TO_LIST':
         const addToList = getAddToListObject(action.payload, state)
         return addToList
            ? { ...state, abilities: addToList.abilities, armour_class: addToList.armour_class, hit_points: addToList.hit_points }
            : state;
      default:
         return state;
   }
}

export const initialState: characterState = {
   name: undefined,
   level: 1,
   class: undefined,
   species: undefined,
   background: undefined,
   proficiency_bonus: 2,
   hit_dice: undefined,
   hit_points: { base: 0, modifierList: { list: [], total: 0 }, total: 0 },
   proficiencies: {
      class: {
         armour: [], weapons:[], tools:[], savingThrows:[], skills:[], languages:[], 
         selectFromList: { 
            armour: [], weapons:[], tools:[], savingThrows:[], skills:[], languages:[]
         }
      }, 
      species: {
         armour: [], weapons:[], tools:[], savingThrows:[], skills:[], languages:[], 
         selectFromList: {
            armour: [], weapons:[], tools:[], savingThrows:[], skills:[], languages:[]
         }
      }, 
      background: {
         armour: [], weapons:[], tools:[], savingThrows:[], skills:[], languages:[], 
         selectFromList: {
            armour: [], weapons:[], tools:[], savingThrows:[], skills:[], languages:[]
         }
      },
      feats: { 
         list: [], total: { 
            armour: [], weapons:[], tools:[], savingThrows:[], skills:[], languages:[], selectFromList: {
               armour: [], weapons:[], tools:[], savingThrows:[], skills:[], languages:[]
            } 
         } 
      }, 
      total: {armour: [], weapons:[], tools:[], savingThrows:[], skills:[], languages:[] }
   },
   abilities: { 
      base: [10,10,10,10,10,10], 
      species: [0,0,0,0,0,0], 
      class: { list: [], total: [0,0,0,0,0,0] }, 
      feats: { list: [], total: [0,0,0,0,0,0] }, 
      total: [10,10,10,10,10,10],
      modifiers: [0,0,0,0,0,0] 
   },
   speed: { base: 30, modifierList: { list: [], total: 0 }, total: 30 },
   initiative_bonus: 0,
   armour_class: { base: 10, dexMod: 0, modifierList: { list: [], total: 0 }, total: 10 },
   features: { class: [], species:[], background: [], feats:[] },
   items: {
      class: {
         armour: [], weapons: [], equipment: [], tools: [],  currency: 0, selectFromList: { 
            armour: [], weapons: [], equipment: [], tools: []
         }
      }, 
      background: {
         armour: [], weapons: [], equipment: [], tools: [],  currency: 0, selectFromList: { 
            armour: [], weapons: [], equipment: [], tools: []
         }
      },
      purchased: { 
         list: [], total: { 
            armour: [], weapons: [], equipment: [], tools: [],  currency: 0, selectFromList: { 
               armour: [], weapons: [], equipment: [], tools: []
            } 
         }
      }, 
      total: { armour: [], weapons: [], equipment: [], tools: [],  currency: 0 }
   },
};

export default characterReducer;