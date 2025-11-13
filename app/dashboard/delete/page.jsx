'use client'
import {deleteUserData} from '@/app/lib/save-action';

const Page = () => {
   const submit = 'text-white bg-dark-blue font-medium rounded-sm text-16/1 px-4 py-1.5 hover:bg-light-blue'
   const handleDelete = () => { 
      if (window.confirm("Confirm delete")) {
         deleteUserData() 
      }
   }
   return (
      <div className='flex h-1/2 w-full flex-col justify-center items-center'>
         <div className='text-xl font-bold py-2'>Are you sure you want to delete?</div>
         <div className='text-md font-bold py-2'>This cannot be undone</div>
         <form action={handleDelete}>
            <button type="submit" className={submit}>DELETE USER</button>
         </form>
      </div>
   )
}

export default Page;