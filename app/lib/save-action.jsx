'use server'
import {updateCharacter} from '@/lib/data-update.ts';
import {createCharacter} from '@/lib/data-create.ts';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export const saveData = async (formData, id) => {
   await createCharacter(formData, id)
   revalidatePath('/dashboard');
   redirect('/dashboard');
}

export const updateData = async (formData, charId) => {
   await updateCharacter(formData, charId)
   // revalidatePath('/dashboard');
   // redirect('/dashboard');
}