'use client';

import { useState, useEffect, useRef } from 'react';
import { SimpleSelectForm, GroupSelectForm, IteratingSimpleSelectForm, IteratingGroupSelectForm, GroupSelectFormUnknownCat } from '@/select/forms/selection-menu'
import ASISelect from '@/ui/create/select/forms/classes/asi-select'
import { ClassSelection } from './class-select'

const ClassForm = ({current, setClass, updateByPath, changeClass, addToList}) => {
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

   // const toggleDisplay = () => setDisplay(!display)

   useEffect(() => {
      if (hasClass) {
         initProficiencies.current = JSON.parse(JSON.stringify(current.proficiencies.class))
         inititems.current = JSON.parse(JSON.stringify(current.items.class))
      }
   }, [current.class])

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
   const skillSelect = proficiencySelect.skills[0];
   const toolSelect = proficiencySelect.tools[0];
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
   const unnamedSelect = itemSelect.unnamed;

   const identifyItemSelect = (val, n) => {
      if (val.length > 1) {
         if (val.every(inner => inner.list.every(el => typeof el == 'string'))) return (<IteratingSimpleSelectForm list={val} id={n} submit={submit} />)
         else return (<IteratingGroupSelectForm list={val} id={n} submit={submit} />)
      } else {
         let singleVal = val[0]
         if (singleVal.list.every(op => typeof op == 'string')) return (<SimpleSelectForm list={singleVal.list} title={singleVal.title} id={n} count={singleVal.count} catArray={Object.hasOwn(singleVal, 'cat') ? singleVal.cat : null} submit={submit} />)
         else return (<GroupSelectForm list={singleVal.list} title={singleVal.title} id={n} count={singleVal.count} catArray={Object.hasOwn(singleVal, 'cat') ? singleVal.cat : null} submit={submit} />)
      }
   }

   const identifyUnknownSelect = (val) => {
      val.map(el => {
         if (el.list.every(op => typeof op == 'string')) {
            //  return (<SimpleSelectForm list={singleVal.list} title={singleVal.title} id={n} count={singleVal.count} catArray={Object.hasOwn(singleVal, 'cat') ? singleVal.cat : null} submit={submit} />)
         } else {
            return (<GroupSelectFormUnknownCat list={el.list} title={el.title} catArray={el.categories} submit={submit} />)
         }
      })
   }

   return (
      <div className='flex flex-col gap-3'>
         <div className='text-base font-medium'>Select Items</div>
         { armourSelect && identifyItemSelect(armourSelect, 'armour') }
         { weaponsSelect && identifyItemSelect(weaponsSelect, 'weapons') }
         { unnamedSelect && identifyUnknownSelect(unnamedSelect)}
         { equipmentSelect && identifyItemSelect(equipmentSelect, 'equipment') }
         { toolSelect && identifyItemSelect(toolSelect, 'tools') }
      </div>
   )
}

export default ClassForm;