"use client";

import Carousel from "@/components/eventsdetails/Carousel";
import Image from "next/image";
import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function EventDetailPage({
  params,
}: {
  params: Promise<{ eventsId: string }>;
}) {
  const [eventsId, setEventsId] = useState<string>("");

  useEffect(() => {
    // Resolve the params promise
    params.then(({ eventsId }) => {
      setEventsId(eventsId);
    });
  }, [params]);

  useEffect(() => {
    // Animasi untuk decorative images - langsung pop-up tanpa scroll
    const decorativeImages = [
      ".top-left-image",
      ".top-right-image",
      ".pink-oval-image",
      ".bottom-left-image",
      ".camera-image",
    ];

    decorativeImages.forEach((selector, index) => {
      gsap.fromTo(
        selector,
        {
          opacity: 0,
          scale: 0.3,
          rotation: -15,
        },
        {
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 0.8,
          delay: index * 0.2, // Stagger effect
          ease: "back.out(1.7)",
        }
      );
    });
  }, []);

  return (
    <div className="w-full overflow-x-hidden">
      <div className="h-[5vh] bg-[#F1EEE6]"></div>
      <div className="pt-5 relative flex flex-col items-center min-h-screen w-full bg-[url('/backgrounds/background-paper.png')] bg-contain bg-center bg-[#F1EEE6] overflow-hidden">
        <Image
          src="/eventsdetails/top-left.webp"
          alt="top left"
          width={700}
          height={475}
          className="top-left-image top-[-2rem] sm:top-[-3rem] md:top-[-4rem] left-0 absolute w-[12rem] sm:w-[18rem] md:w-[25rem] lg:w-[25rem]"
        />
        <Image
          src="/eventsdetails/top-right.svg"
          alt="top right"
          width={700}
          height={475}
          className="top-right-image top-0 right-0 absolute w-[20rem] sm:w-[25rem] md:w-[30rem] lg:w-[35rem]"
        />
        <Image
          src="/events/pink-oval.svg"
          alt="pink oval"
          width={700}
          height={475}
          className="pink-oval-image bottom-[-10rem] sm:bottom-[-13rem] lg:bottom-[-18rem] left-[-7rem] sm:left-[-5rem] md:left-[-7rem] absolute w-[20rem] sm:w-[25rem] md:w-[30rem] lg:w-[35rem]"
        />
        <Image
          src="/eventsdetails/bottom-left-2.svg"
          alt="bottom left"
          width={700}
          height={475}
          className="bottom-left-image bottom-[-3rem] sm:bottom-[-4rem] md:bottom-[-5rem] left-0 absolute w-[12rem] sm:w-[18rem] md:w-[25rem] lg:w-[25rem] z-1"
        />
        <Image
          className="camera-image absolute bottom-[-2rem] sm:bottom-[-2rem] md:bottom-[-3rem] right-[-1rem] sm:right-[-2rem] md:right-[-6rem] w-[8rem] sm:w-[12rem] md:w-[15rem] lg:w-[15rem] -scale-x-100 rotate-[7deg]"
          src="/events/camera.webp"
          alt="camera"
          width={200}
          height={200}
        />
        {/* Tampilkan Carousel */}
        <div className="w-full relative mt-10 mb-5 rotate-[-2deg]">
          <Carousel />
        </div>

        {/* Event Detail Content */}
        <div className="max-w-4xl mx-auto px-6 py-8 mb-25">
          {/* Date and Title */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-8">
            <h1 className="text-6xl md:text-8xl font-black text-black leading-none">
              {eventsId}
            </h1>
            <p className="text-2xl sm:text2-xl lg:text-3xl font-bold text-black tracking-wider ml-[0.2rem] mt-4 md:mt-0 md:mb-[0.4rem]">
              21 OCTOBER 2024
            </p>
          </div>

          {/* Description */}
          <div className="space-y-6 text-black text-lg md:text-xl leading-relaxed">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>

            <p>
              It was popularised in the 1960s with the release of Letraset
              sheets containing Lorem Ipsum passages, and more recently with
              desktop publishing software like Aldus PageMaker including
              versions of Lorem Ipsum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
