'use server';

import { z } from 'zod';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import bcrypt from 'bcrypt';
import postgres from 'postgres';
import { AuthError } from 'next-auth';
import { signIn } from '@/auth';
import type { User } from '@/app/lib/definitions';


const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

export const getUser = async (email: string): Promise<User | undefined> => {
  try {
    const user = await sql<User[]>`SELECT * FROM users WHERE email=${email}`;
    return user[0];
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw new Error('Failed to fetch user.');
  }
}

const UserFormSchema = z.object({
   name: z.string(),
   email: z.email(),
   password: z.string(),
   date: z.date()
});

const CreateUser = UserFormSchema.omit({ date: true });

type State = {
  errors?: {
    name?: string[];
    email?: string[];
    password?: string[];
  };
  message?: string | null;
};

export const createUser = async (prevState:string | undefined, formData:FormData) => {
   const validatedFields = CreateUser.safeParse({
      name: formData.get('name'),
      email: formData.get('email'),
      password: formData.get('password'),
   });

   if (!validatedFields.success) {
      return {
         errors: validatedFields.error.flatten().fieldErrors,
         message: 'Missing Fields. Failed to Create Invoice.',
      };
   }
   const { name, email, password } = validatedFields.data;
   const hashedPassword = await bcrypt.hash(password, 10);
   const date = new Date().toISOString().split('T')[0];
   let isOk;

   try {
    await sql`
      INSERT INTO users (name, email, password, date)
      VALUES (${name}, ${email}, ${hashedPassword}, ${date})
    `;

   isOk = true
  } catch (e) {
   isOk = false
    return {
      message: 'Database Error: Failed to Create Invoice.',
    };
  } finally {
   if (isOk) redirect('/login')
  }
};

export const authenticate = async (prevState: string | undefined, formData: FormData) => {
   try {
      await signIn('credentials', formData);
   } catch (error) {
      if (error instanceof AuthError) {
         switch (error.type) {
            case 'CredentialsSignin':
               return 'Invalid credentials';
            default:
               return 'Something went wrong';
         }
      }
      throw error;
   }
};