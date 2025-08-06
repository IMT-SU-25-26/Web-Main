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
      className={`relative min-h-[20rem] min-w-[30rem] bg-[#F5F5F5] p-4 sm:p-8 flex flex-col gap-4 ${className}`}
      style={{ opacity }}
    >
      <div className="service-image flex flex-col justify-end image-container-hsc bg-gray-200 w-full h-[65%]">
        <div className={`w-full h-[10%] bg-[${color}]`}></div>
      </div>
      <div>
        <h1 className="service-title-text font-family-gill-condensed-bold font-bold text-4xl">
          {title}
        </h1>
        <h2
          className={`service-type-text bg-[${color}] w-fit text-lg px-4 text-white font-family-impact uppercase`}
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
        className="absolute bottom-[-10%] left-0"
      />
    </div>
  );
}