// import { fetchCharacter, getCharacter } from '@/lib/data.ts'
import {getCharacter} from '@/lib/data/data-fetch'
import EditFormParent from '@/ui/character/edit'
import CharacterDisplay from '@/ui/create/display/character-display'
import { notFound } from 'next/navigation';

const Page = async ({ params }) => {
   const {id} = await params;

   const savedCharacter = await getCharacter(id)

   return (
      <main className='flex flex-row grow'>
         <EditFormParent current={savedCharacter} />
         <CharacterDisplay />
      </main>
   );
}

export default Page;