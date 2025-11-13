import GuestCreateCharacterForm from '@/ui/character/guest-create'
import CharacterDisplay from '@/ui/create/display/character-display'

const Page = () => {
   return (
      <main className='flex flex-row grow'>
         <GuestCreateCharacterForm />
         <CharacterDisplay />
      </main>
   );
}

export default Page;