# Table-Top Game Character Builder
### [-- deployment link --](https://character-builder-next.vercel.app/)
This full-stack application is the centrepiece of my coding portfolio and represents 100s of hours of work. 

It is built using the NextJS framework, using PostgreSQL database and deployed with Vercel. A full list of dependencies are available [here](https://character-builder-next.vercel.app/about).

The Table-Top Game Character Builder allows visitors to create a custom RPG character using the 5th edition Dungeons and Dragons, including classes, species, backgrounds and all associated features, proficiencies and other elements. Visitors can create an account to save and edit multiple characters, or use the guest access to build a character without saving it.

Please be aware, this project is a work-in-progress and does not have access to every element. It will continue to expand over the next few months.

The character features and mechanics of the application fall within Wizards of the Coast's [Fan Content Policy](https://company.wizards.com/en/legal/fancontentpolicy) - it is an unofficial product and unmonetized. All code was 100% written by me.

A complete list of the application's features, more details about how it was built and updates coming in the future can be found on [the details page](https://character-builder-next.vercel.app/about).

## Application Features
**Current Functionality:**
- 12 classes and 40 subclasses
- 9 species and 9 subspecies
- 13 background
- Ability score increases, features, proficiencies and items, default and selectable, associated with every class, species and background (features updated based on character level)
- Base ability selection using standard array, random roll or point-buy method
- User registration and login/logout
- Saving, loading and editing characters from the database (some limitations outlined in next section)

**Incoming Functionality (expected to be deployed in the next few months)**
- Ability score increases / feats by level progression
- Features associated with subclasses
- Statistic modifiers based on features/feats, for example a monk or barbarian's "Unarmoured Defence" increasing character armour class
- Details on character spellcasting abilities
- Database does not currently save features
- Delete character option
- Spell selection *
- Additional item selection *
- Adding removing currency (beyond initial amount associated with selected background) *

_* These abilities are lower priority and may take longer to be implemented_

**Functionality that will not be included:**
- Multiclassing
- Live rolls 
- Turn-taking options (actions, bonus actions, reactions available)
