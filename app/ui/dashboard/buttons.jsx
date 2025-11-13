'use client'
import {deleteData, deleteUserData, signOutUser} from '@/app/lib/save-action';
import { useRouter } from 'next/navigation'
// import { signOut } from '@/auth';

import { ArrowLeftEndOnRectangleIcon } from '@heroicons/react/24/solid';

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

   const router = useRouter()
   const handleDelete = () => { 
      // if (window.confirm("Do you want to delete?")) {
      //    deleteUserData(id) 
      // }
      router.push('/dashboard/delete')
   }

   return (
      <form action={handleDelete}>
         <button type="submit" className='flex flex-row p-1 border-2 justify-center cursor-pointer hover:font-bold'>DELETE USER</button>
      </form>
   )
}

export const SignOutButton = () => {
   
   const handleSignOut = () => {
      if (window.confirm("Do you want to signout?")) {
         // console.log('sign out')
         signOutUser()
      }
      
   }
   return (
      <form action={handleSignOut}>
         <div className='flex flex-row w-40 gap-2'>
            <ArrowLeftEndOnRectangleIcon className='w-7' />
            <button type="submit" className='cursor-pointer'>Sign Out</button>
         </div>
      </form>
   )
}