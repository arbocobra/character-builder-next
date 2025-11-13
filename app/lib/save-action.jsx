'use server'
import {updateCharacter} from '@/app/lib/data/data-update';
import {createCharacter} from '@/app/lib/data/data-create';
import { DELETE_USER, deleteCharacter } from '@/lib/data/data-delete';
import { revalidatePath, revalidateTag } from 'next/cache';
import { redirect } from 'next/navigation';
import { NextResponse } from 'next/server';
import { signOut } from '@/auth';

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

export const deleteUserData = async (userId) => {
   try {
      await DELETE_USER(userId)
      // console.log('deleting...')
      // signOut({ redirectTo: '/' });
      // return NextResponse.json({ message: 'User deleted successfully' });
  } catch (error) {
   console.error('Error deleting user from database:', error);
   // return NextResponse.json({ message: 'Error deleting user' }, { status: 500 });
  }
   await signOut({ redirectTo: '/' });
}
