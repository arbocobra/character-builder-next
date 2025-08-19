import Button from '@/ui/elements/button';

const InitialForm = () => {
   return (
      <form className='flex flex-col gap-3' action=''>
         <input type='text' name='characterName' placeholder='Character Name' required />
         <select name='characterLevel' defaultValue={1}>
            {[...Array(20).keys()].map(level => (
               <option key={level + 1} value={level + 1}>{level + 1}</option>
            ))}
         </select>
         <Button />
      </form>
   )
}

export default InitialForm;