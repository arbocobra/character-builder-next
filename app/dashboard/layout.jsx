import CharacterProvider from './provider';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-row min-h-screen">
      <div id='nav-container' className='flex-none w-64'>Nav</div>
      <div id='body-container' className='flex-grow overflow-y-auto p-12'>
         <CharacterProvider>{children}</CharacterProvider>          
      </div>
    </div>
  );
}
export default Layout;