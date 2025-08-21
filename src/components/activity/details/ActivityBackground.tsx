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
      <>
      {/* Decorative Image */}
      <div className="select-none" ref={bgRef}>
        <Image
          className="select-none decor-img decor-img absolute -right-3 -top-7 md:-top-15 w-[100px] md:w-[180px] xl:w-[300px] lg:w-[230px]"
          src="/activities/activityDetails/top-right.webp"
          alt=""
          width={300}
          height={327}
          draggable={false}
        ></Image>

        <Image
          className="select-none decor-img absolute right-0 bottom-0 w-[200px] md:w-[300px] xl:w-[500px] lg:w-[370px]"
          src="/activities/activityDetails/bottom-right.svg"
          alt=""
          width={500}
          height={251}
          draggable={false}
        ></Image>

        <Image
          className="hidden xl:block select-none decor-img absolute right-0 bottom-10 w-[200px] md:w-[300px] lg:w-[370px] xl:w-[300px]"
          src="/activities/activityDetails/bottom-right2.webp"
          alt=""
          width={500}
          height={251}
          draggable={false}
        ></Image>

        <Image
          className="hidden md:block select-none decor-img absolute -left-5 -top-23 w-[300px] lg:w-[250px] xl:w-[250px] "
          src="/activities/activityDetails/top-left.svg"
          alt=""
          width={450}
          height={287}
          draggable={false}
        ></Image>

        <Image
          className="hidden lg:block select-none decor-img absolute left-50 top-0 w-[300px] lg:w-[250px] xl:w-[150px] "
          src="/activities/activityDetails/top-left2.webp"
          alt=""
          width={450}
          height={287}
          draggable={false}
        ></Image>

        <Image
          className=" select-none decor-img absolute -left-50 md:-left-0 -bottom-5 w-[350px] md:w-[300px] xl:w-[450px] lg:w-[200px]"
          src="/activities/activityDetails/bottom-left.webp"
          alt=""
          width={450}
          height={287}
          draggable={false}
        ></Image>

        <Image
          className="select-none decor-img absolute -left-45 top-40 md:top-80 xl:top-53 w-[300px] md:w-[350px]  z-0"
          src="/activities/activityDetails/red-fan.svg"
          alt=""
          width={720}
          height={701}
          draggable={false}
        ></Image>
      </div>
      </>
    )
}

export default ActivityBackground