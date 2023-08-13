/* eslint-disable react/no-unescaped-entities */
"use client";

import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";

const Hero = () => {
  return (
    <section className="mx-auto h-[600px] pl-8 pr-8 sm:pr-0">
      <div className="flex h-full gap-4">
        <div className="flex-1">
          <div className="flex h-full flex-col justify-center">
            <h1 className="overflow-hidden text-2xl font-semibold 2xs:text-[11vw] 2xs:leading-[11vw] sm:text-[7vw] sm:leading-[7vw] lg:text-7xl lg:leading-none">
              Learn
              <br /> with AI help <br /> for next exam
            </h1>

            <p className="mt-6 text-base font-medium text-zinc-600 dark:text-zinc-300">
              Millions of businesses of all sizes – from startups to Fortune{" "}
              <br />
              500s – use Stripe's software and APIs to accept payments, send{" "}
              <br />
              payouts, and manage their businesses online.
            </p>

            <div className="mt-6">
              <Button
                className="rounded-full"
                onClick={() => signIn("google").catch(console.error)}
              >
                Start now
              </Button>
            </div>
          </div>
        </div>
        <div className="hidden flex-1 flex-shrink-0 bg-blue-500 sm:block">
          2
        </div>
      </div>
    </section>
  );
};

export default Hero;
