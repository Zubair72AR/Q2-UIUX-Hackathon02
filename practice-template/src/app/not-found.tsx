"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function notFound() {
  const pathName = usePathname();
  return (
    <div className="py-8 md:py-12 lg:py-16 px-7 sm:px-8 lg:px-12 2xl:px-24">
      <p className="text-sm font-medium text-zinc-500 capitalize">
        {pathName.slice(1)} / <span className="text-foreground">404 Error</span>
      </p>
      <div className="grid place-items-center space-y-7 py-20">
        <h2 className="text-center text-4xl sm:text-6xl font-medium">
          404 Not Found
        </h2>
        <p className="text-center text-sm">
          Your visited page not found. You may go home page.
        </p>
        <Button>
          <Link href="/">Back to home page</Link>
        </Button>
      </div>
    </div>
  );
}
