'use client';

import { useState } from 'react';
import {SubmitButton} from '@/ui/elements/button';
import { customStyles125 } from '@/ui/elements/select-theme'
import dynamic from 'next/dynamic';
const Select = dynamic(() => import('react-select'), { ssr: false });

const PointBuy = ({abilities, submit}) => {
   const [select, setSelect] = useState(['str','dex','con','int','wis','cha']);
   const [pointsAvailable, setPointsAvailable] = useState(27);
   const costValue = { 8: 0, 9: 1, 10: 2, 11: 3, 12: 4, 13: 5, 14: 7, 15: 9 };

   const options = Object.keys(costValue).map((key, i) => ({
      value: Number.parseInt(key),
      cost: costValue[key],
      label: `${key} (${costValue[key]} pts.)`
   }))

   const isDisabled = (option, select) => {
      if (select.length) return option.cost > (pointsAvailable + select[0].cost)
      else return option.cost > pointsAvailable
   }

   const handleChange = (val, action) => {
      if (val) {
         const id = action.name
         if (typeof select[id] === 'string') setPointsAvailable(current => current - val.cost)
         else if (typeof select[id] === 'object'){
            let updatePoints = pointsAvailable + select[id].cost - val.cost
            setPointsAvailable(updatePoints)
         }
         let updateSelect = select.map((el, i) => i == id ? val : el)
         setSelect(updateSelect)
      } else {
         const initSelect = ['str','dex','con','int','wis','cha']
         const removedValue = action.removedValues[0]
         const id = action.name

         setPointsAvailable(current => current + removedValue.cost)
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
         <p>Select using Point Buy</p>
         <form className='flex flex-col items-start gap-3 p-2 border-2' onSubmit={handleSubmit}>
            <div className='flex flex-row flex-wrap gap-3'>
               { abilities.map((el, i) => (
                  <div key={`standard-select-${i}`}>
                     <div>{el}</div>
                     <Select placeholder={'---'} styles={customStyles125} isSearchable={false} options={options} name={i} defaultValue={''} onChange={handleChange} isOptionDisabled={(o,s) => isDisabled(o,s)} />
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