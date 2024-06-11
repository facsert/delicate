"use client"

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

interface Tag {
  name: string;
  href: string;
  choose: boolean;
}

export default function Navbar() {
  const router = useRouter();
  const tags: Tag[] = [
    {
      name: "Home",
      href: "/",
      choose: true,
    },
    {
      name: "Mail",
      href: "/mail",
      choose: false,
    },
    {
      name: "Dashboard",
      href: "/dashboard",
      choose: false,
    },
  ];

  return (
    <div className="w-full h-full flex flex-row items-center gap-4">
      {tags.map(tag => {
        return (
          <Button
            variant="link"
            key={tag.name}
            onClick={() => router.push(tag.href)}
          >
            {tag.name}
          </Button>
        );
      })}
    </div>
  );
}