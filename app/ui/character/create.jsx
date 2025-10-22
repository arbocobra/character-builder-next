'use client'

import { classes } from '@/lib/init-data';
import ClassSelect from '@/ui/character/forms/class-select'
import dynamic from 'next/dynamic';
const Select = dynamic(() => import('react-select'), { ssr: false });

const CreateCharacterForm = () => {
   const initialState = { message: null, errors: {} };

   const handleSubmitClass = (className, subName = null) => {
      console.log(className, subName)
   }

   return (
      <div>
         <ClassSelect submit={handleSubmitClass} level={1} defaultClass={null} defaultSubclass={null} />
      </div>
   )
}

export default CreateCharacterForm