import { SendHorizontal } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <div className="flex justify-between items-start bg-foreground px-20 py-10">
      <div className="grid place-items-start gap-4">
        <h3 className="text-lg font-bold text-background">Exclusive</h3>
        <div className="grid place-items-start gap-2">
          <h4 className="font-semibold text-background">Subscribe</h4>
          <p className="text-sm font-light text-background">
            Get 10% off your first order
          </p>
          <div className="flex justify-between items-center border-[1px] border-background py-[6px] px-[10px] mt-1 rounded-sm">
            <input
              type="text"
              placeholder="Enter your email"
              className="text-sm font-light text-background bg-transparent placeholder:text-zinc-700"
            />
            <SendHorizontal className="text-background size-5" />
          </div>
        </div>
      </div>

      <div className="grid place-items-start gap-2">
        <h4 className="font-semibold text-background">Support</h4>
        <p className="text-sm font-light text-background">
          111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
        </p>
        <p className="text-sm font-light text-background">
          exclusive@gmail.com
        </p>
        <p className="text-sm font-light text-background">+88015-88888-9999</p>
      </div>

      <div className="grid place-items-start gap-2">
        <h4 className="font-semibold text-background">Account</h4>
        <p className="text-sm font-light text-background">My Account</p>
        <p className="text-sm font-light text-background">Login / Register</p>
        <p className="text-sm font-light text-background">Cart</p>
        <p className="text-sm font-light text-background">Wishlist</p>
        <p className="text-sm font-light text-background">Shop</p>
      </div>
      <div className="grid place-items-start gap-2">
        <h4 className="font-semibold text-background">Quick Link</h4>
        <p className="text-sm font-light text-background">Privacy Policy</p>
        <p className="text-sm font-light text-background">Terms Of Use</p>
        <p className="text-sm font-light text-background">FAQ</p>
        <p className="text-sm font-light text-background">Contact</p>
      </div>
      <div className="grid place-items-start gap-2">
        <h4 className="font-semibold text-background">Download App</h4>
        <p className="text-sm font-light text-background">Privacy Policy</p>
        <p className="text-sm font-light text-background">Terms Of Use</p>
        <p className="text-sm font-light text-background">FAQ</p>
        <p className="text-sm font-light text-background">Contact</p>
      </div>
    </div>
  );
}
