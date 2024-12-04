import { ChevronRight, MailOpen } from "lucide-react";
import { Button } from "./ui/button";

import React from "react";
import Link from "next/link";

export default function TestButton() {
  return (
    <div className="flex justify-between items-center flex-wrap gap-6 p-12">
      <Button variant="default">default</Button>
      <Button variant="default">
        <MailOpen />
        Mail
      </Button>
      <Button variant="destructive">destructive</Button>
      <Button variant="outline">outline</Button>
      <Button variant="secondary">secondary</Button>
      <Button variant="ghost">ghost</Button>
      <Button variant="link">link</Button>
      <Button size="default">size default</Button>
      <Button size="lg">size lg</Button>
      <Button size="sm">size sm</Button>
      <Button size="icon">icon</Button>
      <Button size="icon">
        <ChevronRight />
      </Button>
      <Button asChild>
        <Link href="/login">Login</Link>
      </Button>
      <div>
        <div className="bg-background text-foreground border-2 p-2">
          BackFore
        </div>
        <div className="bg-primary text-primary-foreground border-2 p-2">
          Primary
        </div>
        <div className="bg-secondary text-secondary-foreground border-2 p-2">
          secondary
        </div>
      </div>
    </div>
  );
}
