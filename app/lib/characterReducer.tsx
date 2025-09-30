import { getLevelObject, getClassObject, getPathObject, applySpecies, changeSpecies } from './actions';
// import Abilities from './base/abilities';
// import Proficiencies from './base/proficiencies';
// import HitPoints from './base/hit-points.js';
import { Proficiencies, BaseProficiencies, updateValue as updatePValue } from '@/lib/base/proficiencies.ts';
import { HitPoints, setBaseHP } from '@/lib/base/hit-points.ts'
import { ArmourClass, setDexMod } from '@/lib/base/armour-class.ts'
import { Abilities, updateValue, addToList } from '@/lib/base/abilities.ts';
// import ArmourClass from './base/armour-class';
import Features from './base/features';
import Items from './base/items';
// import BaseProficiencies from './base/base-proficiencies';

type characterState = {
   name?: string,
   level: number,
   class?: string,
   species?: string,
   background?: string,
   proficiency_bonus: number,
   hit_dice?: number,
   hit_points: HitPoints
   proficiencies: Proficiencies,
   abilities: Abilities,
   speed: number,
   initiative_bonus: 0,
   armour_class: ArmourClass,
   features: any,
   equipment: any,
}

type characterActions = 
  | { type: string, payload: any } 
  | { type: 'CREATE_CHARACTER', payload: { name: string, level: number } }
  | { type: 'UPDATE_LEVEL', payload:number }
  | { type: 'UPDATE_ABILITIES', payload:number[] }
  

const characterReducer = (state:characterState, action:characterActions) => {
   let updatedHP, updatedAC, updatedAbilities, modifiers
   switch (action.type) {
      case 'CREATE_CHARACTER':
         return {
            ...state, 
            name: action.payload.name, 
            level: action.payload.level, 
            features: new Features(),
            equipment: new Items(),
         };
      case 'UPDATE_LEVEL':
         let updateLevel = getLevelObject(action.payload, state.class ? true : false, state)
         if (state.class) { // to be cleared
            state.features.applyClassFeature(state.class, action.payload)
         } else updatedHP = 0;
         return {
            ...state, 
            level: action.payload, 
            proficiency_bonus: updateLevel.proficiency_bonus, 
            hit_points: state.class ? updateLevel.hit_points : state.hit_points
         }; 
      case 'UPDATE_STAT_BY_NAME':
         return {...state, [action.payload.name]: action.payload.value};
      case 'UPDATE_BY_PATH':
         const value = action.payload.value;
         let [category, group, prop] = action.payload.path.split('.');
         const updateByPath = getPathObject(value, category, state, group, prop)
         return { ...state, [category as keyof characterState]: updateByPath.update };
      case 'SET_CLASS':
         const {className, level} = action.payload;
         const setClass = getClassObject(className, level, state)
         return {
            ...state, 
            class: className,
            hit_dice: setClass.hit_dice,
            class_ASI_levels: setClass.class_ASI_levels,
            hit_points: setClass.hit_points,
            proficiencies: setClass.proficiencies
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
         const {species, subspecies} = action.payload;
         const setSpecies = applySpecies(species, subspecies, state)
         return {
            ...state,
            species: subspecies ? subspecies : species,
            size: setSpecies.size,
            speed: setSpecies.speed
         }
      case 'CHANGE_SPECIES':
         const newSpecies = action.payload.species;
         const newSubspecies = action.payload.subspecies;
         const updateSpecies = changeSpecies(newSpecies, newSubspecies, state)
         return {
            ...state,
            species: newSubspecies ? newSubspecies : newSpecies,
            size: updateSpecies.size,
            speed: updateSpecies.speed
         }
      case 'UPDATE_ABILITIES':
         updatedAbilities = updateValue(action.payload, state.abilities, 'base')
         modifiers = updatedAbilities.modifiers
         updatedHP = setBaseHP(state.hit_dice ?? 6, state.level, modifiers[2], state.hit_points)
         updatedAC = setDexMod(modifiers[1], state.armour_class)
         return { ...state, abilities: updatedAbilities, armour_class: updatedAC, hit_points: updatedHP }
      case 'ADD_TO_LIST':
         const {cat, val} = action.payload
         if (Array.isArray(cat)) {
            // console.log(state.abilities.total)
            // state.abilities.addToList(val, cat[1])
            updatedAbilities = addToList(val, state.abilities, cat[1])
         }
         return { ...state, abilities: updatedAbilities }
            // let mods = state.abilities.modifiers
            // state.hit_points.calculateBaseHP(state.hit_dice, state.level, mods[2])
            // state.armour_class.setDexMod(mods[1])
         // } else {
         //    //state[cat].addToList(val)
         //    (state as any)[cat].addToList(val)
         // }
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
   speed: 30,
   initiative_bonus: 0,
   armour_class: { base: 10, dexMod: 0, modifierList: { list: [], total: 0 }, total: 10 },
   features: undefined,
   equipment: undefined,
};

export default characterReducer;