export const SubmitButton = ({value, isDisabled}) => {
   return (
      <input className='button' type='submit' value={value} disabled={isDisabled} />
   );
}

export const ToggleButton = ({value, handleClick}) => {
   return (
      <input className='button' type='button' value={value} onClick={handleClick} />
   );
}

