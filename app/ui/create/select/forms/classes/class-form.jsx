'use client';

import { useState, useEffect, useRef } from 'react';
import { SimpleSelectForm, GroupSelectForm, IteratingGroupSelectForm } from '@/select/forms/selection-menu'
import { classes, subClasses } from '@/lib/init-data';
import { ToggleButton } from '@/ui/elements/button';
import ASISelect from '@/ui/create/select/forms/classes/asi-select'
import { ClassSelection } from './class-select'

const ClassForm = ({current, setClass, updateByPath, changeClass, addToList}) => {
   const [display, setDisplay] = useState(false)
   const hasClass = current.class ? true : false
   const isSubmitting = useRef(false)
   const initProficiencies = useRef(null);
   const inititems = useRef(null);

   const handleSubmitClass = (className, subName = null) => {
      if (hasClass) changeClass(className, subName);
      else setClass(className, subName)
   }

   const handleSubmitProficiency = (val, id) => {
      const init = initProficiencies.current[id]
      const update = [...init, ...val];
      updateByPath(`proficiencies.class.${id}`, update);
   }

   const handleSubmitItem = (val, id) => {
      const init = inititems.current[id]
      let update;
      if (Array.isArray(val)) update = [...init, ...val];
      else update = [...init, val.value];
      updateByPath(`items.class.${id}`, update);
   }

   const handleSubmitASI = (value, level) => {
      if (isSubmitting.current) return 
      isSubmitting.current = true
      addToList(['abilities', 'class'], {name: `class-asi-${level}`, level, value})
      isSubmitting.current = false
   }

   const toggleDisplay = () => setDisplay(!display)

   useEffect(() => {
      if (hasClass) {
         initProficiencies.current = JSON.parse(JSON.stringify(current.proficiencies.class))
         inititems.current = JSON.parse(JSON.stringify(current.items.class))
      }
   }, [current.class])

   // if (current.name) {
      // return (
      //    <div className='bg-amber-100 p-2'>
      //       <div className='flex flex-row justify-between'>
      //          <div>Display Class Selection</div>
      //          <ToggleButton value={display ? 'Close' : 'Open'}  handleClick={toggleDisplay}/>
      //       </div>
      //       { display && (<div className='flex flex-col gap-3'>
      //          { current.name && <ClassSelection submit={handleSubmitClass} level={current.level} /> }
      //          {/* { current.name && <SimpleSelectForm list={classes} title={'Select Character Class'} id={'class'} count={1} required submit={handleSubmitClass} /> } */}
      //          { hasClass && <ProficiencySelect proficiencySelect={current.proficiencies.class.selectFromList} submit={handleSubmitProficiency} />}
      //          { hasClass && <ItemSelect itemSelect={current.items.class.selectFromList} submit={handleSubmitItem} />}
      //          { hasClass && <ASISelect asiSelect={current.class_ASI_levels} level={current.level} submit={handleSubmitASI} />}
      //       </div>) }
      //    </div>
      // )
   // }
   return (
      <div className='flex flex-col gap-5'>
         <ClassSelection submit={handleSubmitClass} level={current.level} />
         { hasClass && <ProficiencySelect proficiencySelect={current.proficiencies.class.selectFromList} submit={handleSubmitProficiency} />}
         { hasClass && <ItemSelect itemSelect={current.items.class.selectFromList} submit={handleSubmitItem} />}
         { hasClass && <ASISelect asiSelect={current.class_ASI_levels} level={current.level} submit={handleSubmitASI} />}
      </div>
   )
}

const ProficiencySelect = ({proficiencySelect, submit}) => {
   const skillSelect = proficiencySelect.skills;
   const toolSelect = proficiencySelect.tools;
   const isGroupList = !toolSelect ? false : toolSelect.list.every(el => typeof el == 'string') ? false : true

   return (
      <div className='flex flex-col gap-3'>
         <div className='text-base font-medium'>Select Proficiencies</div>
         { skillSelect && <SimpleSelectForm list={skillSelect.list} title={skillSelect.title} id={'skills'} count={skillSelect.count} submit={submit} /> }
         { toolSelect && isGroupList && <GroupSelectForm list={toolSelect.list} title={toolSelect.title} id={'tools'} count={toolSelect.count} submit={submit} />}
         { toolSelect && !isGroupList && <SimpleSelectForm list={toolSelect.list} title={toolSelect.title} id={'tools'} count={toolSelect.count} submit={submit} />}
      </div>
   )
}

const ItemSelect = ({itemSelect, submit}) => {
   const armourSelect = itemSelect.armour;
   const weaponsSelect = itemSelect.weapons;
   const equipmentSelect = itemSelect.equipment;
   const toolSelect = itemSelect.tools;

   const identifyItemSelect = (val, n) => {
      if (val.length > 1) {
         if (val.every(inner => inner.list.every(el => typeof el == 'string'))) return
         else return (<IteratingGroupSelectForm list={val} id={n} submit={submit} />)
      } else {
         if (val[0].list.every(op => typeof op == 'string')) return (<SimpleSelectForm list={val[0].list} title={val[0].title} id={n} count={val[0].count} submit={submit} />)
         else return (<GroupSelectForm list={val[0].list} title={val[0].title} id={n} count={val[0].count} submit={submit} />)
      }
   }

   return (
      <div className='flex flex-col gap-3'>
         <div className='text-base font-medium'>Select Items</div>
         { armourSelect && identifyItemSelect(armourSelect, 'armour') }
         { weaponsSelect && identifyItemSelect(weaponsSelect, 'weapons') }
         { equipmentSelect && identifyItemSelect(equipmentSelect, 'equipment') }
         { toolSelect && identifyItemSelect(toolSelect, 'tools') }
      </div>
   )
}

export default ClassForm;