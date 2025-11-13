import { CharacterProvider } from '@/dash/character-context'
import {GuestSideNav} from '@/ui/dashboard/side-nav'

const Layout = ({ children }) => {
  return (
    <div className='flex flex-row h-screen'>
      <GuestSideNav/>
      <div id='body-container' className='flex grow overflow-y-auto p-4'>
         <CharacterProvider>{children}</CharacterProvider>
      </div>
    </div>
  );
}
export default Layout;