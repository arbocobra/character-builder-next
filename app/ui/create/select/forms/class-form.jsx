'use client';

import { useState, useEffect, useRef } from 'react';
import SelectMenu, { SimpleSelectForm, GroupSelectForm, IteratingGroupSelectForm, SelectMenuMulti } from '@/select/forms/selection-menu'
import Button from '@/ui/elements/button';
import { classes } from '@/lib/init-data';
import dynamic from 'next/dynamic';
const Select = dynamic(() => import('react-select'), { ssr: false });

const ClassForm = ({current, setClass, updateByName, updateProficiences, clearClass}) => {

   const [className, setClassName] = useState('');
   
   const [proficiencySelect, setProficiencySelect] = useState({skills: [], tools: []})
   const [isDisabled, setIsDisabled] = useState(true);
   const [buttonText, setButtonText] = useState('Select');

   const hasClass = current.class ? true : false

   const initProficiencies = useRef(null);
   const initEquipment = useRef(null);
    

   const handleSubmitClass = (e) => {
      e.preventDefault();
      if (className && !hasClass) setClass(className);
      else if (className && current.class !== className) setClass(className); // make update class
      else if (hasClass && !className) {
         // setSkills({})
         setProficiencySelect({skills: [], tools: []})
         clearClass()
      }
      setIsDisabled(true)
   }

   const handlePathSubmit = (e, id) => {
      e.preventDefault();
      const init = initProficiencies.current[id]
      
      const update = [...init, ...proficiencySelect[id]];
      updateProficiences(`proficiencies.class.${id}`, update);
   }

   const handleClassChange = (val) => {
      setClassName(val ? val.value : null);
   }

   const handleProficiencyChange = (val, action) => {
      let newVal = val.map(el => el.value)
      let cat = action.name
      setProficiencySelect((c) => ({...c, [cat]: newVal}))
   }
   useEffect(() => {
      if (hasClass && !initProficiencies.current) {
         initProficiencies.current = JSON.parse(JSON.stringify(current.proficiencies.class))
         initEquipment.current = JSON.parse(JSON.stringify(current.equipment.class))
      }
   }, [current])

   // useEffect(() => {
   //    if (isDisabled && current.name){
   //       if (className !== current.class) {
   //          if (hasClass) setButtonText('Update')
   //          setIsDisabled(false)
   //       }
   //       else setIsDisabled(true)
   //    }
   // }, [className])

   const tempAltSubmit = (val, id) => {
      if (id === 'class') {
         const update = val[0]
         if (update && !hasClass) setClass(update);
         else if (!update && hasClass) clearClass()
      } else if (id === 'skills' || id === 'tools') {
         const init = initProficiencies.current[id]
         const update = [...init, ...val];
         updateProficiences(`proficiencies.class.${id}`, update);
      }
   }
   const tempAltSubmitItem = (val, id) => {
      console.log(val)
      const init = initEquipment.current[id]
      let update;
      if (Array.isArray(val)) {
         update = [...init, ...val];
      } else {
         update = [...init, val.value];
      }
      // console.log(update, id)
      updateProficiences(`equipment.class.${id}`, update);
   }

   return (
      <div>
         { current.name && <SimpleSelectForm list={classes} title={'Select Character Class'} id={'class'} count={1} submit={tempAltSubmit} /> }
         { hasClass && <ProficiencySelect proficiencySelect={current.proficiencies.class.selectFromList} submit={tempAltSubmit} />}
         { hasClass && <ItemSelect itemSelect={current.equipment.class.selectFromList} submit={tempAltSubmitItem} />}


         {/* { hasClass && <ItemSelection itemOptions={current.equipment.class.selectFromList} currentItems={current.equipment.class} handleChange={handleProficiencyChange} handleSubmit={handlePathSubmit} updateProficiences={updateProficiences} />} */}
      </div>
   )
}

const ProficiencySelect = ({proficiencySelect, submit}) => {
   const skillSelect = proficiencySelect.skills;
   const toolSelect = proficiencySelect.tools;

   return (
      <>
         { skillSelect && <SimpleSelectForm list={skillSelect.list} title={skillSelect.title} id={'skills'} count={skillSelect.count} submit={submit} /> }
         { toolSelect && <SimpleSelectForm list={toolSelect.list} title={toolSelect.title} id={'tools'} count={toolSelect.count} submit={submit} />}
      </>
   )
}

