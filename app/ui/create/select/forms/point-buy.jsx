'use client';

import { useState, useEffect, useRef } from 'react';
import {SubmitButton} from '@/ui/elements/button';
import dynamic from 'next/dynamic';
const Select = dynamic(() => import('react-select'), { ssr: false });

const PointBuy = ({abilities, submit}) => {
   const [select, setSelect] = useState(['str','dex','con','int','wis','cha']);
   const [pointsAvailable, setPointsAvailable] = useState(27);
   const costValue = { 8: 0, 9: 1, 10: 2, 11: 3, 12: 4, 13: 5, 14: 7, 15: 9 };

   const options = Object.keys(costValue).map((key, i) => ({
      value: Number.parseInt(key),
      cost: costValue[key],
      label: `${key} | ${costValue[key]} pts`
   }))

   const isDisabled = (cost) => cost > pointsAvailable

   const handleChange = (val, action) => {
      console.log(val, action)
      if (val) {
         const cost = val.cost
         const prev = [...select]
         const index = action.name;
         prev[index] = val.value
         setPointsAvailable(prev => prev - cost)
         setSelect(prev)
      } else {
         const removedValue = action.removedValues[0]
         const index = action.name;
         const cost = removedValue.cost
         const prev = [...select]
         prev[index] = ''
         setPointsAvailable(val => val + cost)
         setSelect(prev)
      }
   }

   const handleSubmit = (e) => {
      e.preventDefault()
      if (select.every(el => typeof el == 'number')) submit(select)
   }
   
   // useEffect(() => randomValues.current = getRandomValue(), [])

   return (
      <div className='flex flex-col gap-2'>
         <p>Select using Point Buy</p>
         <form className='flex flex-col items-start gap-3 p-2 border-2' onSubmit={handleSubmit}>
            <div className='flex flex-row flex-wrap gap-3'>
               { abilities.map((el, i) => (
                  <div key={`standard-select-${i}`}>
                     <div>{el}</div>
                     <Select classNames={{option: () => 'font-size-sm'}} options={options} isClearable name={i} defaultValue={''} onChange={handleChange} isOptionDisabled={(option) => isDisabled(option.cost)} />
                  </div>
               ))}
            </div>
            <div>Points Available: {pointsAvailable}</div>
            <SubmitButton value={'Submit'} isDisabled={false} />
         </form>
      </div>
   )
   
}

export default PointBuy