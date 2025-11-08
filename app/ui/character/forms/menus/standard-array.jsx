'use client';

import { useState } from 'react';
import {SelectButton} from '@/ui/elements/button';
import { HideAbilitiesDisplay } from '@/ui/elements/hide-display'
import { customStyles125 } from '@/ui/elements/select-theme'
import dynamic from 'next/dynamic';
const Select = dynamic(() => import('react-select'), { ssr: false });

const StandardArray = ({abilities, isEdit, labels, submit}) => {
   const options = [15,14,13,12,10,8].map((el, i) => ({ value: el, label: el}))
   const getInitialValue = () => abilities.map(ab => options.find(op => op.value === ab))
   const initSelect = ['str','dex','con','int','wis','cha']
   const [select, setSelect] = useState(isEdit ? getInitialValue() : initSelect);
   const buttonText = isEdit ? 'Update' : 'Select';
   const [display, setDisplay] = useState(true)

   const isDisabled = (option) => [...select].map(el => typeof el === 'object' ? el.value : el).some(el => el === option.value)

   const handleChange = (val, action) => {
      if (val) {
         const id = action.name
         setSelect(current => current.map((el, i) => i == id ? val : el))
      } else {
         const id = action.name
         setSelect(current => current.map((el, i) => i == id ? initSelect[i] : el))
      }
   }

   const handleSubmit = () => {
      let result = select.filter(el => typeof el == 'object').map(el => el.value)
      if (result.length === 6) {
         submit(result)
         setDisplay(false)
      }
   }

   const resetDisplay = () => {
      setSelect(initSelect)
      setDisplay(true)
   }
   
   return (
      <div className='flex flex-col gap-2'>
         { display ? 
         <><p>Select from Standard Array</p>
         <form className='flex flex-col items-start gap-3 p-2 border-2' action={handleSubmit}>
            <div className='flex flex-row flex-wrap gap-3'>
               { labels.map((el, i) => (
                  <div key={`standard-select-${i}`}>
                     <div>{el}</div>
                     <Select styles={customStyles125} placeholder={'---'} isClearable options={options} name={i} value={select[i]} onChange={handleChange} isOptionDisabled={(o) => isDisabled(o)} />
                  </div>
               ))}
            </div>
            <SelectButton value={buttonText} />
         </form></> 
         : <HideAbilitiesDisplay select={select} resetDisplay={resetDisplay} />}
      </div>
   )
   
}

export default StandardArray;