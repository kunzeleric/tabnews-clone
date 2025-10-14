import { NextRequest, NextResponse } from "next/server";
import { database } from "@/app/infra/database";

export async function GET(request: NextRequest) {
  const updatedAt = new Date().toISOString();

  return NextResponse.json(
    {
      updated_at: updatedAt,
      dependencies: {
        database: {
          version: await database.getPostgresVersion(),
          max_connections: await database.getMaxConnections(),
          opened_connections: await database.getDbActivity(),
        },
      },
    },
    { status: 200 },
  );
}
