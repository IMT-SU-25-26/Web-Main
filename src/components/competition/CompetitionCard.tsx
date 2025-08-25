"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Competition } from "@/types/service/competition";

const colorList = [
  "#ED4E45", // Red
  "#118D25", // Green
  "#F64A78", // Pink
  "#0555AB", // Blue
  "#F7C235", // Yellow
  "#CCBCAF", // Gray
];

type CompetitionCardProps = {
  competition: Competition;
  index: number;
  className?: string;
};

export const CompetitionCard = ({
  competition,
  index,
  className,
}: CompetitionCardProps) => {
  const accentColor = colorList[index % colorList.length];
  const [swinging, setSwinging] = useState(false);
  const pathname = usePathname();
  const description = competition.description;
  const descChar = 200;
  const trimmedDescription =
    description.length > descChar
      ? description.slice(0, descChar) + "..."
      : description;

  return (
    <div
      onMouseLeave={() => {
        setSwinging(true);
        setTimeout(() => setSwinging(false), 700); // match swing duration (in global.css ; .swing-effect)
      }}
      className={`transform flex flex-col transition-all duration-300 relative w-[330px] sm:w-[360px] h-[430px] bg-white shadow-[5px_5px_10px_rgba(0,0,0,0.1)] rounded-xl px-4 py-4 mt-8 text-left border-[1px] border-gray-200 hover:rotate-[1.5deg] hover:origin-top ${
        swinging ? "swing-effect" : ""
      } ${className} `}
    >
      {/* Paper Clip */}
      <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-10">
        <Image src="/activities/tape.svg" alt="tape" width={80} height={80} />
      </div>

      <Link
        href={`${pathname.replace(/\/$/, "")}/${competition.id}`}
        className="flex-1 flex flex-col"
      >
        <div className="w-full h-50 sm:h-55 mb-2 rounded-lg overflow-hidden">
          {/* Activity Image */}
          <Image
            src={competition.imageUrl || "/placeholder/placeholder.png"}
            alt={competition.name}
            width={360}
            height={144}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Card Content */}
        <div className="flex justify-between">
          <div>
            <h3 className="w-full text-black text-[1.3rem] font-extrabold">
              {competition.name}
            </h3>

            {/* Location Desc Logo */}
            {/* <div className="flex gap-1 justify-start items-center">
              <Image
                className="w-[0.6rem]"
                src={"/activities/point-map.svg"}
                alt="Point map" 
                width={50}
                height={50}
              />
              <p className="text-[0.8rem] text-gray-600">$$$</p>
            </div> */}
          </div>

          {/* People Amount Logo */}
          {/* <div className="flex flex-col items-center justify-center">
            <Image
              className="w-[25px]"
              src={'/activities/logo-people.svg'}
              alt="People Logo"
              width={100}
              height={100}
            />
            <p className="text-[0.9rem]">000</p>
          </div> */}
        </div>
        <p className="w-full mt-2 font-gill text-[12px] text-black">
          {trimmedDescription}
        </p>
      </Link>

      <a
        href="https://bit.ly/compucimt"
        target="_blank"
        rel="noopener noreferrer"
        className="relative mt-auto w-full py-2 rounded-lg text-white font-medium text-center transition-all duration-200 hover:opacity-90 flex items-center justify-center"
        style={{ backgroundColor: accentColor }}
      >
        <p className="text-[0.9rem]">Register</p>
      </a>
    </div>
  );
};
