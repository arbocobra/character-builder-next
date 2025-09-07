'use client';

import characterReducer, {initialState} from '@/lib/characterReducer';
import { createContext, useContext, useReducer } from 'react';

const CharacterContext = createContext(initialState);

export const CharacterProvider = ({ children }) => {
   const [state, dispatch] = useReducer(characterReducer, initialState);
   const createCharacter = (name, level) => {
      dispatch({type: 'CREATE_CHARACTER', payload: {name, level}});
   }
   const updateLevel = (level) => {
      dispatch({type: 'UPDATE_LEVEL', payload: level});
   }
   const updateByName = (name, value) => {
      dispatch({type: 'UPDATE_STAT_BY_NAME', payload: {name, value}});
   }
   const updateProficiences = (path, value) => {
      dispatch({type: 'UPDATE_PROFICIENCY', payload: {path, value}})
   }
   const setClass = (className) => {
      dispatch({type: 'SET_CLASS', payload: {className, level: state.level}});
   }
   const clearClass = () => {
      dispatch({type: 'CLEAR_CLASS'})
   }

   const value = {
      character: state,
      createCharacter,
      updateLevel,
      updateByName,
      updateProficiences,
      setClass,
      clearClass
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