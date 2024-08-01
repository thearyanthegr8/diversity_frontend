import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import Image from "next/image";
import Link from "next/link";
import React from "react";

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

const CourseList: React.FC<CourseListProps> = ({ courses }) => {
  const renderCourses = (courses: CourseCategory) => {
    return Object.keys(courses).map((key) => {
      const course = courses[key];
      if (typeof course === "object" && !Array.isArray(course)) {
        const isCourse = (course as Course).id !== undefined;
        return (
          <div key={key} className="flex flex-col gap-4">
            {/* <h3>{key}</h3> */}
            {isCourse ? (
              <Card className="p-4 w-full flex flex-col gap-2">
                <div className="flex justify-between w-full items-center">
                  <h2 className="text-xl">{(course as Course).title}</h2>
                  <div className="flex gap-4 items-center">
                    <p>{(course as Course).price}</p>
                    <Link href={(course as Course).url} target="_blank">
                      <Button>Visit</Button>
                    </Link>
                  </div>
                </div>
                <div className="flex justify-between gap-20">
                  <div className="flex-1 flex flex-col gap-2">
                    <p className="text-base">
                      {(course as Course).description}
                    </p>
                    <ul className="flex flex-col gap-2">
                      {(course as Course).structure.map((item, index) => (
                        <li key={index}>
                          <Card className="py-2 px-4 flex items-center gap-4">
                            <Checkbox /> {item}
                          </Card>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <Image
                      src={(course as Course).thumbnail}
                      alt={(course as Course).title}
                      className="w-[20rem] aspect-3/2 rounded-md relative z-0"
                      width={200}
                      height={200}
                    />
                  </div>
                </div>
              </Card>
            ) : (
              renderCourses(course as CourseCategory)
            )}
          </div>
        );
      } else {
        return null;
      }
    });
  };

  return <div>{renderCourses(courses)}</div>;
};

export default CourseList;
