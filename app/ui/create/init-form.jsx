'use client';

import { useState } from 'react';
import { Button } from '@/ui/elements';
import { CreateCharacter } from '@/lib/actions';


const InitialForm = ({updateCharacter}) => {

   const [name, setName] = useState('');
   const [level, setLevel] = useState(1);

   const handleSubmit = (e) => {
      e.preventDefault();
      const character = CreateCharacter(name, level);
      updateCharacter(character);
      // console.log('Character created:', character);
      // console.log('This is a test', character.OpTest())
   }

   return (
      <form className='flex flex-col gap-3' onSubmit={handleSubmit}>
         <input type='text' name='characterName' placeholder='Character Name' required value={name} onChange={(e) => setName(e.target.value)} />
         <select name='characterLevel' value={level} onChange={(e) => setLevel(e.target.value)} >
            {[...Array(20).keys()].map(level => (
               <option key={level + 1} value={level + 1}>{level + 1}</option>
            ))}
         </select>
         <Button />
      </form>
   )
}

export default InitialForm;