'use client';
import { applyClass } from './actions';
import Abilities from './base/Abilities';
import Proficiencies from './base/Proficiencies';
import Features from './base/Features';
// import { species } from './init-data';

const characterReducer = (state, action) => {
   switch (action.type) {
      case 'CREATE_CHARACTER':
         const res = createCharacterSupport()
         return {...state, name: action.payload.name, level: action.payload.level, abilities: res.abilities, proficiencies: res.proficiencies, features: res.features};
      case 'UPDATE_LEVEL':
         let newProf = Math.ceil((action.payload) / 4) + 1;
         console.log('update features');
         return {...state, level: action.payload, proficiency_bonus: newProf};
      case 'UPDATE_STAT_BY_NAME':
         return {...state, [action.payload.name]: action.payload.value};
      case 'SET_CLASS':
         const {className, level} = action.payload;
         let classObject = applyClass(className, level);
         console.log(classObject);
         return {
            ...state, 
            class: className,
            hit_dice: `1d${classObject.HitDice}`,
            hit_points: state.abilities.modifiers
         };
//          const getPath = (obj, path) => {
//   let newPath = path.split('.')
//   let res = obj
//   for (let i = 0; i < newPath.length; i++) res = res[newPath[i]]
//   return res
// }

      default:
         return state;
   }
}

const createCharacterSupport = () => {
   const profObj = new Proficiencies;
   const proficiencies = profObj.getProficiencies();
   const abObj = new Abilities();
   const abilities = abObj.getAbilities()
   const featObj = new Features;
   const features = featObj.getFeatures()
   return {proficiencies, abilities, features}
}

export const initialState = {
   name: null,
   level: 1,
   class: null,
   species: null,
   background: null,
   proficiency_bonus: 2,
   hit_dice: null,
   hit_points: 0,
   proficiencies: {},
   abilities: {},
   features: {
      class: {},
      species: {},
      background: {},
      feats: {},
      total: {},
   },
   equipment: {
      class: {},
      species: {},
      background: {},
      total: {},
   },
};

export default characterReducer;

/*
inital state

object for abilities/proficiencies/inventory/features

set/update bio
set/update species
set/update background
set/update class
set/update level

set/update/clear stat by name
get stat by name

*/

class BaseProficiency {
   constructor() {}
   Armour = [];
   Weapons = [];
   Tools = [];
   SavingThrows = [];
   Skills = [];
   Languages = [];
}