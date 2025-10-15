import Link from 'next/link';
import { signOut } from '@/app/auth';

const SideNav = () => {
   return (
      <div id='nav-container' className='flex-none bg-amber-300 p-2 w-60'>
         <div>
            <Link href='/'><div className=''>Home</div></Link>
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