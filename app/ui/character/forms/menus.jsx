'use client';

import { useState, useEffect, useRef } from 'react';
import { getGroupOptions, getMultiCatGroupOptions, multiCatFilterSingle, multiCatFilterDouble } from '@/lib/display-actions'
import { getInitialItemList } from '@/lib/actions'
import {SelectButton, InnerSelectButton, SubmitButton} from '@/ui/elements/button';
import HideDisplay from '@/ui/elements/hide-display';
import dynamic from 'next/dynamic';
const Select = dynamic(() => import('react-select'), { ssr: false });

export const SimpleSelectForm = ({base, data, cat, id, submit, current, isEdit, index}) => {
   const {count, list, title, _type} = data;
   const init = current[base][id][cat];
   const [display, setDisplay] = useState(true)
   const options = list.map(el => ({ value: el.toLowerCase(), label: el, category: cat }));
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
     submit(values, cat, index)
   }

   const resetDisplay = () => {
      setSelect([])
      setDisplay(true)
   }

   useEffect(() => {
      if(!init.length) setSelect([])
      setDisplay(true)
   }, [current[id]])

   return (
      <div className='flex flex-col gap-2 basis-full'>
         <p>{title}</p>
         {display ? 
         <form className='flex flex-row gap-4 grow items-start' action={handleSubmit}>
            { count > 1 ? 
               <Select isSearchable={false} options={options} required name={cat} value={select} isClearable id={id} isMulti isOptionDisabled={() => select.length >= count} onChange={handleChange} /> 
               : <Select isSearchable={false} options={options} required name={cat} value={select} id={id} onChange={handleChange} /> }
            <SelectButton value='Select' />
         </form>
         : <HideDisplay select={select} resetDisplay={resetDisplay} />
         }
      </div>
   )
}

export const GroupSelectForm = ({base, data, cat, id, submit, current, isEdit, index}) => {

   const {count, list, title, _type} = data;
   const init = current[base][id][cat];
   const [display, setDisplay] = useState(true)

   const groupOptions = getGroupOptions(data, cat)

   const getInitialValue = () => {
      return groupOptions.flatMap(g => (g.options.filter(o => init.includes(o.value))))
   }

   const [select, setSelect] = useState(isEdit ? getInitialValue() : []);

   const handleChange = (val) => {
      if (Array.isArray(val)) setSelect(val)
      else if (val) setSelect([val])
      else setSelect([])
    }

   const handleSubmit = () => {
     const values = select.map(el => el.value ? el.value : null)
     setDisplay(false)
     submit(values, cat, index)
   }

   const resetDisplay = () => {
      setSelect([])
      setDisplay(true)
   }

   useEffect(() => {
      if(!init.length) setSelect([])
      setDisplay(true)
   }, [current[id]])

   return (
      <div>
         <p>{title}</p>
         {display ? <form className='flex flex-row gap-3' action={handleSubmit}>
            { count > 1 ? 
               <Select isSearchable={false} required options={groupOptions} name={cat} value={select} isClearable id={id} isMulti isOptionDisabled={() => select.length >= count } onChange={handleChange} />
               : <Select isSearchable={false} required options={groupOptions} name={cat} value={select} id={id} onChange={handleChange} /> }
            <SelectButton value='Select' />
         </form>
         : <HideDisplay select={select} resetDisplay={resetDisplay} />}
      </div>
   )
}

export const IteratingSelectForm = ({base, data, id, cat, submit, current, isEdit, idx}) => {
   // const [submitAll, setSubmitAll] = useState([null, null, null]);
   
   // const initRef = useRef()
   
   // const handleMultiSubmit = (val, index, isMulti = false) => {
   //    const curr = submitAll.map((c,i) => i === index ? val : c);
   //    setSubmitAll(curr);
   //    const r = curr.filter(el => el).map(e => e.value);
   //    if (curr[0] && curr[1]) {
   //       if (curr[0].category === curr[1].category) 
   //          if (isMulti) handleMultiSingleCatSubmit(r, cat, index)
   //          else handleMultiSingleCatSubmit(r, cat, index - 1)
   //       else {
   //          if (isMulti) handleMultiDoubleCatSubmit(curr[index], curr[1 - index], index)
   //          else handleMultiDoubleCatSubmit(curr[1 - index], curr[index], 1 - index)
   //       }
   //    } else {
   //       if (isMulti) handleMultiSingleCatSubmit(r, val.category, index)
   //       else submit(r, cat)
   //    }
   // }

   // const handleMultiSingleCatSubmit = (values, submitCat, i) => {
   //    const result = multiCatFilterSingle(values, initRef.current, submitCat, cat, i)
   //    // console.log(result, submitCat)
   //    submit(result, null)
   // }
   // const handleMultiDoubleCatSubmit = (multiSubmitObject, submitObject, i) => {
   //    const result = multiCatFilterDouble(multiSubmitObject, submitObject, initRef.current, cat, i)
   //    // console.log(result)
   //    submit(result, null)
   // }

   const handleSubmit = (val, i) => {
      // const current = submitAll.map((c,i) => i === index ? val : c);
      // setSubmitAll(current);
      // const result = current.filter(el => el).map(e => e.value)
      const result = Array.isArray(val) ? val.map(v.value) : [val.value]
      submit(result, cat, `is-${idx}-${i}`, i);
   }

   // useEffect(() => {
   //    const p = getInitialItemList(id, current[id])
   //    initRef.current = JSON.parse(JSON.stringify(p))
   //    setSubmitAll([null, null])
   // }, [current[id]])

   // const includesMultiCat = data.some(d => d.type === 'iterating_group_multicat_select')

   return (
      <form className='flex flex-col gap-4'>
         { data.map((d,i) => {
            if (d.type === 'iterating_simple_select') {
               // return <InnerSimpleSelectForm key={`item-select-form-inner-${i}`} base={base} data={d} id={id} cat={cat} submit={includesMultiCat ? handleMultiSubmit : handleSubmit} current={current} isEdit={isEdit} index={i} />
               return <InnerSimpleSelectForm key={`item-select-form-inner-${i}`} base={base} data={d} id={id} cat={cat} submit={handleSubmit} current={current} isEdit={isEdit} i={i} />
            } else if (d.type === 'iterating_group_select') {
               return <InnerGroupSelectForm key={`item-select-form-inner-${i}`} base={base} data={d} id={id} cat={cat} submit={handleSubmit} current={current} isEdit={isEdit} i={i} />
            // } else if (d.type === 'iterating_group_multicat_select') {
            //    return <InnerMultiCatGroupSelectForm key={`item-select-form-inner-${i}`} base={base} data={d} id={id} cat={cat} submit={handleMultiSubmit} current={current} isEdit={isEdit} index={i} />
            }
         }) }
      </form>
   )
}

