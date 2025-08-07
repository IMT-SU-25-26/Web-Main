'use client';
import Card from "@/components/events/EventsCard";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function EventsPage() {
  useGSAP(() => {
    // Animasi untuk setiap section dengan class "section-reveal"
    gsap.utils.toArray<HTMLElement>(".section-reveal").forEach((section, index, array) => {
      // Untuk section terakhir, gunakan trigger point yang lebih rendah
      const isLastSection = index === array.length - 1;
      
      gsap.from(section, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        scrollTrigger: {
          trigger: section,
          start: isLastSection ? "top 95%" : "top 80%", // Trigger lebih rendah untuk section terakhir
          toggleActions: "play none none none",
          // Debug untuk melihat trigger area
          // markers: true, // hapus comment untuk debug
        },
      });
    });

    // Animasi untuk header
    gsap.from(".header-reveal", {
      opacity: 0,
      y: -30,
      duration: 1,
      scrollTrigger: {
        trigger: ".header-reveal",
        start: "top 90%",
        toggleActions: "play none none none",
      },
    });

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
  }, []);

  return (
    <div className="overflow-x-hidden">
      <div className="h-[10vh] bg-[#F1EEE6]"></div>
      <div className="flex flex-col gap-15 items-center min-h-screen w-screen max-w-screen bg-[url('/backgrounds/background-paper.png')] bg-contain bg-center bg-[#F1EEE6]">
        
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
        <div className="section-reveal w-full relative">
          <Image
            className="absolute right-[-8rem] sm:right-[-16rem] top-[3rem] z-0 w-[200px] sm:w-[400px]"
            src="/events/red-wheel.svg"
            alt="redwheel"
            width={400}
            height={400}
          />
          <div className="relative z-10">
            <Card title="TECHNOCAMP" date="21 OCTOBER 2025" isreverse={false} />
          </div>
        </div>

        <div className="section-reveal w-full relative">
          <Image
            className="absolute left-[-2rem] sm:left-[-4rem] top-[2rem] z-0 rotate-[15deg] w-[75px] sm:w-[150px]"
            src="/events/lightbulb.webp"
            alt="lightbulb"
            width={150}
            height={150}
          />
          <Image
            className="absolute left-[-2rem] sm:left-[-4rem] top-[5rem] z-0 rotate-[60deg] w-[75px] sm:w-[150px]"
            src="/events/red-ribbon.webp"
            alt="redribbon"
            width={150}
            height={150}
          />
          <div className="relative z-10">
            <Card title="TECHNOCAMP" date="21 OCTOBER 2025" isreverse={true} />
          </div>
        </div>

        <div className="section-reveal w-full relative">
          <div className="relative z-10">
            <Card title="TECHNOCAMP" date="21 OCTOBER 2025" isreverse={false} />
          </div>
        </div>

        <div className="section-reveal w-full relative">
          <Image
            className="absolute left-[-10rem] sm:left-[-20rem] top-[-5rem] z-0 w-[200px] sm:w-[400px]"
            src="/events/blue-wheel.svg"
            alt="bluewheel"
            width={400}
            height={400}
          />
          <div className="relative z-10">
            <Card title="TECHNOCAMP" date="21 OCTOBER 2025" isreverse={true} />
          </div>
        </div>

        <div className="section-reveal w-full relative">
          <Image
            className="absolute right-[0rem] top-[2rem] z-0 w-[100px] sm:w-[200px]"
            src="/events/green-arrow.webp"
            alt="greenarrow"
            width={200}
            height={200}
          />
          <div className="relative z-10">
            <Card title="TECHNOCAMP" date="21 OCTOBER 2025" isreverse={false} />
          </div>
        </div>

        <div className="section-reveal w-full relative">
          <Image
            className="yellowstar-rotate absolute w-[10rem] sm:w-[20rem] h-auto left-[-5rem] sm:left-[-10rem] bottom-[-5rem] z-0"
            src="/events/yellowstar.webp"
            alt="yellowstar"
            width={400}
            height={400}
          />
          <div className="relative z-10">
            <Card title="TECHNOCAMP" date="21 OCTOBER 2025" isreverse={true} />
          </div>
        </div>

        <div className="section-reveal w-full relative">
          <div className="relative z-10">
            <Card title="TECHNOCAMP" date="21 OCTOBER 2025" isreverse={false} />
          </div>
        </div>

        <div className="section-reveal w-full relative">
          <Image
            className="absolute w-[10rem] sm:w-[20rem] h-auto left-[-5rem] sm:left-[-10rem] top-[-4rem] z-0"
            src="/events/blue-book.webp"
            alt="bluebook"
            width={400}
            height={400}
          />
          <div className="relative z-10">
            <Card title="TECHNOCAMP" date="21 OCTOBER 2025" isreverse={true} />
          </div>
        </div>

        <div className="section-reveal w-full relative">
          <Image
            className="absolute right-[-1.5rem] sm:right-[-3rem] top-[2rem] z-0 -scale-x-100 w-[100px] sm:w-[200px]"
            src="/events/camera.webp"
            alt="camera"
            width={200}
            height={200}
          />
          <div className="relative z-10">
            <Card title="TECHNOCAMP" date="21 OCTOBER 2025" isreverse={false} />
          </div>
        </div>

        <div className="section-reveal w-full relative h-[28rem] overflow-hidden">
          <Image
            className="absolute w-[10rem] sm:w-[20rem] h-auto left-[-2.5rem] sm:left-[-5rem] bottom-[-10rem] z-0"
            src="/events/cloud.webp"
            alt="cloud"
            width={400}
            height={400}
          />
          <Image
            className="absolute w-[12.5rem] sm:w-[25rem] h-auto right-[-1.5rem] sm:right-[-3rem] top-[22rem] z-0"
            src="/events/pink-oval.svg"
            alt="pinkoval"
            width={200}
            height={200}
          />
          <div className="relative z-10">
            <Card title="TECHNOCAMP" date="21 OCTOBER 2025" isreverse={true} />
          </div>
        </div>
      </div>
    </div>
  );
}