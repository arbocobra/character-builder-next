'use client';

import useCharacter from '@/app/dashboard/character-context';

const CharacterDisplay = () => {

   const { character } = useCharacter();
   
   const basicNames = ['Name', 'Level', 'Proficiency Bonus']

   return (
      <div className='flex flex-col w-1/2 p-4 m-1'>
         Display
         {character.name && <DisplayCategory current={character} cat={'Basic Stats'} names={basicNames} />}
      </div>
   );
}

export default CharacterDisplay;

const DisplayCategory = ({current, cat, names}) => {
   
   const keyNames = names.map(name => name.toLowerCase().replace(' ', '_' ));

   return (
      <>
         <div>{cat}</div>
         { keyNames.map((key,i) => (<div key={`${cat}-${i}`}>{names[i]}: {current[key]}</div>))}
      </>
   )
}