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

  return (
    <div>
      <div className="px-8 py-12">
        {roadmap && <CourseList courses={roadmap} />}
        {/* {roadmap_data["Level 1"]["Introduction to AI & ML"].map((course) => (
          <div key={course.id} className="flex gap-4">
            <div className="flex-1">
              <h2 className="text-lg font-bold">{course.title}</h2>
              <p className="text-sm text-gray-500">{course.description}</p>
              <a
                href={course.url}
                target="_blank"
                rel="noreferrer"
                className="text-blue-500"
              >
                View Course
              </a>
            </div>
            <Image
              src={course.thumbnail}
              alt={course.title}
              className="w-[20rem] aspect-video object-cover rounded-md"
              width={100}
              height={100}
            />
          </div>
        ))} */}
      </div>
    </div>
  );
}

export default Page;
