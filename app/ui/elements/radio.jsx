const RadioSelect = ({title, handleSelect, id, options}) => {
   return (
      <div>
         <div>{title}</div>
         <div className='flex flex-row gap-4'>
            {options.map(el => (<label key={`radio-${id}-${el.value}`}><input type='radio' name={id} value={el.value} onChange={handleSelect} />{el.label}</label>))}
         </div>
      </div>
   )
}

export default RadioSelect