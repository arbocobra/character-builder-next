import { useState, useEffect, useRef } from 'react'
import { altSpecies as species } from '@/lib/init-data'
import ProficiencySelect from '@/ui/character/forms/select/proficiency-select'
import HideDisplay from '@/ui/elements/hide-display';
import {SelectButton} from '@/ui/elements/button';
import { customStyles175 } from '@/ui/elements/select-theme'
import dynamic from 'next/dynamic';
const Select = dynamic(() => import('react-select'), { ssr: false });

const SpeciesContainer = (props) => {

   const hasSpecies = props.current.species ? true : false;
   const hasProficiencySelect = () => {
      if (!hasSpecies) return false;
      else {
         if (Object.values(props.current.proficiencies.species.selectFromList).some(el => el !== null)) return true;
         else return false;
      }
   }

   return (
      <div className='flex flex-col gap-5'>
         <SpeciesSelect {...props} />
         { hasProficiencySelect() && <ProficiencySelect {...props} id={'species'} />}
      </div>
   )
}

const SpeciesSelect = ({current, isEdit, getInitialValue, submit}) => {
   const speciesOptions = Object.keys(species).map(el => ({ value: el.toLowerCase(), label: el, info: species[el].sub }));
   const getCurrent = (c) => {
      let species = c.split(' ')
      return species.length > 1 ? species[1] : species[0]
   }
   
   const [selectSpecies, setSelectSpecies] = useState(isEdit ? getInitialValue(speciesOptions, getCurrent(current.species)) : '')
   const [subOptions, setSubOptions] = useState(null)
   const [display, setDisplay] = useState(true)
   
   const buttonText = isEdit ? 'Update' : 'Select';

   const displaySubspecies = () => {
      if (selectSpecies) {
         if (!selectSpecies.info) return false;
         else return true;
      } else return false
   }

   const subOptionsLookup = () => {
      let info = selectSpecies.info
      let options = info.map(el => ({ value: el.toLowerCase(), label: el}))
      setSubOptions(options)
   }
   const getSubspeciesOptions = () => {
      let selected = displaySubspecies()
      if (selected) {
         subOptionsLookup()
      } else setSubOptions(null)
   }
   
   const handleSpeciesChange = (val) => {
      if (val) {
         setSelectSpecies(val)
      } else {
         setSelectSpecies(null)
         setSubOptions(null)
      }
   }
   const handleSubmit = (data) => {
      const entries = Object.fromEntries(data.entries());
      submit('species', entries);
      setDisplay(false)
   }
   
   const resetDisplay = () => {
      setSelectSpecies(null)
      setDisplay(true)
   }

   useEffect(() => {
      getSubspeciesOptions()
   }, [current, selectSpecies])
   return (
      <div className='flex flex-col gap-3'>
         <div className='text-base font-medium'>Select Character Species</div>
         { display ? 
            <><form className='flex flex-row flex-wrap gap-3' action={handleSubmit}>
               <Select styles={customStyles175} options={speciesOptions} name='species' value={selectSpecies} id='species' onChange={handleSpeciesChange} required />
               {subOptions && <SubspeciesSelect subOptions={subOptions} isEdit={isEdit} getInitialValue={getInitialValue} currentSub={current.species} /> }
               <SelectButton value={buttonText} />
            </form>
            { selectSpecies && !subOptions && <div className=''>{selectSpecies.label} has no subspecies option</div> }</> 
            : <HideDisplay select={[selectSpecies]} resetDisplay={resetDisplay} />
         }
      </div>
   )
}

const SubspeciesSelect = ({subOptions, isEdit, getInitialValue, currentSub}) => {
   const [selectSubspecies, setSelectSubspecies] = useState(isEdit ? getInitialValue(subOptions, currentSub) : '');

   useEffect(() => {
      if (selectSubspecies) {
         let x = subOptions.find(el => el.value === selectSubspecies.value)
         if (x === undefined) setSelectSubspecies('')
      }
   },[subOptions])

   return (
      <Select styles={customStyles175} options={subOptions} name='subspecies' value={selectSubspecies} onChange={(v) => setSelectSubspecies(v)} required />
   )
}

export default SpeciesContainer;