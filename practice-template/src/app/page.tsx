import HeroSection from "@/components/HeroSection";
import ReverseTimer from "@/components/CountdownTimer";
import TestButton from "@/components/TestButton";
import FlashSales from "@/components/FlashSales";
import BrowseByCategory from "@/components/BrowseByCategory";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <FlashSales />
      <BrowseByCategory />
      <TestButton />
    </div>
  );
}
