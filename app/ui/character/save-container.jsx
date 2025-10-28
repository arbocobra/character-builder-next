'use client'

import SaveData from '@/app/lib/save-action';

const SaveButton = ({current, id}) => {

   // const formData = new FormData();
   // formData.append('userId', id);

   // for (const key in current) {
   //      if (Object.hasOwnProperty.call(current, key)) {
   //          // Handle nested objects or complex data structures if necessary
   //          // For simple key-value pairs, direct appending works
   //          if (typeof current[key] === 'object' && current[key] !== null) {
   //              // For nested objects, you might want to stringify them or flatten them
   //              formData.append(key, JSON.stringify(current[key]));
   //          } else {
   //              formData.append(key, current[key]);
   //          }
   //      }
   // }

   const submit = 'text-white bg-dark-blue hover:bg-light-blue focus:outline-none focus:ring-4 focus:ring-dark-blue font-medium rounded-md text-16/1 px-4 py-1.5'

   const handleSave = () => {
      SaveData(current, id)
   }

   return (
      <form action={handleSave}>
         <button className={submit} type="submit">Save</button>
      </form>
   )
}

export default SaveButton