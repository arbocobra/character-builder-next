export const SubmitButton = ({value, isDisabled}) => {
   const submit = 'text-white bg-sky-900 hover:bg-sky-950 focus:outline-none focus:ring-4 focus:ring-sky-800 font-medium rounded-md text-16/1 px-4 py-1.5 dark:bg-sky-900 dark:hover:bg-sky-950 dark:focus:ring-sky-800 dark:border-sky-800'
   return (
      <input className={submit} type='submit' value={value} disabled={isDisabled} />
   );
}

export const ToggleButton = ({value, handleClick}) => {
   const openClose = 'text-white bg-gray-800 hover:bg-gray-600 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-md text-16/1 px-4 py-1.5 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700'
   
   const reselect = 'text-gray-900 hover:text-white border-2 border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-md text-16/1 px-4 py-1 text-center dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800'

   return (
      <input className={ value === 'Reselect' ? reselect : openClose } type='button' value={value} onClick={handleClick} />
   );
}

export const OptionButtons = ({title, handleClick, id, options,}) => {
   const buttonStyle = 'text-white bg-sky-900 hover:bg-sky-950 focus:outline-none focus:ring-4 focus:ring-sky-800 font-medium rounded-md text-16/1 px-4 py-1.5 dark:bg-sky-900 dark:hover:bg-sky-950 dark:focus:ring-sky-800 dark:border-sky-800'

   return (
      <div className='flex flex-col gap-2'>
         {title && <div>{title}</div>}
         <div className='flex flex-row gap-4'>
            { options.map(el => <input key={`asi-button-${id}-${el.value}`} type='button' className={buttonStyle} value={el.label} onClick={(e) => handleClick(e, el.value)}/>) }
         </div>
      </div>
   )
}
// const OptButton = ({children, value, handleClick}) => {
//    return <input type='button' className='button' value={value} onClick={handleClick}>{children}</input>
// }