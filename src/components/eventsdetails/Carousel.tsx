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
      pulse: [
        { src: "/eventsdetails/placeholder1.jpg", alt: "Event Image 1" },
        { src: "/eventsdetails/placeholder2.jpg", alt: "Event Image 2" },
        { src: "/eventsdetails/placeholder3.jpeg", alt: "Event Image 3" },
        { src: "/eventsdetails/placeholder4.jpg", alt: "Event Image 4" },
        { src: "/eventsdetails/placeholder5.jpg", alt: "Event Image 5" },
        { src: "/eventsdetails/placeholder6.jpg", alt: "Event Image 6" },
      ],
      Technocamp: [
        { src: "/eventsdetails/placeholder1.jpg", alt: "Event Image 1" },
        { src: "/eventsdetails/placeholder2.jpg", alt: "Event Image 2" },
        { src: "/eventsdetails/placeholder3.jpeg", alt: "Event Image 3" },
        { src: "/eventsdetails/placeholder4.jpg", alt: "Event Image 4" },
        { src: "/eventsdetails/placeholder5.jpg", alt: "Event Image 5" },
        { src: "/eventsdetails/placeholder6.jpg", alt: "Event Image 6" },
      ],
    };

    // Return slides sesuai eventId, atau default jika tidak ditemukan
    return (
      slideData[eventId] || [
        { src: "/eventsdetails/placeholder1.jpg", alt: "Event Image 1" },
        { src: "/eventsdetails/placeholder2.jpg", alt: "Event Image 2" },
        { src: "/eventsdetails/placeholder3.jpeg", alt: "Event Image 3" },
        { src: "/eventsdetails/placeholder4.jpg", alt: "Event Image 4" },
        { src: "/eventsdetails/placeholder5.jpg", alt: "Event Image 5" },
        { src: "/eventsdetails/placeholder6.jpg", alt: "Event Image 6" },
      ]
    );
  };

  const slides = getSlidesByEventId(eventsId || "");

  useGSAP(() => {
    const slidesContainer = slidesRef.current;
    if (!slidesContainer) return;

    const slideWidth = 408; // 400px + 8px gap tetap
    const totalSlides = slides.length;

    // Set initial position
    gsap.set(slidesContainer, { x: 0 });

    // Infinite loop dengan seamless transition
    gsap.to(slidesContainer, {
      x: -slideWidth * totalSlides,
      duration: totalSlides * 3,
      ease: "none",
      repeat: -1,
      repeatDelay: 0,
      onRepeat: () => {
        // Reset position instantly saat repeat
        gsap.set(slidesContainer, { x: 0 });
      },
    });
  }, [eventsId]); // Tambahkan eventsId sebagai dependency

  // Double slides untuk seamless loop
  const extendedSlides = [...slides, ...slides];

  return (
    <div ref={carouselRef} className="w-full overflow-hidden relative">
      <div
        ref={slidesRef}
        className="flex gap-2 bg-[rgba(0,0,0,0.8)]"
        style={{ width: `${extendedSlides.length * 408}px` }}
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
