import HeroSection from "@/components/HeroSection";
import ReverseTimer from "@/components/CountdownTimer";
import TestButton from "@/components/TestButton";
import FlashSales from "@/components/FlashSales";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <FlashSales />
      <TestButton />
    </div>
  );
}
