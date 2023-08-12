"use client";

import React, { useState } from "react";
import Hamburger from "hamburger-react";
import NavbarMobile from "./NavbarMobile";
import { AnimatePresence } from "framer-motion";

const HamburgerMenu = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="z-10 block md:hidden">
      <div className="relative z-20 block">
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </div>

      <AnimatePresence>
        {isOpen && <NavbarMobile setOpen={setOpen} />}
      </AnimatePresence>
    </div>
  );
};

export default HamburgerMenu;
