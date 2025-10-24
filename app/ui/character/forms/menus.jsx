'use client';

import { useState } from 'react';
import {SubmitButton} from '@/ui/elements/button';
import HideDisplay from '@/ui/elements/hide-display';
import dynamic from 'next/dynamic';
const Select = dynamic(() => import('react-select'), { ssr: false });

export const SimpleSelectForm = ({list, title, id, count, submit, init, isEdit}) => {

   const [display, setDisplay] = useState(true)
   const options = list.map(el => ({ value: el.toLowerCase(), label: el }));
   const getInitialValue = () => options.filter((x) => init.includes(x.value) ? x : null)
   const [select, setSelect] = useState(isEdit ? getInitialValue() : []);

   const handleChange = (val) => { 
      if (Array.isArray(val)) setSelect(val)
      else if (val) setSelect([val])
      else setSelect([])
   }

   const handleSubmit = () => {
     const values = select.map(el => el.value ? el.value : null)
     setDisplay(false)
     submit(values, id)
   }

   const resetDisplay = () => {
      setSelect([])
      setDisplay(true)
   }

   return (
      <div className='flex flex-col gap-2 basis-full'>
         <p>{title}</p>
         {display ? 
         <form className='flex flex-row gap-4 grow items-start' action={handleSubmit}>
            <Select isSearchable={false} options={options} required name={id} value={select} isClearable id={id} isMulti={count > 1 ? true : false} isOptionDisabled={() => count > 1 ? select.length >= count : false} onChange={handleChange} />
            <SubmitButton value='Submit' isDisabled={false} />
         </form>
         : <HideDisplay select={select} resetDisplay={resetDisplay} />
         }
      </div>
   )
}

export const GroupSelectForm = ({list, title, id, count, submit, init, isEdit}) => {
   const [select, setSelect] = useState();
   const [display, setDisplay] = useState(true)

   const getGroupOptions = () => {
      let group = typeof list[0] == 'string' ? [{label: null, options: [] }] : []
      const titleArray = title.split(' OR ')
      list.forEach((el,i) => {
         if (typeof el == 'string') {
            group[0].options.push({ value: el.toLowerCase(), label: el })
         } else {
            group.push({label: titleArray[i], options: []})
            let options = el.map(el => ({ value: el.toLowerCase(), label: el }))
            group[group.length - 1].options = options
         }
      })
      return group;
   }
   const groupOptions = getGroupOptions(list)

   // const [select, setSelect] = useState();

   const handleChange = (val) => {
      if (Array.isArray(val)) setSelect(val)
      else if (val) setSelect([val])
      else setSelect([])
    }

   const handleSubmit = (e) => {
     e.preventDefault();
     const values = select.map(el => el.value ? el.value : null)
     setDisplay(false)
     submit(values, id)
   }

   const resetDisplay = () => {
      setSelect([])
      setDisplay(true)
   }

   return (
      <div>
         <p>{title}</p>
         {display ? <form className='flex flex-row gap-3' onSubmit={(e) => handleSubmit(e, id)}>
            <Select options={groupOptions} name={id} defaultValue={[]} isClearable id={id} isMulti={count > 1 ? true : false} isOptionDisabled={() => count > 1 ? select.length >= count : false} onChange={handleChange} />
            <SubmitButton value='Select' isDisabled={false} />
         </form>
         : <HideDisplay select={select} resetDisplay={resetDisplay} />
         }
      </div>
   )
}