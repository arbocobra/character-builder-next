'use client'

import { classes } from '@/lib/init-data';
import dynamic from 'next/dynamic';
const Select = dynamic(() => import('react-select'), { ssr: false });

const EditCharacterForm = ({character}) => {
   const initialState = { message: null, errors: {} };
   const handleNameChange = () => {}
   const handleLevelChange = () => {}
   const handleClassChange = () => {}
   const levelOptions = [...Array(20).keys()].map(l => ({label: l + 1, value: l + 1}))
   const classOptions = classes.map(el => ({ value: el.toLowerCase(), label: el }));

   return (
      <form>
         <div>
            {/* Name */}
            <div>
               <label htmlFor='characterName' className='text-base font-medium text-gray-900 flex gap-2'>
                  Name:
                  <input type='text' id='characterName' placeholder='Character Name' required defaultValue={character.name}
                     onChange={handleNameChange} />
               </label>
            </div>
            {/* Level */}
            <div>
               <label className='text-base font-medium text-gray-900 flex gap-2'>
                  Level:
                  <Select options={levelOptions} name='level' onChange={handleLevelChange}
                     defaultValue={levelOptions.find((x) => x.value === character.level)} />
               </label>
            </div>
            {/* Class */}
            <div>
               <label className='text-base font-medium text-gray-900 flex gap-2'>
                  Class:
                  <Select options={classOptions} name='class' onChange={handleClassChange}
                     defaultValue={classOptions.find((x) => x.value === character.class)} />
               </label>
            </div>
         </div>
      </form>
   )
}

export default EditCharacterForm