const InnerSimpleSelectForm = ({base, data, cat, id, submit, current, isEdit, i}) => {
   const {count, list, title, _type} = data;
   const init = current[base][id][cat];
   const [display, setDisplay] = useState(true)
   const options = list.map(el => ({ value: el.toLowerCase(), label: el }));
   const getInitialValue = () => options.filter((x) => init.includes(x.value) ? x : null)
   const [select, setSelect] = useState(isEdit ? getInitialValue() : []);

   const handleChange = (val) => { 
      if (Array.isArray(val)) setSelect(val)
      else if (val) setSelect([val])
      else setSelect([])
   }

   const handleSubmit = (e) => {
      e.preventDefault()
      setDisplay(false)
      submit(select[0], i)
   }

   const resetDisplay = () => {
      setSelect([])
      setDisplay(true)
   }

   useEffect(() => {
      if(!init.length) setSelect([])
      setDisplay(true)
   }, [current[id]])

   const displaySelectStyle = display ? 'flex flex-row gap-4 grow items-start' : 'hidden'
   const displayPlaceholderStyle = display ? 'hidden' : 'block'

   return (
      <div className='flex flex-col gap-2 basis-full'>
         <p>{title}</p>
         <div className={displaySelectStyle}>
            { count > 1 ? 
               <Select isSearchable={false} options={options} name={cat} value={select} isClearable id={id} isMulti isOptionDisabled={() => select.length >= count} onChange={handleChange} /> 
               : <Select isSearchable={false} options={options} name={cat} value={select} id={id} onChange={handleChange} /> }
            <InnerSelectButton submit={handleSubmit} value='Select' />
         </div>
         <div className={displayPlaceholderStyle}><HideDisplay select={select} resetDisplay={resetDisplay} /></div>
      </div>
   )
}

const InnerGroupSelectForm = ({base, data, cat, id, submit, current, isEdit, i}) => {
   const {count, list, title, _type} = data;
   const init = current[base][id][cat];
   const [display, setDisplay] = useState(true)

   const groupOptions = getGroupOptions(data, cat)

   const getInitialValue = () => {
      return groupOptions.flatMap(g => (g.options.filter(o => init.includes(o.value))))
   }

   const [select, setSelect] = useState(isEdit ? getInitialValue() : []);

   const handleChange = (val) => {
      if (val) {
         if (Array.isArray(val)) setSelect(val)
         else setSelect([val])
      } else setSelect([])
    }

   const handleSubmit = (e) => {
      e.preventDefault()
      setDisplay(false)
      submit(select[0], i)
   }

   const resetDisplay = () => {
      setSelect([])
      setDisplay(true)
   }

   useEffect(() => {
      if(!init.length) setSelect([])
      setDisplay(true)
   }, [current[id]])

   const displaySelectStyle = display ? 'flex flex-row gap-4 grow items-start' : 'hidden'
   const displayPlaceholderStyle = display ? 'hidden' : 'block'

   return (
      <div className='flex flex-col gap-2 basis-full'>
         <p>{title}</p>
         <div className={displaySelectStyle}>
            { count > 1 ? 
               <Select options={groupOptions} name={cat} value={select} isClearable id={id} isMulti isOptionDisabled={() => select.length >= count} onChange={handleChange} /> 
               : <Select options={groupOptions} name={cat} value={select} id={id} onChange={handleChange} />}
            <InnerSelectButton value='Select' submit={handleSubmit} />
         </div>
         <div className={displayPlaceholderStyle}><HideDisplay select={select} resetDisplay={resetDisplay} /></div>
      </div>
   )
}