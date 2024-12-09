import Image from "next/image";
import { Button } from "./ui/button";

export default function OurService() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 overflow-hidden pt-12">
      <Image
        src="/Image-right.png"
        alt="Hero Image"
        width={500}
        height={200}
        className="object-cover h-full w-full"
      />
      <div className="flex items-center md:items-start justify-between flex-col gap-20 pl-6 sm:pl-8 md:pl-12 lg:pl-20 2xl:pl-36 pr-6 sm:pr-8 md:pr-12 py-12 lg:py-16 text-chart-1 bg-chart-4 min-h-[450px]">
        <div className="space-y-3 lg:space-y-4">
          <h1 className="text-2xl">
            Our service isn’t just personal, it’s actually hyper personally
            exquisite
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
        <Button variant={"outline"} className="w-full md:w-auto">
          Get in touch
        </Button>
      </div>
    </div>
  );
}
