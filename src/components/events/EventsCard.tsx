import Image from "next/image";
import type { EventsCardProps } from "@/types/events";

export default function EventsCard({ title, date, isreverse, imagesrc }: EventsCardProps) {
  return (
    <div className="bg-[#f4f4f4] bg-cover p-6 rounded-md w-[90%] h-[25rem] sm:h-[20rem] max-w-4xl shadow-md relative mx-auto">
      {/* Card Content */}
      <div
        className={`flex flex-col ${
          isreverse ? "md:flex-row-reverse" : "md:flex-row"
        } gap-4 items-start justify-center relative w-full h-full`}
      >
        {/* Image Section */}
        <div
          className={`w-full md:w-[80%] h-60 rounded-md shadow-inner ${
            imagesrc ? "bg-cover bg-center" : "bg-gray-300"
          }`}
          style={imagesrc ? { backgroundImage: `url('${imagesrc}')` } : undefined}
        />

        {/* Text Section */}
        <div className={`flex flex-col items-center w-full text-center gap-4 ${
          isreverse ? "lg:-ml-[5rem] sm:-ml-[3rem]" : "lg:ml-[-5rem] sm:ml-[-3rem]"
        } -mt-1 mb-13 md:mt-7`}>
          {/* Title and Date */}
          <div className="flex flex-col gap-1 h-full w-full mt-[1rem] items-center text-center">
            <h1 className="text-3xl md:text-5xl text-black font-family-impact">{title}</h1>
            <p className="text-base md:text-lg font-semibold tracking-wider">{date}</p>
          </div>

          {/* View More Button */}
          <div className="relative">
            <div className="viewmore-button absolute w-[180px] md:w-[240px] h-[50px] md:h-[60px] bg-[#0E54B2] p-2 md:p-4 px-4 md:px-8 rounded-2xl bottom-[-2.5rem] md:bottom-[-3.5rem] z-[2] left-1/2 -translate-x-1/2">
              <div className="bg-[#ED427C] flex items-center justify-center w-full h-full absolute left-[5%] top-[-10%] rounded-2xl z-[-1]">
                <h1 className="viewmore-button-text font-family-impact text-xl md:text-3xl text-center text-white">
                  View More
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Image
        src="/events/tearpaper.webp"
        alt="paper"
        width={900}
        height={900}
        className="w-full h-auto absolute lg:bottom-[-20%] sm:bottom-[-16%] bottom-[-6%] left-0 rotate-[2.5deg]"
      />
    </div>
  );
}
