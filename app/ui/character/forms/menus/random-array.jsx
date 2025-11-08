'use client';

import { useState, useRef } from 'react';
import {SelectButton} from '@/ui/elements/button';
import { HideAbilitiesDisplay } from '@/ui/elements/hide-display'
import { customStyles125 } from '@/ui/elements/select-theme'
import {getRandomValue} from '@/lib/display-actions';
import dynamic from 'next/dynamic';
const Select = dynamic(() => import('react-select'), { ssr: false });

const RandomArray = ({labels, submit}) => {
   const [selectedIndex, setSelectedIndex] = useState([])
   const [select, setSelect] = useState(['str','dex','con','int','wis','cha']);
   const initSelect = ['str','dex','con','int','wis','cha']
   const [display, setDisplay] = useState(true)
   
   const randomValues = useRef(getRandomValue())
   const options = randomValues.current ? randomValues.current.map((el, i) => ({ value: el, label: el, index: i })) : []

   const handleChange = (val, action) => {
      if (val) {
         const id = action.name
         if (typeof select[id] === 'string') setSelectedIndex([...selectedIndex, val.index])
         else if (typeof select[id] === 'object'){
            setSelectedIndex((current) => current.map(el => el == select[id].index ? val.index : el))
         }
         setSelect(current => current.map((el, i) => i == id ? val : el))
      } else {
         const removedValue = action.removedValues[0]
         const id = action.name
         setSelectedIndex((current) => current.filter(el => el != removedValue.index))
         setSelect(current => current.map((el, i) => i == id ? initSelect[id] : el))
      }
   }

   const handleSubmit = () => {
      let result = select.filter(el => typeof el == 'object').map(el => el.value)
      if (result.length === 6) {
         submit(result)
         setDisplay(false)
      }
   }

   const isSelected = (option, selected) => selected.some(el => el.index === option.index)
   const isDisabled = (option) => selectedIndex.some(el => el === option.index)

   const resetDisplay = () => {
      setSelect(initSelect)
      setSelectedIndex([])
      setDisplay(true)
   }

   return (
      <div className='flex flex-col gap-2'>
         { display ? <><p>Select from Random Array</p>
         <form className='flex flex-col items-start gap-3 p-2 border-2' action={handleSubmit}>
            <div className='flex flex-row flex-wrap gap-3'> 
               { labels.map((el, i) => (
                  <div key={`standard-select-${i}`}>
                     <div>{el}</div>
                     <Select isSearchable={false} placeholder={'---'} styles={customStyles125} options={options} isClearable name={i} value={select[i]} onChange={handleChange} isOptionSelected={(o, s) => isSelected(o, s)} isOptionDisabled={(o, s) => isDisabled(o)} />
                  </div>
               ))}
            </div>
            <SelectButton value={'Select'} />
         </form></> 
         : <HideAbilitiesDisplay select={select} resetDisplay={resetDisplay} /> }
      </div>
   )
   
}

export default RandomArray