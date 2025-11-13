'use client'
import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeftEndOnRectangleIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import { DeleteUser, SignOutButton } from '@/ui/dashboard/buttons';

const TopNavMenu = ({id}) => {
   const [open, setOpen] = useState(false)
   const toggleMenu = () => setOpen(!open)

   const iconSpan = 'bg-white w-10 h-1.5 rounded-md'
   const containerStyle = open ? 'visible text-white text-xl w-full h-screen bg-dark-blue flex flex-col p-5 items-center' : 'invisible h-1'
   const buttonStyle = open ? 'invisible h-1' : 'visible flex flex-col justify-between h-18 p-5'

   return (
      <div className='w-1/2 flex justify-end fixed right-0 top-0'>

      <div className={containerStyle}>
         <div className='text-[40px]/8 self-end flex-1' onClick={toggleMenu}>X</div>
         <div className='flex flex-4 flex-col justify-start gap-3'>
            <div className='flex flex-row w-40 gap-2'>
               <ChevronRightIcon className='w-5' />
               <Link href='/dashboard'>Dashboard</Link>
            </div>
            <div className='flex flex-row w-40 gap-2'>
               <ChevronRightIcon className='w-5' />
               <Link href='/dashboard/character/create'>Create New Character</Link>
            </div>
            <div className='flex flex-row w-40 gap-2'>
               <ChevronRightIcon className='w-5' />
               <Link href='/about'>About This Project</Link>
            </div>
            <div className='flex flex-row w-40 gap-2'>
               <SignOutButton />
            </div>
            <div className='flex flex-row w-40 gap-2'>
               <DeleteUser id={id} />
            </div>
         </div>
      </div> 
      <div className={buttonStyle} onClick={toggleMenu}>
         <span className={iconSpan}></span>
         <span className={iconSpan}></span>
         <span className={iconSpan}></span>
      </div>
    </div>
   )
}

export const TopNavMenuGuest = () => {
   const [open, setOpen] = useState(false)
   const toggleMenu = () => setOpen(!open)
   const iconSpan = 'bg-white w-10 h-1.5 rounded-md'
   const containerStyle = open ? 'visible text-white text-xl w-full h-screen bg-dark-blue flex flex-col p-5 items-center' : 'invisible h-1'
   const buttonStyle = open ? 'invisible h-1' : 'visible flex flex-col justify-between h-18 p-5'

   return (
      <div className='w-1/2 flex justify-end fixed right-0 top-0'>

      <div className={containerStyle}>
         <div className='text-[40px]/8 self-end flex-1' onClick={toggleMenu}>X</div>
         <div className='flex flex-2 flex-col justify-start gap-3'>
            <div className='flex flex-row w-40 gap-2'>
               <ChevronRightIcon className='w-5' />
               <Link href='/'>Home</Link>
            </div>
            <div className='flex flex-row w-40 gap-2'>
               <ChevronRightIcon className='w-5' />
               <Link href='/about'>About This Project</Link>
            </div>
         </div>
      </div> 
      <div className={buttonStyle} onClick={toggleMenu}>
         <span className={iconSpan}></span>
         <span className={iconSpan}></span>
         <span className={iconSpan}></span>
      </div>
    </div>
   )
}

export default TopNavMenu;