const ItemSelect = ({itemSelect, submit}) => {
   const armourSelect = itemSelect.armour;
   const weaponsSelect = itemSelect.weapons;
   const equipmentSelect = itemSelect.equipment;
   const toolSelect = itemSelect.tools;

   const identifyItemSelect = (val, n) => {
      // let desc = [n]
      if (val.length > 1) {
         // desc.push('iterate')
         if (val.every(inner => inner.list.every(el => typeof el == 'string'))) {
            return
         } else {
            return (<IteratingGroupSelectForm list={val} id={n} submit={submit} />)
         }
         // val.forEach(inner => {
         //    if (inner.list.every(op => typeof op == 'string')) {
         //       // desc.push('no group')
         //       // if (inner.count > 1) return
         //       // else return
         //       return
         //    } else {
         //       return (<IteratingGroupSelectForm list={val} title={val.title} id={n} count={val.count} submit={submit} />)
         //       // desc.push('group')
         //       // if (inner.count > 1) return
         //       // else return
         //    }
         // })
      } else {
         // desc.push('no iterate')
         if (val[0].list.every(op => typeof op == 'string')) {
            return (<SimpleSelectForm list={val[0].list} title={val[0].title} id={n} count={val[0].count} submit={submit} />)
            // desc.push('no group')
            // desc.push('multi')
            // desc.push('single')
            // if (val[0].count > 1) return (<SimpleSelectForm list={val[0].list} title={val[0].title} id={n} count={val[0].count} submit={submit} />)
            // else return (<SimpleSelectForm list={val[0].list} title={val[0].title} id={n} count={val[0].count} submit={submit} />)
         } else {
            return (<GroupSelectForm list={val[0].list} title={val[0].title} id={n} count={val[0].count} submit={submit} />)
            // desc.push('group')
            // if (val[0].count > 1) return 
            // else 
         }
         
      }
   }

   return (
      <>
         { armourSelect && identifyItemSelect(armourSelect, 'armour') }
         { weaponsSelect && identifyItemSelect(weaponsSelect, 'weapons') }
         { equipmentSelect && identifyItemSelect(equipmentSelect, 'equipment') }
         { toolSelect && identifyItemSelect(toolSelect, 'tools') }
         {/* <SingleFormGroup list={weaponsSelect[0]} title={weaponsSelect[0].title} id={'weapons'} submit={submit} /> */}
      </>
   )
}

export default ClassForm;

const itemSelectList = (items) => {
   const result = {}
   Object.keys(items).forEach(i => items[i] ? result[i] = items[i] : null)
   return result
}

const selectInit = (items) => {
   const result = {}
   Object.keys(items).forEach(i => result[i] = [])
   return result
}

const ItemSelection = ({itemOptions, currentItems, handleSubmit, updateProficiences}) => {
   
   const [itemSelect, setItemSelect] = useState(itemSelectList(itemOptions))
   const [select, setSelect] = useState(selectInit(itemSelect))
   const initEquipment = useRef(null);

   const makeOptions = (op) => {
      const titleArray = op.title.split(' OR ')
      const list = op.list
      if (list.every(op => typeof op == 'string')) {
         return list.map(el => ({ value: el.toLowerCase(), label: el }))
      } else {
         let group = [{label: null, options: [] }]
         list.forEach((el,i) => {
            let name = titleArray[i]
            if (typeof el == 'string') {
               group[0].options.push({ value: el.toLowerCase(), label: el })
            } else {
               group.push({label: name, options: []})
               let options = el.map(el => ({ value: el.toLowerCase(), label: el }))
               group[group.length - 1].options = options
            }
         })
         return group
      }
   }

   const armourSelect = itemSelect.armour ? itemSelect.armour.map(el => makeOptions(el)) : null
   const weaponSelect = itemSelect.weapons ? itemSelect.weapons.map(el => makeOptions(el)) : null
   const equipmentSelect = itemSelect.equipment ? itemSelect.equipment.map(el => makeOptions(el)) : null
   const toolSelect = itemSelect.tools ? itemSelect.tools.map(el => makeOptions(el)) : null

   const change = (val, cat) => {
      let input = !val ? null : Array.isArray(val) ? val.flat() : [val]
      if (!input && select[cat].length) {
         setSelect((c) => ({...c, [cat]: []}))
      }
      else if (!input && !select[cat].length) return;
      else {
         let newVal = input.map(el => el.value)
         setSelect((c) => ({...c, [cat]: newVal}))
      }
      
   }
   const submit = (e, id) => {
      e.preventDefault();
      const init = initEquipment.current[id]
      const update = [...init, ...select[id]];
      updateProficiences(`equipment.class.${id}`, update)
   }

   useEffect(() => {
      if (!initEquipment.current) {
         initEquipment.current = JSON.parse(JSON.stringify(currentItems))
      }
   }, [])
   const displaySelectOption = (selectOpt, id) => {
      if (selectOpt) {
         if (selectOpt.length > 1) return (<SelectMenuMulti multiList={selectOpt} multiItems={itemSelect[id]} handleChange={change} handleSubmit={submit} id={id} />)
         else {
            let selectData = itemSelect[id][0]
            return (<SelectMenu list={selectOpt.flat()} title={selectData.title} count={selectData.count} currentCount={select[id].length} handleChange={change} handleSubmit={submit} id={id} />)
         }
      } else return null
   }

   return (
      <div>
         { displaySelectOption(armourSelect, 'armour') }
         { displaySelectOption(weaponSelect, 'weapons') }
         { displaySelectOption(equipmentSelect, 'equipment') }
         { displaySelectOption(toolSelect, 'tools') }
      </div>
   )
}