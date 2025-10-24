import Link from 'next/link';
import { signOut } from '@/auth';

const SideNav = () => {
   return (
      <div id='nav-container' className='flex-none bg-amber-300 p-2 w-60'>
         <div>
            <Link href='/'><div className=''>Home</div></Link>
            <Link href='/dashboard'><div className=''>Dashboard</div></Link>
            <Link href='/dashboard/character/create'><div className=''>Create New Character</div></Link>
            <div>
               <form action={async () => {
                  'use server'; 
                  await signOut({ redirectTo: '/' });
               }}>
                  <button>Sign Out</button>
               </form>
            </div>
         </div>
      </div>
   )
}
export default SideNav