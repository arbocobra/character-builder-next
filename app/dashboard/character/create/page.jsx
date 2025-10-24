import CreateCharacterForm from '@/ui/character/create'
import CharacterDisplay from '@/ui/create/display/character-display'

const Page = async ({ params }) => {

   return (
      <main className='flex flex-row'>
         <CreateCharacterForm />
         <CharacterDisplay />
      </main>
   );
}

export default Page;