// 'use client'
 
// import { createContext, useContext, useState, useEffect } from 'react'
// import { CreateCharacter } from '@/lib/actions';
 
// export const CharacterContext = createContext({})
 
// const CharacterProvider = ({ children }) => {
//    const [currentCharacter, setCurrentCharacter] = useState(null)

//    useEffect(() => {
//       if (currentCharacter) console.log('Current character updated:', currentCharacter);
//    }, [currentCharacter]);

//    const updateCharacter = (obj) => {
//       if (!currentCharacter) {
//          const char = CreateCharacter(obj.name, obj.level); // Initialize character if not present
//          setCurrentCharacter(char);
//          console.log('setting new character');
//       }
//       else {
//          const current = {...currentCharacter}
//          for (const [key, value] of Object.entries(obj)) {
//             console.log(key, current[key], value)
//             if (current[key] !== value) {
//                current[key] = value;
//                console.log('updating', key, value);
//             }
//          }
//          setCurrentCharacter(current);
//       }
//    }

//    return <CharacterContext.Provider value={{currentCharacter, updateCharacter}}>{children}</CharacterContext.Provider>
// }

// export const useCharacter = () => useContext(CharacterContext);

// export default CharacterProvider