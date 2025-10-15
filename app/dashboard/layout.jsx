import { CharacterProvider } from '@/dash/character-context'
import SideNav from '@/ui/dashboard/side-nav'

const Layout = ({ children }) => {
  return (
    <div className="flex flex-row min-h-screen">
      <SideNav/>
      <div id='body-container' className='flex-grow overflow-y-auto p-4'>
         <CharacterProvider>{children}</CharacterProvider>
      </div>
    </div>
  );
}
export default Layout;