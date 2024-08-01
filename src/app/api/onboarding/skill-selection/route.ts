import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

interface Skill {
  skill_id: string;
  skill_name: string;
  category: {
    category_name: string;
  };
}

export async function GET() {
  const skills = await prisma.skills.findMany({
    select: {
      skill_id: true,
      skill_name: true,
      category: {
        select: {
          category_name: true,
        },
      },
    },
  });

  const typedSkills = skills as Skill[];

  const skillsByCategory = typedSkills.reduce((acc, skill) => {
    const categoryName = skill.category.category_name;
    if (!acc[categoryName]) {
      acc[categoryName] = [];
    }
    acc[categoryName].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  return NextResponse.json({ skills: skillsByCategory });
}
