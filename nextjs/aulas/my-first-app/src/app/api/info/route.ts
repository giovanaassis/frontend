import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    name: "Giovana de Assis",
    github: "github.com/giovanaassis",
  });
}
