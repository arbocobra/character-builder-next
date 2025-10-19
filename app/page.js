import Link from 'next/link';

export default function Home() {

  return (
    <main className='relative w-full h-screen p-0 m-0'>
      <section className='bg-hero-img h-screen w-full bg-cover relative bg-center z-2 shadow-lg flex flex-col p-5'>
        <div className='w-full flex justify-end'>
          <Link href='/login'>
            <div className='text-lg font-medium bg-dark-blue px-4 py-1 rounded-md text-white hover:bg-light-blue'>Log In</div>
          </Link>
        </div>
        <div className='flex flex-1 justify-center items-center'>
          <div className='border-3 p-5'>
            <h1 className='text-[60px]/12 text-center font-medium'>Table-Top Game<br/>Character Builder</h1>
          </div>
        </div>
      </section>
      <section className='w-full h-150 z-1 sticky bottom-0 bg-light-blue flex flex-col gap-3 p-5 items-center'>
        <div className='flex flex-col gap-3 justify-center w-2/3 flex-1'>
          <p>Longer text description here - stuff about how fucking elaborate this is.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lacinia, mauris in lobortis pretium, tortor leo scelerisque diam, at mollis ipsum urna quis libero. Ut vitae luctus turpis, sit amet tincidunt nisl. Suspendisse posuere elementum blandit. Phasellus non viverra sem, at pharetra massa. Nam ut nunc et libero condimentum tincidunt et non nibh. Praesent dictum nisl quis risus molestie, et cursus erat faucibus. Sed malesuada porttitor mauris, ac rhoncus neque fermentum pellentesque. Aenean non aliquet enim, in lacinia metus. Etiam a nisl erat.</p>
          <p>Proin at risus mauris. Nulla non massa sit amet risus rhoncus lobortis. Mauris quis augue a sapien venenatis lacinia quis sit amet libero. Praesent molestie euismod tellus, at euismod nunc tempus eget. Fusce at nibh arcu. Praesent eu risus augue. Nulla ac venenatis nunc, vitae porttitor dui. Donec vulputate feugiat diam in pretium. </p>
          </div>
        <div className='w-2/3'>Copyright Goes Here</div>
      </section>
    </main>
  );
}
