'use client';
// import { useState, createContext, useContext } from 'react';
import CharacterSelect from '@/ui/create/character-select';
import CharacterDisplay from '@/ui/create/character-display';
import { useCharacter } from '@/app/dashboard/provider'

// const CharacterContext = createContext();

const Page = () => {

   const { currentCharacter, updateCharacter } = useCharacter();

   // const [character, setCharacter] = useState({});
   return  (
      <main>
         
         <div className='flex flex-row w-full h-full divide-x-2 divide-gray-300'>
            <CharacterSelect updateCharacter={updateCharacter} />
            <CharacterDisplay current={currentCharacter} />
         </div>
      </main>
   )
}
export default Page;