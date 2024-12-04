import SendHorizontal from "/public/SendHorizontal.svg";
import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <div className="flex justify-between items-center bg-foreground px-20 py-10">
      <div className="grid place-items-start gap-4">
        <h3 className="text-lg font-bold text-background">Exclusive</h3>
        <div className="grid place-items-start gap-2">
          <h4 className="font-semibold text-background">Subscribe</h4>
          <p className="text-sm font-light text-background">
            Get 10% off your first order
          </p>
          <div className="flex justify-between items-center border-[1px] border-background py-1 px-[10px] mt-1 rounded-sm">
            <input
              type="text"
              placeholder="Enter your email"
              className="text-sm font-light bg-transparent placeholder:text-zinc-700"
            />
            <Image
              src="/public/SendHorizontal.svg"
              alt="SendHorizontal"
              width={20}
              height={20}
            />
            <SendHorizontal className="text-background" />
          </div>
        </div>
      </div>
      <div className="grid place-items-start gap-4">
        <h3 className="text-lg font-bold text-background">Exclusive</h3>
        <div className="grid place-items-start gap-2">
          <h4 className="font-semibold text-background">Subscribe</h4>
          <p className="text-sm font-light text-background">
            Get 10% off your first order
          </p>
          <div className="flex justify-between items-center border-[1px] border-background py-1 px-[10px] mt-1 rounded-sm">
            <input
              type="text"
              placeholder="Enter your email"
              className="text-sm font-light bg-transparent placeholder:text-zinc-700"
            />
            <SendHorizontal className="text-background" />
          </div>
        </div>
      </div>
      <div className="grid place-items-start gap-4">
        <h3 className="text-lg font-bold text-background">Exclusive</h3>
        <div className="grid place-items-start gap-2">
          <h4 className="font-semibold text-background">Subscribe</h4>
          <p className="text-sm font-light text-background">
            Get 10% off your first order
          </p>
          <div className="flex justify-between items-center border-[1px] border-background py-1 px-[10px] mt-1 rounded-sm">
            <input
              type="text"
              placeholder="Enter your email"
              className="text-sm font-light bg-transparent placeholder:text-zinc-700"
            />
            <SendHorizontal className="text-background" />
          </div>
        </div>
      </div>
      <div className="grid place-items-start gap-4">
        <h3 className="text-lg font-bold text-background">Exclusive</h3>
        <div className="grid place-items-start gap-2">
          <h4 className="font-semibold text-background">Subscribe</h4>
          <p className="text-sm font-light text-background">
            Get 10% off your first order
          </p>
          <div className="flex justify-between items-center border-[1px] border-background py-1 px-[10px] mt-1 rounded-sm">
            <input
              type="text"
              placeholder="Enter your email"
              className="text-sm font-light bg-transparent placeholder:text-zinc-700"
            />
            <SendHorizontal className="text-background" />
          </div>
        </div>
      </div>
      <div className="grid place-items-start gap-4">
        <h3 className="text-lg font-bold text-background">Exclusive</h3>
        <div className="grid place-items-start gap-2">
          <h4 className="font-semibold text-background">Subscribe</h4>
          <p className="text-sm font-light text-background">
            Get 10% off your first order
          </p>
          <div className="flex justify-between items-center border-[1px] border-background py-1 px-[10px] mt-1 rounded-sm">
            <input
              type="text"
              placeholder="Enter your email"
              className="text-sm font-light bg-transparent placeholder:text-zinc-700"
            />
            <SendHorizontal className="text-background" />
          </div>
        </div>
      </div>
    </div>
  );
}
