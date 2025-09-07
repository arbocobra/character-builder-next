import CharacterSelect from '@/app/ui/create/select/character-select';
import CharacterDisplay from '@/app/ui/create/display/character-display';

const Page = () => {

   return  (
      <main>
         <div className='flex flex-row w-full h-full divide-x-2 divide-gray-300'>
            <CharacterSelect />
            <CharacterDisplay/>
         </div>
      </main>
   )
}
export default Page;