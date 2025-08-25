"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { Activity } from "@prisma/client";
import Link from "next/link";
import ApplyButton from "../utils/ApplyButton";
import { useState, useEffect } from "react";
import { getApprovedApplicationsCount } from "@/lib/service/activity";

const colorList = [
  "#ED4E45", // Red
  "#118D25", // Green
  "#F64A78", // Pink
  "#0555AB", // Blue
  "#F7C235", // Yellow
  "#CCBCAF", // Gray
];

type ActivityCardProps = {
  activity: Activity;
  index: number;
  className?: string;
  confirmApply?: (onConfirm: () => Promise<void>) => void;
  category: string;
};

export const ActivityCard = ({
  activity,
  index,
  className,
  confirmApply,
  category,
}: ActivityCardProps) => {
  const accentColor = colorList[index % colorList.length];
  const [swinging, setSwinging] = useState(false);
  const pathname = usePathname();
  const description = activity.description;
  const trimmedDescription =
    description.length > 75 ? description.slice(0, 75) + "..." : description;

  const [approvedCount, setApprovedCount] = useState<number>(0);

  useEffect(() => {
    const fetchApprovedCount = async () => {
      const count = await getApprovedApplicationsCount(activity.id);
      setApprovedCount(count);
    };
    fetchApprovedCount();
  }, [activity.id]);

  return (
    <Link
      href={`${pathname.replace(/\/$/, "")}/${activity.id}`}
      onMouseLeave={() => {
        setSwinging(true);
        setTimeout(() => setSwinging(false), 700); // match swing duration (in global.css ; .swing-effect)
      }}
      className={`transform flex flex-col transition-all duration-300 relative w-[330px] sm:w-[360px] h-[430px] bg-white shadow-[5px_5px_10px_rgba(0,0,0,0.1)] rounded-xl px-4 py-4 mt-8 text-left border-[1px] border-gray-200 hover:rotate-[1.5deg] hover:origin-top ${
        swinging ? "swing-effect" : ""
      } ${className}`}
    >
      {/* Paper Clip */}
      <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-10">
        <Image src="/activities/tape.svg" alt="tape" width={80} height={80} />
      </div>

      <div className="w-full h-50 sm:h-55 mb-2 rounded-lg overflow-hidden">
        {/* Activity Image */}
        <Image
          src={activity.imageUrl || "/placeholder/placeholder.png"}
          alt={activity.title}
          width={360}
          height={144}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Card Content */}
      <div className="flex justify-between">
        <div>
          <h3 className="w-full text-black text-[1.3rem] font-extrabold">
            {activity.title}
            <p
              style={{ background: accentColor }}
              className={` ml-4 font-light inline py-[4px] px-4 text-white font-family-impact tracking-wider text-[0.9rem]`}
            >
              {category}
            </p>
          </h3>

          {/* Location */}
          <div className="flex gap-1 justify-start items-center mt-1">
            <svg className="w-[0.6rem] h-[0.6rem] text-gray-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            <p className="text-[0.8rem] text-gray-600">{activity.location}</p>
          </div>

          {/* Start Date */}
          <div className="flex gap-1 justify-start items-center mt-1">
            <svg
              className="w-[0.6rem] h-[0.6rem] text-gray-600"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                clipRule="evenodd"
              />
            </svg>
            <p className="text-[0.8rem] text-gray-600">
              {new Date(activity.startDate).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                hour12: true,
              })}
            </p>
          </div>

          {/* Credit Points */}
          <div className="flex gap-1 justify-start items-center mt-1">
            <svg
              className="w-[0.6rem] h-[0.6rem] text-gray-600"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <p className="text-[0.8rem] text-gray-600">
              {activity.creditPoint} Credit Points
            </p>
          </div>
        </div>

        {/* Quota */}
        <div className="flex flex-col items-center justify-center">
          <svg className="w-[25px] h-[25px] text-gray-600" fill="currentColor" viewBox="0 0 20 20">
            <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
          </svg>
          <p className="text-[0.9rem]">
            {approvedCount}/{activity.quota}
          </p>
        </div>
      </div>

      {/* Description */}
      <p className="w-full mt-2 font-gill text-[12px] text-black break-words mb-2">
        {trimmedDescription}
      </p>

      {/* Button */}
      <ApplyButton
        bgColor={accentColor}
        className="relative mt-auto w-full py-2"
        activityId={activity.id}
        confirmApply={confirmApply}
        startDate={activity.startDate}
        quota={activity.quota}
        approvedCount={approvedCount}
      >
        Register
      </ApplyButton>
    </Link>
  );
};
