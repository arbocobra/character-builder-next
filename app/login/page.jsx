import LoginForm from '@/app/ui/auth/login-form'
import Link from 'next/link';

const LoginPage = () => {
   return (
      <main className='w-full h-screen p-0 m-0 flex justify-stretch'>
         <section className='bg-hero-img h-screen bg-cover bg-center z-1 flex-1'></section>
         <section className='bg-light-blue w-9/10 lg:w-1/3 flex flex-col gap-3 z-2 p-5 justify-center shadow-xl/30 items-center'>
            <LoginForm />
            <div className='flex flex-col gap-1 items-center p-5'>
               <span className='text-white font-medium'>Don't have an account?</span>
               <Link className='text-dark-blue text-lg font-semibold' href='/signup'>Create Account</Link>
            </div>
         </section>
    </main>
   )
}
export default LoginPage;