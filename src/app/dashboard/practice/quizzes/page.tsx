import React from "react";
import { X, Bookmark } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";

function page() {
  return (
    <div className="h-full flex flex-col gap-4">
      <div className="flex flex-row items-center gap-4">
        <Button variant={"ghost"} className="aspect-square p-0">
          <X size={20} />
        </Button>
        <p>Python - Skill Checkpoint Quiz #1 </p>
        <p>·</p>
        <p className="font-light text-slate-400">10 Questions</p>
      </div>
      <div className="flex flex-row w-full gap-4">
        <Card className="flex justify-between content-center flex-2 py-2 px-4">
          <div className="flex flex-row gap-4">
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
            <p className="text-sm text-slate-400 content-center">1 MARK</p>
          </div>
          <Button
            className="flex justify-center items-center text-sm gap-2"
            variant={"ghost"}
          >
            Mark to revisit
            <div className="">
              <Bookmark />
            </div>
          </Button>
        </Card>
        <Card className="content-center flex-1 py-2 px-4">Answer Choices</Card>
      </div>
      <div className="flex flex-row flex-1 gap-4 h-full">
        <Card className="flex-2 py-2 px-4 h-full">
          <p>Paste your question</p>
        </Card>
        <Card className="flex-1 py-2 px-4 h-full">
          <RadioGroup defaultValue="option-one">
            {Array.from({ length: 4 }).map((_, index) => (
              <Card className={`flex items-center py-4 px-4 gap-2`} key={index}>
                <RadioGroupItem
                  value={`option-${index + 1}`}
                  id={`option-${index + 1}`}
                />
                <Label htmlFor={`option-${index}`}>Option {index + 1}</Label>
              </Card>
            ))}
          </RadioGroup>
        </Card>
      </div>
      <div className="">
        <Progress value={67} />
      </div>
    </div>
  );
}

export default page;
