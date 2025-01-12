import HeroSection from "@/components/HeroSection";
import TestButton from "@/components/TestButton";
import FlashSales from "@/components/FlashSales";
import BrowseByCategory from "@/components/BrowseByCategory";
import BestSellingProducts from "@/components/BestSellingProducts";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <FlashSales />
      <BrowseByCategory />
      <BestSellingProducts />
      <TestButton />
    </div>
  );
}
