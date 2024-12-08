import Image from "next/image";
import { Button } from "./ui/button";

export default function HeroSection() {
  return (
    <div className="flex justify-between items-center px-6 sm:px-8 md:px-12 lg:px-20 2xl:px-36">
      <div className="grid grid-rows-2 p-14 h-[550px] bg-foreground text-background">
        <div>
          <h1 className="text-4xl">
            The furniture brand for the future, with timeless designs
          </h1>
          <Button variant={"destructive"}>View collection</Button>
        </div>
        <div>
          <p className="">
            A new era in eco friendly furniture with Avelon, the French luxury
            retail brand with nice fonts, tasteful colors and a beautiful way to
            display things digitally using modern web technologies.
          </p>
        </div>
      </div>
      <Image src="/Hero-Image.png" alt="Hero Image" width={500} height={300} />
    </div>
  );
}
