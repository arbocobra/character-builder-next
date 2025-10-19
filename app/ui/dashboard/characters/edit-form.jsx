'use client'

import dynamic from 'next/dynamic';
const Select = dynamic(() => import('react-select'), { ssr: false });

const EditCharacterForm = ({character}) => {
   const initialState = { message: null, errors: {} };
   const handleNameChange = () => {}
   const handleLevelChange = () => {}
   const options = [...Array(20).keys()].map(l => ({label: l + 1, value: l + 1}))

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
                  <Select options={options} name='level' onChange={handleLevelChange}
                     defaultValue={options.find((x) => x.value === character.level)} />
               </label>
            </div>
         </div>
      </form>
   )
}

export default EditCharacterForm