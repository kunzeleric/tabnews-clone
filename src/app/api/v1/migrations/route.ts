import { createClient } from "@/infra/database";
import { NextRequest, NextResponse } from "next/server";
import { runner as migrationRunner } from "node-pg-migrate";
import { join } from "node:path";

export async function GET(request: NextRequest) {
  const client = createClient();
  await client.connect();

  try {
    const response = await migrationRunner({
      dbClient: client,
      dir: join(process.cwd(), "src", "infra", "migrations"),
      direction: "up",
      dryRun: true,
      migrationsTable: "pgmigrations",
    });

    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    console.error(error);

    return NextResponse.json({ error: "An error occurred" }, { status: 500 });
  } finally {
    await client.end();
  }
}
