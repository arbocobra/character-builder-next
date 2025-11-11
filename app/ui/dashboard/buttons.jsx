'use client'
import {deleteData} from '@/app/lib/save-action';

export const DeleteButton = ({id}) => {
   const handleDelete = () => { deleteData(id) }

   return (
      <form action={handleDelete}>
         <button type="submit" className='text-sm text-white font-medium bg-dark-blue py-1 px-1.5 hover:bg-light-blue'>Delete</button>
      </form>
   )
}