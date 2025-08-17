"use client";
import Card from "@/components/events/EventsCard";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function EventsPage() {
  // Reset scroll position saat component mount
  useEffect(() => {
    window.scrollTo(0, 0);
    // Refresh ScrollTrigger setelah scroll reset
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);
  }, []);

  // Konfigurasi gambar dekoratif untuk setiap section
  const decorativeImages = {
    redWheel: {
      src: "/events/red-wheel.svg",
      alt: "redwheel",
      className:
        "absolute right-[-8rem] sm:right-[-16rem] top-[3rem] z-0 w-[200px] sm:w-[400px]",
      width: 400,
      height: 400,
    },
    lightBulb: {
      src: "/events/lightbulb.webp",
      alt: "lightbulb",
      className:
        "absolute left-[-2rem] sm:left-[-4rem] top-[2rem] z-0 rotate-[15deg] w-[75px] sm:w-[150px]",
      width: 150,
      height: 150,
    },
    redRibbon: {
      src: "/events/red-ribbon.webp",
      alt: "redribbon",
      className:
        "absolute left-[-2rem] sm:left-[-4rem] top-[5rem] z-0 rotate-[60deg] w-[75px] sm:w-[150px]",
      width: 150,
      height: 150,
    },
    blueWheel: {
      src: "/events/blue-wheel.svg",
      alt: "bluewheel",
      className:
        "absolute left-[-10rem] sm:left-[-20rem] top-[-5rem] z-0 w-[200px] sm:w-[400px]",
      width: 400,
      height: 400,
    },
    greenArrow: {
      src: "/events/green-arrow.webp",
      alt: "greenarrow",
      className: "absolute right-[0rem] top-[2rem] z-0 w-[100px] sm:w-[200px]",
      width: 200,
      height: 200,
    },
    yellowStar: {
      src: "/events/yellowstar.webp",
      alt: "yellowstar",
      className:
        "yellowstar-rotate absolute w-[10rem] sm:w-[20rem] h-auto left-[-5rem] sm:left-[-10rem] bottom-[-5rem] z-0",
      width: 400,
      height: 400,
    },
    blueBook: {
      src: "/events/blue-book.webp",
      alt: "bluebook",
      className:
        "absolute w-[10rem] sm:w-[20rem] h-auto left-[-5rem] sm:left-[-10rem] top-[-4rem] z-0 hidden sm:block",
      width: 400,
      height: 400,
    },
    camera: {
      src: "/events/camera.webp",
      alt: "camera",
      className:
        "absolute right-[-1.5rem] sm:right-[-3rem] top-[2rem] z-0 -scale-x-100 w-[100px] sm:w-[200px]",
      width: 200,
      height: 200,
    },
    cloud: {
      src: "/events/cloud.webp",
      alt: "cloud",
      className:
        "absolute w-[10rem] sm:w-[20rem] h-auto left-[-2.5rem] sm:left-[-5rem] bottom-[-20rem] z-0",
      width: 400,
      height: 400,
    },
    pinkOval: {
      src: "/events/pink-oval.svg",
      alt: "pinkoval",
      className:
        "absolute w-[12.5rem] sm:w-[25rem] h-auto right-[-1.5rem] sm:right-[-3rem] top-[22rem] z-0",
      width: 200,
      height: 200,
    },
  };

  // Konfigurasi section dengan gambar dekoratif yang dipilih
  const cardSections = [
    {
      id: "section-1",
      cardProps: {
        title: "PULSE",
        date: "21 August 2025",
        isreverse: false,
        eventsId: "pulse",
        imagesrc: "/pulse/main.jpg",
      },
      decorativeImages: ["redWheel"], // Pilih gambar yang mau dipakai
    },
    {
      id: "section-2",
      cardProps: {
        title: "TECHNOCAMP",
        date: "21 OCTOBER 2025",
        isreverse: true,
        eventsId: "Technocamp",
        imagesrc: "/technocamp/main.jpg",
      },
      decorativeImages: ["lightBulb", "redRibbon"], // Bisa multiple images
    },
    {
      id: "section-3",
      cardProps: {
        title: "DEANS CUP",
        date: "15 SEPTEMBER 2025",
        isreverse: false,
        eventsId: "DeansCup",
        isComingSoon: true,
      },
      decorativeImages: [], // Tidak ada gambar dekoratif
    },
    {
      id: "section-4",
      cardProps: {
        title: "DEW",
        date: "27 SEPTEMBER 2025",
        isreverse: true,
        isComingSoon: true,
      },
      decorativeImages: ["blueWheel"],
    },
    {
      id: "section-5",
      cardProps: {
        title: "INAUGURATION NIGHT",
        date: "30 OCTOBER 2025",
        isreverse: false,
        isComingSoon: true,
      },
      decorativeImages: ["greenArrow"],
    },
    {
      id: "section-6",
      cardProps: {
        title: "NPLC",
        date: "8 NOVEMBER 2025",
        isreverse: true,
        isComingSoon: true,
      },
      decorativeImages: ["yellowStar"],
    },
    {
      id: "section-7",
      cardProps: {
        title: "RED CARPET NIGHT",
        date: "20 FEBRUARY 2026",
        isreverse: false,
        isComingSoon: true,
      },
      decorativeImages: [],
    },
    {
      id: "section-8",
      cardProps: {
        title: "HACKFEST HACKETHON",
        date: "17 APRIL 2026",
        isreverse: true,
        isComingSoon: true,
      },
      decorativeImages: ["blueBook"],
    },
    {
      id: "section-9",
      cardProps: {
        title: "COMING SOON",
        date: "COMING SOON",
        isreverse: false,
        isComingSoon: true,
      },
      decorativeImages: ["camera"],
    },
    {
      id: "section-10",
      cardProps: {
        title: "COMING SOON",
        date: "COMING SOON",
        isreverse: true,
        islast: true,
        isComingSoon: true,
      },
      decorativeImages: ["cloud", "pinkOval"],
    },
  ];

  // Component untuk render gambar dekoratif
  const renderDecorativeImages = (imageKeys: string[]) => {
    return imageKeys.map((key) => {
      const image = decorativeImages[key as keyof typeof decorativeImages];
      if (!image) return null;

      return (
        <Image
          key={key}
          className={image.className}
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
        />
      );
    });
  };

  useGSAP(() => {
    // Clear semua ScrollTrigger sebelumnya
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

    // Animasi untuk setiap section dengan class "section-reveal"
    gsap.utils
      .toArray<HTMLElement>(".section-reveal")
      .forEach((section, index, array) => {
        // Untuk section terakhir, gunakan trigger point yang lebih rendah
        const isLastSection = index === array.length - 1;

        gsap.fromTo(
          section,
          {
            opacity: 0,
            y: 50,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            scrollTrigger: {
              trigger: section,
              start: isLastSection ? "top 95%" : "top 80%",
              toggleActions: "play none none reverse", // Tambah reverse untuk reset
              refreshPriority: -1, // Prioritas refresh
            },
          }
        );
      });

    // Animasi untuk header
    gsap.fromTo(
      ".header-reveal",
      {
        opacity: 0,
        y: -30,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".header-reveal",
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Animasi rotate untuk yellow-star dan yellowstar
    gsap.to(".yellow-star-rotate", {
      rotate: 360,
      repeat: -1,
      duration: 10,
      ease: "linear",
    });

    gsap.to(".yellowstar-rotate", {
      rotate: 360,
      repeat: -1,
      duration: 10,
      ease: "linear",
    });

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="w-full overflow-hidden">
      <div className="h-[6vh] bg-[#F1EEE6]"></div>
      <div className="flex flex-col gap-15 items-center min-h-screen w-full bg-[url('/backgrounds/background-paper.png')] bg-contain bg-center bg-[#F1EEE6] overflow-hidden pb-[7rem]">
        <div className="header-reveal relative w-full">
          <Image
            className="absolute -top-10 left-0 z-1"
            src="/events/top-blue-paper.webp"
            alt="bluepaper"
            width={200}
            height={200}
          />

          <Image
            className="hidden sm:block absolute -top-15 left-0 z-0"
            src="/events/top-cloud.webp"
            alt="topcloud"
            width={500}
            height={500}
          />

          <Image
            className="absolute -top-10 right-0 z-1 -scale-x-100"
            src="/events/top-blue-paper.webp"
            alt="bluepaper"
            width={200}
            height={200}
          />

          <Image
            className="hidden sm:block absolute -top-15 right-0 z-0 -scale-x-100"
            src="/events/top-cloud.webp"
            alt="topcloud"
            width={500}
            height={500}
          />
        </div>
        {/* Header dengan animasi */}
        <div className="header-reveal flex justify-center relative">
          <Image
            className="z-10"
            src="/events/event-header.svg"
            alt="eventheader"
            width={600}
            height={600}
          />
          <Image
            className="yellow-star-rotate absolute hidden sm:flex left-[-27%] top-[2.5rem] z-0 w-[100px] sm:w-[175px]"
            src="/events/yellow-star.webp"
            alt="yellowstar"
            width={175}
            height={175}
          />
          <Image
            className="yellow-star-rotate absolute hidden sm:flex right-[-27%] top-[5rem] z-0 w-[100px] sm:w-[175px]"
            src="/events/yellow-star.webp"
            alt="yellowstar"
            width={175}
            height={175}
          />
        </div>

        {/* Card sections dengan animasi */}
        {cardSections.map((section) => (
          <div key={section.id} className={`section-reveal w-full relative `}>
            {/* Render gambar dekoratif yang dipilih */}
            {renderDecorativeImages(section.decorativeImages)}

            {/* Card component */}
            <div className="relative z-10">
              <Card {...section.cardProps} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
