'use client'
import { useActionState } from 'react'
import { authenticate } from '@/app/lib/data-actions';

const LoginForm = () => {
   const [errorMessage, formAction, isPending] = useActionState(authenticate, undefined);
   const callbackUrl = '/dashboard';
   return (
      <form action={formAction}>
         <div>Login</div>
         <div>
            <div>
               <label htmlFor='email'>Email</label>
               <input id="email" type="email" name="email" placeholder="Enter your email address" required />
            </div>
            <div>
               <label htmlFor='password'>Password</label>
               <input id="password" type="password" name="password" placeholder="Enter password" required />
            </div>
         </div>
         <input type="hidden" name="redirectTo" value={callbackUrl} />
         <button aria-disabled={isPending}>Login</button> 
         <div className="flex h-8 items-end space-x-1" aria-live="polite" aria-atomic="true" >
          {errorMessage && (<p className="text-sm text-red-500">{errorMessage}</p>)}
        </div>
      </form>
   )
}

export default LoginForm