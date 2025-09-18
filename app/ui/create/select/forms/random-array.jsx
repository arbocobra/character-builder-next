'use client';

import { useState, useEffect, useRef } from 'react';
import {SubmitButton} from '@/ui/elements/button';
import dynamic from 'next/dynamic';
const Select = dynamic(() => import('react-select'), { ssr: false });

const RandomArray = ({abilities, submit}) => {
   const [select, setSelect] = useState(['str','dex','con','int','wis','cha']);
   const [selectedIndex, setSelectedIndex] = useState([])

   const getRandomValue = () => {
      let results = []
      for (let i = 0; i < 6; i++) {
         let values = []
         for (let j = 0; j <4; j++) values.push(Math.ceil(Math.random() * 6))
         values.sort()
         let sum = values[3] + values[2] + values[1]
         results.push(sum)
      }
      results.sort((a,b) => b - a)
      return results;
   }

   const randomValues = useRef(getRandomValue())
   const options = randomValues.current ? randomValues.current.map((el, i) => ({ value: el, label: el, index: i })) : []

   const isDisabled = (index) => selectedIndex.includes(index)

   const handleChange = (val, action) => {
      if (val) {
         const index = action.name
         const current = [...select]
         current[index] = val.value
         setSelectedIndex(prev => [...prev, val.index])
         setSelect(current)
      } else {
         const removedValue = action.removedValues[0]
         const index = action.name
         const current = [...select]
         current[index] = ''
         setSelectedIndex(prev => prev.filter(p => p !== removedValue.index))
         setSelect(current)
      }
   }

   const handleSubmit = (e) => {
      e.preventDefault()
      if (select.every(el => typeof el == 'number')) submit(select)
   }
   
   // useEffect(() => randomValues.current = getRandomValue(), [])

   return (
      <div className='flex flex-col gap-2'>
         <p>Select from Random Array</p>
         <form className='flex flex-col items-start gap-3 p-2 border-2' onSubmit={handleSubmit}>
            <div className='flex flex-row flex-wrap gap-3'>
               { abilities.map((el, i) => (
                  <div key={`standard-select-${i}`}>
                     <div>{el}</div>
                     <Select options={options} isClearable name={i} defaultValue={''} onChange={handleChange} isOptionDisabled={(option) => isDisabled(option.index)} />
                  </div>
               ))}
            </div>
            <SubmitButton value={'Submit'} isDisabled={false} />
         </form>
      </div>
   )
   
}

export default RandomArray