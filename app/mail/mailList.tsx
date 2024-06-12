import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Input } from "@/components/ui/input"
import { mainModule } from "process";

interface Mail {
  id: number;
  title: string;
  content: string;
  date: string;

  sender: string;
  recipient: string;

  status: string;
  read: boolean;
  tags: string[];
}

const mails: Mail[] = [
  {
    id: 1,
    title: "Hello",
    content: "This is a test mail",
    date: "2021-01-01",
    sender: "John Doe",
    recipient: "Jane Doe",
    status: "unread",
    read: false,
    tags: ["test", "hello"],
  },
  {
    id: 2,
    title: "Hello",
    content: "This is a test mail",
    date: "2021-01-01",
    sender: "John Doe",
    recipient: "Jane Doe",
    status: "unread",
    read: false,
    tags: ["test", "hello"],
  },
  {
    id: 3,
    title: "Hello",
    content: "This is a test mail",
    date: "2021-01-01",
    sender: "John Doe",
    recipient: "Jane Doe",
    status: "unread",
    read: true,
    tags: ["test", "hello"],
  }
]

export default function MailList() {
  return (
    <div className="w-full h-full bg-card pt-2">
      <Tabs defaultValue="inbox" className="w-full h-full flex flex-col bg-card">
        <div className="flex flex-row justify-between bg-card">
          <h1 className="text-2xl">
            Inbox
          </h1>
          <TabsList>
            <TabsTrigger value="inbox">Inbox</TabsTrigger>
            <TabsTrigger value="unread">Unread</TabsTrigger>
          </TabsList>
        </div>
        <Input placeholder="Search" className="my-2"></Input>
        <TabsContent value="inbox" className="flex flex-col gap-2 m-0 p-0">
          {mails.map(mail => {
            return (
              <Card key={mail.id} className="rounded-lg hover:bg-accent">
                <CardHeader>
                  <CardTitle>{mail.title}</CardTitle>
                  <CardDescription>{mail.sender}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {mail.content}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </TabsContent>
        <TabsContent value="unread" className="flex flex-col gap-2 m-0">
          {mails.filter(mail => mail.read === false).map(mail => {
            return (
              <Card key={mail.id} className="rounded-lg hover:bg-accent">
                <CardHeader>
                  <CardTitle>{mail.title}</CardTitle>
                  <CardDescription>{mail.sender}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {mail.content}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </TabsContent>
      </Tabs>
    </div>
  );
}