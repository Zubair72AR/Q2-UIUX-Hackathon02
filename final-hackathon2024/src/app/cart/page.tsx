"use client";
import AllProductsLink from "@/components/AllProductsLink";
import products from "@/components/ArrayData";
import { OfferContext } from "@/components/Context";
// import { CartContext } from "@/components/Context";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useContext, useState } from "react";

export default function page() {
  const [number, setNumber] = useState(1);

  // Offer Strip Margin Top Setup for Navbar Scrolling
  const { isOfferVisible, setIsOfferVisible } = useContext(OfferContext);

  return (
    // Offer Strip Margin Top Setup for Navbar Scrolling
    <div
      className={` ${
        isOfferVisible ? "mt-[97px] md:mt-[110px]" : "mt-[61px] md:mt-[74px]"
      } `}
    >
      {/* All Products List Navigation */}
      <AllProductsLink bgColor="bg-white" lineColor="" />

      {/* Shopping Cart Heading */}
      <div className="space-y-8 py-14 px-6 sm:px-8 md:px-12 lg:px-20 2xl:px-36 bg-[hsl(0,0,96%)] dark:bg-[hsl(248,34%,20%)]">
        <h2 className="text-3xl md:text-4xl">Your shopping cart</h2>

        {/* Shopping Cart Menu Heading */}
        <div>
          <div className="hidden sm:grid grid-cols-4 gap-4 mb-2">
            <h4 className="text-sm col-span-2">Product</h4>
            <h4 className="text-sm col-span-1 text-end">Quantity</h4>
            <h4 className="text-sm col-span-1 text-end">Total</h4>
          </div>
          <hr className={`hidden sm:block dark:border-chart-5`} />

          {/* Shopping Cart Products */}
          <div className="mt-6">
            {products.slice(0, 2).map((val, i) => (
              <div className="sm:grid grid-cols-4 gap-4 items-center my-4 ">
                <div
                  key={i}
                  className="col-span-2 flex justify-start items-center gap-2 md:gap-4"
                >
                  {/* Shopping Cart Product Image */}
                  <Image
                    src={val.image}
                    alt={val.name}
                    width={100}
                    height={200}
                    className="w-[130px] md:w-[115px]"
                  />

                  {/* Shopping Cart Product Details */}
                  <div>
                    <h3 className="text-sm md:text-base">{val.name}</h3>
                    <p className="text-[10px] md:text-xs">{val.description}</p>
                    <p className="text-sm md:text-base">£{val.price}</p>

                    {/* Shopping Cart Product Add Quantity Button for Mobile Devices */}
                    <div className="flex sm:hidden justify-center items-center gap-3 px-3 bg-chart-4 text-chart-1 w-[105px]">
                      <button
                        onClick={() => {
                          number >= 2 && setNumber(number - 1);
                        }}
                        className="px-3 py-1 text-chart-3 text-lg"
                      >
                        -
                      </button>
                      {number}
                      <button
                        onClick={() => {
                          setNumber(number + 1);
                        }}
                        className="px-3 py-1 text-chart-3 text-lg"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                {/* Shopping Cart Product Add Quantity Button for Large Screen */}
                <div className="hidden sm:flex justify-center items-center ml-auto gap-3 px-3 bg-chart-4 text-chart-1 w-28">
                  <button
                    onClick={() => {
                      number >= 2 && setNumber(number - 1);
                    }}
                    className="px-3 py-[6px] text-chart-3 text-lg"
                  >
                    -
                  </button>
                  {number}
                  <button
                    onClick={() => {
                      setNumber(number + 1);
                    }}
                    className="px-3 py-[6px] text-chart-3 text-lg"
                  >
                    +
                  </button>
                </div>

                {/* Shopping Cart Product Price */}
                <p className="hidden sm:block col-span-1 text-end text-sm md:text-base">
                  £{val.price}
                </p>
              </div>
            ))}
          </div>
          <hr className={`dark:border-chart-5 mt-6`} />
        </div>
        <div className="text-end space-y-1 sm:space-y-4">
          {/* Shopping Cart Total Price */}
          <h2 className="sm:text-lg text-foreground leading-none">
            <span className="text-chart-5  dark:text-chart-3 mr-2">
              Subtotal
            </span>
            £200
          </h2>
          <p className="text-xs sm:text-sm text-chart-5 dark:text-chart-3 ">
            Taxes and shipping are calculated at checkout
          </p>

          {/* Shopping Cart Update and Checkout Button */}
          <Button>Go to checkout</Button>
        </div>
      </div>
    </div>
  );
}
