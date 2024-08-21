"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [currentTheme, setCurrentTheme] = React.useState(theme);

  const toggleTheme = () => {
    const newTheme = currentTheme === "light" ? "dark" : "light";
    setTheme(newTheme);
    setCurrentTheme(newTheme);
  };

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
