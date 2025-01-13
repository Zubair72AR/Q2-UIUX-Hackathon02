import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { FaStar } from "react-icons/fa6";
import { RiHeart3Line } from "react-icons/ri";
import { PiEye } from "react-icons/pi";

const FlashSalesItems = [
  {
    discount: 40,
    image: "/flashSalesGamepad.png",
    name: "HAVIT HV-G92 Gamepad",
    price: 120,
    originalPrice: 160,
    stars: 5,
    reviews: 88,
    category: "Gaming",
    tag: "Flash Sales",
  },
  {
    discount: 35,
    image: "/flashSalesKeyboard.png",
    name: "AK-900 Wired Keyboard",
    price: 960,
    originalPrice: 1160,
    stars: 4,
    reviews: 75,
    category: "Computers",
    tag: "Flash Sales",
  },
  {
    discount: 40,
    image: "/flashSalesGamepad.png",
    name: "HAVIT HV-G92 Gamepad",
    price: 120,
    originalPrice: 160,
    stars: 2,
    reviews: 88,
    category: "Gaming",
    tag: "Flash Sales",
  },
  {
    discount: 35,
    image: "/flashSalesKeyboard.png",
    name: "AK-900 Wired Keyboard",
    price: 960,
    originalPrice: 1160,
    stars: 3,
    reviews: 75,
    category: "Computers",
    tag: "Flash Sales",
  },
  {
    discount: 40,
    image: "/flashSalesGamepad.png",
    name: "HAVIT HV-G92 Gamepad",
    price: 120,
    originalPrice: 160,
    stars: 1,
    reviews: 88,
    category: "Gaming",
    tag: "Flash Sales",
  },
  {
    discount: 35,
    image: "/flashSalesKeyboard.png",
    name: "AK-900 Wired Keyboard",
    price: 960,
    originalPrice: 1160,
    stars: 4,
    reviews: 75,
    category: "Computers",
    tag: "Flash Sales",
  },
];

export default function BestSellingSlider() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full"
    >
      <CarouselContent>
        {FlashSalesItems.map((item, index) => (
          <CarouselItem
            key={index}
            className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
          >
            <div className="space-y-1">
              <div className="p-8 mb-3 h-[250px] bg-zinc-200 dark:bg-zinc-700 relative rounded-sm">
                <p className="top-3 left-3 absolute px-3 py-1 font-medium text-primary-foreground text-[12px] bg-primary rounded-sm">
                  -{item.discount}%
                </p>
                <div className="top-3 right-3 absolute text-xl rounded-full p-2 bg-background">
                  <RiHeart3Line />
                </div>
                <div className="top-14 right-3 absolute text-xl rounded-full p-2 bg-background">
                  <PiEye />
                </div>
                <Image
                  src={item.image}
                  alt={item.name}
                  width={400}
                  height={400}
                  className="h-48 max-auto"
                />
              </div>
              <p className="font-medium">{item.name}</p>
              <div className="flex justify-start items-center gap-4">
                <p className="text-primary font-medium">${item.price}</p>
                <s className="text-zinc-500 font-medium">
                  ${item.originalPrice}
                </s>
              </div>
              <div className="flex justify-start items-center gap-[3px]">
                <FaStar
                  className={`${
                    item.stars >= 1 ? "text-orange-400" : "text-zinc-300"
                  }`}
                />
                <FaStar
                  className={`${
                    item.stars >= 2 ? "text-orange-400" : "text-zinc-300"
                  }`}
                />
                <FaStar
                  className={`${
                    item.stars >= 3 ? "text-orange-400" : "text-zinc-300"
                  }`}
                />
                <FaStar
                  className={`${
                    item.stars >= 4 ? "text-orange-400" : "text-zinc-300"
                  }`}
                />
                <FaStar
                  className={`${
                    item.stars >= 5 ? "text-orange-400" : "text-zinc-300"
                  }`}
                />
                <p className="font-medium text-xs text-zinc-500 pl-1">{`(${item.reviews})`}</p>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="-top-14 xs:-top-16 right-10" />
      <CarouselNext className="-top-14 xs:-top-16 right-0" />
    </Carousel>
  );
}
