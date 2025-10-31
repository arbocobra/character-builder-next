'use client'
import {saveData, updateData} from '@/app/lib/save-action';

export const SaveButton = ({current, id}) => {

   const submit = 'text-white bg-dark-blue hover:bg-light-blue focus:outline-none focus:ring-4 focus:ring-dark-blue font-medium rounded-md text-16/1 px-4 py-1.5'

   const handleSave = () => {
      saveData(current, id)
   }

   return (
      <form action={handleSave}>
         <button className={submit} type="submit">Save</button>
      </form>
   )
}

export const UpdateButton = ({current}) => {

   const submit = 'text-white bg-dark-blue hover:bg-light-blue focus:outline-none focus:ring-4 focus:ring-dark-blue font-medium rounded-md text-16/1 px-4 py-1.5'

   const handleSave = () => {
      updateData(current, current.id)
   }

   return (
      <form action={handleSave}>
         <button className={submit} type="submit">Save</button>
      </form>
   )
}