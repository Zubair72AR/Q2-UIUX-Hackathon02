import HeroSection from "@/components/HeroSection";
import ReverseTimer from "@/components/ReverseTimer";
import TestButton from "@/components/TestButton";
import TodayItem from "@/components/TodayItem";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <TodayItem />
      <TestButton />
    </div>
  );
}
