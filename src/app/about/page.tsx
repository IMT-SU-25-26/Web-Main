import Image from "next/image";
import React from "react";

export default function About() {
  return (
    <div className="overflow-x-hidden">
      <div className="h-[10vh] bg-[#F1EEE6]"></div>
      <div className="overflow-hidden flex flex-col items-center min-h-screen w-screen max-w-screen bg-[url('/backgrounds/background-paper.png')] bg-cover bg-center bg-[#F1EEE6]">
        <Image
          src={"/about/AboutUsText.webp"}
          width={900}
          height={900}
          alt="about-us-text"
          className="w-[40%] h-auto"
          draggable="false"
        ></Image>
        <div className="about-us-wrapper mt-[2.5rem] relative w-full flex justify-center items-center gap-48">
          <div className="relative w-1/3 h-[20rem] bg-white rounded-3xl flex flex-col gap-4 p-12">
            <Image
              src={"/home/handle-card.png"}
              width={900}
              height={900}
              alt="handle-about-us-card"
              className="absolute bottom-[20%] -left-[18%] w-[25%] h-auto"
            ></Image>
            <Image
              src={"/about/yellow-star.webp"}
              width={900}
              height={900}
              alt="handle-about-us-card"
              className="absolute -bottom-[10%] -right-[8%] w-[25%] h-auto"
            ></Image>
            <h1 className="text-5xl font-family-gill-condensed-bold font-bold">
              ABOUT US
            </h1>
            <p className="text-2xl font-family-gill">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea cum
              aliquam, exercitationem assumenda eligendi possimus a itaque ut
              dolor optio.
            </p>
          </div>
          <div className="relative">
            <Image
              src={"/about/peniti.webp"}
              width={900}
              height={900}
              alt="about-us-text"
              className="w-[40%] h-auto absolute z-[5] -top-[2%] -right-[9.5%]"
              draggable="false"
            ></Image>
            <div className="relative rotate-[8deg] bg-[#EAD6B1] w-[500px] h-[350px]"></div>
            <div className="absolute rotate-[8deg] bg-[#FFFF] -left-[10%] top-[10%] w-[500px] h-[350px] p-4 flex flex-col gap-6">
              <div className="w-full h-[80%] bg-gray-200"></div>
              <h1 className="text-2xl font-family-gill font-bold">
                SU IMT Team
              </h1>
            </div>
          </div>
        </div>
        <div className="vision-mission-wrapper mt-[5%] min-h-[75rem] min-w-screen relative w-full flex justify-center items-center gap-24">
          <Image
            src={"/about/BigFractureAbout.webp"}
            width={900}
            height={900}
            alt="big-fracture"
            className="w-[100%] h-auto absolute z-[2]"
            draggable="false"
          ></Image>
          <Image
            src={"/about/CircleKiriFracture.svg"}
            width={900}
            height={900}
            alt="circle-kiri-fracture"
            className="w-[40%] h-auto absolute -bottom-[15%] left-0"
            draggable="false"
          ></Image>
          <Image
            src={"/about/vision-card.svg"}
            width={900}
            height={900}
            alt="big-fracture"
            className="w-[30%] h-auto absolute top-[30%] left-[10%] z-[3]"
            draggable="false"
          ></Image>
          <Image
            src={"/about/mission-card.svg"}
            width={900}
            height={900}
            alt="big-fracture"
            className="w-[30%] h-auto absolute bottom-[15%] right-[18%] z-[3]"
            draggable="false"
          ></Image>
          <Image
            src={"/home/green-arrow.png"}
            width={900}
            height={900}
            alt="big-fracture"
            className="w-[18%] h-auto absolute bottom-[35%] right-[43.25%] rotate-45 z-[3]"
            draggable="false"
          ></Image>
          <Image
            src={"/about/PencilRuler.webp"}
            width={900}
            height={900}
            alt="big-fracture"
            className="w-[23.5%] h-auto absolute -top-[5%] left-[0%] z-[3]"
            draggable="false"
          ></Image>
        </div>
        <div className="our-values-wrapper relative w-full flex flex-col justify-center items-center gap-8">
          <Image
            src={"/about/OurValuesText.svg"}
            width={900}
            height={900}
            alt="about-us-text"
            className="w-[20%] h-auto"
            draggable="false"
          ></Image>
          <Image
            src={"/about/step.svg"}
            width={900}
            height={900}
            alt="about-us-text"
            className="w-[20%] h-auto"
            draggable="false"
          ></Image>
          <div className="our-values-card-wrapper"></div>
        </div>
      </div>
    </div>
  );
}
