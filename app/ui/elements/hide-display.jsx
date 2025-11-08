import { ToggleButton } from '@/ui/elements/button';

const HideDisplay = ({select, resetDisplay}) => {
   const handleToggle = (e) => {
      e.preventDefault();
      resetDisplay()
   }

   return (
      <div className='flex flex-row basis-full items-center justify-between flex-wrap gap-2 p-3 bg-[#b7c6c5]'>
         <div className='flex flex-row flex-wrap gap-1 italic font-medium'>Selected: {select.map((el,i) => <div key={`selected-${i}`} className='flex flex-row gap-1'>{el.label}</div>)}</div>
         <ToggleButton value={'Reselect'} handleClick={handleToggle} />
      </div>
   )
}
export default HideDisplay

export const HideAbilitiesDisplay = ({select, resetDisplay}) => {
   const handleToggle = (e) => {
      e.preventDefault();
      resetDisplay()
   }

   return (
      <div className='flex flex-row flex-wrap basis-full items-center justify-between gap-4 p-3 bg-[#b7c6c5]'>
         <div className='grid grid-rows-2 grid-cols-4 gap-x-3 gap-y-1 italic'>
            <div className='flex col-span-1 row-span-2 items-start'>Selected:</div>
            <div className=''>STR: {select[0].value}</div>
            <div className=''>DEX: {select[1].value}</div>
            <div className=''>CON: {select[2].value}</div>
            <div className=''>INT: {select[3].value}</div>
            <div className=''>WIS: {select[4].value}</div>
            <div className=''>CHA: {select[5].value}</div>
         </div>
         <ToggleButton value={'Reselect'} handleClick={handleToggle} />
      </div>
   )
}