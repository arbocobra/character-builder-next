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
        INSERT INTO users (id, name, email, password)
        VALUES (${user.id}, ${user.name}, ${user.email}, ${hashedPassword})
        ON CONFLICT (id) DO NOTHING;
      `;
    }),
  );

  console.log(insertedUsers)
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
   hitPoints: { base: 31, total: 31 }
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

async function addCharacter() {
   const { dataHP, errorHP } = await sql
      .from('hit points')
      .upsert({base: obj.hitPoints.base, total: obj.hitPoints.total})
      .select()
   let idHP;
   if (errorHP) console.error('oops: ', errorHP)
   else idHP = dataHP[0].id;
   const { data, error } = await sql
      .from('characters')
      .upsert({
         user_id: '410544b2-4001-4271-9855-fec4b6a6442a', 
         name: 'Jeff',
         level: 4,
         class: 'bard',
         subclass: 'valour',
         species: 'lightfoot halfling',
         background: 'entertainer',
         proficiency_bonus: 2, 
         hit_points: idHP
      })
      .select()
   if (error) console.error('boop: ', error)
   else console.log('character id: ', data[0].id)
}

export async function GET() {
  try {
    const _result = await sql.begin((sql) => [
      seedUsers()
    ]);

    return Response.json({ message: 'Database seeded successfully' });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}