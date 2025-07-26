'use client';
import Card from "@/components/CommitteeCard";
import Image from "next/image";
import "@/styles/committee.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  // useGSAP(() => {
  //   gsap.utils.toArray<HTMLElement>(".section-reveal").forEach((section) => {
  //     gsap.from(section, {
  //       opacity: 0,
  //       y: 50,
  //       duration: 0.8,
  //       scrollTrigger: {
  //         trigger: section,
  //         start: "top 80%",
  //         toggleActions: "play none none none",
  //       },
  //     });
  //   });

  //   gsap.to(".yellowstarasset", {
  //     rotate: 360,
  //     repeat: -1,
  //     duration: 10,
  //     ease: "linear"
  //   });
  //   gsap.to(".redstarasset", {
  //     rotate: 360,
  //     repeat: -1,
  //     duration: 10,
  //     ease: "linear"
  //   });
  //   gsap.to(".starasset", {
  //     rotate: 360,
  //     repeat: -1,
  //     duration: 10,
  //     ease: "linear"
  //   });
  // }, []);

  return (
    <>
      <div className="h-[10vh] bg-[#F1EEE6]"></div>
      <div className="overflow-x-hidden flex flex-col items-center min-h-screen w-screen max-w-screen bg-[url('/backgrounds/background-paper.png')] bg-contain bg-center bg-[#F1EEE6] pb-20">
        {/* Main Title */}
        <div className="section-reveal relative flex justify-center items-center mt-8 w-full px-4 sm:w-[27.5rem] h-[8.75rem]">
          <h1 className="text-black font-extrabold text-2xl sm:text-4xl z-10 -rotate-3 -top-[1.3rem] sm:-top-[1rem] relative -tracking-[0.08rem] text-center">
            COMMITTEE MEMBERS
          </h1>
          <Image
            src="/comittee/rectanglecomitteememberback.svg"
            alt="Committee decoration"
            width={150}
            height={150}
            className="absolute left-1/2 -translate-x-1/2 w-[18.5rem] sm:w-full lg:w-full h-auto z-0"
          />
          <Image
            src="/comittee/rectanglecomitteememberfront.svg"
            alt="Committee decoration"
            width={150}
            height={150}
            className="absolute left-1/2 -translate-x-1/2 w-[18.5rem] sm:w-full lg:w-full h-auto z-0 top-[0.8rem] sm:-top-[0.05rem]"
          />
          <Image
            src="/comittee/paperclip.png"
            alt="Committee decoration"
            width={150}
            height={150}
            className="absolute w-[3.5rem] sm:w-[4.5rem] h-auto z-0 top-[0.8rem] -translate-x-34 sm:left-[7.5rem] sm:top-[0.05rem]"
          />
          <Image
            src="/comittee/quoteasset.png"
            alt="Committee decoration"
            width={150}
            height={150}
            className="quoteasset absolute w-[0rem] sm:w-[7rem] h-auto z-0 lg:-translate-x-[42rem] sm:-translate-x-[35rem] -translate-x-[25.5rem]"
          />
          <Image
            src="/comittee/bookasset.png"
            alt="Committee decoration"
            width={150}
            height={150}
            className="bookasset absolute w-[0rem] sm:w-[15rem] h-auto z-0 lg:translate-x-[43rem] sm:translate-x-[37rem] -translate-x-[-29rem] translate-y-[-1rem]"
          />
        </div>

        {/* HOD Section */}
        <div className="section-reveal relative flex justify-center items-center mb-2 w-full px-2 sm:px-4 lg:px-0 h-[7rem] sm:h-[8.75rem]">
          <h1 className="text-white font-extrabold text-lg sm:text-2xl z-10 relative">
            HEAD OF DEPARTMENT
          </h1>
          <Image
            src="/comittee/hodrectangle.svg"
            alt="Committee decoration"
            width={600}
            height={120}
            className="absolute w-[17rem] sm:w-[23rem] lg:w-[23rem] h-auto z-0"
          />
        </div>
        <div className="section-reveal grid grid-cols-2 sm:grid-cols-3 hod-container gap-10 sm:gap-5 mt-6 sm:mt-10 justify-center items-center px-2 sm:px-4">
          <Card id="hod-1" name="Nama Lengkap" role="PRESIDENT" division="HOD" gender="BOY" />
          <Card id="hod-2" name="Nama Lengkap" role="VICE PRES" division="HOD" gender="BOY" />
          <Card id="hod-3" name="Nama Lengkap" role="SECRETARY" division="HOD" gender="GIRL" />
          <Card id="hod-4" name="Nama Lengkap" role="SECRETARY" division="HOD" gender="GIRL" />
          <Card id="hod-5" name="Nama Lengkap" role="TREASURER" division="HOD" gender="GIRL" />
          <Card id="hod-6" name="Nama Lengkap" role="TREASURER" division="HOD" gender="GIRL" />
        </div>

        {/* Internal Division */}
        <div className="section-reveal relative flex justify-center items-center mt-8 mb-2 w-full px-2 sm:px-4 lg:px-0 h-[7rem] sm:h-[8.75rem]">
          <h1 className="text-white font-extrabold text-lg sm:text-2xl z-10 relative top-[1.3rem] sm:top-[2.8rem] rotate-3">
            INTERNAL DIVISION
          </h1>
          <Image
            src="/comittee/internalrectangle.svg"
            alt="Committee decoration"
            width={600}
            height={120}
            className="absolute top-[3rem] sm:top-[5rem] w-[15rem] sm:w-[19rem] lg:w-[19rem] h-auto z-0"
          />
          <Image
            src="/comittee/yellowstarasset.png"
            alt="Committee decoration"
            width={150}
            height={150}
            className="yellowstarasset absolute w-[6rem] sm:w-[12rem] h-auto z-0 sm:translate-y-[2rem] lg:-translate-x-[46rem] sm:-translate-x-[35rem] translate-x-[-25.5rem] translate-y-[1rem]"
          />
          <Image
            src="/comittee/rightcloudasset.png"
            alt="Committee decoration"
            width={150}
            height={150}
            className="rightcloudasset absolute w-[0rem] sm:w-[0rem] lg:w-[14rem] h-auto z-0 lg:translate-x-[39.5rem] translate-y-[4rem] sm:translate-y-[2rem] sm:-translate-x-[-35rem]"
          />
        </div>
        <div className="section-reveal internal-container grid grid-cols-2 sm:grid-cols-3 gap-10 sm:gap-5 mt-6 sm:mt-10 justify-center items-center px-2 sm:px-4">
          <Card id="internal-1" name="Nama Lengkap" role="PRESIDENT" division="INTERNAL" gender="BOY" />
          <Card id="internal-2" name="Nama Lengkap" role="MEMBER" division="INTERNAL" gender="BOY" />
          <Card id="internal-3" name="Nama Lengkap" role="MEMBER" division="INTERNAL" gender="BOY" />
          <Card id="internal-4" name="Nama Lengkap" role="MEMBER" division="INTERNAL" gender="GIRL" />
          <Card id="internal-5" name="Nama Lengkap" role="MEMBER" division="INTERNAL" gender="BOY" />
        </div>

        {/* External Division */}
        <div className="section-reveal relative flex justify-center items-center mt-10 mb-2 w-full px-4 sm:w-[20.75rem] h-[8.75rem]">
          <h1 className="text-white font-extrabold text-xl sm:text-2xl z-10 relative top-[1.2rem] sm:top-[2.7rem] -rotate-2">
            EXTERNAL DIVISION
          </h1>
          <Image
            src="/comittee/externalrectangle.svg"
            alt="Committee decoration"
            width={150}
            height={150}
            className="absolute top-[4rem] sm:top-[5rem] w-[15rem] sm:w-[19rem] h-auto z-0"
          />
          <Image
            src="/comittee/longpitaasset.png"
            alt="Committee decoration"
            width={150}
            height={150}
            className="pitaasset rotate-70 absolute w-[6rem] lg:translate-y-[1rem] sm:w-[10rem] h-auto z-0 sm:translate-y-[1rem] lg:-translate-x-[50rem] sm:translate-x-[-30rem] translate-x-[-12rem] translate-y-[-1rem]"
          />
        </div>
        <div className="section-reveal grid grid-cols-2 sm:grid-cols-3 external-container gap-10 sm:gap-5 mt-10 justify-center items-center px-4">
          <Card id="external-1" name="Nama Lengkap" role="PRESIDENT" division="EXTERNAL" gender="BOY" />
          <Card id="external-2" name="Nama Lengkap" role="MEMBER" division="EXTERNAL" gender="BOY" />
          <Card id="external-3" name="Nama Lengkap" role="MEMBER" division="EXTERNAL" gender="BOY" />
          <Card id="external-4" name="Nama Lengkap" role="MEMBER" division="EXTERNAL" gender="BOY" />
          <Card id="external-5" name="Nama Lengkap" role="MEMBER" division="EXTERNAL" gender="BOY" />
          <Card id="external-6" name="Nama Lengkap" role="MEMBER" division="EXTERNAL" gender="BOY" />
        </div>

        {/* PDD Design */}
        <div className="section-reveal relative flex justify-center items-center mt-10 mb-2 w-full px-4 sm:w-[20.75rem] h-[8.75rem]">
          <h1 className="text-white font-extrabold text-xl sm:text-2xl z-10 relative top-[1rem] sm:top-[2.3rem]">
            PDD DESIGN
          </h1>
          <Image
            src="/comittee/pdddesignrectangle.svg"
            alt="Committee decoration"
            width={150}
            height={150}
            className="absolute top-[4rem] sm:top-[5rem] w-[10rem] sm:w-[12rem] h-auto z-0"
          />
          <Image
            src="/comittee/leftcloudasset.png"
            alt="Committee decoration"
            width={150}
            height={150}
            className="leftcloudasset absolute w-[0rem] sm:w-[0rem] lg:w-[10rem] h-auto z-0 translate-y-[2rem] lg:-translate-x-[43.5rem] -translate-x-[27rem]"
          />
          <Image
            src="/comittee/redstarasset.png"
            alt="Committee decoration"
            width={150}
            height={150}
            className="redstarasset absolute w-[6rem] sm:w-[12rem] h-auto z-0 lg:translate-x-[44rem] sm:translate-y-[1rem] sm:-translate-x-[-29rem] -translate-x-[-24rem] translate-y-[1rem]"
          />
        </div>
        <div className="section-reveal grid grid-cols-2 sm:grid-cols-3 pdddesign-container gap-10 sm:gap-5 mt-10 justify-center items-center px-4">
          <Card id="pdddesign-1" name="Nama Lengkap" role="PRESIDENT" division="PDD DESIGN" gender="BOY" />
          <Card id="pdddesign-2" name="Nama Lengkap" role="MEMBER" division="PDD DESIGN" gender="GIRL" />
          <Card id="pdddesign-3" name="Nama Lengkap" role="MEMBER" division="PDD DESIGN" gender="GIRL" />
          <Card id="pdddesign-4" name="Nama Lengkap" role="MEMBER" division="PDD DESIGN" gender="BOY" />
          <Card id="pdddesign-5" name="Nama Lengkap" role="MEMBER" division="PDD DESIGN" gender="BOY" />
          <Card id="pdddesign-6" name="Nama Lengkap" role="MEMBER" division="PDD DESIGN" gender="BOY" />
        </div>

        {/* PDD Documentation */}
        <div className="section-reveal relative flex justify-center items-center mt-10 mb-2 w-full px-4 sm:w-[20.75rem] h-[8.75rem]">
          <h1 className="text-white font-extrabold text-xl sm:text-2xl z-10 relative top-[1.7rem] sm:top-[2.6rem] rotate-2">
            PDD DOCUMENTATION
          </h1>
          <Image
            src="/comittee/pdddocumentationrectangle.svg"
            alt="Committee decoration"
            width={150}
            height={150}
            className="absolute top-[4.3rem] sm:top-[5rem] w-[18rem] sm:w-[37rem] h-auto z-0"
          />
          <Image
            src="/comittee/pin.png"
            alt="Committee decoration"
            width={150}
            height={150}
            className="absolute -translate-x-34  sm:left-[7rem] top-[2.4rem] sm:top-[2rem] w-[2rem] sm:w-[3rem] h-auto z-0"
          />
        </div>
        <div className="section-reveal pdddocumentation-container grid grid-cols-2 sm:grid-cols-4 gap-10 sm:gap-5 mt-10 justify-center items-center px-4">
          <Card id="pdddoc-1" name="Nama Lengkap" role="PRESIDENT" division="PDD DOCUMENTATION" gender="BOY" />
          <Card id="pdddoc-2" name="Nama Lengkap" role="MEMBER" division="PDD DOCUMENTATION" gender="BOY" />
          <Card id="pdddoc-3" name="Nama Lengkap" role="MEMBER" division="PDD DOCUMENTATION" gender="BOY" />
          <Card id="pdddoc-4" name="Nama Lengkap" role="MEMBER" division="PDD DOCUMENTATION" gender="BOY" />
        </div>
        <div className="section-reveal pdddocumentation-container relative grid grid-cols-2 sm:grid-cols-3 gap-10 sm:gap-5 mt-5 justify-center items-center px-4">
          <Card id="pdddoc-5" name="Nama Lengkap" role="MEMBER" division="PDD DOCUMENTATION" gender="BOY" />
          <Card id="pdddoc-6" name="Nama Lengkap" role="MEMBER" division="PDD DOCUMENTATION" gender="BOY" />
          <Card id="pdddoc-7" name="Nama Lengkap" role="MEMBER" division="PDD DOCUMENTATION" gender="BOY" />
          <Image
            src="/comittee/arrowasset.png"
            alt="Committee decoration"
            width={150}
            height={150}
            className="arrowasset absolute w-[0rem] sm:w-[0rem] lg:w-[16rem] h-auto z-0 lg:-translate-y-[10rem] lg:-translate-x-[31rem] sm:-translate-x-[25rem] sm:-translate-y-[6rem]"
          />
          <Image
            src="/comittee/rightcloudasset.png"
            alt="Committee decoration"
            width={150}
            height={150}
            className="rightcloudasset2 absolute w-[3.5rem] sm:w-[0rem] lg:w-[14rem] h-auto z-0 lg:translate-x-[53rem] sm:translate-x-[51rem]"
          />
        </div>

        {/* Public Relation */}
        <div className="section-reveal relative flex justify-center items-center mt-10 mb-2 w-full px-4 sm:w-[20.75rem] h-[8.75rem]">
          <h1 className="text-white font-extrabold text-xl sm:text-2xl z-10 relative top-[1.2rem] sm:top-[2.7rem] -rotate-2">
            PUBLIC RELATION
          </h1>
          <Image
            src="/comittee/publicrelationrectangle.svg"
            alt="Committee decoration"
            width={150}
            height={150}
            className="absolute top-[4rem] sm:top-[5rem] w-[14rem] sm:w-[18rem] h-auto z-0"
          />
          <Image
            src="/comittee/catasset.png"
            alt="Committee decoration"
            width={150}
            height={150}
            className="catasset absolute w-[6rem] sm:w-[10rem] h-auto z-0 sm:translate-y-[2rem] lg:-translate-x-[40rem] sm:translate-x-[-30rem] translate-x-[-24rem]"
          />
        </div>
        <div className="section-reveal publicrelation-container grid grid-cols-2 sm:grid-cols-3 gap-10 sm:gap-5 mt-10 justify-center items-center px-4">
          <Card id="pr-1" name="Nama Lengkap" role="PRESIDENT" division="PUBLIC RELATION" gender="GIRL" />
          <Card id="pr-2" name="Nama Lengkap" role="MEMBER" division="PUBLIC RELATION" gender="BOY" />
          <Card id="pr-3" name="Nama Lengkap" role="MEMBER" division="PUBLIC RELATION" gender="BOY" />
        </div>

        {/* Social Activity */}
        <div className="section-reveal relative flex justify-center items-center mt-10 mb-2 w-full px-4 sm:w-[20.75rem] h-[8.75rem]">
          <h1 className="text-white font-extrabold text-xl sm:text-2xl z-10 relative top-[1rem] sm:top-[2.3rem]">
            SOCIAL ACTIVITY
          </h1>
          <Image
            src="/comittee/socialactivityrectangle.svg"
            alt="Committee decoration"
            width={150}
            height={150}
            className="absolute top-[4rem] sm:top-[5rem] w-[13rem] sm:w-[17rem] h-auto z-0"
          />
          <Image
            src="/comittee/bigleftcloudasset.png"
            alt="Committee decoration"
            width={150}
            height={150}
            className="bigleftcloudasset absolute w-[0rem] lg:w-[18rem] sm:w-[0rem] h-auto z-0 -translate-y-[2rem] lg:-translate-x-[40rem] sm:-translate-x-[35rem] sm:translate-y-[1rem]"
          />
          <Image
            src="/comittee/starasset.png"
            alt="Committee decoration"
            width={150}
            height={150}
            className="starasset absolute w-[6rem] sm:w-[10rem] h-auto z-0 lg:translate-x-[38rem] sm:translate-y-[1rem] sm:-translate-x-[-30rem] -translate-x-[-24rem] translate-y-[-4rem]"
          />
        </div>
        <div className="section-reveal socialactivity-container grid grid-cols-2 sm:grid-cols-4 gap-10 sm:gap-5 mt-10 justify-center items-center px-4">
          <Card id="sa-1" name="Nama Lengkap" role="PRESIDENT" division="SOCIAL ACTIVITY" gender="BOY" />
          <Card id="sa-2" name="Nama Lengkap" role="MEMBER" division="SOCIAL ACTIVITY" gender="BOY" />
          <Card id="sa-3" name="Nama Lengkap" role="MEMBER" division="SOCIAL ACTIVITY" gender="BOY" />
          <Card id="sa-4" name="Nama Lengkap" role="MEMBER" division="SOCIAL ACTIVITY" gender="BOY" />
        </div>

        {/* Technology */}
        <div className="section-reveal relative flex justify-center items-center mt-10 mb-2 w-full px-4 sm:w-[20.75rem] h-[8.75rem]">
          <h1 className="text-white font-extrabold text-xl sm:text-2xl z-10 relative top-[1rem] sm:top-[2.5rem] -rotate-1">
            TECHNOLOGY
          </h1>
          <Image
            src="/comittee/technologyrectangle.svg"
            alt="Committee decoration"
            width={150}
            height={150}
            className="absolute top-[4rem] sm:top-[5rem] w-[12rem] sm:w-[15.5rem] h-auto z-0"
          />
          <Image
            src="/comittee/tapeasset.png"
            alt="Committee decoration"
            width={150}
            height={150}
            className="tapeasset absolute w-[9rem] sm:w-[18rem] h-auto z-0 lg:-translate-y-[4rem] lg:-translate-x-[48rem] sm:translate-x-[-40rem] translate-x-[-27rem] translate-y-[-2rem]"
          />
        </div>
        <div className="section-reveal grid grid-cols-2 sm:grid-cols-3 technology-container gap-10 sm:gap-5 mt-10 justify-center items-center px-4">
          <Card id="tech-1" name="Nama Lengkap" role="PRESIDENT" division="TECHNOLOGY" gender="BOY" />
          <Card id="tech-2" name="Nama Lengkap" role="MEMBER" division="TECHNOLOGY" gender="BOY" />
          <Card id="tech-3" name="Nama Lengkap" role="MEMBER" division="TECHNOLOGY" gender="BOY" />
          <Card id="tech-4" name="Nama Lengkap" role="MEMBER" division="TECHNOLOGY" gender="BOY" />
          <Card id="tech-5" name="Nama Lengkap" role="MEMBER" division="TECHNOLOGY" gender="BOY" />
          <Card id="tech-6" name="Nama Lengkap" role="MEMBER" division="TECHNOLOGY" gender="GIRL" />
        </div>
      </div>
    </>
  );
}