"use client";
import AllProductsLink from "@/components/AllProductsLink";
import products from "@/components/ArrayData";
import { CartContext } from "@/components/Context";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useContext, useState } from "react";

export default function page() {
  const [number, setNumber] = useState(1);
  const cartData = useContext(CartContext);

  return (
    <div>
      <AllProductsLink bgColor="bg-white" lineColor="" />
      <div className="space-y-8 py-14 px-6 sm:px-8 md:px-12 lg:px-20 2xl:px-36 bg-[hsl(0,0,98%)] dark:bg-[hsl(248,34%,20%)]">
        <h2 className="text-3xl md:text-4xl">Your shopping cart</h2>
        <div>
          <div className="grid grid-cols-4 gap-4 mb-2">
            <h4 className="text-sm col-span-2">Product</h4>
            <h4 className="text-sm col-span-1 text-end">Quantity</h4>
            <h4 className="text-sm col-span-1 text-end">Total</h4>
          </div>
          <hr className={`dark:border-chart-5`} />
          <div className="mt-6">
            {products.slice(0, 2).map((val, i) => (
              <div className="grid grid-cols-4 gap-4 items-center my-4 place-items-end">
                <div
                  key={i}
                  className="col-span-2 flex justify-between items-center gap-4"
                >
                  <Image
                    src={val.image}
                    alt={val.name}
                    width={100}
                    height={200}
                    className="w-[105px]"
                  />
                  <div>
                    <h3>{val.name}</h3>
                    <p className="text-sm">{val.description}</p>
                    <p>£{val.price}</p>
                  </div>
                </div>
                <div className="flex justify-center items-center gap-3 px-3 bg-chart-4 text-chart-1 w-28">
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
                <p className="col-span-1 text-end">£{val.price}</p>
              </div>
            ))}
          </div>
          <hr className={`dark:border-chart-5 mt-6`} />
        </div>
        <div className="text-end space-y-4">
          <h2 className="text-lg text-foreground leading-none">
            <span className="text-chart-5  dark:text-chart-3 mr-2">
              Subtotal
            </span>
            £200
          </h2>
          <p className="text-sm text-chart-5 dark:text-chart-3 ">
            Taxes and shipping are calculated at checkout
          </p>
          <Button>Go to checkout</Button>
        </div>
      </div>
    </div>
  );
}
