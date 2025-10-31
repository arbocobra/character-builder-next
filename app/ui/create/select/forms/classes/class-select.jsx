import { useState } from 'react';
import { classes, subclasses } from '@/lib/init-data';
import HideDisplay from '@/ui/elements/hide-display';
import {SubmitButton} from '@/ui/elements/button';
import { customStyles175 } from '@/ui/elements/select-theme'
import dynamic from 'next/dynamic';
const Select = dynamic(() => import('react-select'), { ssr: false });

export const ClassSelection = ({submit, level}) => {
   const [selectClass, setSelectClass] = useState(null);
   const [selectSubclass, setSelectSubclass] = useState(null);
   const [subOptions, setSubOptions] = useState(null)
   const [display, setDisplay] = useState(true)

   const classOptions = classes.map(el => ({ value: el.toLowerCase(), label: el }));

   const subclassLookup = (sub) => {
      let subLevel = sub.level
      if (level >= subLevel) {
         let ops = sub.name.map(el => ({ value: el.toLowerCase(), label: sub.title(sub.id, el)}))
         setSubOptions(ops)
      } else {
         setSubOptions(null)
      }
   }

   const handleClassChange = (val) => {
      if (val) {
         setSelectClass(val)
         subclassLookup(subclasses[val.label])
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
            {selectClass && <div className=''>{selectClass.label} selects their subclass at level {subclasses[selectClass.label].level}</div>}
         </>
         : <HideDisplay select={selectSubclass ? [selectSubclass] : [selectClass]} resetDisplay={resetDisplay} /> }
      </div>
   )
}