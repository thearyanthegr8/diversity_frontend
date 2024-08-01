import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Coins } from "lucide-react";
import React from "react";

function TopBar() {
  return (
    <div className="fixed w-[calc(100%-70px)] border-b-2 bg-white px-8 h-[3.5rem] flex items-center z-40 shadow-sm justify-between">
      <div>
        <Select defaultValue="Roadmap 1">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select your skill" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Roadmap 1" defaultChecked>
              Roadmap 1
            </SelectItem>
            <SelectItem value="Roadmap 2">Roadmap 2</SelectItem>
            <SelectItem value="Roadmap 3">Roadmap 3</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="flex gap-2">
        <Coins size={24} />
        <p>20</p>
      </div>
    </div>
  );
}

export default TopBar;
