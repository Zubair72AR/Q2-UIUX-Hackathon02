"use client";
import AllProductsLink from "@/components/AllProductsLink";
import { OfferContext } from "@/components/Context";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useContext } from "react";
import { urlFor } from "@/sanity/lib/image";
import { useAppDispatch, useAppSelector } from "../hooks";
import { addToCart, removeFromCart } from "../store/slices/cartSlice";

export default function page() {
  const dispatch = useAppDispatch();

  // Offer Strip Margin Top Setup for Navbar Scrolling
  const { isOfferVisible } = useContext(OfferContext);

  // Cart Array State from Redux Store
  const addedProducts = useAppSelector((state) => state.cartArray);

  // Calculate subtotal
  const subtotal = addedProducts.reduce(
    (total, item) => total + item.price * item.orderQty,
    0
  );

  return (
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

        {/* Shopping Cart Products */}
        <div className="mt-6">
          {addedProducts.map((val) => {
            const imageUrl = val.image
              ? urlFor(val.image).url()
              : "/Placeholder.svg";
            return (
              <div
                className="sm:grid grid-cols-4 gap-4 items-center my-4"
                key={val._id}
              >
                {/* Product Details */}
                <div className="col-span-2 flex justify-start items-center gap-2 md:gap-4">
                  <Image
                    src={imageUrl}
                    alt={val.name}
                    width={100}
                    height={200}
                    className="w-[130px] md:w-[115px]"
                  />
                  <div>
                    <h3 className="text-sm md:text-base">{val.name}</h3>
                    <p className="text-[10px] md:text-xs">{val.description}</p>
                    <p className="text-sm md:text-base">£{val.price}</p>
                  </div>
                </div>

                {/* Quantity Controls */}
                <div className="hidden sm:flex justify-center items-center ml-auto gap-3 px-3 bg-chart-4 text-chart-1 w-28">
                  <button
                    onClick={() => {
                      dispatch(removeFromCart({ prodId: val._id }));
                    }}
                    className="px-3 py-[6px] text-chart-3 text-lg"
                  >
                    -
                  </button>
                  {val.orderQty}
                  <button
                    onClick={() => {
                      dispatch(addToCart({ prod: val }));
                    }}
                    className="px-3 py-[6px] text-chart-3 text-lg"
                  >
                    +
                  </button>
                </div>

                {/* Product Price */}
                <p className="hidden sm:block col-span-1 text-end text-sm md:text-base">
                  £{(val.price * val.orderQty).toFixed(2)}
                </p>
              </div>
            );
          })}
        </div>

        <hr className={`dark:border-chart-5 mt-6`} />

        {/* Subtotal and Checkout */}
        <div className="text-end space-y-1 sm:space-y-4">
          <h2 className="sm:text-lg text-foreground leading-none">
            <span className="text-chart-5 dark:text-chart-3 mr-2">
              Subtotal
            </span>
            £{subtotal.toFixed(2)}
          </h2>
          <p className="text-xs sm:text-sm text-chart-5 dark:text-chart-3">
            Taxes and shipping are calculated at checkout
          </p>
          <Button>Go to checkout</Button>
        </div>
      </div>
    </div>
  );
}
