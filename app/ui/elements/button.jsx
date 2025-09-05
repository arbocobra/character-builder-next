
const Button = ({value, isDisabled}) => {
   return (
      <input className='button' type='submit' value={value} disabled={isDisabled} />
   );
}

export default Button;