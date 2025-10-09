'use client';

import { useState } from 'react';
import {SubmitButton} from '@/ui/elements/button';
import { HideAbilitiesDisplay } from '@/ui/elements/hide-display'
import { customStyles125 } from '@/ui/elements/select-theme'
import dynamic from 'next/dynamic';
const Select = dynamic(() => import('react-select'), { ssr: false });

const StandardArray = ({abilities, submit}) => {
   const [select, setSelect] = useState(['str','dex','con','int','wis','cha']);
   const options = [15,14,13,12,10,8].map((el, i) => ({ value: el, label: el, index: i }))

   const isDisabled = (option) => [...select].map(el => typeof el === 'object' ? el.value : el).some(el => el === option.value)

   const handleChange = (val, action) => {
      if (val) {
         const id = action.name
         let updateSelect = select.map((el, i) => i == id ? val : el)
         setSelect(updateSelect)
      } else {
         const initSelect = ['str','dex','con','int','wis','cha']
         const id = action.name
         let updateSelect = select.map((el, i) => i == id ? initSelect[id] : el)
         setSelect(updateSelect)
      }
   }

   const handleSubmit = (e) => {
      e.preventDefault()
      let result = select.filter(el => typeof el == 'object').map(el => el.value)
      if (result.length === 6) submit(result)
   }
   
   return (
      <div className='flex flex-col gap-2'>
         <p>Select from Standard Array</p>
            <form className='flex flex-col items-start gap-3 p-2 border-2' onSubmit={handleSubmit}>
            <div className='flex flex-row flex-wrap gap-3'>
               { abilities.map((el, i) => (
                  <div key={`standard-select-${i}`}>
                     <div>{el}</div>
                     <Select placeholder={'---'} styles={customStyles125} isClearable options={options} name={i} defaultValue={''} onChange={handleChange} isOptionDisabled={(o) => isDisabled(o)} />
                  </div>
               ))}
            </div>
            <SubmitButton value={'Submit'} isDisabled={false} />
         </form>
      </div>
   )
   
}

export default StandardArray