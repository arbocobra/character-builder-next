'use client';

import InitialForm from '@/select/forms/init-form';
import ClassForm from '@/select/forms/class-form';
import SpeciesForm from '@/select/forms/species-form';
import AbilitiesForm from '@/select/forms/abilities-form'
import useCharacter from '@/dash/character-context';

const CharacterSelect = () => {
   
   const { 
      character, 
      createCharacter,
      updateLevel,
      updateByName,
      updateByPath,
      setClass,
      changeClass,
      setSpecies,
      changeSpecies,
      updateAbilities
   } = useCharacter();
   
   return (
      <div className='items-start flex flex-col w-1/2 p-4 m-1 gap-4 items-stretch'>
         <InitialForm current={character} createCharacter={createCharacter} updateLevel={updateLevel} updateByName={updateByName} />
         <ClassForm current={character} setClass={setClass} updateByPath={updateByPath} changeClass={changeClass} />
         <SpeciesForm current={character} setSpecies={setSpecies} updateByPath={updateByPath} changeSpecies={changeSpecies} />
         <AbilitiesForm current={character} updateByPath={updateByPath} updateAbilities={updateAbilities} />
      </div>
   );
}

export default CharacterSelect;