'use client';

import InitialForm from '@/select/forms/init-form';
import ClassForm from '@/select/forms/class-form';
import useCharacter from '@/dash/character-context';

const CharacterSelect = () => {
   
   const { 
      character, 
      createCharacter,
      updateLevel,
      updateByName,
      updateByPath,
      setClass,
      clearClass
   } = useCharacter();
   
   return (
      <div className='items-start flex flex-col w-1/2 p-4 m-1 gap-4 items-stretch'>
         Select
         <InitialForm current={character} createCharacter={createCharacter} updateLevel={updateLevel} updateByName={updateByName} />
         <ClassForm current={character} setClass={setClass} updateByPath={updateByPath} clearClass={clearClass} />
      </div>
   );
}

export default CharacterSelect;