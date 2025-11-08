import { useState } from 'react';
import { ToggleButton } from '@/ui/elements/button';

const FormContainer = ({ name, show, children }) => {
   const [display, setDisplay] = useState(show)
   const toggleDisplay = () => setDisplay(!display)

   return (
      // <div className='flex flex-col gap-5 px-3 py-4 border-1 bg-gray-200'>
      <div className='flex flex-col gap-5 px-3 py-4 bg-medium'>
         <div className='flex flex-row justify-between items-center'>
            <div className='font-serif text-xl font-bold'>Select {name}</div>
            <ToggleButton value={display ? 'Close' : 'Open'}  handleClick={toggleDisplay}/>
         </div>
         <div className={display ? 'block' : 'hidden'}>{children}</div>
      </div>
   )
}

export default FormContainer;