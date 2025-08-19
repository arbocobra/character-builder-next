import postgres from 'postgres';
import { classes, species, backgrounds } from '@/lib/init-data'

const sql = postgres(process.env.POSTGRES_URL)

const seedClasses = async () => {

//   await sql`
//     CREATE TABLE IF NOT EXISTS invoices (
//       id INT PRIMARY KEY,
//       name 
//     );
//   `;

   const insertedClasses = await Promise.all(
      classes.map(
         (el, i) => sql`
            INSERT INTO classes (id, name)
            VALUES (${i}, ${el.name})
         `
      )
   )

  return insertedClasses;
}

const seedSpecies = async () => {

   const insertedSpecies = await Promise.all(
      species.map(
         (el, i) => sql`
            INSERT INTO species (id, name)
            VALUES (${i}, ${el.name})
         `
      )
   )

  return insertedSpecies;
}

const seedBackground = async () => {

   const insertedBackground = await Promise.all(
      backgrounds.map(
         (el, i) => sql`
            INSERT INTO backgrounds (id, name)
            VALUES (${i}, ${el.name})
         `
      )
   )

  return insertedBackground;
}

export async function GET() {
  try {
   //  const _result = await sql.begin((sql) => [
   //    seedClasses(),
   //    seedSpecies(),
   //    seedBackground(),
   //  ]);

    return Response.json({ message: 'Database seeded successfully' });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}