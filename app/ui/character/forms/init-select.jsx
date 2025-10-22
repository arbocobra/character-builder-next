'use client';

import { useState, useEffect } from 'react';
import {SubmitButton} from '@/ui/elements/button';
import dynamic from 'next/dynamic';
import { customStyles75 } from '@/ui/elements/select-theme'
const Select = dynamic(() => import('react-select'), { ssr: false });

const InitSelect = ({current, createCharacter, updateLevel, updateByName}) => {

   const [name, setName] = useState('');
   const [level, setLevel] = useState(1);
   const [isDisabled, setIsDisabled] = useState(true);
   const [buttonText, setButtonText] = useState('Submit');

   const newCharacter = current.name ? false : true;
   const options = [...Array(20).keys()].map(l => ({label: l + 1, value: l + 1}))

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

   const handleLevelChange = (val) => {
         setLevel(val.value);
   }

   const handleNameChange = (e) => {
      setName(e.target.value);
   }

   useEffect(() => {
      if (isDisabled && name) {
         setIsDisabled(false);
         if (!newCharacter) setButtonText('Update');
         else setButtonText('Submit');
      }
   },[name, level]);

   useEffect(() => console.log(current), [current])

   const inputStyle = 'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'

   return (
      <form className='flex flex-row flex-wrap gap-3 items-center justify-between' onSubmit={handleSubmit}>
         <label htmlFor='characterName' className='flex gap-3 items-center text-base font-medium text-gray-900 dark:text-white'>
            Name:
            <input type='text' id='characterName' className={inputStyle} placeholder='Character Name' required value={name} onChange={handleNameChange} />
         </label>
         <div className='text-base font-medium text-gray-900 dark:text-white'>Level:</div>
         <Select placeholder={1} styles={customStyles75} options={options} name='level' defaultValue={1} onChange={handleLevelChange} />
         <SubmitButton value={buttonText} isDisabled={isDisabled} />
      </form>
   )
}

export default InitSelect;