import { getSavedCharacterObject, getLevelObject, getClassObject, getPathObject, getAbilitiesUpdateObject, getAddToListObject, getSpeciesObject, getBackgroundObject } from './actions';
import Proficiencies from '@/lib/base/proficiencies.ts';
import HitPoints from '@/lib/base/hit-points.ts'
import ArmourClass from '@/lib/base/armour-class.ts'
import Abilities from '@/lib/base/abilities.ts';
import Features from '@/lib/base/features.ts';
import Items from '@/lib/base/items.ts';
import Speed from '@/lib/base/speed.ts'

type characterState = {
   name?:string,
   level:number,
   class?:string,
   subclass?:string,
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
   features: Features,
   items: Items,
   id:string | undefined,
   user_id:string | undefined
}

type characterActions = 
  | { type: string, payload: any } 
  | { type: 'CREATE_CHARACTER', payload: { name: string, level: number } }
  | { type: 'UPDATE_LEVEL', payload:number }
  | { type: 'UPDATE_ABILITIES', payload:number[] }
  

const characterReducer = (state:characterState, action:characterActions) => {
   // let updatedHP, updatedAC, updatedAbilities, modifiers
   let className, subName;
   switch (action.type) {
      case 'CREATE_CHARACTER':
         let createLevel = getLevelObject(action.payload, false, state)
         return {
            ...state, 
            name: action.payload.name, 
            level: action.payload.level, 
            proficiency_bonus: createLevel.proficiencyBonus, 
            // features: new Features(),
         };
      case 'SET_SAVED_CHARACTER':
         let updatedState = getSavedCharacterObject(action.payload, state)
         // console.log(updatedState)
         const mergedState = {...state, ...updatedState}
         return mergedState
      case 'UPDATE_LEVEL':
         let updateLevel = getLevelObject(action.payload, state.class ? true : false, state)
         return {
            ...state, 
            level: updateLevel.level, 
            name: updateLevel.name,
            subclass: updateLevel.subclass,
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
         className = action.payload.className;
         subName = action.payload.subName;
         const setClass = getClassObject(className, state)
         return {
            ...state, 
            class: className,
            subclass: subName,
            hit_dice: setClass.hitDice,
            class_ASI_levels: setClass.class_ASI_levels,
            hit_points: setClass.hitPoints,
            proficiencies: setClass.proficiencies,
            items: setClass.items,
            features: setClass.features
         };
      case 'CHANGE_CLASS':
         // probably need new function when class applying/removing features
         className = action.payload.className;
         subName = action.payload.subName;
         const changeClass = getClassObject(className, state)
         return {
            ...state, 
            class: className,
            subclass: subName,
            hit_dice: changeClass.hitDice,
            class_ASI_levels: changeClass.class_ASI_levels,
            hit_points: changeClass.hitPoints,
            proficiencies: changeClass.proficiencies,
            items: changeClass.items,
            features: changeClass.features
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
            features: changeSpecies.features
         }
      case 'SET_BACKGROUND':
         const setBackground = getBackgroundObject(action.payload, state)
         return {
            ...state,
            background: action.payload,
            proficiencies: setBackground.proficiencies,
            items: setBackground.items,
            features: setBackground.features
         }
      case 'CHANGE_BACKGROUND':
         const changeBackground = getBackgroundObject(action.payload, state)
         return {
            ...state,
            background: action.payload,
            proficiencies: changeBackground.proficiencies,
            items: changeBackground.items,
            features: changeBackground.features
         }
      case 'UPDATE_ABILITIES':
         const updateAbilities = getAbilitiesUpdateObject(action.payload, state)
         return {
             ...state, 
             abilities: updateAbilities.abilities as Abilities, 
             armour_class: updateAbilities.armour_class as ArmourClass, 
             hit_points: updateAbilities.hit_points as HitPoints, 
             initiative_bonus: updateAbilities.initiative_bonus,
         }
      case 'ADD_TO_LIST':
         const addToList = getAddToListObject(action.payload, state)
         return addToList
            ? { ...state, abilities: addToList.abilities, armour_class: addToList.armour_class, hit_points: addToList.hit_points }
            : state;
      case 'RESET_STATE':
         return initialState;
      default:
         return state;
   }
}

export const initialState: characterState = {
   name: undefined,
   level: 1,
   class: undefined,
   subclass: undefined,
   species: undefined,
   background: undefined,
   proficiency_bonus: 2,
   hit_dice: undefined,
   hit_points: { base: 0, modifierList: { list: [], total: 0 }, total: 0 },
   proficiencies: {
      class: {
         armour: [], weapons:[], tools:[], savingThrows:[], skills:[], languages:[], selectFromList: undefined
      }, 
      species: {
         armour: [], weapons:[], tools:[], savingThrows:[], skills:[], languages:[], selectFromList: undefined
      }, 
      background: {
         armour: [], weapons:[], tools:[], savingThrows:[], skills:[], languages:[], selectFromList: undefined
      },
      feats: { 
         list: [], total: { 
            armour: [], weapons:[], tools:[], savingThrows:[], skills:[], languages:[], selectFromList: undefined
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
         armour: [], weapons: [], equipment: [], tools: [],  currency: 0, selectFromList: undefined
      }, 
      background: {
         armour: [], weapons: [], equipment: [], tools: [],  currency: 0, selectFromList: undefined
      },
      purchased: { 
         list: [], total: { 
            armour: [], weapons: [], equipment: [], tools: [],  currency: 0, selectFromList: undefined
         }
      }, 
      total: { armour: [], weapons: [], equipment: [], tools: [],  currency: 0 }
   },
   id: undefined,
   user_id: undefined,
};

export default characterReducer;