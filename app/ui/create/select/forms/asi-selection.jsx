'use client';

import { useState } from 'react';
import {SubmitButton, ToggleButton} from '@/ui/elements/button';
import RadioSelect from '@/ui/elements/radio';
import dynamic from 'next/dynamic';
const Select = dynamic(() => import('react-select'), { ssr: false });

const ASIMenu = ({options, id, submit}) => {
   // const [select, setSelect] = useState([]);
   const [option, setOption] = useState(null)
   const [display, setDisplay] = useState(true)
   // const options = list.map(el => ({ value: el.toLowerCase(), label: el }));

   const radioOptions = [{label: 'Raise TWO Abilities +1', value: 'double'}, {label: 'Raise ONE Ability +2', value: 'single'}]

   const handleSelect = (e) => {
      e.preventDefault()
      setOption(e.target.value)
   }

   const handleSubmit = (val) => {
      let newValues = [0,0,0,0,0,0]
      if (Array.isArray(val)) {
         val.forEach(el => newValues[el.value] = 1)
         submit(newValues, id)
      } else {
         newValues[val.value] = 2
         submit(newValues, id)
      }
     setDisplay(false)
   }

   return (
      <>
         {display ? 
         <div className='flex flex-col gap-3'>
            <RadioSelect title={`Level ${id} Ability Improvement`} handleSelect={handleSelect} id={`asi-${id}`} options={radioOptions} />
            { option && option === 'single' && <SelectOne options={options} level={id} submit={handleSubmit} />}
            { option && option === 'double' && <SelectTwo options={options} level={id} submit={handleSubmit} />}
         </div>
         : <HideDisplay setDisplay={setDisplay} />
         }
      </>
   )
}

const SelectOne = ({options, level, submit}) => {
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
      <form className='flex flex-row gap-3' onSubmit={(e) => handleSubmit(e)}>
         {/* <Select options={options} required name={id} defaultValue={[]} isClearable id={id} isMulti={option == 'single' ? false : true} isOptionDisabled={() => option == 'double' && select.length > 1 ? true : false} onChange={handleChange} /> */}
         <Select options={options} required name={'name'} defaultValue={''} isClearable id={'id'} onChange={handleChange} />
         <SubmitButton value='Submit' isDisabled={false} />
      </form>
   )
}
const SelectTwo = ({options, level, submit}) => {
   const [selectA, setSelectA] = useState();
   const [selectB, setSelectB] = useState();

   const handleChange = (val, act) => { 
      if (act.name == 'A') {
         if (val) setSelectA(val)
         else setSelectA(null)
      } else if (act.name == 'B') {
         if (val) setSelectB(val)
         else setSelectB(null)
      }
   }
   
   const handleSubmit = (e) => {
     e.preventDefault();
     if (selectA && selectB) submit([selectA, selectB])
   }

   return (
      <form className='flex flex-row gap-3' onSubmit={(e) => handleSubmit(e)}>
         {/* <Select options={options} required name={id} defaultValue={[]} isClearable id={id} isMulti={option == 'single' ? false : true} isOptionDisabled={() => option == 'double' && select.length > 1 ? true : false} onChange={handleChange} /> */}
         <Select options={options} required name={'A'} defaultValue={''} isClearable onChange={handleChange} />
         <Select options={options} required name={'B'} defaultValue={''} isClearable onChange={handleChange} />
         <SubmitButton value='Submit' isDisabled={false} />
      </form>
   )
}

export default ASIMenu;

const HideDisplay = ({setDisplay}) => {
   const handleToggle = (e) => {
      e.preventDefault();
      setDisplay(true)
   }

   return (
      <div className='flex flex-row flex-wrap gap-2 p-2 border-2'>
         <div className='flex flex-row flex-wrap gap-1'>Selected: </div>
         <ToggleButton value={'Reselect'} handleClick={handleToggle} />
      </div>
   )
}