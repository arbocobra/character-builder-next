'use client';

import { useState, useEffect, useRef } from 'react';
import { SimpleSelectForm, GroupSelectForm, IteratingSimpleSelectForm, IteratingGroupSelectForm } from '@/select/forms/selection-menu'
import { backgrounds } from '@/lib/init-data';
import HideDisplay from '@/ui/elements/hide-display';
import {SubmitButton} from '@/ui/elements/button';
import { customStyles175 } from '@/ui/elements/select-theme'
import dynamic from 'next/dynamic';
const Select = dynamic(() => import('react-select'), { ssr: false });

const BackgroundForm = ({current, setBackground, changeBackground, updateByPath, addToList}) => {
   const hasBackground = current.background ? true : false
   const initProficiencies = useRef(null);
   const inititems = useRef(null);

   const handleSubmitBackground = (background) => {
      if (hasBackground) changeBackground(background);
      else setBackground(background)
   }

   const handleSubmitProficiency = (val, id) => {
      const init = initProficiencies.current[id]
      const update = [...init, ...val];
      updateByPath(`proficiencies.background.${id}`, update);
   }

   const handleSubmitItem = (val, id) => {
      const init = inititems.current[id]
      let update;
      if (Array.isArray(val)) update = [...init, ...val];
      else update = [...init, val.value];
      updateByPath(`items.background.${id}`, update);
   }

   useEffect(() => {
      if (hasBackground) {
         initProficiencies.current = JSON.parse(JSON.stringify(current.proficiencies.background))
         inititems.current = JSON.parse(JSON.stringify(current.items.background))
      }
   }, [current.background])

   return (
      <div className='flex flex-col gap-5'>
         <BackgroundSelection submit={handleSubmitBackground} />
         { hasBackground && <ProficiencySelect proficiencySelect={current.proficiencies.background.selectFromList} submit={handleSubmitProficiency} />}
         { hasBackground && <ItemSelect itemSelect={current.items.background.selectFromList} submit={handleSubmitItem} />}
      </div>
   )
}

const BackgroundSelection = ({submit}) => {
   const [select, setSelect] = useState(null);
   const [display, setDisplay] = useState(true)

   const options = backgrounds.map(el => ({ value: el.toLowerCase(), label: el }));

   const handleChange = (val) => {
      if (val) setSelect(val)
      else setSelect(null)
   }

   const handleSubmit = (e) => {
      e.preventDefault();
      setDisplay(false)
      submit(select.value)
   }

   const resetDisplay = () => {
      setSelect(null)
      setDisplay(true)
   }

   return (
      <div className='flex flex-col gap-3'>
         <div className='text-base font-medium'>Select Character Background</div>
         {display ?
         <form className='flex flex-row gap-3' onSubmit={handleSubmit}>
            <Select styles={customStyles175} options={options} required name='background' value={select} id='background' onChange={handleChange} />
            <SubmitButton value='Submit' isDisabled={false} />
         </form> 
         : <HideDisplay select={[select]} resetDisplay={resetDisplay} /> }
      </div>
   )
}

const ProficiencySelect = ({proficiencySelect, submit}) => {
   const toolSelect = proficiencySelect.tools;
   const languageSelect = proficiencySelect.languages

   const identifyItemSelect = (val, n) => {
      if (val.length > 1) {
         if (val.every(inner => inner.list.every(el => typeof el == 'string'))) return (<IteratingSimpleSelectForm list={val} id={n} submit={submit} />)
         else return (<IteratingGroupSelectForm list={val} id={n} submit={submit} />)
      } else {
         if (val[0].list.every(op => typeof op == 'string')) return (<SimpleSelectForm list={val[0].list} title={val[0].title} id={n} count={val[0].count} submit={submit} />)
         else return (<GroupSelectForm list={val[0].list} title={val[0].title} id={n} count={val[0].count} submit={submit} />)
      }
   }

   if (languageSelect || toolSelect) {
      return (
         <div className='flex flex-col gap-3'>
            <div className='text-base font-medium'>Select Proficiencies</div>
            { languageSelect && identifyItemSelect(languageSelect, 'languages') }
            { toolSelect && identifyItemSelect(toolSelect, 'tools') }
         </div>
      )
   }
}

const ItemSelect = ({itemSelect, submit}) => {
   const equipmentSelect = itemSelect.equipment;
   const toolSelect = itemSelect.tools;

   const identifyItemSelect = (val, n) => {
      if (val.length > 1) {
         if (val.every(inner => inner.list.every(el => typeof el == 'string'))) return (<IteratingSimpleSelectForm list={val} id={n} submit={submit} />)
         else return (<IteratingGroupSelectForm list={val} id={n} submit={submit} />)
      } else {
         if (val[0].list.every(op => typeof op == 'string')) return (<SimpleSelectForm list={val[0].list} title={val[0].title} id={n} count={val[0].count} submit={submit} />)
         else return (<GroupSelectForm list={val[0].list} title={val[0].title} id={n} count={val[0].count} submit={submit} />)
      }
   }

   if (equipmentSelect || toolSelect) {
      return (
         <div className='flex flex-col gap-3'>
            <div className='text-base font-medium'>Select Items</div>
            { equipmentSelect && identifyItemSelect(equipmentSelect, 'equipment') }
            { toolSelect && identifyItemSelect(toolSelect, 'tools') }
         </div>
      )
   }
   
}

export default BackgroundForm;