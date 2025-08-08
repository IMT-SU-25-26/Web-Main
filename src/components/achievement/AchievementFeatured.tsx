"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AchievementCardProps } from "@/types/achievement";
import ClientDate from "@/components/utils/ClientDate";

const colorMap = {
  blue: "bg-[#0555AB]",
  green: "bg-[#4DAA5C]",
  pink: "bg-[#F64A78]",
  red: "bg-[#ED4E45]",
  yellow: "bg-[#F7C235]",
  gray: "bg-[#CCBCAF]",
};

export function AchievementFeatured ({title, description, borderColor, id, imageUrl, createdAt }: AchievementCardProps) {
  const pathname = usePathname();

  const descChar = 250;
  const trimmedDescription = description.length > descChar ? description.slice(0, descChar) + "..." : description;

  return (
    <Link
      href={`${pathname.replace(/\/$/, "")}/${id}`}
      className="active:brightness-90"
    >
      <div className="w-[100vw] max-w-[80rem] m-auto overflow-visible">
        <div className="relative -left-5 md:left-0 min-h-[90px] md:min-h-[200px] max-w-[120vw] md:max-w-[50rem] m-auto py-6 overflow-hidden">
          {/* Background image */}
          <Image
            src="/achievements/AchievementFeaturedBG.webp"
            alt="Achievement Background"
            fill
            className="object-cover object-left-bottom z-0 "
          />

          {/* Foreground content */}
          <div className="relative left-1/2 -translate-x-[52%] md:translate-x-0 md:left-0 z-10 my-2  w-[75vw] md:w-[90vw]  md:max-w-5xl mx-auto px-4 pb-18 md:p-0 ml-[50px] md:px-6 lg:px-8 flex flex-col md:flex-row md:items-center gap-4">
            {/* Image */}
            <div className="relative md:ml-[10p] left-1/2 md:left-auto -translate-x-1/2 md:translate-x-0 w-[230px] sm:w-[280px] md:w-[180px] h-[210px] md:h-[120px] bg-gray-300">
              <Image src={imageUrl||''} alt={title} fill className="object-cover" />
              <div className={`absolute bottom-0 left-0 w-full h-[8px] ${colorMap[borderColor]} shadow-sm`} />
            </div>

            {/* Text */}
            <div className="flex flex-col justify-start gap-2 text-sm max-w-xl ">
              <div className="flex items-center flex-wrap gap-2">
                <span
                  className="font-impact uppercase bg-[#ED4E45] text-white px-2 py-1"
                  style={{ transform: "rotate(-0.8deg)" }}
                >
                  {title}
                </span>
                <span
                  className="font-impact bg-[#F7C235] text-black px-1 py-0.5"
                  style={{
                    transform: "rotate(0.8deg)",
                    fontSize: "12px",
                    fontWeight: 100,
                    lineHeight: "1rem",
                  }}
                >
                  <ClientDate 
                    createdAt={createdAt.toISOString()} 
                    format="full"
                  />
                </span>
              </div>
              <div className="max-w-md font-bold">
                <p className="font-gill text-gray-800 leading-relaxed font-bold">
                  {trimmedDescription}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    
    </Link>
  );
};

export default AchievementFeatured;
