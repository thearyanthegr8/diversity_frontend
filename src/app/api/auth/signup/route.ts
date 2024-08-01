import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

import type { Database } from "@/lib/types/database.types";
import { prisma } from "@/lib/prisma";

export async function POST(request: NextRequest) {
  const { name, mobile, email, password, type } = await request.json();

  const cookieStore = cookies();
  const supabase = createRouteHandlerClient<Database>({
    cookies: () => cookieStore,
  });

  try {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      return NextResponse.json({ error: error }, { status: 500 });
    }

    if (data.user) {
      const user = await prisma.user.create({
        data: {
          user_id: data.user.id,
          name,
          email,
          mobile,
          type,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        select: {
          user_id: true,
          name: true,
          email: true,
          mobile: true,
          type: true,
          current_roadmap_id: true,
          createdAt: true,
          updatedAt: true,
        },
      });

      return NextResponse.json({ user: user }, { status: 201 });
    }
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
