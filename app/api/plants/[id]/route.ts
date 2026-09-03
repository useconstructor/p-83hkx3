import { createClient } from "@libsql/client";
import { NextResponse } from "next/server";

function getClient() {
  return createClient({
    url: process.env.TURSO_DATABASE_URL!,
    authToken: process.env.TURSO_AUTH_TOKEN,
  });
}

export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const client = getClient();
  const { id } = await params;

  const result = await client.execute({
    sql: "SELECT * FROM plants WHERE id = ?",
    args: [id],
  });

  if (result.rows.length === 0) {
    return NextResponse.json({ error: "Plant not found" }, { status: 404 });
  }

  return NextResponse.json(result.rows[0]);
}

export async function PUT(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const client = getClient();
  const { id } = await params;
  const { name, price, description } = await req.json();

  await client.execute({
    sql: "UPDATE plants SET name = ?, price = ?, description = ? WHERE id = ?",
    args: [name, price, description, id],
  });

  const result = await client.execute({
    sql: "SELECT * FROM plants WHERE id = ?",
    args: [id],
  });

  if (result.rows.length === 0) {
    return NextResponse.json({ error: "Plant not found" }, { status: 404 });
  }

  return NextResponse.json(result.rows[0]);
}

export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const client = getClient();
  const { id } = await params;

  await client.execute({
    sql: "DELETE FROM plants WHERE id = ?",
    args: [id],
  });

  return NextResponse.json({ success: true });
}
