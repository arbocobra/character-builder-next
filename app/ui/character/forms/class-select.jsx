import { useState } from 'react';
import { classes, subclasses } from '@/lib/init-data';
import HideDisplay from '@/ui/elements/hide-display';
import {SubmitButton} from '@/ui/elements/button';
import { customStyles175 } from '@/ui/elements/select-theme'
import dynamic from 'next/dynamic';
const Select = dynamic(() => import('react-select'), { ssr: false });

const ClassSelect = ({submit, level, defaultClass, defaultSubclass, character}) => {

   const classOptions = classes.map(el => ({ value: el.toLowerCase(), label: el }));

   const subclassLookup = (sub) => {
      let subLevel = sub.level
      if (character.level >= subLevel) {
         return sub.name.map(el => ({ value: el.toLowerCase(), label: sub.title(sub.id, el)}))
      } else {
         return null
      }
   }

   const [subOptions, setSubOptions] = useState(character.class ? subclassLookup(subclasses[character.class]) : null)

   const [selectClass, setSelectClass] = useState(character.class ? classOptions.find((x) => x.value === character.class) : null);
   const [selectSubclass, setSelectSubclass] = useState(character.subclass ? subOptions.find((x) => x.value === character.subclass) : null);
   
   const [display, setDisplay] = useState(true)

   const handleClassChange = (val) => {
      if (val) {
         setSelectClass(val)
         const subOpts = subclassLookup(subclasses[val.value])
         setSubOptions(subOpts)
         if (selectSubclass) setSelectSubclass(null)
      } else {
         setSelectClass(null)
         setSelectSubclass(null)
         setSubOptions(null)
      }
   }

   const handleSubChange = (val) => setSelectSubclass(val)

   const handleSubmit = (e) => {
      e.preventDefault();
      setDisplay(false)
      if (subOptions) submit(selectClass.value, selectSubclass.value)
      else submit(selectClass.value)
   }

   const resetDisplay = () => {
      setSelectClass(null)
      setSelectSubclass(null)
      setDisplay(true)
   }

   return (
      <div className='flex flex-col gap-3'>
         <div className='text-base font-medium'>Select Character Class</div>
         {display ?
         <>
            <form className='flex flex-row gap-3' onSubmit={handleSubmit}>
               <Select styles={customStyles175} options={classOptions} required name='class' value={selectClass} id='class' onChange={handleClassChange} />
               {subOptions && <Select styles={customStyles175} options={subOptions} required name='subclass' value={selectSubclass} id='subclass' onChange={handleSubChange} />}
               <SubmitButton value='Submit' isDisabled={false} />
            </form> 
            {selectClass && <div className=''>{selectClass.label} selects their subclass at level {subclasses[selectClass.value].level}</div>}
         </>
         : <HideDisplay select={selectSubclass ? [selectSubclass] : [selectClass]} resetDisplay={resetDisplay} /> }
      </div>
   )
}

export default ClassSelect