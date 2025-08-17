import React from "react";
import Image from "next/image";
import { getCompetitions } from "@/lib/service/competition";
import CompetitionsSearch from "@/components/competition/CompetitionsSearch";

export const metadata = {
  title: "Competitions",
};

export default async function CompetitionsPage() {
  const competitions = await getCompetitions();

  return (
    <>
      {/* Spacer for header */}
      <div className="h-[10vh] bg-[#F1EEE6]" />

      {/* Background Container - Server Component (Static) */}
      <div className="select-none relative overflow-hidden flex flex-col items-center justify-center min-h-[90vh] pt-0 w-full bg-[url('/backgrounds/background-paper.png')] bg-cover bg-center bg-[#F1EEE6]">
        {/* Decorative Images - All Server Components */}
        <Image
          src="/activities/LightBulb.webp"
          alt="Light Bulb"
          className="absolute select-none top-26 left-[0.3] w-28 md:left-6 md:w-30 z-10"
          width={500}
          height={500}
          draggable={false}
        />
        <Image
          src="/activities/RedStar.webp"
          alt="Red Star"
          className="hidden select-none md:block absolute top-10 left-30 w-20 h-max z-0"
          width={500}
          height={500}
          draggable={false}
        />
        <Image
          src="/activities/GreenQuote.webp"
          alt="Green Quote"
          className="absolute select-none top-12 right-5 w-20 md:right-10 md:w-30 h-max z-0"
          width={500}
          height={500}
          draggable={false}
        />
        <Image
          src="/activities/BottomLeft.webp"
          alt="Bottom Left"
          className="absolute select-none bottom-0 left-0 w-40 h-max z-0"
          width={500}
          height={500}
          draggable={false}
        />
        <Image
          src="/activities/BottomRight.webp"
          alt="Bottom Right"
          className="absolute select-none bottom-0 right-0 w-50 h-max z-0"
          width={500}
          height={500}
          draggable={false}
        />

        {/* Title Section - Server Component */}
        <div className="relative inline-block z-10">
          {/* Pin */}
          <Image
            src="/activities/RedPin.webp"
            alt="Red Pin"
            className="absolute select-none top-3 -right-4 w-10 h-10 z-20"
            width={500}
            height={500}
            draggable={false}
          />

          {/* Paper */}
          <div className="bg-white shadow-lg px-6 py-3 rotate-[-2deg] mt-10 mb-6">
            <h2 className="font-family-impact text-black font-extrabold text-4xl tracking-wider">
              COMPETITIONS
            </h2>
          </div>
        </div>

        {/* Search Section - Client Component */}
        <CompetitionsSearch competitions={competitions} />
      </div>
    </>
  );
}
