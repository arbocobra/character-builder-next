import { CharacterProvider } from '@/dash/character-context'
import SideNav from '@/ui/dashboard/side-nav'
import TopNav from '@/ui/dashboard/top-nav';

const Layout = ({ children }) => {
  return (
    <div className='flex flex-col lg:flex-row h-screen'>
      <SideNav/>
      <TopNav/>
      <div id='body-container' className='flex grow overflow-y-auto p-4'>
         <CharacterProvider>{children}</CharacterProvider>
      </div>
    </div>
  );
}
export default Layout;