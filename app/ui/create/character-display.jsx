'use client';

import useCharacter from '@/app/dashboard/character-context';

const CharacterDisplay = () => {

   const { character } = useCharacter();

   const featureDisplay = character.class || character.species || character.background
   const proficDisplay = character.class || character.species || character.background

   return (
      <div className='flex flex-col w-1/2 p-4 m-1'>
         Display
         {character.name && <DisplayBasic current={character} cat={'Basic Stats'} />}
         {character.class && <DisplayClass current={character} cat={'Class Stats'} />}
         {proficDisplay && <DisplayProficiencies current={character.proficiencies.total} cat={'Proficiencies'} />}
         {/* {featureDisplay && <DisplayCategory current={character} cat={'Features'} names={featureNames} />} */}
      </div>
   );
}


export default CharacterDisplay;

const DisplayBasic = ({current, cat}) => {

   const basicObject = [
      {label: 'Name', value: current.name}, 
      {label: 'Level', value: current.level}, 
      {label: 'Speed', value: current.speed}, 
      {label: 'Proficiency Bonus', value: current.proficiency_bonus}, 
      {label: 'Armour Class', value: current.armour_class.total}, 
      {label: 'Hit Points', value: current.hit_points.total || 0}, 
      {label: 'Initiative Bonus', value: current.abilities.modifiers[1] || 0}
   ]

   return (
      <>
         <div>{cat}</div>
         { basicObject.map((el,i) => (<div key={`${cat}-${i}`}>{el.label}: {el.value}</div>))}
      </>
   )
}

const DisplayClass = ({current, cat}) => {

   const classObject = [
      {label: 'Class', value: current.class}, 
      {label: 'Hit Dice', value: `1d${current.hit_dice}`},
   ]

   return (
      <>
         <div>{cat}</div>
         { classObject.map((el,i) => (<div key={`${cat}-${i}`}>{el.label}: {el.value}</div>))}
      </>
   )
}

const DisplayProficiencies = ({current, cat}) => {

   const proficObject = [
      {label: 'Armour', value: current.armour}, 
      {label: 'Weapons', value: current.weapons}, 
      {label: 'Languages', value: current.languages}, 
      {label: 'Tools', value: current.tools}, 
   ]

   return (
      <>
         <div>{cat}</div>
         { proficObject.map((el,i) => (<div key={`${cat}-${i}`}>{el.label}: {el.value}</div>))}
      </>
   )
}