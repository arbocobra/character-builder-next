import bcrypt from 'bcrypt';
import postgres from 'postgres';
import { users } from '@/lib/placeholder-data'

const sql = postgres(process.env.POSTGRES_URL)

async function seedUsers() {
  await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await sql`
    CREATE TABLE IF NOT EXISTS users (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email TEXT NOT NULL UNIQUE,
      password TEXT NOT NULL
    );
  `;

  const insertedUsers = await Promise.all(
    users.map(async (user) => {
      const hashedPassword = await bcrypt.hash(user.password, 10);
      return sql`
        INSERT INTO users (name, email, password)
        VALUES (${user.name}, ${user.email}, ${hashedPassword})
        ON CONFLICT (id) DO NOTHING;
      `;
    }),
  );

  return insertedUsers;
}

// async function seedCharacters() {
//   await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
//   await sql`
//     CREATE TABLE IF NOT EXISTS characters (
//       id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
//       user_id UUID NOT NULL
//       name VARCHAR(255) NOT NULL,
//       level INT NOT NULL,
//       class VARCHAR(255) NOT NULL,
//       subclass VARCHAR(255),
//       species VARCHAR(255) NOT NULL,
//       background VARCHAR(255) NOT NULL,
//       proficiency_bonus INT NOT NULL
//     );
//   `;

//   const insertedCharacters = await Promise.all(
//     characters.map(async (char) => {
//       return sql`
//         INSERT INTO characters (user_id, name, level, class, subclass, species, background, proficiency_bonus)
//         VALUES (${char.user_id}, ${char.name}, ${char.level}, ${char.class}, ${char.subclass} | )
//         ON CONFLICT (id) DO NOTHING;
//       `;
//     }),
//   );

//   return insertedUsers;
// }

const obj = {
   user_id: '3499732b-7956-4038-aff2-c0760d0f91e9',
   name: 'Jeff',
   level: 4,
   class: 'bard',
   subclass: 'valour',
   species: 'lightfoot halfling',
   background: 'entertainer',
   proficiency_bonus: 2, 
   armour_class: {
      base: 10,
      dex_mod: 2,
      total: 12
   },
   proficiencies: {
      background: {
         skills: ['Acrobatics', 'Performance'],
         tools: [' Disguise kit', 'bagpipes']
      },
      class: {
         armour: ['Light Armour'],
         savingThrows: ['Dexterity', 'Charisma'],
         skills: ['perception', 'deception', 'history'],
         tools: ['drums', 'dulcimer', 'lute'],
         weapons: ['Simple Weapons', 'Hand Crossbow', 'Longsword', 'Rapier', 'Shortsword']
      },
      species: {
         languages: ['Common', 'Halfling'],
      },
      total: {
         armour: ['Light Armour'],
         savingThrows: ['Dexterity', 'Charisma'],
         skills: ['perception', 'deception', 'history', 'Acrobatics', 'Performance'],
         tools: ['drums', 'dulcimer', 'lute', ' Disguise kit', 'bagpipes'],
         languages: ['Common', 'Halfling'],
         weapons: ['Simple Weapons', 'Hand Crossbow', 'Longsword', 'Rapier', 'Shortsword']
      }
   },
   items: {
      background: {
         equipment: ['the favor of an admirer', 'costume'],
         tools: ['bagpipes'],
         currency: 15
      },
      class: {
         armour: ['leather armour'],
         equipment: ["explorer's pack", "entertainer's pack"],
         tools: ['lute'],
         weapons: ['dagger', 'rapier']
      },
      total: {
         armour: ['leather armour'],
         equipment: ["explorer's pack", "entertainer's pack", 'the favor of an admirer', 'costume'],
         tools: ['lute', 'bagpipes'],
         weapons: ['dagger', 'rapier'],
         currency: 15
      }
   },
   armourClass: { base: 10, dexMod: 3, total: 13 },
   hitPoints: { base: 31, total: 31 },

}


// const insertedUsers = await Promise.all(
//     users.map(async (user) => {
//       const hashedPassword = await bcrypt.hash(user.password, 10);
//       return sql`
//         INSERT INTO users (id, name, email, password)
//         VALUES (${user.id}, ${user.name}, ${user.email}, ${hashedPassword})
//         ON CONFLICT (id) DO NOTHING;
//       `;
//     }),
//   );

//   return insertedUsers;
// }

async function addHP() {
   const hp = await sql `
      insert into hit_points (base, total)
      values (31,31)
      returning id;
   `
   return hp
}

async function addAC() {
   const ac = await sql `
      insert into armour_class (base, dex_mod, total)
      values (10,2,12)
      returning id;
   `
   return ac
}

async function addCharacter(ac) {
   const char = await sql `
      insert into characters (user_id, name, level, class, subclass, species, background, proficiency_bonus, armour_class)
      values (${obj.user_id}, ${obj.name}, ${obj.level}, ${obj.class}, ${obj.subclass}, ${obj.species}, ${obj.background}, ${obj.proficiency_bonus}, ${ac});
   `
   return char
}

export async function GET() {
  try {
      const ac = await addAC()
      const char = await addCharacter(ac[0].id)
      // const [hp, char] = await sql.begin(async sql => {
      //    const [hp] = addHP()
      //    const [char] = addCharacter(hp[0].id)
      //    return [hp, char]
      // })
    return Response.json({ message: 'Database seeded successfully'});
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}

// sql.begin('read write', async sql => {
//   const [user] = await sql`
//     insert into users (
//       name
//     ) values (
//       'Murray'
//     )
//   `

//   const [account] = (await sql.savepoint(sql =>
//     sql`
//       insert into accounts (
//         user_id
//       ) values (
//         ${ user.user_id }
//       )
//     `
//   ).catch(err => {
//     // Account could not be created. ROLLBACK SAVEPOINT is called because we caught the rejection.
//   })) || []

//   return [user, account]
// })
// .then(([user, account]) => {
//   // great success - COMMIT succeeded
// })
// .catch(() => {
//   // not so good - ROLLBACK was called
// })