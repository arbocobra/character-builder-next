'use client';

import { useState, useEffect } from 'react';
import {SubmitButton} from '@/ui/elements/button';

const InitialForm = ({current, createCharacter, updateLevel, updateByName}) => {

   const [name, setName] = useState('');
   const [level, setLevel] = useState(1);
   const [isDisabled, setIsDisabled] = useState(true);
   const [buttonText, setButtonText] = useState('Submit');

   const newCharacter = current.name ? false : true;

   const handleSubmit = (e) => {
      e.preventDefault();
      if (!newCharacter) {
         if (current.name !== name) updateByName('name', name);
         if (current.level !== level) updateLevel(level);
      }
      else {
         createCharacter(name, level);
      }
      setIsDisabled(true);
   }

   const handleChange = (cat, e) => {
      const value = e.target.value;
      if (cat === 'level') {
         const newLevel = parseInt(value);
         if (!newCharacter && current.Level !== newLevel) {
         }
         setLevel(newLevel);
      }
      if (cat === 'name') {
         if (!newCharacter && current.Name !== value) {
         }
         setName(value);
      }
   }

   useEffect(() => {
      if (isDisabled && name) {
         setIsDisabled(false);
         if (!newCharacter) setButtonText('Update');
         else setButtonText('Submit');
      }
   },[name, level]);

   useEffect(() => console.log(current), [current])

   return (
      <form className='flex flex-col gap-3 p-2 border-2' onSubmit={handleSubmit}>
         <input type='text' name='characterName' placeholder='Character Name' required value={name} onChange={(e) => handleChange('name', e)} />
         <select name='characterLevel' value={level} onChange={(e) => handleChange('level', e)} >
            {[...Array(20).keys()].map(level => (
               <option key={level + 1} value={level + 1}>{level + 1}</option>
            ))}
         </select>
         <SubmitButton value={buttonText} isDisabled={isDisabled} />
      </form>
   )
}

export default InitialForm;