'use client';

import { useState, useEffect, useRef } from 'react';
import { ToggleButton } from '@/ui/elements/button';
import StandardArray from './standard-array';
import RandomArray from './random-array';

const AbilitiesForm = ({current, updateByPath}) => {
   const [display, setDisplay] = useState(true)
   const [abilitySelection, setAbilitySelection] = useState(null)
   // const hasClass = current.class ? true : false //hasBase?
   const abilities = ['Strength', 'Dexterity', 'Constitution', 'Intelligence', 'Wisdom', 'Charisma']
   const handleSubmit = (val) => {
      updateByPath('abilities.base', val)
   }

   const handleSelect = (e) => {
      // e.preventDefault()
      // const data = new FormData(e.target)
      console.log(e.target.value)
      setAbilitySelection(e.target.value)
   }

   const toggleDisplay = () => setDisplay(!display)

   // useEffect(() => {
   //    if (hasClass && !initProficiencies.current && !initEquipment.current) {
   //       initProficiencies.current = JSON.parse(JSON.stringify(current.proficiencies.class))
   //       initEquipment.current = JSON.parse(JSON.stringify(current.equipment.class))
   //    }
   // }, [current])

   if (current.name) {
      return (
         <div className='bg-emerald-100 p-2'>
            <div className='flex flex-row justify-between'>
               <div>Display Ability Selection</div>
               <ToggleButton value={display ? 'Close' : 'Open'}  handleClick={toggleDisplay}/>
            </div>
            { display && (<div>
               { current.name && (
                  <>
                  <div>Choose ability selection method:</div>
                  <div className='flex flex-row justify-evenly'>
                     <label><input type='radio' name='ability' id='standard' value='standard' onChange={handleSelect} />Standard Array</label>
                     <label><input type='radio' name='ability' id='random' value='random' onChange={handleSelect} />Random Array</label>
                     <label><input type='radio' name='ability' id='point-buy' value='point-buy' onChange={handleSelect} />Point Buy</label>
                  </div>
                  </>
               ) }
            </div>) }
            { abilitySelection == 'standard' && <StandardArray abilities={abilities} submit={handleSubmit} /> }
            { abilitySelection == 'random' && <RandomArray abilities={abilities} submit={handleSubmit} /> }
            { abilitySelection == 'point-buy' && <div>Point Buy</div>}
         </div>
      )
   }
}

export default AbilitiesForm;