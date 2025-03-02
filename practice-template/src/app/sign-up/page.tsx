import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FcGoogle } from "react-icons/fc";

export default function SignUp() {
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
        <p className="text-3xl font-semibold mb-2">Create an account</p>

        {/* Subheading */}
        <p className="text-sm">Enter your details below</p>

        {/* Form Inputs */}
        <div className="space-y-4 my-8">
          <input
            type="text"
            placeholder="Name"
            className="text-sm placeholder:text-sm outline-none border-b w-full py-2 bg-transparent"
          />
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
          <Button className="w-full h-14">Create Account</Button>
          <button className="flex justify-center items-center gap-3 rounded-md w-full h-14 border text-sm">
            <FcGoogle className="text-[26px]" />
            Sign up with Google
          </button>

          {/* Link */}
          <div className="flex justify-center items-center gap-3">
            <p className="text-sm text-zinc-500">Already have account?</p>
            <Link href="/log-in" className="text-sm font-medium border-b p-1">
              Log in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
