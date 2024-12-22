import AllProductsLink from "@/components/AllProductsLink";
import GlobalBrand from "@/components/GlobalBrand";
import HeroSection from "@/components/HeroSection";
import JoinClub from "@/components/JoinClub";
import MakesOurBrand from "@/components/MakesOurBrand";
import NewCeramics from "@/components/NewCeramics";
import PopularProducts from "@/components/PopularProducts";

export default function Home() {
  return (
    <div className="mt-[74px]">
      {/* All Products List Navigation */}
      <AllProductsLink bgColor="bg-background" lineColor="" />

      {/* Other Components Data */}
      <HeroSection />
      <MakesOurBrand />
      <NewCeramics />
      <PopularProducts />
      <JoinClub />
      <GlobalBrand />
    </div>
  );
}
