'use server'
import {updateCharacter} from '@/app/lib/data/data-update';
import {createCharacter} from '@/app/lib/data/data-create';
import { deleteCharacter } from '@/lib/data/data-delete';
import { revalidatePath, revalidateTag } from 'next/cache';
import { redirect } from 'next/navigation';

export const saveData = async (formData, id) => {
   await createCharacter(formData, id)
   revalidatePath('/dashboard');
   redirect('/dashboard');
}

export const updateData = async (formData, charId) => {
   await updateCharacter(formData, charId)
   revalidatePath('/dashboard');
   redirect('/dashboard');
}

export const deleteData = async (charData) => {
   await deleteCharacter(charData);
   revalidatePath('/dashboard');
   // revalidateTag('character-previews')
}