"use client";

import React from "react";
import { navLinks } from "@/app/(constants)/constants";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const NavbarLinks = () => {
  const pathname = usePathname();

  return (
    <ul className="hidden md:flex">
      {navLinks.map((link) => (
        <li key={link.name}>
          <Link href={link.href}>
            <Button
              variant="link"
              className={cn(
                "text-md",
                pathname === link.href ? "text-violet-400" : "",
              )}
            >
              {link.name}
            </Button>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavbarLinks;
