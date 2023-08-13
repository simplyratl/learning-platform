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
import { cn } from "@/lib/utils";

export function ThemeToggle(
  { className, ...props }: React.HTMLAttributes<HTMLDivElement>,
) {
  const { theme, setTheme, systemTheme } = useTheme();

  const getDarkMode =
    theme === "dark" ||
    theme === "black" ||
    (theme === "system" && systemTheme === "dark");

  return (
    <div className={className} {...props}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon">
            <Sun
              className={cn(
                "h-[1.2rem] w-[1.2rem] transition-all",
                getDarkMode ? "-rotate-90 scale-0" : "rotate-0 scale-100",
              )}
            />
            <Moon
              className={cn(
                "absolute h-[1.2rem] w-[1.2rem] transition-all",
                getDarkMode ? "rotate-0 scale-100" : "rotate-90 scale-0",
              )}
            />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem
            onClick={() => setTheme("light")}
            className={cn(
              theme === "light" ? "bg-primary text-primary-foreground" : "",
            )}
          >
            Light
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => setTheme("dark")}
            className={cn(
              theme === "dark" ? "bg-primary text-primary-foreground" : "",
            )}
          >
            Dark
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => setTheme("black")}
            className={cn(
              theme === "black" ? "bg-primary text-primary-foreground" : "",
            )}
          >
            Black
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => setTheme("system")}
            className={cn(
              theme === "system" ? "bg-primary text-primary-foreground" : "",
            )}
          >
            System
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
