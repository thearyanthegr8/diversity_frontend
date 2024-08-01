"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Roadmap } from "@prisma/client";
import CourseList from "./_course-list";

interface Course {
  id: number;
  url: string;
  price: string;
  title: string;
  structure: string[];
  thumbnail: string;
  description: string;
}

interface CourseCategory {
  [key: string]: Course | CourseCategory;
}

interface CourseListProps {
  courses: CourseCategory;
}

function Page() {
  const [roadmap, setRoadmap] = useState<CourseCategory>();
  const supabase = createClientComponentClient();

  useEffect(() => {
    async function getRoadmap() {
      try {
        const {
          data: { user },
        } = await supabase.auth.getUser();

        if (user !== null) {
          const response = await axios.get(
            "/api/dashboard/roadmap?user_id=" + user.id
          );

          console.log(response.data.roadmap_data.courses);
          setRoadmap(response.data.roadmap_data);
        }
      } catch (e) {}
    }

    getRoadmap();
  }, [supabase.auth]);

  useEffect(() => {
    console.log("Roadmap: " + roadmap);
  }, [roadmap]);

  return <div>{roadmap && <CourseList courses={roadmap} />}</div>;
}

export default Page;
