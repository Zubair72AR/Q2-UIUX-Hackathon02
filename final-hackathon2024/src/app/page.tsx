import HeroSection from "@/components/HeroSection";
import MakesOurBrand from "@/components/MakesOurBrand";
import NewCeramics from "@/components/NewCeramics";
import PopularProducts from "@/components/PopularProducts";
import TestButton from "@/components/TestButton";
import Test from "@/components/Text";
import { ToggleButton } from "@/components/ToggleButton";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <MakesOurBrand />
      <NewCeramics />
      <PopularProducts />
      <Test />
      <TestButton />
    </div>
  );
}
