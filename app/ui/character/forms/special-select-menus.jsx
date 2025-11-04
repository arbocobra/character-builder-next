'use client';

import { useState, useEffect, useRef } from 'react';
import { getIndexedGroupOptions, filterItemObject, getGroupOptions, getMultiCatGroupOptions, multiCatFilterSingle, multiCatFilterDouble } from '@/lib/display-actions'
import { getInitialItemList } from '@/lib/actions'
import {SelectButton, InnerSelectButton, SubmitButton} from '@/ui/elements/button';
import { customStyles175 } from '@/ui/elements/select-theme'
import HideDisplay from '@/ui/elements/hide-display';
import dynamic from 'next/dynamic';
const Select = dynamic(() => import('react-select'), { ssr: false });

export const SpecialSelectForm1 = ({base, data, id, cat, submit, current, isEdit, index}) => {
   const {count, list, title, categories, special, selected } = data;
   const [display, setDisplay] = useState(true)
   const options = getMultiCatGroupOptions(data, categories)

   const getInitialValue = () => {
      if (selected[0] === special.val) return options[0].options[special.index]
      return options[1].options.find(item => item.value === selected[0]);
   }
   
   const [select, setSelect] = useState(isEdit ? getInitialValue() : []);

   const handleChange = (val) => { 
      if (Array.isArray(val)) setSelect(val)
      else if (val) setSelect([val])
      else setSelect([])
   }

   const handleSubmit = () => {
      let val = select[0]
      submit(val.value, val.category, index)
      setDisplay(false)
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
            <Select isSearchable={false} options={options} required name={cat} value={select} id={id} onChange={handleChange} />
            <SelectButton value='Select' />
         </form>
         : <HideDisplay select={select} resetDisplay={resetDisplay} />
         }
      </div>
   )
}

export const SpecialSelectForm2 = ({base, data, id, cat, submit, current, isEdit, index}) => { // rename as filter cat
   const {count, list, title, special, categories } = data;

   const [display, setDisplay] = useState(true)
   const options = list.map((el,i) => ({ value: el.toLowerCase(), label: el, category: categories[i] }));

   const getInitialValue = () => {
      if (current[base][id].weapons.includes(special.val)) return options[special.index]
      else return options[1 - special.index]
   }
   
   const [select, setSelect] = useState(isEdit ? getInitialValue() : []);

   const handleChange = (val) => { 
      if (Array.isArray(val)) setSelect(val)
      else if (val) setSelect([val])
      else setSelect([])
   }

   const handleSubmit = () => {
      let val = select[0]
      if (Array.isArray(val.category)) {
         submit(val.value.split(' and '), val.category, `sp-2-${index}`, index)
      } else submit(val.value, val.category, `sp-2-${index}`, index)
   }

   const resetDisplay = () => {
      setSelect([])
      setDisplay(true)
   }

   useEffect(() => {
      setDisplay(true)
   }, [current[id]])

   return (
      <div className='flex flex-col gap-2 basis-full'>
         <p>{title}</p>
         {display ? 
         <form className='flex flex-row gap-4 grow items-start' action={handleSubmit}>
            <Select isSearchable={false} options={options} required name={cat} value={select} id={id} onChange={handleChange} />
            <SelectButton value='Select' />
         </form>
         : <HideDisplay select={select} resetDisplay={resetDisplay} />
         }
      </div>
   )
}

