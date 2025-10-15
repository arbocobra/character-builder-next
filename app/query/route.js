import postgres from 'postgres';

const sql = postgres(process.env.POSTGRES_URL);

async function listCharacters() {
	const data = await sql`SELECT * FROM characters`;
	return data;
}

export async function GET() {
  try {
  	return Response.json(await listCharacters());
  } catch (error) {
  	return Response.json({ error }, { status: 500 });
  }
}