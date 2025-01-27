"use client";
import AllProductsLink from "@/components/AllProductsLink";
import { OfferContext } from "@/components/Context";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useContext } from "react";
import { urlFor } from "@/sanity/lib/image";
import { useAppDispatch, useAppSelector } from "../hooks";
import {
  addToCart,
  clearCart,
  removeFromCart,
} from "../store/slices/cartSlice";
import Link from "next/link";
import { LuCirclePlus, LuCircleMinus } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";

export default function page() {
  const dispatch = useAppDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

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

        {/* Shopping Cart Menu Heading */}
        {addedProducts.length > 0 && (
          <div className="hidden sm:grid grid-cols-4 gap-4 mb-2">
            <h4 className="text-sm col-span-2">Product</h4>
            <h4 className="text-sm col-span-1 text-end">Quantity</h4>
            <h4 className="text-sm col-span-1 text-end">Total</h4>
          </div>
        )}
        <hr className="hidden sm:block dark:border-chart-5" />
        {addedProducts.length === 0 ? (
          <div className="grid place-items-center text-center">
            {/* Empty Cart Image */}
            <Image
              src="/EmptyCart.svg"
              alt="Empty Cart Image"
              width={500}
              height={500}
              className="max-w-52"
            />

            {/* Empty Cart Text */}
            <p className="text-lg font-medium text-foreground">
              Ohhh... Your cart is empty
            </p>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              Let&rsquo;s find something you love!
            </p>

            {/* Shop Now Button */}
            <Link href="/all-products" className="my-3">
              <Button className="mx-auto sm:mx-0 w-full sm:w-auto">
                Shop now
              </Button>
            </Link>
          </div>
        ) : (
          <div className="mt-6">
            {/* Shopping Cart Products */}
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
                  <div className="relative col-span-2 flex justify-start items-center gap-2 md:gap-4">
                    <button
                      className="absolute top-0 left-0 bg-red-500 w-5 h-5 grid place-items-center rounded-[0px_5px_5px_5px]"
                      onClick={() =>
                        dispatch(removeFromCart({ prodId: val._id }))
                      }
                    >
                      <RxCross2 className="text-white text-sm hover:rotate-90 transition-all duration-500" />
                    </button>
                    <Image
                      src={imageUrl}
                      alt={val.name}
                      width={100}
                      height={200}
                      className="w-[140px] md:w-[115px] rounded-[0px_25px_25px_25px]"
                    />
                    <div>
                      <h3 className="text-sm md:text-base">{val.name}</h3>
                      <p className="text-[10px] md:text-xs">
                        {val.description}
                      </p>
                      <p className="text-sm md:text-base">£{val.price}</p>
                      <div className="flex justify-between items-center w-full">
                        {/* Quantity Controls Mobile Devices */}
                        <div className="flex sm:hidden justify-center items-center gap-1 text-chart-1 dark:text-white">
                          <button
                            onClick={() => {
                              dispatch(removeFromCart({ prodId: val._id }));
                            }}
                            className="py-1 text-chart-3 text-lg"
                          >
                            <LuCircleMinus />
                          </button>
                          {val.orderQty}
                          <button
                            onClick={() => {
                              dispatch(addToCart({ prod: val }));
                            }}
                            className="py-1 text-chart-3 text-lg"
                          >
                            <LuCirclePlus />
                          </button>
                        </div>

                        {/* Product Price */}
                        <p className="sm:hidden text-sm md:text-base">
                          £{(val.price * val.orderQty).toFixed(2)}
                        </p>
                      </div>
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
        )}
        <hr className="dark:border-chart-5 mt-6" />

        {/* check out Subtotal and Clear Cart Button */}
        <div className="flex flex-col-reverse sm:flex-row justify-between items-start gap-2">
          {/* Button to Clear the Cart */}

          <Button
            onClick={handleClearCart}
            disabled={addedProducts.length === 0}
            className="bg-red-500 text-white hover:bg-red-700 mx-auto sm:mx-0 w-full sm:w-auto"
          >
            Clear cart
          </Button>

          {/* Subtotal */}
          <div className="space-y-2 sm:space-y-4 w-full sm:w-auto">
            <h2 className="sm:text-lg text-foreground leading-none">
              <span className="text-chart-5 dark:text-chart-3 mr-2">
                Subtotal
              </span>
              £{subtotal.toFixed(2)}
            </h2>
            <p className="text-xs sm:text-sm text-chart-5 dark:text-chart-3">
              Taxes and shipping are calculated at checkout
            </p>

            {/* Button to Checkout */}
            <Button
              disabled={addedProducts.length === 0}
              className="mx-auto sm:mx-0 w-full sm:w-auto"
            >
              Go to checkout
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
