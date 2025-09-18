import { CharacterProvider } from '@/dash/character-context'

const Layout = ({ children }) => {
  return (
    <div className="flex flex-row min-h-screen">
      <div id='nav-container' className='flex-none bg-amber-300 p-2 w-60'>Nav</div>
      <div id='body-container' className='flex-grow overflow-y-auto p-4'>
         <CharacterProvider>{children}</CharacterProvider>
      </div>
    </div>
  );
}
export default Layout;