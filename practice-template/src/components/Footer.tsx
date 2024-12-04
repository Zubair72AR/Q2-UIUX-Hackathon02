import { SendHorizontal } from "lucide-react";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaRegCopyright,
} from "react-icons/fa";
import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <div>
      <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-7 bg-foreground px-6 lg:px-18 2xl:px-24 py-14">
        <div className="grid place-items-start gap-4">
          <h3 className="text-lg font-bold text-background">Exclusive</h3>
          <div className="grid place-items-start gap-2">
            <h4 className="font-semibold text-background">Subscribe</h4>
            <p className="text-sm text-background">
              Get 10% off your first order
            </p>
            <div className="flex justify-between items-center border-[1px] border-background py-[6px] px-[10px] mt-1 rounded-sm">
              <input
                type="text"
                placeholder="Enter your email"
                className="text-sm text-background bg-transparent placeholder:text-zinc-700 outline-none"
              />
              <SendHorizontal className="text-background size-5" />
            </div>
          </div>
        </div>

        <div className="grid place-items-start gap-2">
          <h4 className="font-semibold text-background">Support</h4>
          <p className="text-sm text-background">
            111 Bijoy sarani, Dhaka,
            <br />
            DH 1515, Bangladesh.
          </p>
          <p className="text-sm text-background">exclusive@gmail.com</p>
          <p className="text-sm text-background">+88015-88888-9999</p>
        </div>

        <div className="grid place-items-start gap-2">
          <h4 className="font-semibold text-background">Account</h4>
          <p className="text-sm text-background">My Account</p>
          <p className="text-sm text-background">Login / Register</p>
          <p className="text-sm text-background">Cart</p>
          <p className="text-sm text-background">Wishlist</p>
          <p className="text-sm text-background">Shop</p>
        </div>
        <div className="grid place-items-start gap-2">
          <h4 className="font-semibold text-background">Quick Link</h4>
          <p className="text-sm text-background">Privacy Policy</p>
          <p className="text-sm text-background">Terms Of Use</p>
          <p className="text-sm text-background">FAQ</p>
          <p className="text-sm text-background">Contact</p>
        </div>
        <div className="grid place-items-start gap-2">
          <h4 className="font-semibold text-background">Download App</h4>
          <p className="text-sm text-zinc-500">
            Save $3 with App New User Only
          </p>
          <div className="flex justify-center items-center gap-1">
            <Image
              src="/Barcode_Whatsapp.svg"
              alt="Qr Code"
              width={80}
              height={80}
              className="h-20 w-20"
            />

            <Image
              src="/GooglePlay.svg"
              alt="Google Play"
              width={80}
              height={80}
              className="h-20 w-auto"
            />
          </div>
          <div className="flex justify-center items-center gap-6 mt-2 text-background">
            <FaFacebookF className="text-lg" />
            <FaTwitter className="text-xl" />
            <FaInstagram className="text-xl" />
            <FaLinkedinIn className="text-xl" />
          </div>
        </div>
      </div>
      <hr className="border-secondary-foreground" />
      <div className="flex justify-center items-center gap-2 py-5 bg-foreground text-sm text-zinc-700">
        <FaRegCopyright />
        <p>Copyright Zubair Ahmed 2024. All right reserved</p>
      </div>
    </div>
  );
}
