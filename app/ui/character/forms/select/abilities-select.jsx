import { useState } from 'react';
import { OptionButtons } from '@/ui/elements/button';
import StandardArray from '@/ui/character/forms/menus/standard-array';
import RandomArray from '@/ui/character/forms/menus/random-array';
import PointBuy from '@/ui/character/forms/menus/point-buy';

const AbilitiesContainer = ({current, isEdit, submit}) => {

   const [abilitySelection, setAbilitySelection] = useState(null)
   const abilities = ['Strength', 'Dexterity', 'Constitution', 'Intelligence', 'Wisdom', 'Charisma']
   const selectionsOptions = [{label: 'Standard Array', value: 'standard'}, {label: 'Random Array', value: 'random'}, {label: 'Point Buy', value: 'point-buy'}]

   const handleSelect = (e, val) => {
      e.preventDefault()
      setAbilitySelection(val)
   }

   // const handleSubmit = () => {}

   return (
      <div className='flex flex-col gap-3'>
         <OptionButtons title='Choose ability selection method:' handleClick={handleSelect} id='ability' options={selectionsOptions} />
         { abilitySelection == 'standard' && <StandardArray abilities={current.abilities.base} isEdit={isEdit} labels={abilities} submit={submit} /> }
         { abilitySelection == 'random' && <RandomArray labels={abilities} submit={submit} /> }
         { abilitySelection == 'point-buy' && <PointBuy abilities={current.abilities.base} isEdit={isEdit} labels={abilities} submit={submit} /> }
      </div>
   )
}
export default AbilitiesContainer;