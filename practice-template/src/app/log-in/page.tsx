import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FcGoogle } from "react-icons/fc";

export default function Login() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-10 md:gap-4 mt-10 mb-24">
      {/* Left Side Image */}
      <div className="bg-[#CBE4E8] w-full md:w-3/5">
        <Image
          src="/Login-Signup.png"
          alt="Login Signup Image"
          width={600}
          height={600}
          className="w-[600px] h-auto pt-12"
        />
      </div>

      {/* Right Side Form */}
      <div className="w-full md:w-2/5 px-7 sm:px-8 lg:px-12 2xl:px-24">
        {/* Heading */}
        <p className="text-3xl font-semibold mb-2">Log in to Exclusive</p>

        {/* Subheading */}
        <p className="text-sm">Enter your details below</p>

        {/* Form Inputs */}
        <div className="space-y-4 my-8">
          <input
            type="email"
            placeholder="Email or Phone Number"
            className="text-sm placeholder:text-sm outline-none border-b w-full py-2 bg-transparent"
          />
          <input
            type="password"
            placeholder="Password"
            className="text-sm placeholder:text-sm outline-none border-b w-full py-2 bg-transparent"
          />
        </div>

        {/* Button */}
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <Button>Log in</Button>
            <Link href="/footer" className="text-sm text-chart-1">
              Forget Password?
            </Link>
          </div>

          {/* Link */}
          <div className="flex justify-center items-center gap-3">
            <p className="text-sm text-zinc-500">New here?</p>
            <Link href="/sign-up" className="text-sm font-medium border-b p-1">
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
