"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState(theme);
  const [isMounted, setIsMounted] = useState(false);

  const toggleTheme = () => {
    const newTheme = currentTheme === "light" ? "dark" : "light";
    setTheme(newTheme);
    setCurrentTheme(newTheme);
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      {currentTheme === "light" ? (
        <Sun
          onClick={toggleTheme}
          className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all hover:cursor-pointer"
        />
      ) : (
        <Moon
          onClick={toggleTheme}
          className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all hover:cursor-pointer"
        />
      )}
    </>
  );
}
