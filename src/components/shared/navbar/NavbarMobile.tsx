"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { navLinks } from "@/app/(constants)/constants";

type Props = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const NavbarMobile = ({ setOpen }: Props) => {
  const navLinksMobile = [
    ...navLinks,

    {
      name: "Sign out",
      href: "/api/auth/signout",
    },
  ];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-10 h-screen bg-background"
    >
      <div className="relative flex h-full items-center justify-center">
        <ul className="space-y-4">
          {navLinksMobile.map((link) => (
            <li key={link.name}>
              <Link href={link.href}>
                <Button variant="link" className="poppins m-0 p-0 text-[8vw]">
                  {link.name}
                </Button>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default NavbarMobile;
