// import postgres from 'postgres';

// const sql = postgres(process.env.POSTGRES_URL);

// async function listClasses() {
// 	const data = await sql`SELECT * FROM classes`;
// 	return data;
// }

// export async function GET() {
//   try {
//   	return Response.json(await listClasses());
//   } catch (error) {
//   	return Response.json({ error }, { status: 500 });
//   }
// }