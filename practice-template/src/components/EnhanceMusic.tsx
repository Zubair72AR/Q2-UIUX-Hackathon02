import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

export default function EnhanceMusic() {
  return (
    <div>
      <div>
        {" "}
        <p className="font-medium text-green-400 text-primary">Categories</p>
        <h2>Enhance Your Music Experience</h2>
        <Button className="bg-green-400">Buy Now!</Button>
      </div>
      <Image src="/Speaker.png" alt="Speaker" width={500} height={500} />
    </div>
  );
}
