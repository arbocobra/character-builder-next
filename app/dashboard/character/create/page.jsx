import CreateCharacterForm from '@/ui/character/create'
import CharacterDisplay from '@/ui/create/display/character-display'
import { auth } from '@/auth'

const Page = async () => {
   const session = await auth()

   return (
      <main className='flex flex-row'>
         <CreateCharacterForm user={session?.user?.id} />
         <CharacterDisplay />
      </main>
   );
}

export default Page;