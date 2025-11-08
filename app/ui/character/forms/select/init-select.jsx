'use client';

import { useState, useEffect } from 'react';
import {SelectButton} from '@/ui/elements/button';
import dynamic from 'next/dynamic';
import { customStyles75 } from '@/ui/elements/select-theme'
const Select = dynamic(() => import('react-select'), { ssr: false });

const InitSelect = ({current, isEdit, submit}) => {

   const buttonText = isEdit ? 'Update' : 'Select';

   const handleSubmit = (data) => {
      const name = data.get('name');
      const level = data.get('level')
      submit(name, parseInt(level))
   }

   useEffect(() => console.log(current), [current])

   return (
      <form className='flex flex-row flex-wrap gap-3 items-center justify-between' action={handleSubmit}>
         <NameInput init={isEdit ? current.name : ''} />
         <LevelSelect init={current.level} />
         <SelectButton value={buttonText} />
      </form>
   )
}

const NameInput = ({init}) => {

   const [name, setName] = useState(init)
   const handleChange = (e) => setName(e.target.value)

   const inputStyle = 'bg-white border text-gray-900 text-base rounded-xs focus:ring-blue-500 focus:border-blue-500 p-1.5 dark:bg-white dark:border-gray-300 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 font-normal'

   return (
      <label htmlFor='characterName' className='flex gap-3 flex-nowrap items-center text-base font-medium text-dark'>
         Name:
         { init ? 
            <input name='name' type='text' id='characterName' className={inputStyle} value={name} onChange={handleChange} required />
            : <input name='name' type='text' id='characterName' className={inputStyle} placeholder={'Character Name'} value={name} onChange={handleChange} required /> }
      </label>
   )
}

const LevelSelect = ({init}) => {

   const options = [...Array(20).keys()].map(l => ({label: l + 1, value: l + 1}))
   const [level, setLevel] = useState(() => options.find(x => x.value === init))

   return (
      <div className='flex gap-3 flex-nowrap items-center text-base text-dark'>
         <div className='font-medium'>Level:</div>
         <Select options={options} name='level' value={level} onChange={(v) => setLevel(v)} required />
      </div>
   )
}

export default InitSelect;