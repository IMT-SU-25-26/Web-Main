"use client";

import Carousel from "@/components/eventsdetails/Carousel";
import Image from "next/image";
import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Pindahkan eventsData ke luar component
const eventsData = [
  {
    id: "pulse",
    title: "Pulse",
    date: "21 August 2025",
    description:
      "Pulse merupakan event teknologi terbesar yang menghadirkan inovasi-inovasi terdepan dalam dunia digital. Event ini menampilkan berbagai startup teknologi, workshop coding, dan kompetisi hackathon yang menarik. Bergabunglah dengan para tech enthusiast dan developer untuk berbagi ide dan menciptakan solusi inovatif.",
  },
  {
    id: "Technocamp",
    title: "TECHNOCAMP",
    date: "21 OCTOBER 2025",
    description:
      "Technocamp adalah bootcamp intensif yang dirancang untuk mengembangkan skill programming dan teknologi terkini. Peserta akan belajar langsung dari industry expert melalui hands-on workshop, mentoring session, dan project-based learning. Cocok untuk pemula yang ingin terjun ke dunia tech.",
  },
  // Tambahkan event lain sesuai kebutuhan
];

export default function EventDetailPage({
  params,
}: {
  params: Promise<{ eventsId: string }>;
}) {
  const [eventsId, setEventsId] = useState<string>("");
  const [eventDate, setEventDate] = useState<string>("");
  const [eventDescription, setEventDescription] = useState<string>("");

  useEffect(() => {
    // Resolve the params promise
    params.then(({ eventsId }) => {
      setEventsId(eventsId);

      // Cari data event berdasarkan eventsId
      const eventData = eventsData.find((event) => event.id === eventsId);
      if (eventData) {
        setEventDate(eventData.date);
        setEventDescription(eventData.description);
      } else {
        // Fallback jika event tidak ditemukan
        setEventDate("Coming Soon");
        setEventDescription(
          "Informasi event akan segera hadir. Stay tuned untuk update terbaru mengenai event menarik ini!"
        );
      }
    });
  }, [params]); // Sekarang hanya params yang jadi dependency

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
          delay: index * 0.2,
          ease: "back.out(1.7)",
        }
      );
    });

    // Animasi untuk title dan date dengan efek typewriter
    gsap.fromTo(
      ".event-title",
      {
        opacity: 0,
        x: -100,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1.2,
        delay: 1,
        ease: "power3.out",
      }
    );

    gsap.fromTo(
      ".event-date",
      {
        opacity: 0,
        x: 100,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1.2,
        delay: 1.3,
        ease: "power3.out",
      }
    );

    // Animasi untuk description dengan stagger
    gsap.fromTo(
      ".description-paragraph",
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: 1.8,
        stagger: 0.3,
        ease: "power2.out",
      }
    );

    // Animasi untuk carousel dengan slide in
    gsap.fromTo(
      ".carousel-container",
      {
        opacity: 0,
        y: 50,
        rotateX: -10,
      },
      {
        opacity: 1,
        y: 0,
        rotateX: 0,
        duration: 1,
        delay: 0.5,
        ease: "power3.out",
      }
    );

    // Animasi background paper dengan parallax effect
    gsap.fromTo(
      ".background-paper",
      {
        opacity: 0,
        scale: 1.1,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 2,
        ease: "power2.out",
      }
    );
  }, []);

  return (
    <div className="w-full overflow-hidden">
      <div className="h-[5vh] bg-[#F1EEE6]"></div>
      <div className="background-paper pt-5 relative flex flex-col items-center min-h-screen w-full bg-[url('/backgrounds/background-paper.png')] bg-contain bg-center bg-[#F1EEE6] overflow-hidden">
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
        {/* Tampilkan Carousel dengan eventsId */}
        <div className="carousel-container w-full relative mt-10 mb-5 rotate-[-2deg]">
          <Carousel eventsId={eventsId} />
        </div>

        {/* Event Detail Content */}
        <div className="max-w-4xl mx-auto px-6 py-8 mb-25">
          {/* Date and Title */}
          <div className="flex flex-col md:justify-between mb-8">
            <h1 className="event-title text-6xl md:text-8xl font-black text-black leading-none">
              {eventsId || "Loading..."} {/* Tampilkan judul event */}
            </h1>
            <p className="event-date text-2xl sm:text2-xl lg:text-3xl font-bold text-black tracking-wider ml-[0.2rem] mt-4 md:mt-3 md:mb-[0.4rem]">
              {eventDate || "Loading..."}
            </p>
          </div>

          {/* Description */}
          <div className="space-y-6 text-black text-lg md:text-xl leading-relaxed">
            <p className="description-paragraph">
              {eventDescription || "Loading..."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
