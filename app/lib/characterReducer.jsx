import { applyClass, changeClass, applySpecies } from './actions';
import Abilities from './base/abilities';
import Proficiencies from './base/proficiencies';
import HitPoints from './base/hit-points';
import ArmourClass from './base/armour-class';
import Features from './base/features';
import Items from './base/items';

const characterReducer = (state, action) => {
   switch (action.type) {
      case 'CREATE_CHARACTER':
         return {
            ...state, 
            name: action.payload.name, 
            level: action.payload.level, 
            abilities: new Abilities(), 
            proficiencies: new Proficiencies(),
            hit_points: new HitPoints(),
            armour_class: new ArmourClass(),
            features: new Features(),
            equipment: new Items(),
         };
      case 'UPDATE_LEVEL':
         let newProf = Math.ceil((action.payload) / 4) + 1;
         if (state.class) state.hit_points.calculateBaseHP(state.hit_dice, action.payload, state.abilities.modifiers[2])
         if (state.level > action.payload) state.features.removeByLevel(action.payload)
         return {...state, level: action.payload, proficiency_bonus: newProf};
      case 'UPDATE_STAT_BY_NAME':
         return {...state, [action.payload.name]: action.payload.value};
      case 'UPDATE_BY_PATH':
         const value = action.payload.value;
         let keys = action.payload.path.split('.');
         state[keys[0]].updateValue([keys[1], keys[2]], value)
         return {...state};
      case 'SET_CLASS':
         const {className, level} = action.payload;
         const setClass = applyClass(className, level, state)
         return {
            ...state, 
            class: className,
            hit_dice: setClass.hit_dice,
         };
      case 'CHANGE_CLASS':
         const updateClass = changeClass(action.payload, state)
         return {
            ...state,
            class: action.payload,
            hit_dice: updateClass.hit_dice,
         }
      case 'SET_SPECIES':
         const {species, subspecies} = action.payload;
         const updateSpecies = applySpecies(species, subspecies, state)
         return {
            ...state,
            species: subspecies ? subspecies : species,
            size: updateSpecies.size,
            speed: updateSpecies.speed
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
   features: {},
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