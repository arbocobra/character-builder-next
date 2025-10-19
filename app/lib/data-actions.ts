'use server';

import { z } from 'zod';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import bcrypt from 'bcrypt';
import postgres from 'postgres';
import { AuthError } from 'next-auth';
import { signIn } from '@/app/auth';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

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
   //  const signinCredentials = {email, password: '123456', callbackUrl: '/dashboard'}
   // await signIn('credentials', signinCredentials);

   // revalidatePath('/login')
   // redirect('/login')
   // console.log('pause')

   // const loginData = new FormData();
   // loginData.append('email', email);
   // loginData.append('password', password);
   // loginData.append('redirectTo', '/dashboard')

   // authenticate(prevState, loginData)

   // for (let key in formData) {}
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

/*
formData
_FormData {Symbol(state): Array(3)}
Symbol(state) =
(3) [{…}, {…}, {…}]
0 =
{name: 'email', value: 'user@nextmail.com'}
1 =
{name: 'password', value: '123456'}
2 =
{name: 'redirectTo', value: '/dashboard'}
*/