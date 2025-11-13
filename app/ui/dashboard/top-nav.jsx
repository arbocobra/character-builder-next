import LogoSmall from '@/ui/dashboard/logo-small'
import { ArrowLeftEndOnRectangleIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import { auth, signOut } from '@/auth';
import { DeleteUser, SignOutButton } from '@/ui/dashboard/buttons';
import TopNavMenu, {TopNavMenuGuest} from '@/ui/dashboard/top-menu'

const TopNav = async () => {
   const session = await auth()

   return (
      <div id='nav-container' className='flex lg:hidden sticky flex-row w-full bg-dark-blue p-2 items-center font-semibold'>
         <div className='flex w-1/2 justify-start'><LogoSmall /></div>
         <TopNavMenu id={session?.user?.id} />
      </div>
   )
}
export default TopNav

export const GuestTopNav = () => {
   return (
      <div id='nav-container' className='flex lg:hidden sticky flex-row w-full bg-dark-blue p-2 items-center font-semibold'>
         <div className='flex w-1/2 justify-start'><LogoSmall /></div>
         <TopNavMenuGuest/>
      </div>
   )
}

