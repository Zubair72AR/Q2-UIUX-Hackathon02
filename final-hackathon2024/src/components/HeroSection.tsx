import Image from "next/image";
import { Button } from "./ui/button";

export default function HeroSection() {
  return (
    <div className="px-6 sm:px-8 md:px-12 lg:px-20 2xl:px-36">
      <div>
        <h1>The furniture brand for the future, with timeless designs</h1>
        <button>View collection</button>
      </div>
      <Image src="/Hero-Image.png" alt="Hero Image" width={500} height={300} />
    </div>
  );
}
