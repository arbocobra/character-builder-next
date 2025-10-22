'use client';

import characterReducer, {initialState} from '@/lib/characterReducer';
import { createContext, useContext, useReducer } from 'react';

const CharacterContext = createContext(initialState);

export const CharacterProvider = ({ children }) => {
   const [state, dispatch] = useReducer(characterReducer, initialState);
   const createCharacter = (name, level) => {
      dispatch({type: 'CREATE_CHARACTER', payload: {name, level}});
   }
   const setSavedCharacter = (char) => {
      dispatch({type: 'SET_SAVED_CHARACTER', payload: char});
   }
   const updateLevel = (level) => {
      dispatch({type: 'UPDATE_LEVEL', payload: level});
   }
   const updateByName = (name, value) => {
      dispatch({type: 'UPDATE_STAT_BY_NAME', payload: {name, value}});
   }
   const updateByPath = (path, value) => {
      dispatch({type: 'UPDATE_BY_PATH', payload: {path, value}})
   }
   const setClass = (className, subName) => {
      dispatch({type: 'SET_CLASS', payload: {className, subName}});
   }
   const changeClass = (className, subName) => {
      dispatch({type: 'CHANGE_CLASS', payload: {className, subName}})
   }
   const setSpecies = (species, subspecies = null) => {
      dispatch({type: 'SET_SPECIES', payload: {species, subspecies}})
   }
   const changeSpecies = (species, subspecies = null) => {
      dispatch({type: 'CHANGE_SPECIES', payload: {species, subspecies}})
   }
   const setBackground = (background) => {
      dispatch({type: 'SET_BACKGROUND', payload: background})
   }
   const changeBackground = (background) => {
      dispatch({type: 'CHANGE_BACKGROUND', payload: background})
   }
   const updateAbilities = (abilities) => {
      dispatch({type: 'UPDATE_ABILITIES', payload: abilities})
   }
   const addToList = (cat, val) => {
      dispatch({type: 'ADD_TO_LIST', payload: {cat, val}})
   }

   const value = {
      character: state,
      createCharacter,
      setSavedCharacter,
      updateLevel,
      updateByName,
      updateByPath,
      setClass,
      changeClass,
      setSpecies,
      changeSpecies,
      setBackground,
      changeBackground,
      updateAbilities,
      addToList
   };

   return <CharacterContext.Provider value={value}>{children}</CharacterContext.Provider>;
}

const useCharacter = () => {
   const context = useContext(CharacterContext);
   if (context === undefined) {
      throw new Error('useCharacter must be used within a CharacterProvider');
   }
   return context;
}

export default useCharacter;