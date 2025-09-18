'use client';

import useCharacter from '@/dash/character-context';

const CharacterDisplay = () => {

   const { character } = useCharacter();

   const featureDisplay = character.class || character.species || character.background
   const proficDisplay = character.class || character.species || character.background
   const abilityDisplay = character.name ? true : false

   return (
      <div className='flex flex-col w-1/2 p-4 m-1 gap-y-3'>
         {character.name && <DisplayBasic current={character} cat={'Basic Stats'} />}
         {character.class && <DisplayClass current={character} cat={'Class Stats'} />}
         {proficDisplay && <DisplayProficiencies current={character.proficiencies.total} cat={'Proficiencies'} />}
         {featureDisplay && <DisplayFeatures current={character.features} cat={'Features'} />}
         {proficDisplay && <DisplayEquipment current={character.equipment.total} cat={'Items'} />}
         {abilityDisplay && <DisplayAbilities current={character.abilities} cat={'Abilities'}/>}
      </div>
   );
}


export default CharacterDisplay;

const DisplayBasic = ({current, cat}) => {

   const basicObject = [
      {label: 'Name', value: current.name}, 
      {label: 'Level', value: current.level}, 
      {label: 'Species', value: current.species || ''},
      {label: 'Proficiency Bonus', value: current.proficiency_bonus}, 
      {label: 'Armour Class', value: current.armour_class.total}, 
      {label: 'Hit Points', value: current.hit_points.total || 0}, 
      {label: 'Initiative Bonus', value: current.abilities.modifiers[1] || 0},
      {label: 'Speed', value: current.speed},
   ]

   return (
      <div className='gap-y-3 p-2 border-1'>
         <p>{cat}</p>
         <div className='flex flex-row flex-wrap gap-y-1'>{ basicObject.map((el,i) => (<div className='basis-1/2' key={`${cat}-${i}`}>{el.label}: {el.value}</div>))}</div>
      </div>
   )
}

const DisplayClass = ({current, cat}) => {

   const classObject = [
      {label: 'Class', value: current.class}, 
      {label: 'Hit Dice', value: `1d${current.hit_dice}`},
   ]

   return (
      <div className='gap-y-3 p-2 border-1'>
         <p>{cat}</p>
         <div className='flex flex-row flex-wrap gap-y-1'>{ classObject.map((el,i) => (<div className='basis-1/2'  key={`${cat}-${i}`}>{el.label}: {el.value}</div>))}</div>
      </div>
   )
}

const DisplayProficiencies = ({current, cat}) => {
 
   const proficObject = [
      {label: 'Armour', value: current.armour}, 
      {label: 'Weapons', value: current.weapons}, 
      {label: 'Languages', value: current.languages}, 
      {label: 'Tools', value: current.tools}, 
      {label: 'Skills', value: current.skills}
   ]

   const valueList = (list) => list.map((l, i) => (<div key={`prof-display-${i}`}>{l}</div>))

   return (
      <div className='gap-y-3 p-2 border-1'>
         <p>{cat}</p>
         <div className='flex flex-col gap-y-1'>
            { proficObject.map((el,i) => (
               <div className='flex flex-row gap-1' key={`${cat}-${i}`}>
                  <div>{el.label}:</div>
                  <div className='flex flex-row flex-wrap gap-x-2 gap-y-1'>{valueList(el.value)}</div>
               </div>))}
         </div>
      </div>
   )
}

const DisplayFeatures = ({current, cat}) => {
   return (
      <div className='gap-y-3 p-2 border-1'>
         <p>{cat}</p>
         {['class', 'species', 'background', 'feats'].map((c) => {
            if (current[c].length) return (
               <div key={`feat-${c}`}>
                  <p className='uppercase underline'>{c}</p>
                  <div className='flex flex-row flex-wrap gap-x-2 gap-y-1'>{current[c].map((f,i) => (<div  key={`f-${c}-${i}`}>{f.name}</div>))}</div>
               </div>
            )
         })}
      </div>
   )
}

const DisplayEquipment = ({current, cat}) => {

   const equipObject = [
      {label: 'Armour', value: current.armour}, 
      {label: 'Weapons', value: current.weapons}, 
      {label: 'Equipment', value: current.equipment}, 
      {label: 'Currency', value: current.currency}, 
      {label: 'Tools', value: current.tools}
   ]

   const valueList = (list) => list.map((l, i) => (<div key={`item-display-${i}`}>{l}</div>))

   return (
      <div className='gap-y-3 p-2 border-1'>
         <p>{cat}</p>
         <div className='flex flex-col gap-y-1'>
            { equipObject.map((el,i) => (
               <div className='flex flex-row gap-1' key={`${cat}-${i}`}>
                  <div>{el.label}:</div>
                  <div className='flex flex-row flex-wrap gap-x-2 gap-y-1'>{valueList(el.value)}</div>
               </div>))}
         </div>
      </div>
   )
}

const DisplayAbilities = ({current, cat}) => {
   const AbilityObject = [
      {label: 'Strength', total: current.total[0], modifier: current.modifiers[0]}, 
      {label: 'Dexterity', total: current.total[1], modifier: current.modifiers[1]}, 
      {label: 'Constitution', total: current.total[2], modifier: current.modifiers[2]}, 
      {label: 'Intelligence', total: current.total[3], modifier: current.modifiers[3]}, 
      {label: 'Wisdom', total: current.total[4], modifier: current.modifiers[4]}, 
      {label: 'Charisma', total: current.total[5], modifier: current.modifiers[5]}, 
   ]

   return (
      <div className='gap-y-3 p-2 border-1'>
         <p>{cat}</p>
         <div className='flex flex-row gap-1 flex-wrap'>
            { AbilityObject.map((el,i) => (
               <div className='border-1 flex flex-col justify-center basis-1/4 rounded-full aspect-square' key={`${cat}-${i}`}>
                  
                  
                  <div className='flex justify-center'>{el.label}:</div>
                  <div className='flex justify-center text-lg'>{el.total}</div>
                  <div className='flex justify-center text-sm'>{el.modifier > 0 ? `+${el.modifier}` : el.modifier}</div>
               </div>))}
         </div>
      </div>
   )
}