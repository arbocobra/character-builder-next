import CharacterList from '@/app/ui/dashboard/character-list'
import { fetchCharactersPreview } from '@/app/lib/data.ts'
import { auth } from '@/auth'

const Page = async () => {
   const session = await auth()
   const userCharacters = await fetchCharactersPreview(session?.user?.id)

   return(
      <main>
         <CharacterList characters={userCharacters} />
      </main>
   )
}
export default Page;