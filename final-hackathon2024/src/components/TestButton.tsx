import { ChevronRight, MailOpen } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

// Please Ignore This Components
// Test Button for testing Colors and Themes
export default function TestButton() {
  return (
    <div className="flex justify-between items-center flex-wrap gap-6 p-12">
      <p className="font-extralight">Extralight</p>
      <p className="font-light">Light</p>
      <p className="font-regular ">Regular</p>
      <p className="font-medium">Medium</p>
      <p className="font-semibold">Semibold</p>
      <p className="font-bold text-[hsl(248,19%,34%)]">Bold</p>

      <span className="bg-[hsl(248,34%,22%)] h-10 w-auto rounded-sm text-white">
        Dark Primary
      </span>
      <span className="bg-chart-1 h-10 w-10 rounded-sm text-white">aaa</span>
      <span className="bg-[hsl(241,31%,44%)] h-10 w-auto rounded-sm text-white">
        Primary
      </span>
      <span className="bg-chart-2 h-10 w-10 rounded-sm text-white">aaa</span>
      <span className="bg-[hsl(0,0%,98%)] h-10 w-auto rounded-sm text-white">
        Light Gray
      </span>
      <span className="bg-[hsl(252,21%,82%)] h-10 w-auto rounded-sm text-white">
        Dark Border
      </span>
      <span className="bg-chart-3 h-10 w-10 rounded-sm text-white">aaa</span>
      <span className="bg-[hsl(255,35%,93%)] h-10 w-auto rounded-sm text-white">
        Border Gray
      </span>
      <span className="bg-chart-4 h-10 w-10 rounded-sm text-white">aaa</span>
      <span className="bg-[hsl(0,0%,100%)] h-10 w-auto rounded-sm text-white">
        White
      </span>
      <span className="bg-chart-5 h-10 w-10 rounded-sm text-white">aaa</span>

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
