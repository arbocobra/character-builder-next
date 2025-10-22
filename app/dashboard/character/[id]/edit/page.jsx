import { fetchCharacter } from '@/lib/data.ts'
import EditCharacterForm from '@/ui/character/edit'
import { notFound } from 'next/navigation';

const Page = async ({ params }) => {
   const {id} = await params;

   const character = await fetchCharacter(id)

   return (
      <main>
         <EditCharacterForm current={character} />
      </main>
   );
}

export default Page;