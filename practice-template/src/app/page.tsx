import HeroSection from "@/components/HeroSection";
import ReverseTimer from "@/components/ReverseTimer";
import TestButton from "@/components/TestButton";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ReverseTimer seconds={172800} />
      <TestButton />
    </div>
  );
}
