"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import "@/styles/about.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const valuesSectionRef = useRef<HTMLDivElement>(null);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [isReady, setIsReady] = useState(false);
  useEffect(() => {
  if (typeof window !== "undefined") {
    const hasRefreshed = sessionStorage.getItem("aboutPageRefreshed");
    if (!hasRefreshed) {
      sessionStorage.setItem("aboutPageRefreshed", "true");
      window.location.reload();
    }
  }
}, []);
  useEffect(() => {
    // Wait for DOM to be fully ready
    const timer = setTimeout(() => {
      setImagesLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Set ready state after images are loaded and a small delay
    if (imagesLoaded) {
      const timer = setTimeout(() => {
        setIsReady(true);
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [imagesLoaded]);

  useGSAP(
    () => {
      if (!isReady) return;

      // Force a refresh of ScrollTrigger before starting animations
      ScrollTrigger.refresh();

      gsap.set(".will-change-transform", {
        willChange: "transform",
        force3D: true,
      });
      gsap.set(".will-change-opacity", { willChange: "opacity" });

      const mm = gsap.matchMedia();

      // Kill any existing ScrollTriggers to prevent conflicts
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());

      mm.add("(min-width: 640px), all", () => {
        // Header animation
        gsap.fromTo(
          ".about-us-text",
          {
            opacity: 0,
            y: -50,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
          }
        );

        const aboutTl = gsap.timeline({
          scrollTrigger: {
            trigger: ".about-us-wrapper",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });

        aboutTl
          .fromTo(
            ".left-about-card",
            {
              opacity: 0,
              x: -100,
              rotation: -5,
            },
            {
              opacity: 1,
              x: 0,
              rotation: 0,
              duration: 1,
              ease: "power3.out",
              force3D: true,
            }
          )
          .fromTo(
            [".su-imt-team-card-background", ".su-imt-team-card-foreground"],
            {
              opacity: 0,
              scale: 0.8,
              x: 100,
            },
            {
              opacity: 1,
              scale: 1,
              x: 0,
              duration: 0.8,
              stagger: 0.15,
              ease: "back.out(1.7)",
              force3D: true,
            },
            "<"
          )
          .fromTo(
            [".dragon-about", ".dragon-breath", ".peniti"],
            {
              opacity: 0,
              scale: 0.5,
            },
            {
              opacity: 1,
              scale: 1,
              duration: 0.7,
              stagger: 0.1,
              ease: "back.out(1.4)",
            },
            "<"
          )
          .fromTo(
            [
              ".circle-blue-stick-about",
              ".circle-red-stick-about",
              ".yellow-star-landing-about",
              ".red-spike-landing-about",
            ],
            {
              opacity: 0,
              y: 50,
              scale: 0.7,
            },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.8,
              stagger: 0.12,
              ease: "power2.out",
            },
            "<"
          );

        const visionMissionTl = gsap.timeline({
          scrollTrigger: {
            trigger: ".vision-mission-wrapper",
            start: "top 70%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        });

        visionMissionTl
          .fromTo(
            ".big-fracture",
            {
              opacity: 0,
              scale: 1,
            },
            {
              opacity: 1,
              scale: 1,
              duration: 0.8,
              ease: "power2.out",
            }
          )
          .fromTo(
            ".vision-card",
            {
              opacity: 0,
              y: -50,
              rotation: -8,
            },
            {
              opacity: 1,
              y: 0,
              rotation: 0,
              duration: 0.8,
              ease: "back.out(1.7)",
            },
            "-=0.4"
          )
          .fromTo(
            ".mission-card",
            {
              opacity: 0,
              y: 50,
              rotation: 8,
            },
            {
              opacity: 1,
              y: 0,
              rotation: 0,
              duration: 0.8,
              ease: "back.out(1.7)",
            },
            "-=0.6"
          )
          .fromTo(
            [".circle-kiri-fracture", ".green-arrow-about", ".pencil-ruler"],
            {
              opacity: 0,
              scale: 0.9,
            },
            {
              opacity: 1,
              scale: 1,
              stagger: 0.15,
              duration: 0.7,
              ease: "power2.out",
            },
            "-=0.5"
          );

        gsap.fromTo(
          [".our-values-text", ".step"],
          {
            opacity: 0,
            y: 30,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ".our-values-wrapper",
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );

        gsap.fromTo(
          ".our-values-card-container",
          {
            opacity: 0,
            y: 80,
            scale: 0.8,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            stagger: {
              amount: 0.4,
              from: "start",
              grid: "auto",
            },
            ease: "back.out(1.2)",
            force3D: true,
            scrollTrigger: {
              trigger: ".our-values-card-wrapper",
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );

        gsap.to([".crown-about", ".among-us-about"], {
          rotation: "+=15",
          yoyo: true,
          repeat: -1,
          duration: 3,
          ease: "sine.inOut",
        });

        gsap.to(".yellow-star-landing-about", {
          rotation: 360,
          repeat: -1,
          duration: 20,
          ease: "linear",
          transformOrigin: "center center",
          force3D: true,
        });

        gsap.to(".red-spike-landing-about", {
          rotation: -360,
          repeat: -1,
          duration: 25,
          ease: "linear",
          transformOrigin: "center center",
          force3D: true,
        });

        // Footer animations
        const footerTl = gsap.timeline({
          scrollTrigger: {
            trigger: ".footer-wrapper",
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });

        footerTl
          .fromTo(
            [".about-footer-left-background", ".about-footer-right-background"],
            {
              opacity: 0,
              y: 50,
            },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              stagger: 0.2,
              ease: "power2.out",
            }
          )
          .fromTo(
            [".about-laptop", ".about-laptop-spark", ".about-heart"],
            {
              opacity: 0,
              scale: 0.7,
            },
            {
              opacity: 1,
              scale: 1,
              duration: 0.7,
              stagger: 0.15,
              ease: "back.out(1.4)",
            },
            "-=0.5"
          );
      });

      mm.add("(max-width: 639px)", () => {
        gsap.fromTo(
          ".about-us-paper-cloud-mobile",
          {
            opacity: 0,
            x: 100,
          },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ".about-us-text",
              start: "top 60%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 100);

      // Cleanup function
      return () => {
        mm.revert();
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      };
    },
    { dependencies: [isReady], scope: valuesSectionRef }
  );

  return (
    <div className="overflow-x-hidden">
      <div className="h-[6vh] bg-[#F1EEE6]"></div>
      <div 
       className={`hide-initial ${isReady ? 'is-visible' : ''} overflow-hidden flex flex-col items-center min-h-screen w-screen max-w-screen bg-[url('/backgrounds/background-paper.png')] bg-contain bg-center bg-[#F1EEE6]`}
        ref={valuesSectionRef}
      >
        <Image
          src={"/about/AboutUsText.webp"}
          width={900}
          height={900}
          alt="about-us-text"
          className="about-us-text sm:mt-0 w-[80%] sm:w-[40%] h-auto"
          draggable="false"
        ></Image>
        <Image
          src={"/home/paper-cloud.webp"}
          width={900}
          height={900}
          alt="paper-cloud"
          className="about-us-paper-cloud-mobile absolute sm:hidden w-[30%] rotate-y-180 h-auto right-0 top-[37.5%]"
          draggable="false"
        ></Image>
        <Image
          src={"/home/dragon.svg"}
          width={900}
          height={900}
          alt="dragont"
          className="about-us-dragon-mobile absolute sm:hidden w-[20%] rotate-y-180 h-auto right-[5%] top-[34.5%]"
          draggable="false"
        ></Image>
        <Image
          src={"/about/dragon-breath.webp"}
          width={900}
          height={900}
          alt="dragont"
          className="about-us-dragon-breath-mobile absolute sm:hidden w-[20%] h-auto right-[17%] top-[28.5%]"
          draggable="false"
        ></Image>
        {/* dekstop */}
        <div className="hidden sm:flex about-us-wrapper mt-[6.5rem] relative w-full justify-center items-center gap-48">
          <div className="left-about-card relative w-1/3 h-[20rem] bg-white rounded-3xl flex flex-col gap-4 p-12 shadow-[-12px_12px_5px_-5px_rgba(0,0,0,0.25)]">
            <Image
              src={"/home/handle-card.png"}
              width={900}
              height={900}
              alt="handle-about-us-card"
              className="handle-about-us-card absolute bottom-[20%] -left-[18%] w-[25%] h-auto"
              draggable="false"
            ></Image>
            <Image
              src={"/about/yellow-star.webp"}
              width={900}
              height={900}
              alt="yellow-star"
              className="yellow-star-about-us absolute -bottom-[10%] -right-[8%] w-[25%] h-auto"
              draggable="false"
            ></Image>
            <h1 className="about-us-card-title-text text-5xl font-family-gill-condensed-bold font-bold">
              ABOUT US
            </h1>
            <p className="about-us-card-description-text text-2xl font-family-gill">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea cum
              aliquam, exercitationem assumenda eligendi possimus a itaque ut
              dolor optio.
            </p>
          </div>
          <Image
            src={"/home/dragon.svg"}
            width={900}
            height={900}
            alt="handle-about-us-card"
            className="dragon-about absolute -bottom-[100%] right-[5%] w-[10%] h-auto rotate-y-180"
            draggable="false"
          ></Image>
          <Image
            src={"/about/dragon-breath.webp"}
            width={900}
            height={900}
            alt="dragon-breath"
            className="dragon-breath absolute -bottom-[75%] right-[12%] w-[10%] h-auto"
            draggable="false"
          ></Image>
          <Image
            src={"/about/circle-blue-stick.svg"}
            width={900}
            height={900}
            alt="circle-blue-stick"
            className="circle-blue-stick-about absolute -left-[12.5%] -top-[45%] w-[20%] h-auto"
            draggable="false"
          ></Image>
          <Image
            src={"/about/circle-red-stick.svg"}
            width={900}
            height={900}
            alt="circle-red-stick"
            className="circle-red-stick-about absolute -right-[10.5%] -top-[95%] w-[15%] h-auto"
            draggable="false"
          ></Image>
          <Image
            src={"/home/yellow-star-landing.webp"}
            width={900}
            height={900}
            alt="yellow-star-landing-about"
            className="yellow-star-landing-about absolute right-[10.5%] -top-[65%] w-[12.5%] h-auto"
            draggable="false"
          ></Image>
          <Image
            src={"/home/red-spike-landing.webp"}
            width={900}
            height={900}
            alt="red-spike-landing-about"
            className="red-spike-landing-about absolute left-[6.5%] -top-[100%] w-[12.5%] h-auto"
            draggable="false"
          ></Image>
          <div className="relative">
            <Image
              src={"/about/peniti.webp"}
              width={900}
              height={900}
              alt="about-us-text"
              className="peniti w-[40%] h-auto absolute z-[5] -top-[2%] -right-[9.5%]"
              draggable="false"
            ></Image>
            <div className="su-imt-team-card-background relative rotate-[8deg] bg-[#EAD6B1] w-[500px] h-[350px] shadow-[12px_12px_5px_-5px_rgba(0,0,0,0.25)]"></div>
            <div className="su-imt-team-card-foreground absolute rotate-[8deg] bg-[#FFFF] -left-[10%] top-[10%] w-[500px] h-[350px] p-4 flex flex-col gap-6 shadow-[12px_12px_5px_-5px_rgba(0,0,0,0.25)]">
              <div className="su-imt-team-card-image-container w-full h-[80%] bg-gray-200"></div>
              <h1 className="su-imt-team-card-text text-2xl font-family-gill font-bold">
                SU IMT Team
              </h1>
            </div>
          </div>
        </div>
        {/* mobile */}
        <div className="flex sm:hidden about-us-wrapper mt-[2.5rem] relative w-full justify-start items-center gap-48">
          <div className="ml-[5%] left-about-card relative w-[60%] h-[20rem] bg-white rounded-xl flex flex-col gap-4 p-12 shadow-[-12px_12px_5px_-5px_rgba(0,0,0,0.25)]">
            <Image
              src={"/home/handle-card.png"}
              width={900}
              height={900}
              alt="handle-about-us-card"
              className="handle-about-us-card absolute bottom-[20%] -left-[18%] w-[25%] h-auto"
              draggable="false"
            ></Image>
            <Image
              src={"/about/yellow-star.webp"}
              width={900}
              height={900}
              alt="yellow-star"
              className="yellow-star-about-us absolute -bottom-[10%] -right-[8%] w-[25%] h-auto"
              draggable="false"
            ></Image>
            <h1 className="about-us-card-title-text text-5xl font-family-gill-condensed-bold font-bold">
              ABOUT US
            </h1>
            <p className="about-us-card-description-text text-2xl font-family-gill">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea cum
              aliquam, exercitationem
            </p>
          </div>
          <Image
            src={"/home/dragon.svg"}
            width={900}
            height={900}
            alt="handle-about-us-card"
            className="dragon-about absolute -bottom-[100%] right-[5%] w-[10%] h-auto rotate-y-180"
            draggable="false"
          ></Image>
          <Image
            src={"/about/dragon-breath.webp"}
            width={900}
            height={900}
            alt="dragon-breath"
            className="dragon-breath absolute -bottom-[75%] right-[12%] w-[10%] h-auto"
            draggable="false"
          ></Image>
          <Image
            src={"/about/circle-red-stick.svg"}
            width={900}
            height={900}
            alt="circle-red-stick"
            className="circle-red-stick-about absolute -right-[10.5%] -top-[95%] w-[15%] h-auto"
            draggable="false"
          ></Image>
          <Image
            src={"/home/yellow-star-landing.webp"}
            width={900}
            height={900}
            alt="yellow-star-landing-about"
            className="yellow-star-landing-about absolute right-[10.5%] -top-[65%] w-[12.5%] h-auto"
            draggable="false"
          ></Image>
          <Image
            src={"/home/red-spike-landing.webp"}
            width={900}
            height={900}
            alt="red-spike-landing-about"
            className="red-spike-landing-about absolute left-[6.5%] -top-[100%] w-[12.5%] h-auto"
            draggable="false"
          ></Image>
        </div>
        <div className="z-[2] mt-[10%] w-full flex justify-end sm:hidden relative">
          <Image
            src={"/about/peniti.webp"}
            width={900}
            height={900}
            alt="about-us-text"
            className="peniti w-[40%] h-auto absolute z-[5] -top-[2%] -right-[9.5%]"
            draggable="false"
          ></Image>
          <div>
            <div className="su-imt-team-card-background relative rotate-[8deg] bg-[#EAD6B1] w-[500px] h-[350px] shadow-[12px_12px_5px_-5px_rgba(0,0,0,0.25)]"></div>
            <div className="su-imt-team-card-foreground absolute rotate-[8deg] bg-[#FFFF] right-[5%] top-[10%] w-[500px] h-[350px] p-4 flex flex-col gap-6 shadow-[12px_12px_5px_-5px_rgba(0,0,0,0.25)]">
              <div className="su-imt-team-card-image-container w-full h-[80%] bg-gray-200"></div>
              <h1 className="su-imt-team-card-text text-2xl font-family-gill font-bold">
                SU IMT Team
              </h1>
            </div>
          </div>
        </div>

        {/* dekstop */}
        <div className="hidden sm:flex vision-mission-wrapper -mt-[2.5%] min-h-[75rem] min-w-screen relative w-full justify-center items-center gap-24">
          <Image
            src={"/about/BigFractureAbout.webp"}
            width={900}
            height={900}
            alt="big-fracture"
            className="big-fracture w-[100%] h-auto absolute z-[2]"
            draggable="false"
          ></Image>
          <Image
            src={"/about/CircleKiriFracture.svg"}
            width={900}
            height={900}
            alt="circle-kiri-fracture"
            className="circle-kiri-fracture w-[40%] h-auto absolute -bottom-[15%] left-0"
            draggable="false"
          ></Image>
          <Image
            src={"/about/vision-card.svg"}
            width={900}
            height={900}
            alt="big-fracture"
            className="vision-card w-[30%] h-auto absolute top-[30%] left-[10%] z-[3]"
            draggable="false"
          ></Image>
          <Image
            src={"/about/mission-card.svg"}
            width={900}
            height={900}
            alt="big-fracture"
            className="mission-card w-[30%] h-auto absolute bottom-[15%] right-[18%] z-[3]"
            draggable="false"
          ></Image>
          <Image
            src={"/home/green-arrow.png"}
            width={900}
            height={900}
            alt="big-fracture"
            className="green-arrow-about w-[18%] h-auto absolute bottom-[35%] right-[43.25%] rotate-45 z-[3]"
            draggable="false"
          ></Image>
          <Image
            src={"/about/PencilRuler.webp"}
            width={900}
            height={900}
            alt="big-fracture"
            className="pencil-ruler w-[45%] sm:w-[23.5%] h-auto absolute -top-[5%] left-[0%] z-[3]"
            draggable="false"
          ></Image>
        </div>
        {/* mobile */}
        <div className="flex sm:hidden vision-mission-wrapper -mt-[2.5%] min-h-[75rem] min-w-screen relative w-full justify-center items-center gap-24 z-[1]">
          <Image
            src={"/about/mobile-big-fracture.svg"}
            width={900}
            height={900}
            alt="big-fracture"
            className="big-fracture w-[100%] h-auto absolute z-[2]"
            draggable="false"
          ></Image>
          <Image
            src={"/about/vision-card.svg"}
            width={900}
            height={900}
            alt="big-fracture"
            className="vision-card w-[80%] h-auto absolute top-[30%] z-[3]"
            draggable="false"
          ></Image>
          <Image
            src={"/about/mission-card.svg"}
            width={900}
            height={900}
            alt="big-fracture"
            className="mission-card w-[80%] h-auto absolute bottom-[15%] z-[3]"
            draggable="false"
          ></Image>
          <Image
            src={"/about/mobile-pencil-ruler.webp"}
            width={900}
            height={900}
            alt="big-fracture"
            className="pencil-ruler w-[35%] sm:w-[23.5%] h-auto absolute -top-[5%] left-[0%] z-[3]"
            draggable="false"
          ></Image>
        </div>

        {/* dekstop */}
        <div className="hidden sm:flex our-values-wrapper relative w-full flex-col justify-center items-center gap-8">
          <Image
            src={"/about/OurValuesText.svg"}
            width={900}
            height={900}
            alt="our-values-text"
            className="our-values-text w-[20%] h-auto"
            draggable="false"
          ></Image>
          <Image
            src={"/home/crown.svg"}
            width={900}
            height={900}
            alt="crown"
            className="crown-about left-[35%] -top-[10%] rotate-[-45deg] absolute w-[6.5%] h-auto"
            draggable="false"
          ></Image>
          <Image
            src={"/home/among-us.svg"}
            width={900}
            height={900}
            alt="among-us"
            className="among-us-about right-[25%] top-[10%] absolute w-[8.5%] h-auto"
            draggable="false"
          ></Image>
          <Image
            src={"/about/step.svg"}
            width={900}
            height={900}
            alt="step-text"
            className="step w-[20%] h-auto"
            draggable="false"
          ></Image>
          <div className="our-values-card-wrapper p-16 w-full grid grid-cols-2 sm:grid-cols-4 justify-center items-center gap-16">
            <div className="strive-card">
              <div className="our-values-card-container relative bg-[#F7A7C2] w-[300px] h-[250px] rounded-2xl">
                <Image
                  src={"/about/pin-yellow.png"}
                  width={900}
                  height={900}
                  alt="pin-yellow"
                  className="absolute w-[25%] h-auto z-[5] -right-[8%] -top-[20%]"
                  draggable="false"
                ></Image>
                <div className="our-values-details-wrapper absolute flex flex-col gap-4 w-full h-full bg-[#EB427B] p-4 rounded-2xl -rotate-6 left-[0.5rem] top-[0.5rem]">
                  <div className="our-values-logo-container w-[3rem] h-[3rem] bg-white rounded-full flex justify-center items-center">
                    <h1 className="our-values-logo text-4xl text-[#EB427B]">
                      S
                    </h1>
                  </div>
                  <h1 className="our-values-text-title text-3xl text-white font-family-gill-condensed-bold font-bold">
                    STRIVE
                  </h1>
                  <p className="our-values-text-description text-xl text-white font-family-gill-condensed-bold font-bold">
                    Lorem ipsum
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-4 take-responsibility-card">
              <div className="our-values-card-container relative rotate-2 bg-[#ECD682] w-[300px] h-[250px] rounded-2xl">
                <div className="our-values-details-wrapper absolute flex flex-col gap-4 w-full h-full bg-[#F5C309] p-4 rounded-2xl -left-[1rem] -top-[1.5rem]">
                  <div className="our-values-logo-container w-[3rem] h-[3rem] bg-white rounded-full flex justify-center items-center">
                    <h1 className="our-values-logo text-4xl text-[#F5C309]">
                      T
                    </h1>
                  </div>
                  <h1 className="our-values-text-title text-3xl text-white font-family-gill-condensed-bold font-bold">
                    TAKE RESPONSIBILITY
                  </h1>
                  <p className="our-values-text-description text-xl text-white font-family-gill-condensed-bold font-bold">
                    Lorem ipsum
                  </p>
                </div>
              </div>
            </div>
            <div className="explore-card">
              <div className="relative rotate-2 our-values-card-container  mt-[15%] bg-[#AED8AD] w-[300px] h-[250px] rounded-2xl">
                <Image
                  src={"/about/tape.png"}
                  width={900}
                  height={900}
                  alt="tape"
                  className="absolute w-[50%] h-auto z-[5] right-[31%] -top-[10%]"
                  draggable="false"
                ></Image>
                <div className="our-values-details-wrapper absolute flex flex-col gap-4 w-full h-full bg-[#37951D] p-4 rounded-2xl -rotate-[4.5deg] -left-[0.5rem] -top-[0.75rem]">
                  <div className="our-values-logo-container w-[3rem] h-[3rem] bg-white rounded-full flex justify-center items-center">
                    <h1 className="our-values-logo text-4xl text-[#37951D]">
                      E
                    </h1>
                  </div>
                  <h1 className="our-values-text-title text-3xl text-white font-family-gill-condensed-bold font-bold">
                    EXPLORE
                  </h1>
                  <p className="our-values-text-description text-xl text-white font-family-gill-condensed-bold font-bold">
                    Lorem ipsum
                  </p>
                </div>
              </div>
            </div>
            <div className="pioneer-card">
              <div className="our-values-card-container relative -rotate-6 mt-[15%] bg-[#6CAAFF] w-[300px] h-[250px] rounded-2xl">
                <Image
                  src={"/about/clipper.png"}
                  width={900}
                  height={900}
                  alt="clipper"
                  className="absolute w-[50%] h-auto z-[5] -right-[20%] -top-[35%]"
                  draggable="false"
                ></Image>
                <div className="our-values-details-wrapper absolute flex flex-col gap-4 w-full h-full bg-[#0E53B2] p-4 rounded-2xl rotate-[8.5deg] -left-[0.5rem] -top-[1%]">
                  <div className="our-values-logo-container w-[3rem] h-[3rem] bg-white rounded-full flex justify-center items-center">
                    <h1 className="our-values-logo text-4xl text-[#0E53B2]">
                      P
                    </h1>
                  </div>
                  <h1 className="our-values-text-title text-3xl text-white font-family-gill-condensed-bold font-bold">
                    PIONEER
                  </h1>
                  <p className="our-values-text-description text-xl text-white font-family-gill-condensed-bold font-bold">
                    Lorem ipsum
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-wrapper w-screen flex justify-between mt-[5%]">
            <Image
              src={"/home/sobekan-bottom-left.png"}
              width={900}
              height={900}
              alt="footer-left-background"
              className="w-[20%] h-auto"
              draggable="false"
            ></Image>
            <Image
              src={"/home/sobekan-bottom-right.png"}
              width={900}
              height={900}
              alt="footer-right-background"
              className="w-[20%] h-auto"
              draggable="false"
            ></Image>
            <Image
              src={"/home/laptop.png"}
              width={900}
              height={900}
              alt="laptop-spark"
              className="absolute bottom-[5%] -right-[1.5%] w-[25%] h-auto"
              draggable="false"
            ></Image>
            <Image
              src={"/home/laptop-spark.png"}
              width={900}
              height={900}
              alt="laptop-spark"
              className="absolute right-[5%] bottom-[15%] w-[15%] h-auto"
              draggable="false"
            ></Image>
            <Image
              src={"/home/heart.png"}
              width={900}
              height={900}
              alt="heart"
              className="absolute -left-[0%] -bottom-[0%] w-[12.5%] h-auto"
              draggable="false"
            ></Image>
          </div>
        </div>
        {/* mobile */}
        <div className="z-[0] flex sm:hidden our-values-wrapper relative w-full flex-col justify-center items-center gap-4">
          <Image
            src={"/about/OurValuesText.svg"}
            width={900}
            height={900}
            alt="our-values-text"
            className="our-values-text w-[50%] h-auto"
            draggable="false"
          ></Image>
          <Image
            src={"/about/bunderan-biru-about-mobile.svg"}
            width={900}
            height={900}
            alt="crown"
            className="crown-about left-[0%] -top-[25%] absolute w-[15%] h-auto"
            draggable="false"
          ></Image>
          <Image
            src={"/home/crown.svg"}
            width={900}
            height={900}
            alt="crown"
            className="crown-about left-[20%] -top-[4%] rotate-[-45deg] absolute w-[8.5%] h-auto"
            draggable="false"
          ></Image>
          <Image
            src={"/home/among-us.svg"}
            width={900}
            height={900}
            alt="among-us"
            className="among-us-about right-[1.5%] top-[10%] absolute w-[20.5%] h-auto"
            draggable="false"
          ></Image>
          <Image
            src={"/about/step.svg"}
            width={900}
            height={900}
            alt="step-text"
            className="step w-[50%] h-auto"
            draggable="false"
          ></Image>

          {/* dekstop */}
          <div className="hidden sm:grid our-values-card-wrapper sm:p-16 w-full grid-cols-2 sm:grid-cols-4 justify-center items-center gap-16">
            <div className="strive-card">
              <div className="our-values-card-container relative bg-[#F7A7C2] w-[300px] h-[250px] rounded-2xl">
                <Image
                  src={"/about/pin-yellow.png"}
                  width={900}
                  height={900}
                  alt="pin-yellow"
                  className="absolute w-[25%] h-auto z-[5] -right-[8%] -top-[20%]"
                  draggable="false"
                ></Image>
                <div className="our-values-details-wrapper absolute flex flex-col gap-4 w-full h-full bg-[#EB427B] p-4 rounded-2xl -rotate-6 left-[0.5rem] top-[0.5rem]">
                  <div className="our-values-logo-container w-[3rem] h-[3rem] bg-white rounded-full flex justify-center items-center">
                    <h1 className="our-values-logo text-4xl text-[#EB427B]">
                      S
                    </h1>
                  </div>
                  <h1 className="our-values-text-title text-3xl text-white font-family-impact">
                    STRIVE
                  </h1>
                  <p className="our-values-text-description text-xl text-white font-family-gill-condensed-bold">
                    Lorem ipsum
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-4 take-responsibility-card">
              <div className="our-values-card-container relative rotate-2 bg-[#ECD682] w-[300px] h-[250px] rounded-2xl">
                <div className="our-values-details-wrapper absolute flex flex-col gap-4 w-full h-full bg-[#F5C309] p-4 rounded-2xl -left-[1rem] -top-[1.5rem]">
                  <div className="our-values-logo-container w-[3rem] h-[3rem] bg-white rounded-full flex justify-center items-center">
                    <h1 className="our-values-logo text-4xl text-[#F5C309]">
                      T
                    </h1>
                  </div>
                  <h1 className="our-values-text-title text-3xl text-white font-family-impact">
                    TAKE RESPONSIBILITY
                  </h1>
                  <p className="our-values-text-description text-xl text-white font-family-gill-condensed-bold">
                    Lorem ipsum
                  </p>
                </div>
              </div>
            </div>
            <div className="explore-card">
              <div className="relative rotate-2 our-values-card-container  mt-[15%] bg-[#AED8AD] w-[300px] h-[250px] rounded-2xl">
                <Image
                  src={"/about/tape.png"}
                  width={900}
                  height={900}
                  alt="tape"
                  className="absolute w-[50%] h-auto z-[5] right-[31%] -top-[10%]"
                  draggable="false"
                ></Image>
                <div className="our-values-details-wrapper absolute flex flex-col gap-4 w-full h-full bg-[#37951D] p-4 rounded-2xl -rotate-[4.5deg] -left-[0.5rem] -top-[0.75rem]">
                  <div className="our-values-logo-container w-[3rem] h-[3rem] bg-white rounded-full flex justify-center items-center">
                    <h1 className="our-values-logo text-4xl text-[#37951D]">
                      E
                    </h1>
                  </div>
                  <h1 className="our-values-text-title text-3xl text-white font-family-impact">
                    EXPLORE
                  </h1>
                  <p className="our-values-text-description text-xl text-white font-family-gill-condensed-bold">
                    Lorem ipsum
                  </p>
                </div>
              </div>
            </div>
            <div className="pioneer-card">
              <div className="our-values-card-container relative -rotate-6 mt-[15%] bg-[#6CAAFF] w-[300px] h-[250px] rounded-2xl">
                <Image
                  src={"/about/clipper.png"}
                  width={900}
                  height={900}
                  alt="clipper"
                  className="absolute w-[50%] h-auto z-[5] -right-[20%] -top-[35%]"
                  draggable="false"
                ></Image>
                <div className="our-values-details-wrapper absolute flex flex-col gap-4 w-full h-full bg-[#0E53B2] p-4 rounded-2xl rotate-[8.5deg] -left-[0.5rem] -top-[1%]">
                  <div className="our-values-logo-container w-[3rem] h-[3rem] bg-white rounded-full flex justify-center items-center">
                    <h1 className="our-values-logo text-4xl text-[#0E53B2]">
                      P
                    </h1>
                  </div>
                  <h1 className="our-values-text-title text-3xl text-white font-family-impact">
                    PIONEER
                  </h1>
                  <p className="our-values-text-description text-xl text-white font-family-gill-condensed-bold">
                    Lorem ipsum
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* mobile */}
          <div className="grid sm:hidden our-values-card-wrapper ml-[4%] p-7 w-full grid-cols-2 justify-center items-center gap-16 space-y-1">
            <div className="strive-card">
              <div className="our-values-card-container relative bg-[#F7A7C2] w-[300px] h-[250px] rounded-2xl flex flex-col justify-center items-center">
                <Image
                  src={"/about/pin-yellow.png"}
                  width={900}
                  height={900}
                  alt="pin-yellow"
                  className="absolute w-[25%] h-auto z-[5] -right-[8%] -top-[20%]"
                  draggable="false"
                ></Image>
                <div className="our-values-details-wrapper absolute flex flex-col gap-4 w-full h-full bg-[#EB427B] p-4 rounded-2xl -rotate-4 left-[0.25rem] top-[0.5rem]">
                  <div className="our-values-logo-container w-[3rem] h-[3rem] bg-white rounded-full flex justify-center items-center">
                    <h1 className="our-values-logo text-4xl text-[#EB427B]">
                      S
                    </h1>
                  </div>
                  <h1 className="our-values-text-title text-3xl text-white font-family-impact">
                    STRIVE
                  </h1>
                  <p className="our-values-text-description text-xl text-white font-family-gill-condensed-bold">
                    Lorem ipsum
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-8 take-responsibility-card">
              <div className="our-values-card-container relative rotate-2 bg-[#ECD682] w-[300px] h-[250px] rounded-2xl flex flex-col justify-center items-center">
                <div className="our-values-details-wrapper absolute flex flex-col gap-4 w-full h-full bg-[#F5C309] p-4 rounded-2xl -left-[0.5rem] -top-[0.75rem]">
                  <div className="our-values-logo-container w-[3rem] h-[3rem] bg-white rounded-full flex justify-center items-center">
                    <h1 className="our-values-logo text-4xl text-[#F5C309]">
                      T
                    </h1>
                  </div>
                  <h1 className="our-values-text-title text-3xl text-white font-family-impact">
                    TAKE RESPONSIBILITY
                  </h1>
                  <p className="our-values-text-description text-xl text-white font-family-gill-condensed-bold">
                    Lorem ipsum
                  </p>
                </div>
              </div>
            </div>
            <div className="explore-card">
              <div className="relative rotate-2 our-values-card-container  mt-[15%] bg-[#AED8AD] w-[300px] h-[250px] rounded-2xl flex flex-col justify-center items-center">
                <Image
                  src={"/about/tape.png"}
                  width={900}
                  height={900}
                  alt="tape"
                  className="absolute w-[50%] h-auto z-[5] right-[24%] -top-[12.5%]"
                  draggable="false"
                ></Image>
                <div className="our-values-details-wrapper absolute flex flex-col gap-4 w-full h-full bg-[#37951D] p-4 rounded-2xl -rotate-[1.5deg] left-[0rem] -top-[0.5rem]">
                  <div className="our-values-logo-container w-[3rem] h-[3rem] bg-white rounded-full flex justify-center items-center">
                    <h1 className="our-values-logo text-4xl text-[#37951D]">
                      E
                    </h1>
                  </div>
                  <h1 className="our-values-text-title text-3xl text-white font-family-impact">
                    EXPLORE
                  </h1>
                  <p className="our-values-text-description text-xl text-white font-family-gill-condensed-bold">
                    Lorem ipsum
                  </p>
                </div>
              </div>
            </div>
            <div className="pioneer-card">
              <div className="our-values-card-container relative -rotate-6 mt-[15%] bg-[#6CAAFF] w-[300px] h-[250px] rounded-2xl flex flex-col justify-center items-center">
                <Image
                  src={"/about/clipper.png"}
                  width={900}
                  height={900}
                  alt="clipper"
                  className="absolute w-[50%] h-auto z-[5] -right-[20%] -top-[35%]"
                  draggable="false"
                ></Image>
                <div className="our-values-details-wrapper absolute flex flex-col gap-4 w-full h-full bg-[#0E53B2] p-4 rounded-2xl rotate-[6.5deg] -left-[0.5rem] -top-[1%]">
                  <div className="our-values-logo-container w-[3rem] h-[3rem] bg-white rounded-full flex justify-center items-center">
                    <h1 className="our-values-logo text-4xl text-[#0E53B2]">
                      P
                    </h1>
                  </div>
                  <h1 className="our-values-text-title text-3xl text-white font-family-impact">
                    PIONEER
                  </h1>
                  <p className="our-values-text-description text-xl text-white font-family-gill-condensed-bold">
                    Lorem ipsum
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-wrapper w-screen flex justify-between mt-[5%]">
            <Image
              src={"/home/sobekan-bottom-left.png"}
              width={900}
              height={900}
              alt="footer-left-background"
              className="about-footer-left-background w-[20%] h-auto"
              draggable="false"
            ></Image>
            <Image
              src={"/home/sobekan-bottom-right.png"}
              width={900}
              height={900}
              alt="about-footer-right-background"
              className="about-footer-right-background w-[20%] h-auto"
              draggable="false"
            ></Image>
            <Image
              src={"/home/laptop.png"}
              width={900}
              height={900}
              alt="laptop"
              className="about-laptop absolute bottom-[5%] -right-[1.5%] w-[25%] h-auto"
              draggable="false"
            ></Image>
            <Image
              src={"/home/laptop-spark.png"}
              width={900}
              height={900}
              alt="laptop-spark"
              className="about-laptop-spark absolute right-[5%] bottom-[15%] w-[15%] h-auto"
              draggable="false"
            ></Image>
            <Image
              src={"/home/heart.png"}
              width={900}
              height={900}
              alt="heart"
              className="about-heart absolute -left-[0%] -bottom-[0%] w-[12.5%] h-auto"
              draggable="false"
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
}
