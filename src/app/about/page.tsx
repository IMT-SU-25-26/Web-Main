import Image from "next/image";
import React from "react";

export default function About() {
  return (
    <div className="overflow-x-hidden">
      <div className="h-[6vh] bg-[#F1EEE6]"></div>
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
            <div className="relative w-1/3 h-[20rem] bg-white rounded-3xl flex flex-col gap-4 p-12 shadow-[-12px_12px_5px_-5px_rgba(0,0,0,0.25)]">
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
            <div className="relative rotate-[8deg] bg-[#EAD6B1] w-[500px] h-[350px] shadow-[12px_12px_5px_-5px_rgba(0,0,0,0.25)]"></div>
            <div className="absolute rotate-[8deg] bg-[#FFFF] -left-[10%] top-[10%] w-[500px] h-[350px] p-4 flex flex-col gap-6 shadow-[12px_12px_5px_-5px_rgba(0,0,0,0.25)]">
              <div className="w-full h-[80%] bg-gray-200"></div>
              <h1 className="text-2xl font-family-gill font-bold">
                SU IMT Team
              </h1>
            </div>
          </div>
        </div>
        <div className="vision-mission-wrapper -mt-[2.5%] min-h-[75rem] min-w-screen relative w-full flex justify-center items-center gap-24">
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
          <div className="our-values-card-wrapper w-full flex justify-center items-center gap-16 pb-[10%]">
            <div className="strive-card">
              <div className="relative bg-[#F7A7C2] w-[300px] h-[250px] rounded-2xl">
                <Image
                  src={"/about/pin-yellow.png"}
                  width={900}
                  height={900}
                  alt="pin-yellow"
                  className="absolute w-[25%] h-auto z-[5] -right-[8%] -top-[20%]"
                  draggable="false"
                ></Image>
                <div className="absolute flex flex-col gap-4 w-full h-full bg-[#EB427B] p-4 rounded-2xl -rotate-6 left-[0.5rem] top-[0.5rem]">
                  <div className="w-[3rem] h-[3rem] bg-white rounded-full flex justify-center items-center">
                    <h1 className="text-4xl text-[#EB427B]">S</h1>
                  </div>
                  <h1 className="text-3xl text-white font-family-gill-condensed-bold font-bold">STRIVE</h1>
                  <p className="text-xl text-white font-family-gill-condensed-bold font-bold">Lorem ipsum</p>
                </div>
              </div>
            </div>
            <div className="mt-4 take-responsibility-card">
              <div className="relative rotate-2 bg-[#ECD682] w-[300px] h-[250px] rounded-2xl">
                <div className="absolute flex flex-col gap-4 w-full h-full bg-[#F5C309] p-4 rounded-2xl -left-[1rem] -top-[1.5rem]">
                  <div className="w-[3rem] h-[3rem] bg-white rounded-full flex justify-center items-center">
                    <h1 className="text-4xl text-[#F5C309]">T</h1>
                  </div>
                  <h1 className="text-3xl text-white font-family-gill-condensed-bold font-bold">TAKE RESPONSIBILITY</h1>
                  <p className="text-xl text-white font-family-gill-condensed-bold font-bold">Lorem ipsum</p>
                </div>
              </div>
            </div>
            <div className="explore-card">
              <div className="relative rotate-2 mt-[15%] bg-[#AED8AD] w-[300px] h-[250px] rounded-2xl">
                <Image
                  src={"/about/tape.png"}
                  width={900}
                  height={900}
                  alt="tape"
                  className="absolute w-[50%] h-auto z-[5] right-[31%] -top-[10%]"
                  draggable="false"
                ></Image>
                <div className="absolute flex flex-col gap-4 w-full h-full bg-[#37951D] p-4 rounded-2xl -rotate-[4.5deg] -left-[0.5rem] -top-[0.75rem]">
                  <div className="w-[3rem] h-[3rem] bg-white rounded-full flex justify-center items-center">
                    <h1 className="text-4xl text-[#37951D]">E</h1>
                  </div>
                  <h1 className="text-3xl text-white font-family-gill-condensed-bold font-bold">EXPLORE</h1>
                  <p className="text-xl text-white font-family-gill-condensed-bold font-bold">Lorem ipsum</p>
                </div>
              </div>
            </div>
            <div className="pioneer-card">
              <div className="relative -rotate-6 mt-[15%] bg-[#6CAAFF] w-[300px] h-[250px] rounded-2xl">
                <Image
                  src={"/about/clipper.png"}
                  width={900}
                  height={900}
                  alt="clipper"
                  className="absolute w-[50%] h-auto z-[5] -right-[20%] -top-[35%]"
                  draggable="false"
                ></Image>
                <div className="absolute flex flex-col gap-4 w-full h-full bg-[#0E53B2] p-4 rounded-2xl rotate-[8.5deg] -left-[0.5rem] -top-[1%]">
                  <div className="w-[3rem] h-[3rem] bg-white rounded-full flex justify-center items-center">
                    <h1 className="text-4xl text-[#0E53B2]">P</h1>
                  </div>
                  <h1 className="text-3xl text-white font-family-gill-condensed-bold font-bold">PIONEER</h1>
                  <p className="text-xl text-white font-family-gill-condensed-bold font-bold">Lorem ipsum</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
