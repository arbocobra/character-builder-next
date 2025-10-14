'use client';

import InitialForm from '@/select/forms/init-form';
import ClassForm from '@/app/ui/create/select/forms/classes/class-form';
import SpeciesForm from '@/select/forms/species-form';
import BackgroundForm from '@/select/forms/background-form';
import AbilitiesForm from '@/app/ui/create/select/forms/abilities/abilities-form'
import useCharacter from '@/dash/character-context';
import SelectContainer from '@/select/category-base'

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
      setBackground,
      changeBackground,
      updateAbilities,
      addToList
   } = useCharacter();

   let hasName = character.name ? true : false
   
   return (
      <div className='items-start flex flex-col w-1/2 p-4 m-1 gap-4 items-stretch'>
         <SelectContainer show={true} name='Primary'>
            <InitialForm current={character} createCharacter={createCharacter} updateLevel={updateLevel} updateByName={updateByName} />
         </SelectContainer>
         {hasName && 
            <SelectContainer show={false} name='Class'>
               <ClassForm current={character} setClass={setClass} updateByPath={updateByPath} changeClass={changeClass} addToList={addToList} />
            </SelectContainer>}
         {hasName && 
            <SelectContainer show={false} name='Species'>
               <SpeciesForm current={character} setSpecies={setSpecies} updateByPath={updateByPath} changeSpecies={changeSpecies} />
            </SelectContainer>}
         {hasName && 
            <SelectContainer show={false} name='Background'>
               <BackgroundForm current={character} setBackground={setBackground} changeBackground={changeBackground} updateByPath={updateByPath} addToList={addToList} />
            </SelectContainer>}
         {hasName && 
            <SelectContainer show={false} name='Abilities'>
               <AbilitiesForm current={character} updateByPath={updateByPath} updateAbilities={updateAbilities} />
            </SelectContainer>}
         {/* <ClassForm current={character} setClass={setClass} updateByPath={updateByPath} changeClass={changeClass} addToList={addToList} /> */}
         {/* <SpeciesForm current={character} setSpecies={setSpecies} updateByPath={updateByPath} changeSpecies={changeSpecies} /> */}
         {/* <AbilitiesForm current={character} updateByPath={updateByPath} updateAbilities={updateAbilities} /> */}
      </div>
   );
}

export default CharacterSelect;