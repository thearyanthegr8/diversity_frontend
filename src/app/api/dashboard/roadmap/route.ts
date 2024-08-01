import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const user_id = url.searchParams.get("user_id");

  if (!user_id) {
    return NextResponse.json({ error: "User ID is required" }, { status: 400 });
  }

  try {
    const user_data = await prisma.user.findUnique({
      where: {
        user_id: user_id as string,
      },
      select: {
        current_roadmap_id: true,
      },
    });

    if (user_data?.current_roadmap_id) {
      const roadmap_data = await prisma.roadmap.findUnique({
        where: {
          roadmap_id: user_data.current_roadmap_id,
        },
      });

      return NextResponse.json({
        roadmap_data,
      });
    } else {
      return NextResponse.json({
        message: "No current roadmap found for this user",
      });
    }
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
