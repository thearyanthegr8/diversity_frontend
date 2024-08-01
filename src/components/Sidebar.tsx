"use client";
import {
  Bolt,
  Dumbbell,
  GraduationCap,
  LifeBuoy,
  Medal,
  Search,
  UsersRound,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { createAvatar } from "@dicebear/core";
import { lorelei } from "@dicebear/collection";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Database } from "@/lib/types/database.types";
import { useEffect, useState } from "react";
import { prisma } from "@/lib/prisma";

const dashboard_links = [
  {
    section: "Study",
    links: [
      { name: "Learn", icon: <GraduationCap size={18} /> },
      { name: "Practice", icon: <Dumbbell size={18} /> },
      { name: "Leaderboard", icon: <Medal size={18} /> },
    ],
  },
  {
    section: "Recruitment",
    links: [
      { name: "Interview", icon: <UsersRound size={18} /> },
      { name: "Recruitments", icon: <Search size={18} /> },
    ],
  },
  {
    section: "Support",
    links: [
      { name: "FAQ", icon: <LifeBuoy size={18} /> },
      { name: "Settings", icon: <Bolt size={18} /> },
    ],
  },
];

export default function Sidebar() {
  const path = usePathname();
  // const supabase = createClientComponentClient<Database>();
  // const [user, setUser] = useState(null);

  // useEffect(() => {
  //   const fetchUser = async () => {
  //     const {
  //       data: { session },
  //     } = await supabase.auth.getSession();
  //   };

  //   fetchUser();
  // }, [supabase.auth]);

  // const avatar = createAvatar(lorelei, {
  //   seed: "John Doe",
  //   // ... other options
  // });

  // const svg = avatar.toString();

  return (
    <div className="flex flex-col w-[70px] min-w-[70px] max-h-screen h-screen p-4 bg-[#F7F7F7] fixed left-0 top-0 gap-6">
      <div className="flex pt-2">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          {/* {svg} */}
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
      {dashboard_links.map((section, index) => (
        <div key={index} className="flex flex-col gap-4">
          <Separator />
          {section.links.map((link, index) => (
            <Link key={index} href={`/dashboard/${link.name.toLowerCase()}`}>
              <Button
                key={index}
                variant={`${
                  path.includes(`/dashboard/${link.name.toLowerCase()}`)
                    ? "outline"
                    : "ghost"
                }`}
                size="icon"
                className="p-2"
              >
                {link.icon}
              </Button>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
}
