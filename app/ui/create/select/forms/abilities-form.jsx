'use client';

import { useState, useEffect, useRef } from 'react';
import { ToggleButton } from '@/ui/elements/button';
import StandardArray from './standard-array';
import RandomArray from './random-array';
import PointBuy from './point-buy';
import RadioSelect from '@/ui/elements/radio';

const AbilitiesForm = ({current, updateByPath, updateAbilities}) => {
   const [display, setDisplay] = useState(false)
   const [abilitySelection, setAbilitySelection] = useState(null)
   // const hasClass = current.class ? true : false //hasBase?
   const abilities = ['Strength', 'Dexterity', 'Constitution', 'Intelligence', 'Wisdom', 'Charisma']
   
   const handleSubmit = (val) => {
      // updateByPath('abilities.base', val)
      updateAbilities(val)
   }

   const handleSelect = (e) => {
      e.preventDefault()
      setAbilitySelection(e.target.value)
   }

   const toggleDisplay = () => setDisplay(!display)

   // useEffect(() => {
   //    if (hasClass && !initProficiencies.current && !initEquipment.current) {
   //       initProficiencies.current = JSON.parse(JSON.stringify(current.proficiencies.class))
   //       initEquipment.current = JSON.parse(JSON.stringify(current.equipment.class))
   //    }
   // }, [current])

   const radioOptions = [{label: 'Standard Array', value: 'standard'}, {label: 'Random Array', value: 'random'}, {label: 'Point Buy', value: 'point-buy'}]

   if (current.name) {
      return (
         <div className='bg-emerald-100 p-2'>
            <div className='flex flex-row justify-between'>
               <div>Display Ability Selection</div>
               <ToggleButton value={display ? 'Close' : 'Open'}  handleClick={toggleDisplay}/>
            </div>
            { display && (<div className='flex flex-col gap-3'>
               { current.name && <RadioSelect title='Choose ability selection method:' handleSelect={handleSelect} id='ability' options={radioOptions} />}
               { abilitySelection == 'standard' && <StandardArray abilities={abilities} submit={handleSubmit} /> }
               { abilitySelection == 'random' && <RandomArray abilities={abilities} submit={handleSubmit} /> }
               { abilitySelection == 'point-buy' && <PointBuy abilities={abilities} submit={handleSubmit} />}
            </div>) }
         </div>
      )
   }
}

export default AbilitiesForm;