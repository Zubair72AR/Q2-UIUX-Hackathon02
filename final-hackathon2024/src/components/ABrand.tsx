import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

export default function ABrand() {
  return (
    <div className="flex justify-between items-start sm:items-center flex-col sm:flex-row gap-10 py-10 sm:py-20 px-6 sm:px-8 md:px-16 lg:px-24 2xl:px-40">
      {/* Main Heading for About Page */}
      <h1 className="text-3xl sm:w-[60%]">
        A brand built on the love of craftmanship, quality and outstanding
        customer service
      </h1>
      <Link href="/all-products">
        <Button variant={"secondary"} className="block w-full sm:w-auto">
          View our products
        </Button>
      </Link>
    </div>
  );
}
