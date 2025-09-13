'use client';

import { useState } from 'react';
import {SubmitButton} from '@/ui/elements/button';
import dynamic from 'next/dynamic';
const Select = dynamic(() => import('react-select'), { ssr: false });

const StandardArray = ({abilities, submit}) => {
   const [select, setSelect] = useState(['str','dex','con','int','wis','cha']);
   const options = [15,14,13,12,10,8].map((el, i) => ({ value: el, label: el, index: i }))

   const isDisabled = (val) => select.includes(val)

   const handleChange = (val, action) => {
      if (val) {
         const index = val.index
         console.log(val)
         options[index].selected = true
         const prev = [...select]
         prev[index] = val.value
         setSelect(prev)
      } else {
         const removedValue = action.removedValues[0]
         const index = removedValue.index
         console.log(removedValue)
         options[index].selected = false
         const prev = [...select]
         prev[index] = ''
         setSelect(prev)
      }
   }

   const handleSubmit = (e) => {
      e.preventDefault()
      if (select.every(el => typeof el == 'number')) submit(select)
   }
   
   return (
      <div className='flex flex-col gap-2'>
         <p>Select from Standard Array</p>
         <form className='flex flex-col items-start gap-3 p-2 border-2' onSubmit={handleSubmit}>
            <div className='flex flex-row flex-wrap gap-3'>
               { abilities.map((el, i) => (
                  <div key={`standard-select-${i}`}>
                     <div>{el}</div>
                     <Select options={options} isClearable name={i} defaultValue={''} onChange={handleChange} isOptionDisabled={(option) => isDisabled(option.value)} />
                  </div>
               ))}
            </div>
            <SubmitButton value={'Submit'} isDisabled={false} />
         </form>
      </div>
   )
   
}

export default StandardArray