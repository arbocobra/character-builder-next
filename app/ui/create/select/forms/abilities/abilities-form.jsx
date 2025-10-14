'use client';

import { useState, useEffect, useRef } from 'react';
import { ToggleButton, OptionButtons } from '@/ui/elements/button';
import { HideAbilitiesDisplay } from '@/ui/elements/hide-display'
import StandardArray from './standard-array';
import RandomArray from './random-array';
import PointBuy from './point-buy';
import RadioSelect from '@/ui/elements/radio';

const AbilitiesForm = ({current, updateAbilities}) => {
   const [display, setDisplay] = useState(true)
   const [select, setSelect] = useState([])
   const [abilitySelection, setAbilitySelection] = useState(null)
   const abilities = ['Strength', 'Dexterity', 'Constitution', 'Intelligence', 'Wisdom', 'Charisma']
   
   const handleSubmit = (val) => {
      setSelect(val)
      setDisplay(false)
      updateAbilities(val)
   }

   const handleSelect = (e, val) => {
      e.preventDefault()
      setAbilitySelection(val)
   }

   const radioOptions = [{label: 'Standard Array', value: 'standard'}, {label: 'Random Array', value: 'random'}, {label: 'Point Buy', value: 'point-buy'}]

   // if (current.name) {
   //    return (
   //       <div className='bg-emerald-100 p-2'>
   //          <div className='flex flex-row justify-between'>
   //             <div>Display Ability Selection</div>
   //             <ToggleButton value={display ? 'Close' : 'Open'}  handleClick={toggleDisplay}/>
   //          </div>
   //          { (display && selectDisplay) ? (
   //             <div className='flex flex-col gap-3'>
   //                { current.name && <RadioSelect title='Choose ability selection method:' handleSelect={handleSelect} id='ability' options={radioOptions} />}
   //                { abilitySelection == 'standard' && <StandardArray abilities={abilities} submit={handleSubmit} /> }
   //                { abilitySelection == 'random' && <RandomArray abilities={abilities} submit={handleSubmit} /> }
   //                { abilitySelection == 'point-buy' && <PointBuy abilities={abilities} submit={handleSubmit} />} 
   //          </div>) 
   //          : (display && !selectDisplay) ? <HideAbilitiesDisplay select={select} setDisplay={setSelectDisplay} /> 
   //          : null }
   //       </div>
   //    )
   // }
   return (
      <div className='flex flex-col gap-3'>
         {display ? 
         <>
            <OptionButtons title='Choose ability selection method:' handleClick={handleSelect} id='ability' options={radioOptions} />
            {/* <RadioSelect title='Choose ability selection method:' handleSelect={handleSelect} id='ability' options={radioOptions} /> */}
            { abilitySelection == 'standard' && <StandardArray abilities={abilities} submit={handleSubmit} /> }
            { abilitySelection == 'random' && <RandomArray abilities={abilities} submit={handleSubmit} /> }
            { abilitySelection == 'point-buy' && <PointBuy abilities={abilities} submit={handleSubmit} />} 
         </> : <HideAbilitiesDisplay select={select} setDisplay={setDisplay} />
         }
      </div>
      )
}

export default AbilitiesForm;