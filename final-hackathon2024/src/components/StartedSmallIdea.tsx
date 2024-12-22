import Image from "next/image";
import { Button } from "./ui/button";

export default function StartedSmallIdea() {
  return (
    <div className="grid grid-cols-3 md:grid-cols-6 grid-rows-2 md:grid-rows-1 gap-3 min-h-[450px] px-6 sm:px-8 md:px-12 lg:px-20 2xl:px-36 overflow-hidden">
      <div className="col-span-3 flex items-start justify-between flex-col px-7 pb-7 pt-11 sm:p-12 lg:p-16 h-full bg-foreground text-background">
        {/* Left Portion Heading and Paragraph */}
        <div className="space-y-4 lg:space-y-6">
          <h1 className="text-3xl sm:text-4xl leading-tight">
            It started with a small idea
          </h1>

          <p className="font-light text-sm sm:text-base">
            A global brand with local beginnings, our story begain in a small
            studio in South London in early 2014
          </p>
        </div>

        <Button variant={"destructive"} className="w-full md:w-auto">
          View collection
        </Button>
      </div>

      {/* Right Portion Image */}
      <Image
        src="/Hero-About.png"
        alt="Hero Image"
        width={500}
        height={200}
        className="object-cover col-span-3 h-full w-full"
      />
    </div>
  );
}
