import { prisma } from "@/lib/prisma";
import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { skill, currentSkillLevel, targetSkillLevel, price, user_id } =
    await req.json();

  const skill_name = await prisma.skills.findUnique({
    where: {
      skill_id: skill as string,
    },
    select: {
      skill_name: true,
    },
  });

  let url = `http://127.0.0.1:8000/generate-roadmap?skill=${skill_name?.skill_name}&current_skill_level=${currentSkillLevel}&target_skill_level=${targetSkillLevel}`;

  if (price !== undefined) {
    url += `&price=${price}`;
  }

  const response = await axios.get(url);

  const roadmap = response.data.roadmap;

  try {
    const roadmap_data = await prisma.roadmap.create({
      data: {
        user_id,
        skill_id: skill,
        beginning_skill_level: currentSkillLevel,
        target_skill_level: targetSkillLevel,
        courses: roadmap,
      },
    });

    const user_data = await prisma.user.update({
      where: {
        user_id,
      },
      data: {
        current_roadmap_id: roadmap_data.roadmap_id,
      },
    });

    return NextResponse.json({
      roadmap_data,
      user_data,
    });
  } catch (e: any) {
    return NextResponse.json({
      error: e.message,
    });
  }
}
