"use client";
import React, { useEffect, useState } from "react";
import Sidebar from "@/components/Sidebar";
import { Input } from "@/components/ui/input";
import { MousePointerClick } from "lucide-react";
import axios from "axios";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

interface Skill {
  map(arg0: (skill: any) => React.JSX.Element): React.ReactNode;
  skill_id: string;
  skill_name: string;
  category: {
    category_name: string;
  };
}

function Page() {
  const [skillsByCategory, setSkillsByCategory] = useState<Skill[]>([]);
  const [selectedSkill, setSelectedSkill] = useState(null);
  const router = useRouter();

  useEffect(() => {
    async function getSkills() {
      const response = await axios.get("/api/onboarding/skill-selection");

      setSkillsByCategory(response.data.skills);
    }

    getSkills();
  }, []);

  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-2xl">Select which skill you want to test</h1>
      <Separator />
      {Object.entries(skillsByCategory).map(([categoryName, skills]) => (
        <div key={categoryName} className="flex flex-col gap-4">
          <h2 className="text-md font-bold">{categoryName}</h2>
          <div className="flex flex-wrap gap-4">
            {skills.map((skill: any) => (
              <Button
                key={skill.skill_id}
                variant={`${
                  selectedSkill === skill.skill_id ? "default" : "outline"
                }`}
                onClick={() => setSelectedSkill(skill.skill_id)}
              >
                <p>{skill.skill_name}</p>
              </Button>
            ))}
          </div>
        </div>
      ))}
      <Button
        className="w-[180px]"
        disabled={selectedSkill === null}
        onClick={() => router.push(`/dashboard/practice/quizzes`)}
      >
        Next
      </Button>
    </div>
  );
}

export default Page;
