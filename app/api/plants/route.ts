import { createClient } from "@libsql/client";
import { NextResponse } from "next/server";

function getClient() {
  return createClient({
    url: process.env.TURSO_DATABASE_URL!,
    authToken: process.env.TURSO_AUTH_TOKEN,
  });
}

export async function GET() {
  const client = getClient();

  await client.execute(`
    CREATE TABLE IF NOT EXISTS plants (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      price TEXT,
      description TEXT,
      created_at TEXT DEFAULT CURRENT_TIMESTAMP
    )
  `);

  const result = await client.execute("SELECT * FROM plants");
  return NextResponse.json(result.rows);
}

export async function POST(req: Request) {
  const client = getClient();
  const { name, price, description } = await req.json();

  await client.execute(`
    CREATE TABLE IF NOT EXISTS plants (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      price TEXT,
      description TEXT,
      created_at TEXT DEFAULT CURRENT_TIMESTAMP
    )
  `);

  const result = await client.execute({
    sql: "INSERT INTO plants (name, price, description) VALUES (?, ?, ?)",
    args: [name, price ?? null, description ?? null],
  });

  const insertedId = result.lastInsertRowid;
  const plant = await client.execute({
    sql: "SELECT * FROM plants WHERE id = ?",
    args: [insertedId],
  });

  return NextResponse.json(plant.rows[0], { status: 201 });
}
