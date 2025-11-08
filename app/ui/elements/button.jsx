export const SelectButton = ({value}) => {
   const submit = 'text-white bg-dark-blue font-medium rounded-sm text-16/1 px-4 py-1.5 hover:bg-light-blue'
   return (
      <input className={submit} type='submit' value={value} />
   );
}

export const InnerSelectButton = ({value, submit}) => {
   const submitStyle = 'text-white bg-dark-blue font-medium rounded-sm text-16/1 px-4 py-1.5 hover:bg-light-blue'
   return (
      <input className={submitStyle} onClick={(e) => submit(e)} type='button' value={value} />
   );
}

export const SubmitButton = ({value, isDisabled}) => {
   const submit = 'text-white bg-dark-blue font-medium rounded-sm text-16/1 px-4 py-1.5 hover:bg-light-blue'
   return (
      <input className={submit} aria-disabled={isDisabled} type='submit' value={value} />
   );
}

export const ToggleButton = ({value, handleClick}) => {
   const openClose = 'text-white bg-dark-blue font-medium rounded-sm text-16/1 px-4 py-1.5 hover:bg-light-blue '
   
   const reselect = 'text-dark-blue border-2 border-dark-blue font-semibold rounded-sm text-16/1 px-4 py-1 text-center hover:text-white hover:bg-dark-blue'

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