import { mockCourses } from "@/src/data/mockData";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(mockCourses);
}
