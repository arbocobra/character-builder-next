'use client'
import { useActionState } from 'react'
import { createUser, authenticate } from '@/app/lib/data-actions';
import { SubmitButton } from '@/ui/elements/button';

const SignupForm = () => {
   // const [errorMessage, formAction, isPending] = useActionState(createUser, undefined);
   const initialState = { message: null, errors: {} };
   const [state, formAction, isPending] = useActionState(createUser, initialState)

   const callbackUrl = '/dashboard';
   return (
      <div className='bg-white px-4 pb-2 pt-10 w-4/5 lg:w-3/5'>
         <form className='flex flex-col gap-5' action={formAction}>
            <div className='font-bold text-lg'>Create User</div>
            <div className='flex flex-col gap-4'>
               <div className='text-input flex'>
                  <input className='' id="name" type="text" name="name" placeholder="First name" required />
               </div>
               <div className='text-input flex'>
                  <input className='' id="email" type="email" name="email" placeholder="Email address" required />
               </div>
               <div className='text-input flex'>
                  <input id="password" type="password" name="password" placeholder="Password" required />
               </div>
            </div>
            <input type="hidden" name="redirectTo" value={callbackUrl} />
            <SubmitButton isDisabled={isPending} value='Create' />
            <div className="flex h-8 items-end space-x-1" aria-live="polite" aria-atomic="true" >
             {/* {errorMessage && (<p className="text-sm text-red-500">{errorMessage}</p>)} */}
           </div>
         </form>
      </div>
   )
}

export default SignupForm