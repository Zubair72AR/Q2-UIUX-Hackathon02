import TestButton from "@/components/TestButton";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <p className="font-extralight">Extralight</p>
      <p className="font-light">Light</p>
      <p className="font-regular ">Regular</p>
      <p className="font-medium">Medium</p>
      <p className="font-semibold">Semibold</p>
      <p className="font-bold text-[hsl(248,19%,34%)]">Bold</p>
      <TestButton />
      Satoshi-Black.woff Satoshi-BlackItalic.woff Satoshi-Bold.woff
      Satoshi-BoldItalic.woff Satoshi-Italic.woff Satoshi-Light.woff
      Satoshi-LightItalic.woff Satoshi-Medium.woff Satoshi-MediumItalic.woff
      Satoshi-Regular.woff
    </div>
  );
}
