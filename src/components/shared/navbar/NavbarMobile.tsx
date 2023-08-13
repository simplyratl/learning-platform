"use client";

import { navLinks } from "@/app/(constants)/constants";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { signOut } from "next-auth/react";
import Link from "next/link";
import React from "react";
import { ThemeToggle } from "@/components/shared/navbar/ThemeToggle";

type Props = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const NavbarMobile = ({ setOpen }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-10 h-screen overflow-y-auto bg-background"
    >
      <div className="relative flex h-full items-center justify-center">
        <ul className="space-y-3">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link href={link.href} onClick={() => setOpen(false)}>
                <Button variant="link" className="poppins m-0 p-0 text-4xl">
                  {link.name}
                </Button>
              </Link>
            </li>
          ))}
          <li>
            <div>
              <Button
                onClick={() => signOut()}
                variant="link"
                className="poppins m-0 p-0 text-4xl"
              >
                Sign out
              </Button>
            </div>
          </li>
          <li className="mt-8 flex justify-center">
            <ThemeToggle />
          </li>
        </ul>
      </div>
    </motion.div>
  );
};

export default NavbarMobile;
