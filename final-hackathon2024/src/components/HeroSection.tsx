import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="grid grid-cols-7 min-h-[450px] md:min-h-[550px] my-0 md:my-8 px-6 sm:px-8 md:px-12 lg:px-20 2xl:px-36 overflow-hidden">
      <div className="col-span-7 md:col-span-4 flex items-center justify-between flex-col px-7 pb-7 pt-11 sm:p-12 lg:p-16 h-full bg-foreground text-background">
        {/* Left Portion with Headings and Button */}
        <div className="space-y-6 lg:space-y-8">
          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl leading-tight">
            The furniture brand for the future, with timeless designs
          </h1>

          {/* Button for Mobile Devices */}
          <Link href="/all-products" className="hidden md:block">
            <Button variant={"destructive"}>View collection</Button>
          </Link>
        </div>
        <div className="space-y-6">
          {/* Paragraph */}
          <p className="font-light text-sm sm:text-base">
            A new era in eco friendly furniture with Avelon, the French luxury
            retail brand with nice fonts, tasteful colors and a beautiful way to
            display things digitally using modern web technologies.
          </p>

          {/* Button for Large Screen */}
          <Link href="/all-products">
            <Button
              variant={"destructive"}
              className="w-full block md:hidden mt-8 md:mt-10"
            >
              View collection
            </Button>
          </Link>
        </div>
      </div>

      {/* Right Portion Image */}
      <Image
        src="/Hero-Image.png"
        alt="Hero Image"
        width={500}
        height={200}
        className="object-cover col-span-7 md:col-span-3 h-full w-full hidden md:block"
      />
    </div>
  );
}
