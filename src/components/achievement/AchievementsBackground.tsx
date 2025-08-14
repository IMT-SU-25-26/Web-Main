'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'

export default function AchievementsBackground() {
  const bgRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate all elements with .decor-img
      gsap.from('.decor-img', {
        opacity: 0,
        y: 40,
        duration: 1.2,
        stagger: 0.15,
        ease: 'power3.out'
      })

      // Optional subtle floating animation
      gsap.to('.decor-img:not(.no-float)', {
        y: '+=8',
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: 1.2
      })
    }, bgRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={bgRef}>
      <Image
        className="decor-img no-float z-10 absolute top-[5rem] left-[50%] translate-x-[-50%] w-[20rem]"
        src="/achievements/page-title.webp"
        alt="page title"
        width={480}
        height={160}
      />
      <Image
        className="decor-img hidden md:block absolute top-[0.5rem] left-[0.5rem] w-[12rem]"
        src="/achievements/star-laptop.webp"
        alt="star laptop"
        width={120}
        height={120}
      />
      <Image
        className="decor-img hidden md:block absolute top-[11rem] left-0 w-[4rem]"
        src="/achievements/blue-fan.svg"
        alt="blue fan"
        width={100}
        height={100}
      />
      <Image
        className="decor-img hidden md:block absolute top-[4rem] right-0 w-[4rem]"
        src="/achievements/red-fan.svg"
        alt="red fan"
        width={100}
        height={100}
      />
      <Image
        className="decor-img hidden md:block absolute top-[19rem] right-[0rem] w-[8rem]"
        src="/achievements/green-arrow.webp"
        alt="green arrow"
        width={60}
        height={60}
      />
      <Image
        className="decor-img hidden md:block absolute top-[28rem] left-[0rem] w-[6.5rem]"
        src="/achievements/red-tape.webp"
        alt="red tape"
        width={100}
        height={30}
      />
      <Image
        className="decor-img hidden md:block absolute top-[28rem] right-[0rem] w-[5rem]"
        src="/achievements/yellow-tape.webp"
        alt="yellow tape"
        width={100}
        height={30}
      />
      <Image
        className="decor-img hidden md:block absolute bottom-[0rem] left-0 w-[10rem]"
        src="/achievements/bottom-left-decor.webp"
        alt="bottom left"
        width={80}
        height={80}
      />
      <Image
        className="decor-img hidden md:block absolute bottom-[0rem] right-0 w-[10rem]"
        src="/achievements/bottom-right-decor.webp"
        alt="bottom right"
        width={80}
        height={80}
      />
    </div>
  )
}
