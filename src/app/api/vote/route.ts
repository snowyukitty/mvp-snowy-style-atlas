import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  try {
    const { id } = await req.json();

    if (!id) {
      return NextResponse.json({ error: "Missing image id" }, { status: 400 });
    }

    const updatedImage = await prisma.image.update({
      where: { id },
      data: {
        score: { increment: 1 },
      },
    });

    return NextResponse.json(updatedImage);
  } catch (error) {
    console.error("Voting error:", error);
    return NextResponse.json({ error: "Failed to vote" }, { status: 500 });
  }
}
