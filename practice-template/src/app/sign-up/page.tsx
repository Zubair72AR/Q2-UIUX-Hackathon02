import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FcGoogle } from "react-icons/fc";

export default function SignUp() {
  return (
    <div className="flex justify-between items-center gap-8">
      <div className="bg-[#CBE4E8]">
        <Image
          src="/Login-Signup.png"
          alt="Login Signup Image"
          width={600}
          height={600}
        />
      </div>
      <div className="pr-7 sm:pr-8 lg:pr-12 2xl:pr-24">
        <p>Create an account</p>
        <p>Enter your details below</p>
        <input
          type="text"
          placeholder="Name"
          className="text-sm placeholder:text-sm outline-none border-b w-full py-2"
        />
        <input
          type="email"
          placeholder="Email or Phone Number"
          className="text-sm placeholder:text-sm outline-none border-b w-full py-2"
        />
        <input
          type="password"
          placeholder="Password"
          className="text-sm placeholder:text-sm outline-none border-b w-full py-2"
        />
        <Button className="w-full h-14">Create Account</Button>
        <button className="flex justify-center items-center gap-3 rounded-md w-full h-14 border text-sm">
          <FcGoogle className="text-[26px]" />
          Sign up with Google
        </button>
        <p className="flex justify-center items-center gap-4 text-sm text-secondary-foreground p-1">
          Already have account?
          <Link href="/log-in" className="font-medium border-b p-1">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}
