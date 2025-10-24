import { FaceSmileIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

const CharacterList = ({characters}) => {

   return (
      <div>
         <div>Character List Here</div>
         <div className='flex flex-col gap-3'>
            {characters.map((el,i) => {
               return (
                  <div key={`char-list-${i}`} className='flex border-1 p-2 justify-between'>
                     <div className='flex gap-6 '>
                        <FaceSmileIcon width={32} height={32} className='' />
                        <div className='flex flex-col'>
                           <div>{el.name} Level {el.level}</div>
                           <div className='flex text-sm gap-2'>
                              <div>{el.class}</div>
                              <div>{el.species}</div>
                              <div>{el.background}</div>
                           </div>
                        </div>
                     </div>
                     <div className='flex gap-2'>
                        <Link href={`/dashboard/character/${el.id}/edit`}>Edit</Link>
                        <span>Delete</span>
                     </div>
                  </div>
               )
            })}
         </div>
      </div>
   )
}

export default CharacterList