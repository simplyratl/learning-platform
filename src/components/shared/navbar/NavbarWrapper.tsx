"use client";

import React, { useEffect, useRef } from "react";

type Props = {
  children: React.ReactNode;
};

const NavbarWrapper = ({ children }: Props) => {
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let prevScrollPos = window.scrollY;

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const header = headerRef.current;

      if (!header) return;

      if (prevScrollPos > currentScrollPos) {
        header.style.transform = "translateY(0)";
      } else {
        header.style.transform = "translateY(-100%)";
      }

      prevScrollPos = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      ref={headerRef}
      className="fixed inset-x-0 top-0 z-[10] h-[72px] bg-white bg-opacity-70 py-2 backdrop-blur transition-transform dark:bg-[#00021490]"
    >
      {children}
    </div>
  );
};

export default NavbarWrapper;
