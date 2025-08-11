"use client";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Content from "./Content";

export default function Carousel() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const slidesRef = useRef<HTMLDivElement>(null);

  const slides = [
    { src: "/eventsdetails/placeholder1.jpg", alt: "Image 1" },
    { src: "/eventsdetails/placeholder2.jpg", alt: "Image 2" },
    { src: "/eventsdetails/placeholder3.jpeg", alt: "Image 3" },
    { src: "/eventsdetails/placeholder4.jpg", alt: "Image 4" },
    { src: "/eventsdetails/placeholder5.jpg", alt: "Image 5" },
    { src: "/eventsdetails/placeholder6.jpg", alt: "Image 6" },
  ];

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
      duration: totalSlides * 3, // durasi tetap sesuai yang sudah ada
      ease: "none",
      repeat: -1,
      repeatDelay: 0,
      onRepeat: () => {
        // Reset position instantly saat repeat
        gsap.set(slidesContainer, { x: 0 });
      },
    });
  }, []);

  // Double slides untuk seamless loop tapi tidak berlebihan
  const extendedSlides = [...slides, ...slides];

  return (
    <div
      ref={carouselRef}
      className="w-full overflow-hidden relative"
    >
      <div
        ref={slidesRef}
        className="flex gap-2 bg-[rgba(0,0,0,0.8)]" // Tambahkan background rgba(30,30,30,0.8)
        style={{ width: `${extendedSlides.length * 408}px` }} // Fixed width untuk mencegah flex shrink
      >
        {extendedSlides.map((slide, index) => (
          <div
            key={index}
            className="flex-shrink-0"
            style={{ width: "400px", height: "320px" }} // Fixed size dengan inline style
          >
            <Content src={slide.src} alt={slide.alt} />
          </div>
        ))}
      </div>
    </div>
  );
}