import HeroSection from "@/components/HeroSection";
import JoinClub from "@/components/JoinClub";
import MakesOurBrand from "@/components/MakesOurBrand";
import NewCeramics from "@/components/NewCeramics";
import PopularProducts from "@/components/PopularProducts";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <MakesOurBrand />
      <NewCeramics />
      <PopularProducts />
      <JoinClub />
    </div>
  );
}
