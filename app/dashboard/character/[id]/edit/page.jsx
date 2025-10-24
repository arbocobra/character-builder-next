import { fetchCharacter } from '@/lib/data.ts'
import EditFormParent from '@/ui/character/edit'
import CharacterDisplay from '@/ui/create/display/character-display'
import { notFound } from 'next/navigation';

const Page = async ({ params }) => {
   const {id} = await params;

   const savedCharacter = await fetchCharacter(id)

   return (
      <main className='flex flex-row'>
         <EditFormParent current={savedCharacter} />
         <CharacterDisplay />
      </main>
   );
}

export default Page;