import { useState } from 'react';
import { ToggleButton } from '@/ui/elements/button';

const DisplayContainer = ({ name, show, children }) => {
   const [display, setDisplay] = useState(show)
   const toggleDisplay = () => setDisplay(!display)

   return (
      <div className='flex flex-col gap-5 px-3 py-4 border-1 bg-gray-200'>
         <div className='flex flex-row justify-between items-center'>
            <div className='font-serif text-xl font-bold'>Display {name}</div>
            <ToggleButton value={display ? 'Close' : 'Open'}  handleClick={toggleDisplay}/>
         </div>
         {display && children}
      </div>
   )
}

export default DisplayContainer;