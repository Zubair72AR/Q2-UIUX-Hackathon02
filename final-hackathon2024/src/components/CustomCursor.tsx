"use client";

import React, { useState, useEffect } from "react";

const CustomCursors = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState<"default" | "hover">(
    "default"
  );
  const [cursor2Variant, setCursor2Variant] = useState<"default" | "hover">(
    "default"
  );

  const cursorStyles: Record<string, string> = {
    default: "bg-zinc-300 opacity-40 h-8 w-8",
    hover: "bg-transparent border-[1px] border-zinc-100 h-16 w-16",
  };
  const cursor2Styles: Record<string, string> = {
    default: "bg-red-500 h-2 w-2",
    hover: "bg-emerald-400 h-[6px] w-[6px]",
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => {
      setCursorVariant("hover");
      setCursor2Variant("hover");
    };

    const handleMouseLeave = () => {
      setCursorVariant("default");
      setCursor2Variant("default");
    };

    window.addEventListener("mousemove", handleMouseMove);

    const interactiveElements = document.querySelectorAll(
      "a, button, .hoverable"
    );
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <div>
      {/* Cursor 1 */}
      <div
        className={`fixed top-0 left-0 rounded-full pointer-events-none z-[9999] transition-all duration-1000 ease-out ${cursorStyles[cursorVariant]}`}
        style={{
          transform: `translate3d(${
            position.x - (cursorVariant === "hover" ? 32 : 16)
          }px, ${position.y - (cursorVariant === "hover" ? 32 : 16)}px, 0)`,
        }}
      ></div>

      {/* Cursor 2 */}
      <div
        className={`fixed top-0 left-0 rounded-full pointer-events-none z-[9999] transition-all duration-500 ease-out ${cursor2Styles[cursor2Variant]}`}
        style={{
          transform: `translate3d(${
            position.x - (cursor2Variant === "hover" ? 3 : 4)
          }px, ${position.y - (cursor2Variant === "hover" ? 3 : 4)}px, 0)`,
        }}
      ></div>
    </div>
  );
};

export default CustomCursors;
