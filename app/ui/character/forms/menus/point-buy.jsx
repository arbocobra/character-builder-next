'use client';

import { useState, useEffect } from 'react';
import {SelectButton} from '@/ui/elements/button';
import { HideAbilitiesDisplay } from '@/ui/elements/hide-display'
import { customStyles125 } from '@/ui/elements/select-theme'
import dynamic from 'next/dynamic';
const Select = dynamic(() => import('react-select'), { ssr: false });

const PointBuy = ({abilities, isEdit, labels, submit}) => {
   
   const [pointsAvailable, setPointsAvailable] = useState(27);
   const costValue = { 8: 0, 9: 1, 10: 2, 11: 3, 12: 4, 13: 5, 14: 7, 15: 9 };
   const initSelect = ['str','dex','con','int','wis','cha']
   const options = Object.keys(costValue).map((key, i) => ({
      value: Number.parseInt(key),
      cost: costValue[key],
      label: `${key} (${costValue[key]} pts.)`
   }))
   const getInitialValue = () => {
      let init = abilities.map(ab => options.find(op => op.value === ab));
      let sum = init.map(i => i.cost).reduce((a,b) => a + b)
      if (sum <= 27) {
         // setPointsAvailable(27 - sum)
         return init;
      } else return [];
   }
   const [select, setSelect] = useState(isEdit ? getInitialValue() : initSelect);
   const buttonText = isEdit ? 'Update' : 'Select';
   const [display, setDisplay] = useState(true)

   const isDisabled = (option, select) => {
      if (select.length) return option.cost > (pointsAvailable + select[0].cost)
      else return option.cost > pointsAvailable
   }

   const handleChange = (val, action) => {
      if (val) {
         const id = action.name
         if (typeof select[id] === 'string') setPointsAvailable(current => current - val.cost)
         else if (typeof select[id] === 'object'){
            setPointsAvailable(current => current + select[id].cost - val.cost)
         }
         setSelect(current => current.map((el, i) => i == id ? val : el))
      } else {
         const removedValue = action.removedValues[0]
         const id = action.name

         setPointsAvailable(current => current + removedValue.cost)
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

   const resetDisplay = () => {
      setSelect(initSelect)
      setDisplay(true)
      setPointsAvailable(27)
   }

   useEffect(() => {
      if (select.length) {
         let sum = select.map(i => i?.cost || 0).reduce((a,b) => a + b)
         setPointsAvailable(27 - sum)
      }
   }, [select])

   return (
      <div className='flex flex-col gap-2'>
         { display ? <><p>Select using Point Buy</p>
         <form className='flex flex-col items-start gap-3 p-2 border-2' onSubmit={handleSubmit}>
            <div className='flex flex-row flex-wrap gap-3'>
               { labels.map((el, i) => (
                  <div key={`standard-select-${i}`}>
                     <div>{el}</div>
                     <Select placeholder={'---'} styles={customStyles125} isSearchable={false} options={options} name={i} value={select[i]} onChange={handleChange} isOptionDisabled={(o,s) => isDisabled(o,s)} />
                  </div>
               ))}
            </div>
            <div>Points Available: {pointsAvailable}</div>
            <SelectButton value={buttonText} />
         </form></> 
         : <HideAbilitiesDisplay select={select} resetDisplay={resetDisplay} /> }
      </div>
   )
   
}

export default PointBuy

