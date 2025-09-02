'use client'
 
import { createContext, useContext, useState } from 'react'
 
export const CharacterContext = createContext({})
 
const CharacterProvider = ({ children }) => {
   const [currentCharacter, setCurrentCharacter] = useState(null)

   const updateCharacter = (obj) => {
      if (!currentCharacter) {
         setCurrentCharacter(obj);
         console.log('setting new character');
      }
      else {
         const current = {...currentCharacter}
         for (const [key, value] of Object.entries(obj)) {
            current[key] = value;
            console.log('updating', key, value);
            // setCurrentCharacter(prev => ({...prev, [key]: value}))
         }
         setCurrentCharacter(current);
         console.log(currentCharacter)
      }
      // if (Object.keys(currentCharacter).includes(category)) {}
      // setCurrentCharacter({...currentCharacter, [category]: value})
   }

   return <CharacterContext.Provider value={{currentCharacter, updateCharacter}}>{children}</CharacterContext.Provider>
}

export const useCharacter = () => useContext(CharacterContext);

export default CharacterProvider