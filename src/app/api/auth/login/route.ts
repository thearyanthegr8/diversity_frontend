import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

import type { Database } from "@/lib/types/database.types";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  const requestUrl = new URL(request.url);
  const { email, password } = await request.json();
  const cookieStore = cookies();
  const supabase = createRouteHandlerClient<Database>({
    cookies: () => cookieStore,
  });

  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      return NextResponse.json({ error: error }, { status: 500 });
    }

    if (data.user) {
      const user = await prisma.user.findUnique({
        where: {
          user_id: data.user.id,
        },
        select: {
          user_id: true,
          name: true,
          email: true,
          // mobile: true,
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
