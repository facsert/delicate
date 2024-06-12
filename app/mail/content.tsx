import { 
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";

export default function Content() {
  return (
    <div className="h-full w-full flex flex-col">
      <div className="flex flex-row justify-between">
        <div className="flex flex-col">
          left icon
        </div>
        <div>
          right icon
        </div>
      </div>
      <Card className="h-full w-full">
        <CardHeader>
          <CardTitle>Content</CardTitle>
          <CardDescription>
            This is the content page.
          </CardDescription>
        </CardHeader>
        <CardContent>
          content
        </CardContent>
        <CardFooter>
          footer
        </CardFooter>
      </Card>
    </div>
  );
}