import React from 'react'
import  Sidebar  from "@/components/Sidebar";
import { Input } from "@/components/ui/input"
import { MousePointerClick } from "lucide-react";


function page() {
  return (
    <div className="flex flex-row bg-gradient-to-r from-white to-slate-200 min-h-screen min-w-screen">
      <Sidebar />
      <div className="flex flex-col">
        <div className="text-xl font-bold pl-6 pt-6 pb-4">Search for the topic/skill you want to quiz yourself on!</div>
        <div className="pl-5 w-full">
        <Input placeholder="🔍 Find your quiz!"/>
        </div>
        <div className="text-xl font-bold pl-6 pt-28 pb-4">Programming</div>
        <div className="text-base pl-6 pt-1 pb-4">Our programming quizzes are designed to test for on-the-job skills like the ability to solve problems , write code to add new functionalities, spot and fix bugs etc.</div>
        <div className="grid grid-cols-4 gap-4 pl-6">
            <div className="bg-slate-200 rounded-lg h-16 content-center">
                <div className="pl-3 font-xl font-bold">
                    <div className="flex flex-row">JavaScript</div>
                    <div className="flex flex-row-reverse pr-2"><MousePointerClick/></div>
                </div>
            </div>
            <div className="bg-slate-200 rounded-lg h-16 content-center">
                <div className="pl-3 font-xl font-bold">
                    <div className="flex flex-row">Java</div>
                    <div className="flex flex-row-reverse pr-2"><MousePointerClick/></div>
                </div>
            </div>
            <div className="bg-slate-200 rounded-lg h-16 content-center">
                <div className="pl-3 font-xl font-bold">
                    <div className="flex flex-row">Python</div>
                    <div className="flex flex-row-reverse pr-2"><MousePointerClick/></div>
                </div>
            </div>
            <div className="bg-slate-200 rounded-lg h-16 content-center">
                <div className="pl-3 font-xl font-bold">
                    <div className="flex flex-row">PHP</div>
                    <div className="flex flex-row-reverse pr-2"><MousePointerClick/></div>
                </div>
            </div>
            <div className="bg-slate-200 rounded-lg h-16 content-center">
                <div className="pl-3 font-xl font-bold">
                    <div className="flex flex-row">C#</div>
                    <div className="flex flex-row-reverse pr-2"><MousePointerClick/></div>
                </div>
            </div>
            <div className="bg-slate-200 rounded-lg h-16 content-center">
                <div className="pl-3 font-xl font-bold">
                    <div className="flex flex-row">Ruby</div>
                    <div className="flex flex-row-reverse pr-2"><MousePointerClick/></div>
                </div>
            </div>
            <div className="bg-slate-200 rounded-lg h-16 content-center">
                <div className="pl-3 font-xl font-bold">
                    <div className="flex flex-row">C++</div>
                    <div className="flex flex-row-reverse pr-2"><MousePointerClick/></div>
                </div>
            </div>
            <div className="bg-slate-200 rounded-lg h-16 content-center">
                <div className="pl-3 font-xl font-bold">
                    <div className="flex flex-row">Embedded</div>
                    <div className="flex flex-row-reverse pr-2"><MousePointerClick/></div>
                </div>
            </div>
  
        </div>

      </div>
    </div>
    
  )
}

export default page
