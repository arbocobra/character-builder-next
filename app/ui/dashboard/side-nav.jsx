import LogoSmall from '@/ui/dashboard/logo-small'
import { ArrowLeftEndOnRectangleIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import { signOut } from '@/auth';

const SideNav = () => {
   return (
      <div id='nav-container' className='flex sticky flex-none flex-col bg-light-blue p-2 w-55 items-center font-semibold'>
         <div className='flex flex-1 flex-col justify-center'><LogoSmall /></div>
         <div className='flex flex-2 flex-col justify-start gap-3'>
            {/* <Link href='/'><div className=''>Home</div></Link> */}
            <div className='flex flex-row w-40 gap-2'>
               <ChevronRightIcon className='w-5' />
               <Link href='/dashboard'>Dashboard</Link>
            </div>
            <div className='flex flex-row w-40 gap-2'>
               <ChevronRightIcon className='w-5' />
               <Link href='/dashboard/character/create'>Create New Character</Link>
            </div>
         </div>
         <div className='flex flex-1 flex-col justify-center'>
            <form action={async () => {
               'use server'; 
               await signOut({ redirectTo: '/' });
            }}>
               <div className='flex flex-row w-40 gap-2'>
                  <ArrowLeftEndOnRectangleIcon className='w-7' />
                  <button className='cursor-pointer'>Sign Out</button>
               </div>
            </form>
         </div>
      </div>
   )
}
export default SideNav