'use client'
import React, { useEffect, useRef } from 'react'
import Image from "next/image";
import gsap from 'gsap';

const ActivityBackground = () => {
    const bgRef = useRef<HTMLDivElement>(null)

    // Animate all left-starting cards
    useEffect(() => {

      gsap.fromTo(
        ".start-bottom",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0,
          ease: "power1.out",
          stagger: 0.1,
          clearProps: "transform",
        }
      );

      const ctx = gsap.context(() => {
        // Convert to typed HTMLElement array
        const images = gsap.utils.toArray('.decor-img') as HTMLElement[];

        images.forEach((img, index) => {
          const fromDirection = index % 2 === 0 ? -40 : 40; // alternate left/right

          gsap.from(img, {
            opacity: 0,
            x: fromDirection,
            y: 40,
            duration: 1.2,
            ease: 'power3.out',
            delay: index * 0.15
          });

          if (!img.classList.contains('no-float')) {
            gsap.to(img, {
              y: '+=8',
              duration: 2,
              repeat: -1,
              yoyo: true,
              ease: 'sine.inOut',
              delay: 1.2 + index * 0.15
            });
          }
        });
      }, bgRef);

      return () => ctx.revert();
    }, []);

    
    return (
      <div ref={bgRef}>

        {/* Title Section - Server Component */}
        <div className="relative inline-block z-10">
          <Image
            src="/activities/RedPin.webp"
            alt="Red Pin"
            className="start-bottom absolute select-none top-3 -right-4 w-10 h-10 z-20"
            width={500}
            height={500}
            draggable={false}
          />

          {/* Paper */}
          <div className="start-bottom bg-white shadow-lg px-6 py-3 rotate-[-2deg] mt-10 mb-6">
            <h2 className="font-family-impact text-black font-extrabold text-4xl tracking-wider">
              ACTIVITIES
            </h2>
          </div>
        </div>

        {/* Decorative Images - All Server Components */}
        
        {/* kiri */}
        <Image
          src="/activities/GreenQuote.webp"
          alt="Green Quote"
          className="decor-img absolute select-none top-12 right-5 w-20 md:right-10 md:w-30 h-max z-0"
          width={500}
          height={500}
          draggable={false}
        />

        {/* kanan */}
        <Image
          src="/activities/LightBulb.webp"
          alt="Light Bulb"
          className="decor-img absolute start-right select-none top-26 left-[0.3] w-28 md:left-6 md:w-30 z-10"
          width={500}
          height={500}
          draggable={false}
        />

        {/* kanan */}
        <Image
          src="/activities/RedStar.webp"
          alt="Red Star"
          className="decor-img hidden select-none md:block absolute top-10 left-30 w-20 h-max z-0"
          width={500}
          height={500}
          draggable={false}
        />
        
        {/* kanan */}
        <Image
          src="/activities/BottomLeft.webp"
          alt="Bottom Left"
          className="decor-img absolute select-none bottom-0 left-0 w-40 h-max z-0"
          width={500}
          height={500}
          draggable={false}
        />

        {/* kiri */}
        <Image
          src="/activities/BottomRight.webp"
          alt="Bottom Right"
          className="decor-img absolute select-none bottom-0 right-0 w-50 h-max z-0"
          width={500}
          height={500}
          draggable={false}
        />
      </div>
    )
}

export default ActivityBackground