"use client";
import AllProductsLink from "@/components/AllProductsLink";
import { OfferContext } from "@/components/Context";
import React, { useContext } from "react";
import { FiSend } from "react-icons/fi";
import { LuPhoneCall } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";
import { GrLocation } from "react-icons/gr";
import { Button } from "@/components/ui/button";

export default function Contact() {
  // Offer Strip Margin Top Setup for Navbar Scrolling
  const { isOfferVisible, setIsOfferVisible } = useContext(OfferContext);

  return (
    // Offer Strip Margin Top Setup for Navbar Scrolling
    <div
      className={`${
        isOfferVisible ? "mt-[97px] md:mt-[110px]" : "mt-[61px] md:mt-[74px]"
      }`}
    >
      {/* All Products List Navigation */}
      <AllProductsLink bgColor="bg-[hsl(0,0,97%)]" lineColor="border-none" />

      <div>
        {/* Google Map */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d924237.7093735649!2d66.49597359574025!3d25.19298370075647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e06651d4bbf%3A0x9cf92f44555a0c23!2sKarachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1737548529794!5m2!1sen!2s"
          width="100%"
          height="500"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className="flex md:flex-row flex-col justify-center items-start gap-6 lg:gap-12 py-12 px-6 sm:px-8 md:px-16 lg:px-24 2xl:px-40 w-full bg-gradient-to-b from-background from-70% to-foreground to-10% dark:bg-gradient-to-b dark:from-background dark:from-70% dark:to-secondary dark:to-10%">
          {/* GET IN TOUCH - Our Contact Info */}
          <div className="space-y-6 md:mt-12">
            <div>
              {/* Heading */}
              <h2 className="text-xl font-medium">Get in Touch</h2>
              <p>
                Feel free to reach out to us anytime for assistance or
                inquiries!
              </p>
            </div>

            {/* Phone Number */}
            <div className="space-y-3">
              <div className="flex justify-start items-center gap-4">
                <LuPhoneCall className="text-xl text-foreground" />
                <div>
                  <h3 className="font-medium text-foreground">Phone</h3>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">
                    +92 0342 3873626
                  </p>
                </div>
              </div>

              {/* Email Address */}
              <div className="flex justify-start items-center gap-4">
                <MdOutlineEmail className="text-xl text-foreground" />
                <div>
                  <h3 className="font-medium text-foreground">Email address</h3>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">
                    hzubair717@gmail.com
                  </p>
                </div>
              </div>

              {/* Address  */}
              <div className="flex justify-start items-center gap-4">
                <GrLocation className="text-xl text-foreground" />
                <div>
                  <h3 className="font-medium text-foreground">Location</h3>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">
                    Karachi - Pakistan
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="grid gap-4 px-12 py-14 border dark:border-chart-5 bg-background shadow-xl w-full md:w-[450px]">
            {/* Form Heading */}
            <h2 className="text-xl font-medium">Say Something</h2>

            {/* Form Inputs */}
            <input
              type="text"
              placeholder="Name"
              className="border px-3 py-2 text-sm placeholder:text-sm outline-none bg-transparent dark:border-chart-5"
            />
            <input
              type="text"
              placeholder="Email"
              className="border px-3 py-2 text-sm placeholder:text-sm outline-none bg-transparent dark:border-chart-5"
            />
            <input
              type="tel"
              placeholder="Phone"
              className="border px-3 py-2 text-sm placeholder:text-sm outline-none bg-transparent dark:border-chart-5"
            />

            {/* Form Message */}
            <textarea
              rows={5}
              placeholder="Message"
              className="border px-3 py-2 text-sm placeholder:text-sm outline-none bg-transparent dark:border-chart-5"
            />

            {/* Form Submit Button */}
            <Button type="submit">Send</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
