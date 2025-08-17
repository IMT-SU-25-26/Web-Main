import React from "react";
import { HomeServiceCard } from "@/types/homecard";
import Image from "next/image";

export default function HomeServicesCard({
  title,
  type,
  description,
  color,
  opacity,
  className,
}: HomeServiceCard) {
  return (
    <div
      className={`relative min-h-[20rem] min-w-[30rem] bg-[#F5F5F5] p-4 sm:p-8 flex flex-col gap-4 shadow-[-12px_12px_5px_-5px_rgba(0,0,0,0.25)] ${className}`}
      style={{ opacity }}
    >
      <div className="service-image flex flex-col justify-end image-container-hsc bg-gray-200 w-full h-[65%]">
        <div className="w-full h-[10%]" style={{ backgroundColor: color }}></div>
      </div>
      <div>
        <h1 className="service-title-text font-family-gill-condensed-bold font-bold text-4xl">
          {title}
        </h1>
        <h2
          className="service-type-text w-fit text-lg px-4 text-white font-family-impact uppercase"
          style={{ backgroundColor: color }}
        >
          {type}
        </h2>
        <p className="service-description-text font-family-gill text-black font-bold">
          {description}
        </p>
      </div>
      <Image
        src="/home/sobekan-community-service.png"
        alt="Service Image"
        width={1000}
        height={1000}
        draggable={false}
        className="absolute bottom-[-7.5%] z-[20] left-0"
      />
    </div>
  );
}