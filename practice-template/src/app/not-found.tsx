"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { RxSlash } from "react-icons/rx";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function notFound() {
  return (
    <div className="py-10 md:py-16 lg:py-20 px-7 sm:px-8 lg:px-12 2xl:px-24">
      {/* Bread Crum */}
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink
              href="/"
              className="text-sm font-medium text-zinc-500 capitalize"
            >
              Home
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <RxSlash />
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbPage className="text-foreground font-medium">
              404 Error
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {/* Page Not Found */}
      <div className="grid place-items-center space-y-7 py-20">
        {/* Main Heading */}
        <h2 className="text-center text-4xl sm:text-6xl font-medium">
          404 Not Found
        </h2>

        {/* Description */}
        <p className="text-center text-sm">
          Your visited page not found. You may go home page.
        </p>

        {/* Back to Home Button */}
        <Button>
          <Link href="/">Back to home page</Link>
        </Button>
      </div>
    </div>
  );
}
