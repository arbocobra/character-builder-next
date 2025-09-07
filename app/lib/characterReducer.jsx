'use client';
import { getClassObject, applyClass, updateProficiences, clearFromGrouped } from './actions';
import Abilities from './base/Abilities';
import { features } from './base/classes/class-features';
import Proficiencies from './base/Proficiencies';
import HitPoints from './base/hit-points';
import ArmourClass from './base/armour-class';
// import Features from './base/Features';
// import { species } from './init-data';

const characterReducer = (state, action) => {
   switch (action.type) {
      case 'CREATE_CHARACTER':
         // const res = createCharacterSupport()
         return {
            ...state, 
            name: action.payload.name, 
            level: action.payload.level, 
            abilities: new Abilities(), 
            proficiencies: new Proficiencies(),
            hit_points: new HitPoints(),
            armour_class: new ArmourClass()
         };
      case 'UPDATE_LEVEL':
         let newProf = Math.ceil((action.payload) / 4) + 1;
         if (state.class) state.hit_points.calculateBaseHP(state.hit_dice, action.payload, state.abilities.modifiers[2])
         return {...state, level: action.payload, proficiency_bonus: newProf};
      case 'UPDATE_STAT_BY_NAME':
         return {...state, [action.payload.name]: action.payload.value};
      case 'UPDATE_PROFICIENCY':
         const {path, value} = action.payload;
         const current = { ...state.proficiencies }
         const updated = updateProficiences(current, path, value)
         return {...state, proficiencies: updated};
      case 'SET_CLASS':
         const {className, level} = action.payload;
         const update = applyClass(className, level, state)
         return {
            ...state, 
            class: className,
            hit_dice: update.hit_dice,
            features: update.features,
            proficiencies: update.proficiencies,
         };
      case 'CLEAR_CLASS':
         state.proficiencies.clearCategory('class')
         state.abilities.clearCategory('class')
         state.hit_points.clearHitPoint('class')

         return {
            ...state,
            class: null,
            hit_dice: null,
            features: {...state.features, class: []},
            // proficiencies: updatedClass.proficiencies,
            // hit_points: updatedClass.hit_points,
            // abilities: updatedClass.abilities
         }
      default:
         return state;
   }
}

export const initialState = {
   name: null,
   level: 1,
   class: null,
   species: null,
   background: null,
   proficiency_bonus: 2,
   hit_dice: null,
   hit_points: {},
   proficiencies: {},
   abilities: {},
   speed: 30,
   initiative_bonus: 0,
   armour_class: {},
   features: {
      class: [],
      species: [],
      background: [],
      feats: [],
   },
   equipment: {},
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