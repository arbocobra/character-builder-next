'use client';

import { useState, useEffect } from 'react';
// import Select from 'react-select'
import Button from '@/ui/elements/button';
import { classes } from '@/lib/init-data';
import dynamic from "next/dynamic";
const Select = dynamic(() => import('react-select'), { ssr: false });

const ClassForm = ({current, setClass, updateByName}) => {

   const [className, setClassName] = useState('');
   const [isDisabled, setIsDisabled] = useState(false);
   const [buttonText, setButtonText] = useState('Select');

   const options = classes.map(el => ({ value: el.toLowerCase(), label: el }));

   const handleSubmit = (e) => {
      e.preventDefault();
      if (current.name !== className) {}
      setClass(className);
      // if (!newCharacter) {
      //    if (current.name !== name) updateByName('name', name);
      //    if (current.level !== level) updateLevel(level);
      // }
      // else {
      //    createCharacter(name, level);
      // }
      // setIsDisabled(true);
   }

   const handleChange = (val) => {
      setClassName(val.value);
      // const value = e.target.value;
      // if (cat === 'class') setClassName(value);

      // if (cat === 'level') {
      //    const newLevel = parseInt(value);
      //    if (!newCharacter && current.Level !== newLevel) {
      //    }
      //    setLevel(newLevel);
      // }
      // if (cat === 'name') {
      //    if (!newCharacter && current.Name !== value) {
      //    }
      //    setName(value);
      // }
   }

   useEffect(() => {
      console.log(className);
   },[className]);

   return (
      <form className='flex flex-row gap-3 p-2 border-2' onSubmit={handleSubmit}>
         <Select options={options} id='select-class' defaultValue={className} onChange={handleChange}/>
         <Button value={buttonText} isDisabled={isDisabled} />
      </form>
   )
}

export default ClassForm;