import Link from 'next/link';

export default function Home() {

  return (
    <main className='relative w-full h-screen p-0 m-0'>
      <section className='bg-hero-img h-screen w-full bg-cover relative bg-center z-2 shadow-lg flex flex-col p-5'>
        <div className='w-full flex justify-end gap-3'>
          <Link href='/about'>
            <div className='text-lg font-medium bg-dark-blue px-4 py-2 rounded-sm text-white hover:bg-light-blue'>Details</div>
          </Link>
          <Link href='/login'>
            <div className='text-lg font-medium bg-dark-blue px-4 py-2 rounded-sm text-white hover:bg-light-blue'>Log In</div>
          </Link>
        </div>
        <div className='flex flex-1 justify-center items-center'>
          <div className='border-3 p-5'>
            <h1 className='text-[60px]/12 text-center font-medium'>Table-Top Game<br/>Character Builder</h1>
          </div>
        </div>
      </section>
      <section className='w-full h-150 z-1 sticky bottom-0 bg-light-blue flex flex-col gap-3 p-5 items-center'>
        <div className='flex flex-col gap-3 justify-center lg:w-2/3 flex-1'>
          <p>This full-stack application is the centrepiece of my coding portfolio and represents 100s of hours of work. </p>
          <p>It is built using the NextJS framework, using PostgreSQL database and deployed with Vercel. A full list of dependencies are available <a href='/about'><span className='underline'>here</span></a>.</p>
          <p>The Table-Top Game Character Builder allows visitors to create a custom RPG character using the 5th edition Dungeons and Dragons, including classes, species, backgrounds and all associated features, proficiencies and other elements. Visitors can create an account to save and edit multiple characters, or use the guest access to build a character without saving it.</p>
          <p>Please be aware, this project is a work-in-progress and does not have access to every element. It will continue to expand over the next few months.</p>
          <p>The character features and mechanics of the application fall within Wizards of the Coast&apos;s <a href='https://company.wizards.com/en/legal/fancontentpolicy'><span className='underline'>Fan Content Policy</span></a> - it is an unofficial product and not monetized. All code was 100% written by me.</p>
          <p>A complete list of the application&apos;s features, more details about how it was built and updates coming in the future can be found on the <a href='/about'><span className='underline'>details page</span></a>.</p>
        </div>
        <div className='text-center'>&copy; Natalie Rekai, 2025</div>
      </section>
    </main>
  );
}
