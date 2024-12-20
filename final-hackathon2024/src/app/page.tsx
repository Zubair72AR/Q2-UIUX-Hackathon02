import AllProductsLink from "@/components/AllProductsLink";
import CustomCursors from "@/components/CustomCursor";
import GlobalBrand from "@/components/GlobalBrand";
import HeroSection from "@/components/HeroSection";
import JoinClub from "@/components/JoinClub";
import MakesOurBrand from "@/components/MakesOurBrand";
import NewCeramics from "@/components/NewCeramics";
import PopularProducts from "@/components/PopularProducts";
// import CartContext from "@/components/Context";

export default function Home() {
  return (
    <div className="mt-[75px]">
      <AllProductsLink bgColor="bg-background" lineColor="" />
      <HeroSection />
      <MakesOurBrand />
      <NewCeramics />
      <PopularProducts />
      <JoinClub />
      <GlobalBrand />
    </div>
  );
}
