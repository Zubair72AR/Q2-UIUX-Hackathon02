"use client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ToggleButton() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button onClick={toggleTheme}>
      {theme === "dark" ? (
        <Sun className="h-[1.15rem] w-[1.15rem] sm:h-[1.25rem] sm:w-[1.25rem]" />
      ) : (
        <Moon className="h-[1.15rem] w-[1.15rem] sm:h-[1.25rem] sm:w-[1.25rem]" />
      )}
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
