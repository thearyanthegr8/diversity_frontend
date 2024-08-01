import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const leaderboardData = [
  { place: 1, name: "Alice", points: 1500 },
  { place: 2, name: "Bob", points: 1400 },
  { place: 3, name: "Charlie", points: 1300 },
  { place: 4, name: "David", points: 1200 },
  { place: 5, name: "Eve", points: 1100 },
];

function Page() {
  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-2xl">Leaderboard</h1>
      <Table>
        <TableCaption>Leaderboard of the &lt;Current Skill&gt;</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Place</TableHead>
            <TableHead>Name</TableHead>
            <TableHead className="text-right">Points</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {leaderboardData.map((entry) => (
            <TableRow key={entry.place}>
              <TableCell className="font-medium">{entry.place}</TableCell>
              <TableCell>{entry.name}</TableCell>
              <TableCell className="text-right">{entry.points}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default Page;
