import React from 'react'
import  Sidebar  from "@/components/Sidebar";
import { 
    X,
    Bookmark
 } from "lucide-react"; 
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select";
import {Card} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Progress } from "@/components/ui/progress";


function page() {
  return (
    <div className="flex flex-row bg-gradient-to-r from-white to-slate-200 min-h-screen min-w-screen">
      <Sidebar />
      <div className="flex flex-col">
        <div className="flex flex-row p-4">
            <X />
            <div className="pl-4 flex flex-row">
                Python - Skill Checkpoint Quiz #1 
                <div className="font-bold pr-1 pl-1">·</div>
                <div className="font-light text-slate-400">15 Questions</div>

            </div>
        </div>
        <div className="flex flex-row pt-1 pl-4">
            <Card className="flex justify-between w-[1050px] h-[70px] content-center">
            <div className="flex flex-row">
            <div className="flex flex-row pl-4 items-center"> 
            <Select>
                <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Question Number" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="1">Question 1</SelectItem>
                    <SelectItem value="2">Question 2</SelectItem>
                    <SelectItem value="3">Question 3</SelectItem>
                    <SelectItem value="4">Question 4</SelectItem>
                    <SelectItem value="5">Question 5</SelectItem>
                    <SelectItem value="6">Question 6</SelectItem>
                    <SelectItem value="7">Question 7</SelectItem>
                    <SelectItem value="8">Question 8</SelectItem>
                    <SelectItem value="9">Question 9</SelectItem>
                </SelectContent>
            </Select>
            </div>
            <div className="text-sm text-slate-400 content-center pl-4">
                1 MARK
            </div>
            </div>
            <div className="flex content-center items-center text-sm pr-4">
                Mark to revisit
                <div className="pl-4">
                <Bookmark />
                </div>
            </div> 
            </Card>
            <div className="pl-4">
            <Card className="w-[350px] h-[70px] content-center">
                <div className="flex flex-row content-center pl-4">
                    Answer Choices
                </div>
            </Card>
            </div>
        </div>
        <div className="flex flex-row p-4">
        <Card className="w-[1050px] h-[525px]">
        <div className="p-6">
            Paste your question and diagram here.
        </div>
        </Card>
        <div className="pl-4">
        <Card className="w-[350px] h-[525px]">
        <div className="flex flex-col p-6 gap-y-4">
        <RadioGroup defaultValue="option-one">
        <Card className="flex items-center space-x-2 border-2 rounded-md bg-slate-100 h-[50px]">
            <div className="pl-4">
            <RadioGroupItem value="option-one" id="option-one" />
            </div>
            <div className="pl-2">
            <Label htmlFor="option-one">Option One</Label>
            </div>
        </Card>
        <Card className="flex items-center space-x-2 border-2 rounded-md bg-slate-100 h-[50px]">
            <div className="pl-4">
            <RadioGroupItem value="option-two" id="option-two" />
            </div>
            <div className="pl-2">
            <Label htmlFor="option-one">Option Two</Label>
            </div>
        </Card>
        <Card className="flex items-center space-x-2 border-2 rounded-md bg-slate-100 h-[50px]">
            <div className="pl-4">
            <RadioGroupItem value="option-three" id="option-three" />
            </div>
            <div className="pl-2">
            <Label htmlFor="option-one">Option Three</Label>
            </div>
        </Card>
        <Card className="flex items-center space-x-2 border-2 rounded-md bg-slate-100 h-[50px]">
            <div className="pl-4">
            <RadioGroupItem value="option-four" id="option-four" />
            </div>
            <div className="pl-2">
            <Label htmlFor="option-one">Option Four</Label>
            </div>
        </Card>
        </RadioGroup>
        </div>
        
        </Card>
        </div>
            
        </div>
        <div className="pl-4 pt-1">
        <Progress value={67} />
        </div>
      </div>

    </div>
  )
}

export default page
