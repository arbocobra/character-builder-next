'use client';

import { useState } from 'react';
import {SubmitButton, OptionButtons} from '@/ui/elements/button';
import HideDisplay from '@/ui/elements/hide-display';
import dynamic from 'next/dynamic';
const Select = dynamic(() => import('react-select'), { ssr: false });

const ASISelect = ({asiSelect, level, submit}) => {
   
   const abilities = ['Strength', 'Dexterity', 'Constitution', 'Intelligence', 'Wisdom', 'Charisma']
   const options = abilities.map((el,i) => ({value: i, label: el}))

   return (
      <div className='flex flex-col gap-2'>
         <div className='text-base font-medium'>Select Ability Score Improvements</div>
         {asiSelect.map(el => el <= level ? (
            <div key={`asi-selection-level-${el}`}>
               <ASIMenu options={options} id={el} submit={submit} />
            </div>
            ) : null)}
      </div>
   )
}
export default ASISelect

const ASIMenu = ({options, id, submit}) => {
   const [option, setOption] = useState(null)
   const [display, setDisplay] = useState(true)
   const [select, setSelect] = useState([])

   const radioOptions = [{label: 'TWO Abilities +1', value: 'double'}, {label: 'ONE Ability +2', value: 'single'}]

   const handleSelect = (e, val) => {
      e.preventDefault()
      
      setOption(val)
   }

   const handleSubmit = (val) => {
      let newValues = [0,0,0,0,0,0]
      let displayVal = []
      if (Array.isArray(val)) {
         val.forEach(el => {
            newValues[el.value] = 1
            displayVal.push({label:`${el.label} +1`})
         })
         submit(newValues, id)
      } else {
         newValues[val.value] = 2
         displayVal.push({label:`${val.label} +2`})
         submit(newValues, id)
      }
      setSelect(displayVal)
      setDisplay(false)
      setOption(null)
   }

   const resetDisplay = () => {
      setSelect([])
      setDisplay(true)
   }

   return (
      <>
         {display ? 
         <div className='flex flex-col gap-3'>
            <OptionButtons title={`Level ${id} Ability Improvement`} handleClick={handleSelect} id={`asi-${id}`} options={radioOptions} />
            { option && option === 'single' && <SelectOne options={options} submit={handleSubmit} />}
            { option && option === 'double' && <SelectTwo options={options} submit={handleSubmit} />}
         </div>
         : <HideDisplay select={select} resetDisplay={resetDisplay} />
         }
      </>
   )
}

const SelectOne = ({options, submit}) => {
   const [select, setSelect] = useState();

   const handleChange = (val) => { 
      if (val) setSelect(val)
      else setSelect(null)
   }
   
   const handleSubmit = (e) => {
     e.preventDefault();
     submit(select)
   }
   return (
      <div className='flex flex-col gap-2'>
         <div>Select One Ability to Increase By +2</div>
         <form className='flex flex-row gap-3' onSubmit={(e) => handleSubmit(e)}>
            <Select options={options} required name={'asi-select'} defaultValue={''} isClearable onChange={handleChange} />
            <SubmitButton value='Submit' isDisabled={false} />
         </form>
      </div>
   )
}
const SelectTwo = ({options, submit}) => {
   const [select, setSelect] = useState([]);

   const handleChange = (val) => { 
      if (val) setSelect(val)
      else setSelect([])
   }
   
   const handleSubmit = (e) => {
     e.preventDefault();
     submit(select)
   }

   return (
      <div className='flex flex-col gap-2'>
         <div>Select Two Abilities to Increase By +1</div>
         <form className='flex flex-row gap-3' onSubmit={(e) => handleSubmit(e)}>
            <Select options={options} isMulti isOptionDisabled={() => select.length < 2 ? false : true} required name={'asi-select'} defaultValue={[]} isClearable onChange={handleChange} />
            <SubmitButton value='Submit' isDisabled={false} />
         </form>
      </div>
   )
}