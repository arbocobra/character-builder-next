'use client'
import { useState } from 'react';
import Link from 'next/link';

export const Navigation = () => {

  return (
    <div className='z-3 hidden absolute top-0 lg:flex w-full justify-end gap-3 p-5'>
        <Link href='/about'>
          <div className='text-lg font-medium bg-dark-blue px-4 py-1 text-white hover:bg-light-blue'>Project Details</div>
        </Link>
      {/* <div className='group relative'> */}
        {/* <button className='text-lg w-22 font-medium bg-dark-blue px-4 py-1 text-white hover:bg-light-blue'>Log In</button> */}
        {/* <div className='absolute hidden flex-col z-1 group-hover:flex'> */}
          <Link href='/login'><div className='text-lg font-medium bg-dark-blue px-4 py-1 text-center text-white hover:bg-light-blue'>Login as User</div></Link>
          <Link href='/guest/character/create'><div className='text-lg font-medium bg-dark-blue px-4 py-1 text-center text-white hover:bg-light-blue'>Use as Visitor</div></Link>
        {/* </div> */}
      {/* </div> */}
    </div>
  )
}

export const MobileNavigation = () => {
  const [open, setOpen] = useState(false)
  const toggleMenu = () => setOpen(!open)

//   const linkStyle = 'text-lg font-medium bg-dark-blue px-4 py-1 text-center text-white hover:bg-light-blue'
   const linkStyle = '';
   const iconSpan = 'bg-dark-blue w-full h-1.5 rounded-md'

  return (
    <div className='w-full z-3 flex justify-end gap-3 lg:hidden fixed right-0 top-0 bottom-0 overscroll-none' onClick={toggleMenu}>
      { open ? 
      <div className='text-white text-xl w-full h-screen bg-dark-blue flex flex-col p-5 items-center'>
         <div className='text-[40px]/8 self-end flex-1' onClick={toggleMenu}>X</div>
         <div className='flex flex-col gap-5 text-left w-1/2 flex-4'>
            <Link href='/about'>
                <div className={linkStyle}>Project Details</div>
              </Link>
              <Link href='/signup'>
               <div className={linkStyle}>Sign Up</div>
            </Link>
            <Link href='/login'>
               <div className={linkStyle}>Login as User</div>
            </Link>
            <Link href='/guest/character/create'>
               <div className={linkStyle}>Use as Visitor</div>
            </Link>
         </div>
      </div> 
      : <div className='w-20 h-18 flex flex-col justify-between p-5' onClick={toggleMenu}>
         <span className={iconSpan}></span>
         <span className={iconSpan}></span>
         <span className={iconSpan}></span>
      </div> }
    </div>
  )
}