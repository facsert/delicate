import { Button } from "@/components/ui/button";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";


import {
  Home,
} from "lucide-react";
import { ReactElement } from "react";

interface Option {
  name: string
  count: number
  icon: ReactElement
};

const mailbox: Option[] = [{
  name: "Inbox",
  count: 128,
  icon: <Home className="mr-2 w-4 h-4" />
},{
  name: "Drafts",
  count: 9,
  icon: <Home className="mr-2 w-4 h-4" />
},{
  name: "Sent",
  count: 0,
  icon: <Home className="mr-2 w-4 h-4" />
},{
  name: "Junk",
  count: 23,
  icon: <Home className="mr-2 w-4 h-4" />
},{
  name: "Trash",
  count: 0,
  icon: <Home className="mr-2 w-4 h-4" />
},{
  name: "Archive",
  count: 0,
  icon: <Home className="mr-2 w-4 h-4" />
}
];

const setting: Option[] = [{
  name: "Social",
  count: 972,
  icon: <Home className="mr-2 w-4 h-4" />
},{
  name: "Updates",
  count: 342,
  icon: <Home className="mr-2 w-4 h-4" />
},{
  name: "Forums",
  count: 128,
  icon: <Home className="mr-2 w-4 h-4" />
},{
  name: "Shopping",
  count: 8,
  icon: <Home className="mr-2 w-4 h-4" />
},{
  name: "Promotions",
  count: 21,
  icon: <Home className="mr-2 w-4 h-4" />
}
];

export default function Side() {
  return (
    <div className="w-full h-full px-2 pt-2 flex flex-col items-center gap-4">
      <Select>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select a mail" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="apple">outlook.com</SelectItem>
            <SelectItem value="banana">gmail.com</SelectItem>
            <SelectItem value="blueberry">163.com</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <div className="w-full h-full flex flex-col rounded-lg border">
        <div className="flex flex-col gap-1 p-2">
          {mailbox.map(option => {
            return (
              <Button key={option.name} className="w-full flex flex-row justify-between" variant="ghost">
                <div className="flex flex-row">
                  {option.icon} {option.name}
                </div>
                <div>
                  {option.count?? ""}
                </div>
              </Button>
            );
          })}
        </div>
        <Separator />
        <div className="flex flex-col p-2 gap-1">
        {setting.map(option => {
            return (
              <Button key={option.name} className="w-full flex flex-row justify-between" variant="ghost">
                <div className="flex flex-row">
                  {option.icon} {option.name}
                </div>
                <div>
                  {option.count?? ""}
                </div>
              </Button>
            );
          })}
        </div>
      </div>
    </div>
  );
}