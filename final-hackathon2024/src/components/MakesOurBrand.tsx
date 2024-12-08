import Image from "next/image";
import React from "react";

export default function MakesOurBrand() {
  return (
    <div className="py-14 space-y-10 px-6 sm:px-8 md:px-12 lg:px-20 2xl:px-36">
      <h2 className="text-2xl md:text-center">
        What makes our brand different
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div className="space-y-3">
          <Image
            src="/Delivery.svg"
            alt="Delivery"
            width={50}
            height={50}
            className="w-7 h-7"
          />
          <h3 className="text-xl">Next day as standard</h3>
          <p>Order before 3pm and get your order the next day as standard</p>
        </div>
        <div className="space-y-3">
          <Image
            src="/Checkmark.svg"
            alt="Checkmark"
            width={50}
            height={50}
            className="w-7 h-7"
          />
          <h3 className="text-xl">Made by true artisans</h3>
          <p>Handmade crafted goods made with real passion and craftmanship</p>
        </div>
        <div className="space-y-3">
          <Image
            src="/Purchase.svg"
            alt="Purchase"
            width={50}
            height={50}
            className="w-7 h-7"
          />
          <h3 className="text-xl">Unbeatable prices</h3>
          <p>
            For our materials and quality you won’t find better prices anywhere
          </p>
        </div>
        <div className="space-y-3">
          <Image
            src="/Sprout.svg"
            alt="Sprout"
            width={50}
            height={50}
            className="w-7 h-7"
          />
          <h3 className="text-xl">Recycled packaging</h3>
          <p>
            We use 100% recycled packaging to ensure our footprint is manageable
          </p>
        </div>
      </div>
    </div>
  );
}
