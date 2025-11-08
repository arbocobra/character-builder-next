<main className='relative w-full h-screen p-0 m-0'>
   <section>Header</section>
   <section>
      <div>
         <h3>Funtionality</h3>
         <p>Classes, Backgrounds, Species and all associated proficiencies, items, features etc. (along with methods to apply them according to level) are stored as classes. When a selection is made a class instance is disseminated to the context provider using a reducer function.</p>
         <p>The database managing saved characters and all associated information are stored across 24 linked tables on Supabase.</p>
         <p>The state is designed to store every statistic associated with a class, backgrounds and species separately, which simplifies the process of making a substitution.</p>
      </div>
      <div>
         <h3>Application Dependencies</h3>
         <div>
            <h4>Languages and Frameworks:</h4>
            <ul>
               <li>React 19.1</li>
               <li>Typescript 10.8.2</li>
               <li>NextJs 15.4.6</li>
            </ul>
         </div>
         <div>
            <h4>Database:</h4>
            <ul>
               <li>Postgres.js 3.4.7</li>
               <li>Zod 4.1.12</li>
            </ul>
         </div>
         <div>
            <h4>Database:</h4>
            <ul>
               <li>Next Auth 5.0</li>
               <li>Bcrypt 6.0</li>
            </ul>
         </div>
         <div>
            <h4>Display:</h4>
            <ul>
               <li>Tailwind CSS 4.1.12</li>
               <li>React Select 5.10.2</li>
               <li>React Tooltips 5.29.1</li>
            </ul>
         </div>
      </div>
   </section>
</main>

/*
FULL

Project details:
213 functions
88 components
46 classes
29 types
7,792 lines of code in app/

Installed Dependencies:

Languages and Frameworks -
- React 19.1,
- Typescript 10.8.2,
- NextJs 15.4.6

Database -
- Postgres.js 3.4.7,
- Zod 4.1.12

Authentication -
Next Auth 5.0
Bcrypt 6.0

Display
Tailwind CSS 4.1.12
React Select 5.10.2
React Tooltips 5.29.1


Functionality:

Classes, Backgrounds, Species and all associated proficiencies, items, features etc. (along with methods to apply them according to level) are stored as classes. When a selection is made an class instance is disseminated to the context provider using a reducer function. 

The database managing saved characters and all associated information are stored across 24 linked tables on Supabase.

The state is designed to store every statistic associated with a class, backgrounds and species separately, which simplifies the process of making a substitution.

Application Features
Current Functionality:
- 12 classes and 40 subclasses
- 9 species and 9 subspecies
- 13 background
- ability score increases, features, proficiencies and items, default and selectable, associated with every class, species and background (features updated based on character level)
- base ability selection using standard array, random roll or point-buy method
- user registration and login/logout
- saving, loading and editing characters from the database (some limitations outlined in next section)

Incoming Functionality (expected to be deployed in the next few months)
- Ability score increases / feats by level progression
- Features associated with subclasses
- Statistic modifiers based on features/feats, for example a monk or barbarian's "Unarmoured Defence" increasing character armour class
- Details on character spellcasting abilities
- Database does not currently save features
- Delete character option
- Spell selection *
- Additional item selection *
- Adding removing currency (beyond initial amount associated with selected background) *

* These abilities are lower priority and may take longer to be implemented 

Functionality that will not be included:
- Multiclassing
- Live rolls 
- Turn-taking options (actions, bonus actions, reactions available)
*/