import { useState } from 'react';
import { ToggleButton } from '@/ui/elements/button';

const DisplayContainer = ({ name, children }) => {
   const [display, setDisplay] = useState(false)
   const toggleDisplay = () => setDisplay(!display)

   return (
      <div className='flex flex-col gap-3 p-3 border-1 bg-gray-200'>
         <div className='flex flex-row justify-between p-1'>
            <div className='font-serif text-base font-bold'>Display {name}</div>
            <ToggleButton value={display ? 'Close' : 'Open'}  handleClick={toggleDisplay}/>
         </div>
         {display && children}
      </div>
   )
}

export default DisplayContainer;