export const SpecialSelectForm3 = ({base, data, id, cat, submit, current, isEdit, index}) => {
   const {count, list, title, special, categories } = data;

   const [display, setDisplay] = useState(true)
   const options = list[0].map((el,i) => ({ value: el.toLowerCase(), label: el, index: i }));
   options[0].value = special.val;

   const getInitialValue = () => {
      if (current[base][id].weapons.includes(special.val)) return options[special.index]
      else return options[1 - special.index]
   }
   
   const [select, setSelect] = useState(isEdit ? getInitialValue() : []);

   const [stepOptions, setStepOptions] = useState(null)

   const countVal = select.length ? count[select[0].index] : 1;

   const getStepOptions = () => {
      let selected = select.length ? true : false;
      if (selected) {
         let options = list[1].map(el => ({ value: el.toLowerCase(), label: el }));
         setStepOptions(options)
      } else setStepOptions(null)
   }

   const handleChange = (val) => { 
      if (Array.isArray(val)) setSelect(val)
      else if (val) setSelect([val])
   }

   const handleSubmit = (data) => {
      let val = data.getAll('special-3')
      if (select[0].index === 0) {
         submit(val, categories[0], `sp-3-${index}`, index)
      } else {
         submit(val.slice(1), categories[1], `sp-3-${index}`, index)
      }
      setDisplay(false)
   }

   const resetDisplay = () => {
      setSelect([])
      setDisplay(true)
   }

   useEffect(() => {
      getStepOptions()
   }, [select])

   useEffect(() => {
      setDisplay(true)
   }, [current[id]])

   return (
      <div className='flex flex-col gap-2 basis-full'>
         <p>{title}</p>
         {display ? 
         <form className='flex flex-row gap-4 grow items-start' action={handleSubmit}>
            <Select isSearchable={false} options={options} required name='special-3' value={select} id={id} onChange={handleChange} />
            {stepOptions && <StepSelect stepOptions={stepOptions} isEdit={isEdit} currentStep={'x'} name='special-3' count={countVal} /> }
            <SelectButton value='Select' />
         </form>
         : <HideDisplay select={select} resetDisplay={resetDisplay} />
         }
      </div>
   )
}

export const SpecialSelectForm4 = (props) => {
   return (
      <SpecialSelectForm3 {...props} />
   )
}

export const SpecialSelectForm5 = ({base, data, id, cat, submit, current, isEdit, index}) => {
   const {count, list, title, special, categories } = data;

   const [display, setDisplay] = useState(true)
   const options = list[0].map((el,i) => ({ value: el.toLowerCase(), label: el, index: i }));
   options[0].value = special.val;

   const getInitialValue = () => {
      if (current[base][id].weapons.includes(special.val)) return options[special.index]
      else return options[1 - special.index]
   }
   
   const [select, setSelect] = useState(isEdit ? getInitialValue() : []);

   const [stepOptions, setStepOptions] = useState(null)

   const countVal = select.length ? count[select[0].index] : 1;

   const getStepOptions = () => {
      let selected = !select.length ? false : select[0].index === 1 ? true : false;
      if (selected) {
         let options = list[1].map(el => ({ value: el.toLowerCase(), label: el }));
         setStepOptions(options)
      } else setStepOptions(null)
   }

   const handleChange = (val) => { 
      if (Array.isArray(val)) setSelect(val)
      else if (val) setSelect([val])
   }

   const handleSubmit = (data) => {
      let val = data.getAll('special-5')
      // console.log(val)
      if (select[0].index === 0) {
         submit(val, categories, `sp-5-${index}`, index)
      } else {
         submit(val.slice(1), categories, `sp-5-${index}`, index)
      }
      setDisplay(false)
   }

   const resetDisplay = () => {
      setSelect([])
      setDisplay(true)
   }

   useEffect(() => {
      getStepOptions()
   }, [select])

   useEffect(() => {
      setDisplay(true)
   }, [current[id]])

   return (
      <div className='flex flex-col gap-2 basis-full'>
         <p>{title}</p>
         {display ? 
         <form className='flex flex-row gap-4 grow items-start' action={handleSubmit}>
            <Select isSearchable={false} options={options} required name='special-5' value={select} id={id} onChange={handleChange} />
            {stepOptions && <StepSelect stepOptions={stepOptions} isEdit={isEdit} currentStep={'x'} name='special-5' count={count} /> }
            <SelectButton value='Select' />
         </form>
         : <HideDisplay select={select} resetDisplay={resetDisplay} />
         }
      </div>
   )
}

const StepSelect = ({stepOptions, isEdit, currentStep, name, count}) => {
   
   const getInitialValue = (list, init) => list.find((x) => x.value === init)
   const [selectStep, setSelectStep] = useState(isEdit ? getInitialValue(stepOptions, currentStep) : '')

   useEffect(() => {
      if (selectStep) {
         let x = stepOptions.find(el => el.value === selectStep.value)
         if (x === undefined) setSelectStep('')
      }
   },[stepOptions])

   if (count > 1) {
      return (<Select isSearchable={false} options={stepOptions} name={name} value={selectStep} isClearable isMulti isOptionDisabled={() => selectStep.length >= count } onChange={(v) => setSelectStep(v)} required />)
   } else {
      return (<Select isSearchable={false} options={stepOptions} name={name} value={selectStep} onChange={(v) => setSelectStep(v)} required />)
   }
}