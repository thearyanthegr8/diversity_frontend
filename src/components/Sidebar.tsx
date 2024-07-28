'use client';

import { GraduationCap } from "lucide-react"
import { Dumbbell } from "lucide-react"
import { Medal } from "lucide-react"
import { UsersRound } from "lucide-react"
import { Search } from "lucide-react"
import { LifeBuoy } from "lucide-react"
import { Cog } from "lucide-react"

import { Button } from "@/components/ui/button"

import { Separator } from "@/components/ui/separator"

import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"


export default function Sidebar() {
    return <div className='flex flex-col w-[75px] min-w-[75px] border-r min-h-screen p-4'>
    <div className="flex py-2"><Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </div>
    <Separator className="my-4" />
    <div className="flex py-2"><Button variant="outline" size="icon">
      <GraduationCap className="h-4 w-4" />
    </Button>
    </div>
    <div className="flex py-2"><Button variant="outline" size="icon">
      <Dumbbell className="h-4 w-4" />
    </Button>
    </div>
    <div className="flex py-2"><Button variant="outline" size="icon">
      <Medal className="h-4 w-4" />
    </Button>
    </div>
    <Separator className="my-4" />
    <div className="flex py-2"><Button variant="outline" size="icon">
      <UsersRound className="h-4 w-4" />
    </Button>
    </div>
    <div className="flex py-2"><Button variant="outline" size="icon">
      <Search className="h-4 w-4" />
    </Button>
    </div>
    <Separator className="my-4" />
    <div className="flex py-2"><Button variant="outline" size="icon">
      <LifeBuoy className="h-4 w-4" />
    </Button>
    </div>
    <div className="flex py-2"><Button variant="outline" size="icon">
      <Cog className="h-4 w-4" />
    </Button>
    </div>
    </div>;
}