import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Side from "./side";
import { Separator } from "@/components/ui/separator";


export default function Mail() {
  return (
    <div className="h-full flex flex-row gap-4">
      <div className="w-[16vw]">
        <Side></Side>
      </div>
      <Separator orientation="vertical" className="bg-white"/>
      <div className="w-[40vw] bg-card">
        list
      </div>
      <Separator orientation="vertical" className="bg-white" />
      <div className="w-[44vw] bg-card">
        content
      </div>
    </div>
  );
}