import React from "react";

export default function SubHeading({ text }: { text: string }) {
  return (
    <div className="flex justify-start items-center gap-3">
      <span className="bg-primary w-5 h-10 inline-block rounded-sm"></span>
      <p className="font-semibold text-primary">{text}</p>
    </div>
  );
}
