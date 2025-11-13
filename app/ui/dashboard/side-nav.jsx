import LogoSmall from '@/ui/dashboard/logo-small'
import { ArrowLeftEndOnRectangleIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import { auth, signOut } from '@/auth';
import { DeleteUser } from '@/ui/dashboard/buttons';

const SideNav = async () => {
   const session = await auth()
   // const handleDelete = async () => {
   //    if (window.confirm("Do you want to delete?")) {
   //       'use server'; 
   //       await DELETE_USER(session?.user?.id);
   //    }
   // }

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
            <div className='flex flex-row w-40 gap-2'>
               <ChevronRightIcon className='w-5' />
               <Link href='/about'>About This Project</Link>
            </div>
         </div>
         <div className='flex flex-1 flex-col justify-center gap-2 items-start content-start'>
            <form action={async () => {
               'use server'; 
               await signOut({ redirectTo: '/' });
            }}>
               <div className='flex flex-row w-40 gap-2'>
                  <ArrowLeftEndOnRectangleIcon className='w-7' />
                  <button className='cursor-pointer'>Sign Out</button>
               </div>
            </form>
            <DeleteUser id={session?.user?.id} />
         </div>
      </div>
   )
}
export default SideNav

export const GuestSideNav = () => {

   return (
      <div id='nav-container' className='flex sticky flex-none flex-col bg-light-blue p-2 w-55 items-center font-semibold'>
         <div className='flex flex-1 flex-col justify-center'><LogoSmall /></div>
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
   )
}