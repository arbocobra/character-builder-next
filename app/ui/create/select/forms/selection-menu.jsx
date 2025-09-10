'use client';

import { useState, useEffect, isValidElement } from 'react';
import Button from '@/ui/elements/button';
import dynamic from 'next/dynamic';
const Select = dynamic(() => import('react-select'), { ssr: false });

const SelectMenu = ({list, title, count, currentCount, handleChange, handleSubmit, id}) => {
   const options = list.map(el => ({ value: el.toLowerCase(), label: el }));
   return (
      <div>
         <p>{title}</p>
         <form className='flex flex-row gap-3 p-2 border-2' onSubmit={(e) => handleSubmit(e, id)}>
            <Select options={options} name={id} defaultValue={[]} isClearable isOptionDisabled={() => currentCount >= count} id={id} isMulti={count > 1} onChange={handleChange}/>
            <Button value='Select' isDisabled={false} />
         </form>
      </div>
   )
} 

export const SelectMenuMulti = ({multiList, multiItems, handleChange, handleSubmit, id}) => {
   const [select, setSelect] = useState(new Array(multiList.length).fill([]))
   
   const localChange = (val, action) => {
      if (action.action === 'clear') {
         setSelect(current => current.map((el, i) => i === action.name ? [] : el))}
      else {
         if (Array.isArray(val)) setSelect(current => current.map((el, i) => i === action.name ? val : el))
         else setSelect(current => current.map((el, i) => i === action.name ? [val] : el))
      }
   }

   useEffect(() => {
      handleChange(select, id)
   }, [select])

   return (
      <div>
         <form className='flex flex-col gap-3 p-2 border-2' onSubmit={(e) => handleSubmit(e, id, select)}>
            { multiList && multiList.map((el,i) => 
               <div className='flex flex-col' key={`item-${id}-${i}`} >
                  <p>{multiItems[i].title}</p>
                  <Select options={el} name={i} isOptionDisabled={() => select[i].length >= multiItems[i].count} defaultValue={[]} isClearable isMulti={multiItems[i].count > 1} onChange={localChange} />
               </div> )}
            <Button value='Select' isDisabled={false} />
         </form>
      </div>
   )
}

export const SimpleSelectForm = ({list, title, id, count, submit}) => {
   const [select, setSelect] = useState([]);
   const options = list.map(el => ({ value: el.toLowerCase(), label: el }));

   const handleChange = (val) => { 
      if (Array.isArray(val)) setSelect(val)
      else if (val) setSelect([val])
      else setSelect([])
   }
   const handleSubmit = (e) => {
     e.preventDefault();
     const values = select.map(el => el.value ? el.value : null)
     submit(values, id)
   }

   return (
      <div>
         <p>{title}</p>
         <form className='flex flex-row gap-3 p-2 border-2' onSubmit={(e) => handleSubmit(e, id)}>
            <Select options={options} name={id} defaultValue={[]} isClearable id={id} isMulti={count > 1 ? true : false} isOptionDisabled={() => count > 1 ? select.length >= count : false} onChange={handleChange} />
            <Button value='Select' isDisabled={false} />
         </form>
      </div>
   )
}

export const GroupSelectForm = ({list, title, id, count, submit}) => {
   const [select, setSelect] = useState();
   const getGroupOptions = () => {
      let group = [{label: null, options: [] }]
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

   const handleChange = (val) => {
      if (Array.isArray(val)) setSelect(val)
      else if (val) setSelect([val])
      else setSelect([])
    }

   const handleSubmit = (e) => {
     e.preventDefault();
     const values = select.map(el => el.value ? el.value : null)
     submit(values, id)
   }

   return (
      <div>
         <p>{title}</p>
         <form className='flex flex-row gap-3 p-2 border-2' onSubmit={(e) => handleSubmit(e, id)}>
            <Select options={groupOptions} name={id} defaultValue={[]} isClearable id={id} isMulti={count > 1 ? true : false} isOptionDisabled={() => count > 1 ? select.length >= count : false} onChange={handleChange} />
            <Button value='Select' isDisabled={false} />
         </form>
      </div>
   )
}
export const IteratingGroupSelectForm = ({list, id, submit}) => {
   const [select, setSelect] = useState(new Array(list.length).fill([]));

   const getOptions = (val) => val.map(el => ({ value: el.toLowerCase(), label: el }));
   const getGroupOptions = (val, title) => {
      let group = [{label: null, options: [] }]
      const titleArray = title.split(' OR ')
      val.forEach((el,i) => {
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

   
   const getSelection = () => list.map((el, i) => {
      let options;
      if (el.list.every(val => typeof val === 'string')) options = getOptions(el.list)
      else options = getGroupOptions(el.list, el.title)
      return (
         <div key={`${id}-${i}`}>
            <p>{el.title}</p>
            <Select options={options} name={i} defaultValue={[]} isClearable id={`${id}-${i}`} isMulti={el.count > 1 ? true : false} isOptionDisabled={() => el.count > 1 ? select.length >= el.count : false} onChange={handleChange} />
         </div>
      )
   })

   const handleChange = (val, act) => {
      let i = act.name;
      let c = [...select]
      if (val) {
         c[i] = val
      } else c[i] = []
      setSelect(c)
   }

   const handleSubmit = (e) => {
      e.preventDefault();
      const values = select.flat().map(el => el.value ? el.value : null)
      submit(values, id)
   }

   return (
      <div>
         <p>Iterating Selection Here</p>
         {/* <form className='flex flex-col gap-3 p-2 border-2' onSubmit={(e) => handleSubmit(e, id)}> */}
         <form className='flex flex-col gap-3 p-2 border-2' onSubmit={handleSubmit}>
            { getSelection() }
            <Button value='Select' isDisabled={false} />
         </form>
      </div>
   )
}

export default SelectMenu