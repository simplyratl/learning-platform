import React from "react";
import Hero from "./components/Hero";
import Services from "@/app/(root)/home/noauth/components/Services";

type Props = {};

const NoAuthHome = (props: Props) => {
  return (
    <main className="mx-auto max-w-7xl">
      <Hero />
      <div className="px-8">
        <Services />
      </div>
    </main>
  );
};

export default NoAuthHome;
