"use client";
import { Separator } from "@/components/ui/separator";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { useToast } from "@/components/ui/use-toast";
import { title } from "process";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export default function Page() {
  const params = useSearchParams();
  const [currentSkillLevel, setCurrentSkillLevel] = useState<string | null>();
  const [targetSkillLevel, setTargetSkillLevel] = useState<string | null>();
  const toast = useToast();
  const [loading, setLoading] = useState(false);
  const supabase = createClientComponentClient();
  const router = useRouter();

  async function generateRoadmap() {
    setLoading(true);
    try {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (user !== null) {
        const response = await axios.post("/api/onboarding/generate-roadmap", {
          skill: params.get("skill"),
          currentSkillLevel,
          targetSkillLevel,
          user_id: user.id,
        });

        router.push("/dashboard/learn");
      }
    } catch (e) {
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-2xl">Choose your current and target skill level</h1>
      <Separator />
      <div className="flex gap-4">
        <div className="flex-1">
          {/* <p>Your Current Skill Level:</p> */}
          <Select onValueChange={(e) => setCurrentSkillLevel(e)}>
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="Current Skill Level" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Novice">Novice</SelectItem>
              <SelectItem value="Amateur">Amateur</SelectItem>
              <SelectItem value="Intermediate">Intermediate</SelectItem>
              <SelectItem value="Advanced">Advanced</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex-1">
          {/* <p>Your Target Skill Level:</p> */}
          <Select onValueChange={(e) => setTargetSkillLevel(e)}>
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="Target Skill Level" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Intermediate">Intermediate</SelectItem>
              <SelectItem value="Expert">Expert</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <Button
        disabled={!currentSkillLevel || !targetSkillLevel}
        onClick={() => generateRoadmap()}
      >
        Next
      </Button>
    </div>
  );
}
