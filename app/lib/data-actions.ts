'use server';

// import { z } from 'zod';
// import { revalidatePath } from 'next/cache';
// import { redirect } from 'next/navigation';
import postgres from 'postgres';
import { AuthError } from 'next-auth';
import { signIn } from '@/app/auth';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

export const authenticate = async (prevState: string | undefined, formData: FormData) => {
   try {
      await signIn('credentials', formData);
   } catch (error) {
      if (error instanceof AuthError) {
         switch (error.type) {
            case 'CredentialsSignin': return 'Invalid credentials';
            default: return 'Something went wrong';
         }
      }
      throw error;
   }
}