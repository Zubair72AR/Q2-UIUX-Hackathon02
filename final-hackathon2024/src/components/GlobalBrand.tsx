import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

export default function GlobalBrand() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 overflow-hidden">
      <div className="flex items-center md:items-start justify-between flex-col gap-20 pl-6 sm:pl-8 md:pl-12 lg:pl-20 2xl:pl-36 pr-6 sm:pr-8 md:pr-12 py-12 lg:py-16 text-foreground bg-background min-h-[450px]">
        {/* Left Portion Heading and Button */}
        <div className="space-y-3 lg:space-y-4">
          <h1 className="text-2xl">
            From a studio in London to a global brand with over 400 outlets
          </h1>

          <p>
            When we started Avion, the idea was simple. Make high quality
            furniture affordable and available for the mass market.
          </p>
          <p>
            Handmade, and lovingly crafted furniture and homeware is what we
            live, breathe and design so our Chelsea boutique become the hotbed
            for the London interior design community.
          </p>
        </div>

        {/* Button */}
        <Link href="/contact" className="w-full md:w-auto">
          <Button variant={"secondary"} className="w-full md:w-auto">
            Get in touch
          </Button>
        </Link>
      </div>

      {/* Right Portion Image */}
      <Image
        src="/side.png"
        alt="Hero Image"
        width={500}
        height={200}
        className="object-cover h-full w-full"
      />
    </div>
  );
}
