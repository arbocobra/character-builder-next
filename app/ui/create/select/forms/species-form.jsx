import { useState, useEffect, useRef } from 'react'
import { species, subspecies } from '@/lib/init-data'
import { ConditionalTwoPartSimpleSelection, SimpleSelectForm, GroupSelectForm, IteratingGroupSelectForm } from '@/select/forms/selection-menu'
import HideDisplay from '@/ui/elements/hide-display';
import {SubmitButton} from '@/ui/elements/button';
import { customStyles175 } from '@/ui/elements/select-theme'
import dynamic from 'next/dynamic';
const Select = dynamic(() => import('react-select'), { ssr: false });

const SpeciesForm = ({current, setSpecies, updateByPath, changeSpecies}) => {
   const initProficiencies = useRef(null);
   const hasSpecies = current.species ? true : false;
   
   const handleSubmitSpecies = (speciesVal, subspeciesVal) => {
      if (!hasSpecies) setSpecies(speciesVal, subspeciesVal);
      else changeSpecies(speciesVal, subspeciesVal)
   }

   const handleSubmitProficiency = (val, id) => {
      const init = initProficiencies.current[id]
      const update = [...init, ...val];
      updateByPath(`proficiencies.species.${id}`, update);
      // console.log(val,id)
   }

   useEffect(() => {
         if (hasSpecies) {
            initProficiencies.current = JSON.parse(JSON.stringify(current.proficiencies.species))
         }
      }, [current.species])

   return (
      <div className='flex flex-col gap-3'>
         <SpeciesSelection submit={handleSubmitSpecies} />
         { hasSpecies && <ProficiencySelect proficiencySelect={current.proficiencies.species.selectFromList} submit={handleSubmitProficiency} />}
      </div>
   )
}
export default SpeciesForm

const SpeciesSelection = ({submit}) => {
   const [selectSpecies, setSelectSpecies] = useState(null);
   const [selectSubspecies, setSelectSubspecies] = useState(null);
   const [subOptions, setSubOptions] = useState(null)
   const [display, setDisplay] = useState(true)

   const speciesOptions = species.map(el => ({ value: el.toLowerCase(), label: el }));

   const subLookup = (val) => {
      if (subspecies[val]) {
         let sub = subspecies[val]
         let ops = sub.map(el => ({ value: el.toLowerCase(), label: el }))
         setSubOptions(ops)
      } else {
         setSubOptions(null)
      }
   }
   
   const handleSpeciesChange = (val) => {
      if (val) {
         setSelectSpecies(val)
         subLookup(val.value)
      } else {
         setSelectSpecies(null)
         setSelectSubspecies(null)
         setSubOptions(null)
      }
   }
   
   const handleSubChange = (val) => setSelectSubspecies(val)

   const handleSubmit = (e) => {
      e.preventDefault();
      setDisplay(false)
      submit(selectSpecies.value, selectSubspecies ? selectSubspecies.value : null, 'species')
   }

   const resetDisplay = () => {
      setSelectSpecies(null)
      setSelectSubspecies(null)
      setDisplay(true)
   }

   return (
      <div className='flex flex-col gap-3'>
         <div className='text-base font-medium'>Select Character Species</div>
         {display ?
         <>
            <form className='flex flex-row gap-3' onSubmit={handleSubmit}>
               <Select styles={customStyles175} options={speciesOptions} required name='species' value={selectSpecies} id='species' onChange={handleSpeciesChange} />
               {subOptions && <Select styles={customStyles175} options={subOptions} required name='subspecies' value={selectSubspecies} id='subspecies' onChange={handleSubChange} />}
               <SubmitButton value='Submit' isDisabled={false} />
            </form> 
         </>
         : <HideDisplay select={selectSubspecies ? [selectSubspecies] : [selectSpecies]} resetDisplay={resetDisplay} /> }
      </div>
   )
}


const ProficiencySelect = ({proficiencySelect, submit}) => {
   
   const armourSelect = proficiencySelect.armour;
   const weaponsSelect = proficiencySelect.weapons;
   const toolSelect = proficiencySelect.tools;
   const skillSelect = proficiencySelect.skills
   const languageSelect = proficiencySelect.languages
   const savingThrowSelect = proficiencySelect.savingThrows

   const identifyItemSelect = (val, n) => {
      if (val.length > 1) {
         if (val.every(inner => inner.list.every(el => typeof el == 'string'))) return
         else return (<IteratingGroupSelectForm list={val} id={n} submit={submit} />)
      } else {
         if (val[0].list.every(op => typeof op == 'string')) return (<SimpleSelectForm list={val[0].list} title={val[0].title} id={n} count={val[0].count} submit={submit} />)
         else return (<GroupSelectForm list={val[0].list} title={val[0].title} id={n} count={val[0].count} submit={submit} />)
      }
   }

   if ([armourSelect,weaponsSelect, toolSelect, skillSelect, languageSelect, savingThrowSelect].some(el => el)) {
      return (
         <>
            <div className='text-base font-medium'>Select Proficiencies</div>
            { armourSelect && identifyItemSelect(armourSelect, 'armour') }
            { weaponsSelect && identifyItemSelect(weaponsSelect, 'weapons') }
            { toolSelect && identifyItemSelect(toolSelect, 'tools') }
            { skillSelect && identifyItemSelect(skillSelect, 'skills') }
            { languageSelect && identifyItemSelect(languageSelect, 'languages') }
            { savingThrowSelect && identifyItemSelect(savingThrowSelect, 'saving throws') }
         </>
      )
   }
}