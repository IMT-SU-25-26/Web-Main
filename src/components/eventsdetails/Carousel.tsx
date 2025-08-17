"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Content from "./Content";

interface CarouselProps {
  eventsId?: string;
}

export default function Carousel({ eventsId }: CarouselProps) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const slidesRef = useRef<HTMLDivElement>(null);

  // Data slides berdasarkan eventsId
  const getSlidesByEventId = (eventId: string) => {
    const slideData: Record<string, Array<{ src: string; alt: string }>> = {
      Pulse: [
        { src: "/pulse/foto1.jpg", alt: "Event Image 1" },
        { src: "/pulse/foto2.jpg", alt: "Event Image 2" },
        { src: "/pulse/foto3.jpg", alt: "Event Image 3" },
        { src: "/pulse/foto4.jpg", alt: "Event Image 4" },
      ],
      Technocamp: [
        { src: "/technocamp/foto1.jpg", alt: "Event Image 1" },
        { src: "/technocamp/foto2.jpg", alt: "Event Image 2" },
        { src: "/technocamp/foto3.jpg", alt: "Event Image 3" },
        { src: "/technocamp/foto4.jpg", alt: "Event Image 4" },
      ],
    };

    // Return slides sesuai eventId, atau default jika tidak ditemukan
    return (
      slideData[eventId] || [
        { src: "/eventsdetails/template.svg", alt: "Event Image 1" },
        { src: "/eventsdetails/template.svg", alt: "Event Image 2" },
        { src: "/eventsdetails/template.svg", alt: "Event Image 3" },
        { src: "/eventsdetails/template.svg", alt: "Event Image 4" },
      ]
    );
  };

  const slides = getSlidesByEventId(eventsId || "");

  useGSAP(() => {
    const slidesContainer = slidesRef.current;
    if (!slidesContainer) return;

    // Kill any existing animations on this element
    gsap.killTweensOf(slidesContainer);

    const slideWidth = 408; // 400px + 8px gap tetap
    const totalSlides = slides.length;
    const durationPerSlide = 3; // Fixed duration per slide

    // Set initial position
    gsap.set(slidesContainer, {
      x: 0,
      force3D: true,
    });

    // Create infinite loop animation yang smooth tanpa reset mendadak
    gsap.to(slidesContainer, {
      x: -slideWidth * totalSlides,
      duration: durationPerSlide * totalSlides,
      ease: "none",
      repeat: -1,
      modifiers: {
        x: function (x) {
          // Modulo untuk seamless loop tanpa snap
          const totalWidth = slideWidth * totalSlides;
          return (parseFloat(x) % totalWidth) + "px";
        },
      },
      force3D: true,
    });
  }, [eventsId, slides.length]);

  // Double slides untuk seamless loop
  const extendedSlides = [...slides, ...slides];

  return (
    <div ref={carouselRef} className="w-full overflow-hidden relative">
      <div
        ref={slidesRef}
        className="flex gap-2 bg-[rgba(0,0,0,0.8)]"
        style={{
          width: `${extendedSlides.length * 408}px`,
          willChange: "transform", // CSS optimization
        }}
      >
        {extendedSlides.map((slide, index) => (
          <div
            key={index}
            className="flex-shrink-0"
            style={{ width: "400px", height: "320px" }}
          >
            <Content src={slide.src} alt={slide.alt} />
          </div>
        ))}
      </div>
    </div>
  );
}
