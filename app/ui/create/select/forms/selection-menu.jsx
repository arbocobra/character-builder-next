'use client';

import { customStyles175 } from '@/ui/elements/select-theme'
import { useState } from 'react';
import {SubmitButton} from '@/ui/elements/button';
import HideDisplay from '@/ui/elements/hide-display';
import dynamic from 'next/dynamic';
const Select = dynamic(() => import('react-select'), { ssr: false });

export const SimpleSelectForm = ({list, title, id, count, submit, catArray = null}) => {
   const [select, setSelect] = useState([]);
   const [display, setDisplay] = useState(true)
   const options = list.map(el => ({ value: el.toLowerCase(), label: el }));

   const handleChange = (val) => { 
      if (Array.isArray(val)) setSelect(val)
      else if (val) setSelect([val])
      else setSelect([])
   }

   const getCategory = () => {
      let index = options.findIndex(opt => opt.value == select[0].value)
      return catArray[index]
    }

   const handleSubmit = (e) => {
     e.preventDefault();
      let idVal = catArray ? getCategory() : id
     const values = select.map(el => el.value ? el.value : null)
     setDisplay(false)
     submit(values, idVal)
   }

   const resetDisplay = () => {
      setSelect([])
      setDisplay(true)
   }

   return (
      <div className='flex flex-col gap-2 basis-full'>
         <p>{title}</p>
         {display ? 
         <form className='flex flex-row gap-4 grow items-start' onSubmit={(e) => handleSubmit(e, id)}>
            <Select isSearchable={false} options={options} required name={id} defaultValue={[]} isClearable id={id} isMulti={count > 1 ? true : false} isOptionDisabled={() => count > 1 ? select.length >= count : false} onChange={handleChange} />
            <SubmitButton value='Submit' isDisabled={false} />
         </form>
         : <HideDisplay select={select} resetDisplay={resetDisplay} />
         }
      </div>
   )
}

