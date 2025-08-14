import { NextRequest, NextResponse } from "next/server";
import { database } from "@/app/infra/database";

export async function GET(request: NextRequest) {
  const result = await database.query("SELECT 1 + 1 as sum;");
  console.log(result.rows);
  return NextResponse.json(
    {
      message: "System online.",
    },
    { status: 200 },
  );
}
