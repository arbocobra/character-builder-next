'use client';

import useCharacter from '@/dash/character-context';
import DisplayContainer from './category-base'
import { TextRow, BlockRow, ListRow, FeatureRow, AbilitiesRow, SavesRow } from '@/ui/elements/display-rows'

const CharacterDisplay = () => {

   const { character } = useCharacter();

   const featureDisplay = character.class || character.species || character.background
   const proficDisplay = character.class || character.species || character.background
   const abilityDisplay = character.name ? true : false

   const getRow = (el,i, c) => {
      if (el.type === 'text-row') {
         return <TextRow key={`${c}-${i}`} val={el} />
      } else if (el.type === 'block-row') {
         return <BlockRow key={`${c}-${i}`} val={el} />
      } else if (el.type === 'list-row') {
         return <ListRow key={`${c}-${i}`} val={el} cat={c.toLowerCase()} />
      } else if (el.type === 'feature-row') {
         return <FeatureRow key={`${c}-${i}`} val={el} />
      } else if (el.type === 'abilities-row') {
         return <AbilitiesRow key={`${c}-${i}`} val={el} />
      } else if (el.type === 'saves-row') {
         return <SavesRow key={`${c}-${i}`} val={el} />
      }
   }

   return (
      <div className='flex flex-col w-1/2 p-4 m-1 gap-y-3'>
         {character.name && 
            <DisplayContainer name='Basic'>
               <DisplayBasic current={character} cat={'Basic Stats'} getRow={getRow} />
            </DisplayContainer>}
         {proficDisplay && 
            <DisplayContainer name='Proficiencies'>
               <DisplayProficiencies current={character.proficiencies.total} cat={'Proficiencies'} getRow={getRow} />
            </DisplayContainer>}
         {featureDisplay && 
            <DisplayContainer name='Features'>
               <DisplayFeatures current={character.features} cat={'Proficiencies'} getRow={getRow} />
            </DisplayContainer>}
         {proficDisplay && 
            <DisplayContainer name='Items'>
               <DisplayItems current={character.items.total} cat={'Items'} getRow={getRow} />
            </DisplayContainer>}
         {abilityDisplay && 
            <DisplayContainer name='Abilities & Saving Throws'>
               <DisplayAbilities abilities={character.abilities} cat={'Abilities'} bonus={character.proficiency_bonus} saves={character.proficiencies.total.savingThrows} getRow={getRow} />
            </DisplayContainer>}
      </div>
   );
}


export default CharacterDisplay;

const DisplayBasic = ({current, cat, getRow}) => {

   let initValue = current.abilities.modifiers[1] > 0 ? `+${current.abilities.modifiers[1]}` : current.abilities.modifiers[1]
   let diceValue = current.hit_dice ? `1d${current.hit_dice}` : ''

   const basicObject = [
      {label: 'Name', value: current.name, type: 'text-row'}, 
      {label: 'Level', value: current.level, type: 'text-row'}, 
      {label: 'Class', value: current.class, type: 'text-row'}, 
      {label: 'Subclass', value: current.class || '', type: 'text-row'}, 
      {label: 'Species', value: current.species || '', type: 'text-row'}, 
      {label: 'Background', value: current.background || '', type: 'text-row'}, 
      {label: 'Proficiency Bonus', value: `+${current.proficiency_bonus}`, type: 'block-row'}, 
      {label: 'Armour Class', value: current.armour_class.total, type: 'block-row'}, 
      {label: 'Hit Points', value: current.hit_points.total || 0, type: 'block-row'}, 
      {label: 'Hit Dice', value: diceValue , type: 'block-row'}, 
      {label: 'Initiative', value: initValue, type: 'block-row'}, 
      {label: 'Speed', value: current.speed.total, type: 'block-row'}, 
   ]

   return (
      <div className='flex flex-col gap-y-3'>
         <div className='grid grid-cols-12 gap-3'>
            { basicObject.map((el,i) => getRow(el,i, cat))}
         </div>
      </div>
   )
}

const DisplayProficiencies = ({current, cat, getRow}) => {
 
   const proficObject = [
      {label: 'Armour', value: current.armour, type: 'list-row'}, 
      {label: 'Weapons', value: current.weapons, type: 'list-row'}, 
      {label: 'Languages', value: current.languages, type: 'list-row'}, 
      {label: 'Tools', value: current.tools, type: 'list-row'}, 
      {label: 'Skills', value: current.skills, type: 'list-row'}
   ]

   return (
      <div className='flex flex-col gap-y-3'>
         <div className='grid grid-cols-12 gap-3'>
            { proficObject.map((el,i) => getRow(el,i, cat))}
         </div>
      </div>
   )
}

const DisplayFeatures = ({current, cat, getRow}) => {
   const featureObject = [
      {label: 'Class', value: current.class, type: 'feature-row'}, 
      {label: 'Species', value: current.species, type: 'feature-row'}, 
      {label: 'Background', value: current.background, type: 'feature-row'}, 
      {label: 'Feats', value: current.feats, type: 'feature-row'}, 
   ]
   return (
      <div className='flex flex-col gap-y-3'>
         <div className='grid grid-cols-12 gap-3'>
            { featureObject.map((el,i) => getRow(el,i, cat))}
         </div>
      </div>
   )
}

const DisplayItems = ({current, cat, getRow}) => {

   const itemObject = [
      {label: 'Armour', value: current.armour, type: 'list-row'}, 
      {label: 'Weapons', value: current.weapons, type: 'list-row'}, 
      {label: 'Equipment', value: current.equipment, type: 'list-row'}, 
      {label: 'Currency', value: current.currency, type: 'block-row'}, 
      {label: 'Tools', value: current.tools, type: 'list-row'}
   ]

   return (
      <div className='flex flex-col gap-y-3'>
         <div className='grid grid-cols-12 gap-3'>
            { itemObject.map((el,i) => getRow(el,i, cat))}
         </div>
      </div>
   )
}

const DisplayAbilities = ({abilities, cat, bonus, saves, getRow}) => {

   const AbilityObject = [
      {label: 'Strength', total: abilities.total[0], modifier: abilities.modifiers[0], type: 'abilities-row'}, 
      {label: 'Dexterity', total: abilities.total[1], modifier: abilities.modifiers[1], type: 'abilities-row'}, 
      {label: 'Constitution', total: abilities.total[2], modifier: abilities.modifiers[2], type: 'abilities-row'}, 
      {label: 'Intelligence', total: abilities.total[3], modifier: abilities.modifiers[3], type: 'abilities-row'}, 
      {label: 'Wisdom', total: abilities.total[4], modifier: abilities.modifiers[4], type: 'abilities-row'}, 
      {label: 'Charisma', total: abilities.total[5], modifier: abilities.modifiers[5], type: 'abilities-row'}, 
   ]

   const applyProficiency = (id, i) => {
      let isProfic = saves.includes(id) ? true : false
      let total = isProfic ? abilities.modifiers[i] + bonus : abilities.modifiers[i]
      
      return getRow({label: id, proficient: isProfic, total, type: 'saves-row'}, i, cat)
   }

   const SavesArray = ['Strength', 'Dexterity', 'Constitution', 'Intelligence', 'Wisdom', 'Charisma']

   return (
      <div className='flex flex-col gap-y-4'>
         <div className='grid grid-cols-12 gap-3'>
            { AbilityObject.map((el,i) => getRow(el,i, cat))}
         </div>
         <div className='grid grid-cols-12 gap-3'>
            { SavesArray.map((el,i) => applyProficiency(el, i))}
         </div>
      </div>
   )
}


