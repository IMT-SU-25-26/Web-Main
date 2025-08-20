"use client";

import React, {
  useState,
  ReactElement,
  createContext,
  useContext,
  useEffect,
  useRef,
} from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

type SALayoutDashboardProps = {
  children: React.ReactElement; // accept any child component
};

const SideNavCtx = createContext<{ handleSideNav: () => void } | null>(null);

export const useOptionalSideNav = () => {
  return useContext(SideNavCtx); // could be null if no provider
};

export default function SALayoutDashboard({ children }: SALayoutDashboardProps) {
  const pathname = usePathname();
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);
  const sideNavRef = useRef<HTMLDivElement | null>(null);

  const handleSideNav = () => {
    setIsSideNavOpen((prev) => !prev);
  };

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sideNavRef.current &&
        !sideNavRef.current.contains(event.target as Node)
      ) {
        setIsSideNavOpen(false);
      }
    };

    if (isSideNavOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSideNavOpen]);

  return (
    <>
      <div className="h-[6.5vh]"></div>
      <div className="flex relative">
        {/* menu SA */}
        <div
          ref={sideNavRef}
          className={`absolute top-0 ${
            isSideNavOpen ? "left-0" : "-left-full"
          } 
            transition-all duration-300 ease-in-out xl:static xl:block h-[93.5vh] w-[20vw] min-w-[15rem] bg-white z-10`}
        >
          <Image
            className="mx-auto w-[6.5rem] mt-10"
            src="/logos/su-logo.svg"
            alt="Logo SU"
            width={200}
            height={200}
          />
          <div className="px-9 mt-5">
            {/* Competitions */}
            <Link href={"/dashboard/sa/competitions"} onClick={handleSideNav}>
              <p
                className={`relative border-b-3 border-black font-family-gill text-xl text-center py-3 ${
                  pathname.includes("/dashboard/sa/competitions")
                    ? "font-bold"
                    : ""
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
            <Link href={"/dashboard/sa/activities"} onClick={handleSideNav}>
              <p
                className={`relative border-b-3 border-black font-family-gill text-xl text-center py-3 ${
                  pathname.includes("/dashboard/sa/activities")
                    ? "font-bold"
                    : ""
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

        {/* clone child and inject handleSideNav */}
        <SideNavCtx.Provider value={{ handleSideNav }}>
          {children}
        </SideNavCtx.Provider>
      </div>
    </>
  );
}