export const GroupSelectForm = ({list, title, id, count, submit}) => {
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

export const IteratingSimpleSelectForm = ({list, id, submit}) => {
   const [select, setSelect] = useState([]);
   const [display, setDisplay] = useState(true)
   const getOptions = (val) => val.map(el => ({ value: el.toLowerCase(), label: el }));
   
   const getSelection = () => list.map((el, i) => {
      let options = getOptions(el.list)
      let getMulti = el.count > 1

      return (
         <div key={`${id}-${i}`}>
            <p>{el.title}</p>
            <Select options={options} name={i} defaultValue={[]} id={`${id}-${i}`} isMulti={getMulti} isOptionDisabled={ () => getMulti ? select.count >= el.count : false } onChange={handleChange} />
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
      setDisplay(false)
      submit(values, id)
   }

   const resetDisplay = () => {
      setSelect([])
      setDisplay(true)
   }

   return (
      <div>
         {display ? <form className='flex flex-row flex-wrap gap-3 items-end' onSubmit={handleSubmit}>
            { getSelection() }
            <SubmitButton value='Select' isDisabled={false} />
         </form>
         : <HideDisplay select={select} resetDisplay={resetDisplay} />
         }
      </div>
   )
}

export const IteratingGroupSelectForm = ({list, id, submit}) => {
   const [select, setSelect] = useState(new Array(list.length).fill([]));
   const [display, setDisplay] = useState(true)
   const getOptions = (val) => val.map(el => ({ value: el.toLowerCase(), label: el }));
   const getGroupOptions = (val, title) => {
      let group = typeof val[0] == 'string' ? [{label: null, options: [] }] : []
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
      setDisplay(false)
      submit(values, id)
   }

   const resetDisplay = () => {
      setSelect([])
      setDisplay(true)
   }

   return (
      <div>
         {display ? <form className='flex flex-row flex-wrap gap-3 items-end' onSubmit={handleSubmit}>
            { getSelection() }
            <SubmitButton value='Select' isDisabled={false} />
         </form>
         : <HideDisplay select={select} resetDisplay={resetDisplay} />
         }
      </div>
   )
}

export const SimpleSelectFormUnknownCat = ({list, submit, catArray}) => {}

export const GroupSelectFormUnknownCat = ({list, title, submit, catArray}) => {
   const [select, setSelect] = useState();
   const [display, setDisplay] = useState(true)

   const getGroupOptions = () => {
      let group = typeof list[0] == 'string' ? [{label: null, options: [] }] : []
      const titleArray = title.split(' OR ')
      list.forEach((el,i) => {
         if (typeof el == 'string') {
            group[0].options.push({ value: el.toLowerCase(), label: el, category: catArray[i] })
         } else {
            group.push({label: titleArray[i], options: []})
            let options = el.map(val => ({ value: val.toLowerCase(), label: val, category: catArray[i] }))
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

   const getCategory = () => {
      let index = 0;
      groupOptions.forEach((l,i) => {
         let val = l.options.findIndex(opt => opt.value == select[0].value)
         if (val < 0) return
         else index = i
      })
      return catArray[index]
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      let idVal = getCategory()
     const values = select.map(el => el.value ? el.value : null)
     setDisplay(false)
   //   let testArrA = ['one', 'weapons']
   //   let testArrB = ['two', 'armour']
     if (Array.isArray(idVal)) {
      submit([values[0]], idVal[0])
      setTimeout(() => {submit([values[1]], idVal[1])}, 500)
     } else 
      submit(values, idVal)
    }

    const resetDisplay = () => {
      setSelect([])
      setDisplay(true)
   }

   return (
      <div>
         <p>{title}</p>
         {display ? <form className='flex flex-row gap-3' onSubmit={(e) => handleSubmit(e, id)}>
            <Select options={groupOptions} defaultValue={[]} isClearable isMulti={false} onChange={handleChange} />
            <SubmitButton value='Select' isDisabled={false} />
         </form>
         : <HideDisplay select={select} resetDisplay={resetDisplay} />
         }
      </div>
   )

}

export const ConditionalTwoPartSimpleSelection = ({listA, listB, title, idA, idB, submit}) => {
   const [selectA, setSelectA] = useState(null);
   const [selectB, setSelectB] = useState(null);
   const [secondSelect, setSecondSelect] = useState(null)
   const [display, setDisplay] = useState(true)

   const firstSelect = listA.map(el => ({ value: el.toLowerCase(), label: el }));

   const handleChangeA = (val) => {
      if (val) {
         setSelectA(val)
         if (selectB) setSelectB(null)
         if (listB[val.value]) {
            let subSelect = listB[val.value].map(el => ({ value: el.toLowerCase(), label: el }));
            setSecondSelect(subSelect)
         }
         else setSecondSelect(null)
      } else {
         setSecondSelect(null)
         setSelectA(null)
      }
   }

   const handleChangeB = (val) => setSelectB(val)

   const handleSubmit = (e) => {
      e.preventDefault();
      setDisplay(false)
      submit(selectA.value, selectB ? selectB.value : null, idA)
   }

   const resetDisplay = () => {
      setSelectA(null)
      setSelectB(null)
      setDisplay(true)
   }

   return (
      <div>
         <p>{title}</p>
         {display ?
         <form className='flex flex-row gap-3 p-2 border-2' onSubmit={handleSubmit}>
            <Select options={firstSelect} required name={idA} value={selectA} isClearable id={idA} onChange={handleChangeA} />
            {secondSelect && <Select options={secondSelect} required name={idB} value={selectB} isClearable id={idB} onChange={handleChangeB} />}
            <SubmitButton value='Submit' isDisabled={false} />
         </form> 
         : <HideDisplay select={selectB ? [selectB] : [selectA]} resetDisplay={resetDisplay} /> }
      </div>
   )
}