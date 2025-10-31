'use client'

import { useState, useEffect, useRef } from 'react';
import useCharacter from '@/dash/character-context';
import FormContainer from '@/ui/character/forms/form-container';
import ClassContainer from '@/ui/character/forms/select/class-select';
import SpeciesContainer from '@/ui/character/forms/select/species-select';
import InitSelect from '@/ui/character/forms/select/init-select'
import { UpdateButton } from '@/ui/character/save';
import Loading from './loading';

const EditFormParent = ({current}) => {

   /*
   createCharacter, setSavedCharacter, updateLevel, updateByName, updateByPath, setClass, changeClass, setSpecies, changeSpecies, setBackground, changeBackground, updateAbilities, addToList
   */
   const { character, setSavedCharacter } = useCharacter();
   const [isLoading, setIsLoading] = useState(true)

   const loadSavedCharacter = () => {
      setSavedCharacter(current);
      setIsLoading(false)
   }

   useEffect(() => {
      loadSavedCharacter();
   }, [])

   if (isLoading) return <Loading />
   else return <EditCharacterForm character={character} />
}

const EditCharacterForm = ({character}) => {

   const { updateLevel, changeClass, updateByPath } = useCharacter()

   const getInitialValue = (list, init) => list.find((x) => x.value === init)

   const initSubmit = (n, l) => {
   if (character.name !== n || character.level !== l) updateLevel(n, l);
   }

   const classSubmit = (id, val) => {
      if (id === 'class') changeClass(val.class, val.subclass || null);
      else if (id === 'proficiencies') updateByPath(val.path, val.value);
   }

   const speciesSubmit = (id, val) => {
      if (id === 'species') changeSpecies(val.species, val.subspecies || null);
      else if (id === 'proficiencies') updateByPath(val.path, val.value);
   }

   return (
      <div className='items-stretch flex flex-col w-1/2 p-4 m-1 gap-4'>
         <FormContainer name={'Default'} show={false}>
            <InitSelect current={character} isEdit={true} submit={initSubmit} />
         </FormContainer>
         <FormContainer name={'Class'} show={true}>
            <ClassContainer current={character} isEdit={true} getInitialValue={getInitialValue} submit={classSubmit} />
         </FormContainer>
         <FormContainer name={'Species'} show={true}>
            <SpeciesContainer current={character} isEdit={true} getInitialValue={getInitialValue} submit={speciesSubmit} />
         </FormContainer>
         <UpdateButton current={character} />
      </div>
   )
}

export default EditFormParent;