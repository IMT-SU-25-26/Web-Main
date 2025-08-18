'use client'
import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import Image from 'next/image'

const AchievementsBackground = () => {
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
        <>
            <div ref={bgRef}>
                {/* top right */}
                <Image
                className="decor-img no-float z-0 absolute top-[0rem] right-[2rem] w-[8rem] md:w-[20rem]"
                src="/achievements/dashboard/top-right-cloud.webp"
                alt="page title"
                width={480}
                height={160}
                />

                <Image
                className="decor-img no-float z-0 absolute top-0 right-0 w-[8rem] md:w-[12rem]"
                src="/achievements/dashboard/top-right-bluepaper.webp"
                alt="page title"
                width={480}
                height={160}
                />

                <Image
                className="decor-img no-float z-0 absolute top-[0rem] right-[2rem] w-[4rem] md:w-[12rem]"
                src="/achievements/star-laptop.webp"
                alt="page title"
                width={480}
                height={160}
                />


                {/* bottom right */}
                <Image
                className="decor-img no-float z-0 absolute bottom-[0rem] right-0 w-[8rem] md:w-[14rem]"
                src="/achievements/dashboard/bottom-right.webp"
                alt="page title"
                width={480}
                height={160}
                />

                {/* bottom left */}
                <Image
                className="decor-img no-float z-0 absolute bottom-0 left-0 w-[12rem] md:w-[20rem]"
                src="/achievements/dashboard/bottom-left.webp"
                alt="page title"
                width={480}
                height={160}
                />
                
            </div>
        </>
    )
}

export default AchievementsBackground