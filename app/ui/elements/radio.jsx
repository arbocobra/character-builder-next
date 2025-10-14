const RadioSelect = ({title, handleSelect, id, options, selected}) => {
   return (
      <div>
         <div>{title}</div>
         <div className='flex flex-row gap-4'>
            {options.map(el => (
               <label key={`radio-${id}-${el.value}`}>
                  <input type='radio' name={id} value={el.value} onChange={handleSelect} checked={selected === el.value} />
                  {el.label}
               </label>))}
         </div>
      </div>
   )
}

export default RadioSelect