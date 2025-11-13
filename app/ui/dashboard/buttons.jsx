'use client'
import {deleteData, deleteUserData} from '@/app/lib/save-action';

export const DeleteButton = ({id}) => {
   const handleDelete = () => { 
      if (window.confirm("Do you want to delete?")) {
         deleteData(id) 
      }
   }

   return (
      <form action={handleDelete}>
         <button type="submit" className='text-sm text-white font-medium bg-dark-blue py-1 px-1.5 hover:bg-light-blue'>Delete</button>
      </form>
   )
}

export const DeleteUser = ({id}) => {
   
   const handleDelete = () => { 
      if (window.confirm("Do you want to delete?")) {
         deleteUserData(id) 
      }
   }

   return (
      <form action={handleDelete}>
         <button type="submit" className='flex flex-row p-1 border-2 justify-center cursor-pointer hover:font-bold'>DELETE USER</button>
      </form>
   )
}