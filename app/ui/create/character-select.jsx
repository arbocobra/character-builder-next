'use client';

import InitialForm from './init-form';
import ClassForm from './class-form';
import useCharacter from '@/app/dashboard/character-context';

const CharacterSelect = () => {

   const { 
      character, 
      createCharacter,
      updateLevel,
      updateByName,
      updateProficiences,
      setClass,
      clearClass
   } = useCharacter();
   
   return (
      <div className='items-start flex flex-col w-1/2 p-4 m-1 gap-4 items-stretch'>
         Select
         <InitialForm current={character} createCharacter={createCharacter} updateLevel={updateLevel} updateByName={updateByName} />
         <ClassForm current={character} setClass={setClass} updateByName={updateByName} updateProficiences={updateProficiences} clearClass={clearClass} />
      </div>
   );
}

export default CharacterSelect;