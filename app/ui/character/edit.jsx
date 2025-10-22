'use client'

import { useEffect } from 'react';
import useCharacter from '@/dash/character-context';
import ClassSelect from '@/ui/character/forms/class-select';
import InitSelect from '@/ui/character/forms/init-select'
import dynamic from 'next/dynamic';
const Select = dynamic(() => import('react-select'), { ssr: false });

const EditCharacterForm = ({current}) => {

   const { 
      character, 
      createCharacter,
      setSavedCharacter,
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

   const tempSubmit = (valA, valB = null) => {
      console.log(valA, valB)
   }

   useEffect(() => {
      setSavedCharacter(current)
   }, [])

   return (
      <div>
         <InitSelect current={character} createCharacter={tempSubmit} updateLevel={tempSubmit} updateByName={tempSubmit} />
         <ClassSelect submit={tempSubmit} level={character.level} defaultClass={character.class} defaultSubclass={character.subclass} character={character} />
      </div>
   )
}

export default EditCharacterForm