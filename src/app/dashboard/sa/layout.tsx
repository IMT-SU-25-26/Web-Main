"use client"; // because we’ll use hooks

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

type SALayoutDashboard = {
  children: React.ReactNode;
};

export default function SALayoutDashboard({ children }: SALayoutDashboard) {
  const pathname = usePathname();

  return (
    <>
      <div className="h-[6.5vh]"></div>
      <div className="flex">
        {/* menu SA */}
        <div className="h-[93.5vh] w-[20vw] min-w-[15rem] bg-white">
          <Image
            className="mx-auto w-[6.5rem] mt-10"
            src="/logos/su-logo.svg"
            alt="Logo SU"
            width={200}
            height={200}
          />
          <div className="px-9 mt-5">
            {/* Competitions */}
            <Link href={"/dashboard/sa/competitions"}>
              <p
                className={`relative border-b-3 border-black font-family-gill text-xl text-center py-3 ${
                  pathname.includes("/dashboard/sa/competitions") ? "font-bold" : ""
                }`}
              >
                Competitions
                <Image
                  className={`absolute -right-3 top-1/2 -translate-y-1/2 transition-opacity duration-200 ${
                    pathname.includes("/dashboard/sa/competitions")
                      ? "opacity-100"
                      : "opacity-0"
                  }`}
                  src="/dashboard/block-right-arrow.svg"
                  alt="Right Arrow"
                  width={20}
                  height={20}
                />
              </p>
            </Link>

            {/* Activity */}
            <Link href={"/dashboard/sa/activities"}>
              <p
                className={`relative border-b-3 border-black font-family-gill text-xl text-center py-3 ${
                  pathname.includes("/dashboard/sa/activities") ? "font-bold" : ""
                }`}
              >
                Activity
                <Image
                  className={`absolute -right-3 top-1/2 -translate-y-1/2 transition-opacity duration-200 ${
                    pathname.includes("/dashboard/sa/activities")
                      ? "opacity-100"
                      : "opacity-0"
                  }`}
                  src="/dashboard/block-right-arrow.svg"
                  alt="Right Arrow"
                  width={20}
                  height={20}
                />
              </p>
            </Link>
          </div>
        </div>
        {children}
      </div>
    </>
  );
}
