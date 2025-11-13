'use client'

import { useState, useEffect, Suspense } from 'react';
import useCharacter from '@/dash/character-context';
import FormContainer from '@/ui/character/forms/form-container';
import ClassContainer from '@/ui/character/forms/select/class-select';
import SpeciesContainer from '@/ui/character/forms/select/species-select';
import BackgroundContainer from '@/ui/character/forms/select/background-select';
import AbilitiesContainer from '@/ui/character/forms/select/abilities-select'
import InitSelect from '@/ui/character/forms/select/init-select'
import Loading from './loading';

const GuestCreateCharacterForm = () => {
  
   const { character, createCharacter, updateLevel, updateByPath, setClass, changeClass, setSpecies, changeSpecies, setBackground, changeBackground, updateAbilities, resetState } = useCharacter();
   const [isLoading, setIsLoading] = useState(true)

   const initSelect = character.name ? true : false;

   const getInitialValue = (list, init) => {
      list.find((x) => x.value === init)
   }

   const initSubmit = (n, l) => {
      if (character.name) {
         if (character.name !== n || character.level !== l) updateLevel(n, l);
      }
      else createCharacter(n, l);
   }

   const classSubmit = (id, val) => {
      if (id === 'class') character.class ? changeClass(val.class, val.subclass || null) : setClass(val.class, val.subclass || null)
      else if (id === 'proficiencies') updateByPath(val.path, val.value);
      else if (id === 'items') updateByPath(val.path, val.value);
   }

   const speciesSubmit = (id, val) => {
      if (id === 'species') character.species ? changeSpecies(val.species, val.subspecies || null) : setSpecies(val.species, val.subspecies || null)
      else if (id === 'proficiencies') updateByPath(val.path, val.value);
   }

   const backgroundSubmit = (id, val) => {
      if (id === 'background') character.background ? changeBackground(val.background) : setBackground(val.background)
      else if (id === 'proficiencies') updateByPath(val.path, val.value);
      else if (id === 'items') updateByPath(val.path, val.value);
   }

   const abilititiesSubmit = (val) => updateAbilities(val)

   const resetOnLoad = () => {
      resetState();
      setIsLoading(false);
   }

   useEffect(() => {
      resetOnLoad();
   }, [])

   if (isLoading) return <Loading />
   else return (
      <div className='items-stretch flex flex-col w-1/2 p-4 m-1 gap-4'>
         <FormContainer name={'Default'} show={true}>
            <InitSelect current={character} isEdit={false} submit={initSubmit} />
         </FormContainer>
         { initSelect && <FormContainer name={'Class'} show={false}>
            <ClassContainer current={character} isEdit={false} getInitialValue={getInitialValue} submit={classSubmit} />
         </FormContainer> }
         { initSelect && <FormContainer name={'Species'} show={false}>
            <SpeciesContainer current={character} isEdit={false} getInitialValue={getInitialValue} submit={speciesSubmit} />
         </FormContainer> }
         { initSelect && <FormContainer name={'Background'} show={false}>
            <BackgroundContainer current={character} isEdit={false} getInitialValue={getInitialValue} submit={backgroundSubmit} />
         </FormContainer> }
         { initSelect && <FormContainer name={'Abilities'} show={true}>
            <AbilitiesContainer current={character} isEdit={false} submit={abilititiesSubmit} />
         </FormContainer> }
         <div className='italic'>* This character cannot be saved. If you want to save your character please <a className='underline' href='/signup'>create an account.</a></div>
      </div>
   )
}

export default GuestCreateCharacterForm;