'use server'

import {createCharacter} from '@/lib/data.ts';

const saveData = async (formData, id) => {
   createCharacter(formData, id)
   return { success: true };
}

export default saveData;