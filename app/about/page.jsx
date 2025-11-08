'use client'
import { useState } from 'react';
import { ChevronRightIcon, ChevronDownIcon } from '@heroicons/react/24/solid';
const Page = () => {
   return (
      <main id='about' className='w-full min-h-screen h-full p-0 m-0 flex justify-stretch items-center bg-white flex-col'>
         <div className='flex flex-col gap-5 w-4/5 py-8'>
            <h3 className='text-[40px]/8 text-center font-medium font-serif'>Table-Top Game Character Builder</h3>
            <Accordion title='Funtionality'>
               <AppDesign />
            </Accordion>
            <Accordion title='Application Dependencies'>
               <AppDependencies />
            </Accordion>
            <Accordion title='Application Features'>
               <AppFunctionality />
            </Accordion>
            {/* <Accordion title='Project details:'>
               <AppDetails />
            </Accordion> */}
         </div>
      </main>
   )
}
export default Page;

const Accordion = ({children, title}) => {
   const [open, setOpen] = useState(false)

   const openStyle = 'transition-[height] duration-500'
   const closedStyle = 'overflow-hidden h-0 transition-[height] duration-500'
   const toggle = () => setOpen(!open)

   return (
      <section className='flex flex-col py-4 border-b-2 border-light-blue'>
         <div className='text-[24px]/8 w-full flex gap-3 cursor-pointer' onClick={toggle}>
            { open ? <ChevronDownIcon className='h-6 w-6 text-light-blue' /> : <ChevronRightIcon className='h-6 w-6 text-light-blue' />}
            {title}
         </div>
         <div className={open ? openStyle : closedStyle}>{children}</div>
      </section>
   )
}

const AppDesign = () => {
   return (
      <section className='flex flex-col gap-3 p-2'>
         <p>Classes, Backgrounds, Species and all associated proficiencies, items, features etc. (along with methods to apply them according to level) are stored as classes. When a selection is made a class instance is disseminated to the context provider using a reducer function.</p>
         <p>The database managing saved characters and all associated information are stored across 24 linked tables on Supabase.</p>
         <p>The state is designed to store every statistic associated with a class, backgrounds and species separately, which simplifies the process of making a substitution.</p>
      </section>
   )
}
const AppDependencies = () => {
   return (
      <section className='flex flex-col gap-3 p-2'>
         <div className='pt-3'>
            <div className='text-lg'>Languages and Frameworks:</div>
            <ul className='list-disc list-inside flex flex-col gap-1'>
               <li>React 19.1</li>
               <li>Typescript 10.8.2</li>
               <li>NextJs 15.4.6</li>
            </ul>
         </div>
         <div className='pt-3'>
            <div className='text-lg'>Database:</div>
            <ul className='list-disc list-outside flex flex-col gap-1 pl-4'>
               <li>Postgres.js 3.4.7</li>
               <li>Zod 4.1.12</li>
            </ul>
         </div>
         <div className='pt-3'>
            <div className='text-lg'>Authorization:</div>
            <ul className='list-disc list-outside flex flex-col gap-1 pl-4'>
               <li>Next Auth 5.0</li>
               <li>Bcrypt 6.0</li>
            </ul>
         </div>
         <div className='pt-3'>
            <div className='text-lg'>Display:</div>
            <ul className='list-disc list-outside flex flex-col gap-1 pl-4'>
               <li>Tailwind CSS 4.1.12</li>
               <li>React Select 5.10.2</li>
               <li>React Tooltips 5.29.1</li>
            </ul>
         </div>
      </section>
   )
}
const AppFunctionality = () => {
   return (
      <section className='flex flex-col gap-3 p-2'>
         <div className='flex flex-col gap-3 pt-3'>
            <div className='text-lg'>Current Functionality:</div>
            <ul className='list-disc list-outside flex flex-col gap-1 pl-4'>
               <li>12 classes and 40 subclasses</li>
               <li>9 species and 9 subspecies</li>
               <li>13 background</li>
               <li>Ability score increases, features, proficiencies and items, default and selectable, associated with every class, species and background (features updated based on character level)</li>
               <li>Base ability selection using standard array, random roll or point-buy method</li>
               <li>User registration and login/logout</li>
               <li>Saving, loading and editing characters from the database (some limitations outlined in next section)</li>
            </ul>
         </div>
         <div className='flex flex-col gap-3 pt-3'>
            <div className='text-lg'>Incoming Functionality (expected to be deployed in the next few months)</div>
            <ul className='list-disc list-outside flex flex-col gap-1 pl-4'>
               <li>Ability score increases / feats by level progression</li>
               <li>Features associated with subclasses</li>
               <li>Statistic modifiers based on features/feats, for example a monk or barbarian's "Unarmoured Defence" increasing character armour class</li>
               <li>Details on character spellcasting abilities</li>
               <li>Database does not currently save features</li>
               <li>Delete character option</li>
               <li>Spell selection *</li>
               <li>Additional item selection *</li>
               <li>Adding removing currency (beyond initial amount associated with selected background) *</li>
            </ul>
            <p>* These abilities are lower priority and may take longer to be implemented</p>
         </div>
         <div className='flex flex-col gap-3 pt-3'>
            <div className='text-lg'>Functionality that will not be included:</div>
            <ul className='list-disc list-outside flex flex-col gap-1 pl-4'>
               <li>Multiclassing</li>
               <li>Live rolls</li>
               <li>Turn-taking options (actions, bonus actions, reactions available)</li>
            </ul>
         </div>
      </section>
   )
}
const AppDetails = () => {
   return (
      <section className='flex flex-col gap-3 p-2'>
         <div className='flex gap-5'>
            <div className='text-lg'>213 functions</div>
            <div className='text-lg'>88 components</div>
            <div className='text-lg'>46 classes</div>
            <div className='text-lg'>29 types</div>
            <div className='text-lg'>7,792 lines of code in app directory</div>
         </div>
      </section>
   )
}