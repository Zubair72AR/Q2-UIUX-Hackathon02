import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const FlashSalesItems = [
  {
    discount: 40,
    image: "/flashSalesGamepad.png",
    name: "HAVIT HV-G92 Gamepad",
    price: 120,
    originalPrice: 160,
    stars: 5,
    reviews: 88,
  },
];

export default function FlashSalesSlider() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-sm"
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">aaaa</div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
