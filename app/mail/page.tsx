import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Side from "./side";
import MailList from "./mailList";
import { Separator } from "@/components/ui/separator";
import Content from "./content";


export default function Mail() {
  return (
    <div className="h-full flex flex-row gap-4 bg-card">
      <div className="w-[16vw]">
        <Side></Side>
      </div>
      {/* <Separator orientation="vertical" className="border-2"/> */}
      <div className="w-[40vw] bg-card">
        <MailList />
      </div>
      <Separator orientation="vertical" />
      <div className="w-[44vw] bg-card">
        <Content />
      </div>
    </div>
  );
}