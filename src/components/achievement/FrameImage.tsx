import React from "react";
import Image from "next/image";

type FrameImageProps = {
  src: string | null;
  className?: string;
};

const FrameImage = ({ src, className }: FrameImageProps) => {
  // Don't render if no src provided
  if (!src) {
    return (
      <div className={`absolute bg-white p-2 z-0 ${className}`}>
        <div className="absolute bg-black/50 w-[55%] h-[15%] z-10 -top-4 left-[22%]"></div>
        <div className="w-full h-auto aspect-square bg-gray-200 flex items-center justify-center">
          <span className="text-gray-400 text-sm">No Image</span>
        </div>
      </div>
    );
  }

  return (
    <div className={`absolute bg-white p-2 z-0 ${className}`}>
      <div className="absolute bg-black/50 w-[55%] h-[15%] z-10 -top-4 left-[22%]"></div>
      <Image
        className="w-full h-auto object-contain aspect-square"
        src={src}
        alt=""
        width={0}
        height={0}
        sizes="100vw"
      ></Image>
    </div>
  );
};

export default FrameImage;
