"use client";
import Card from "@/components/CommitteeCard";
import Image from "next/image";
import "@/styles/committee.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Committee() {
  // Reset scroll position saat component mount
  useEffect(() => {
    window.scrollTo(0, 0);
    // Refresh ScrollTrigger setelah scroll reset
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);
  }, []);

  useGSAP(() => {
    // Clear semua ScrollTrigger sebelumnya
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

    gsap.utils.toArray<HTMLElement>(".section-reveal").forEach((section) => {
      gsap.fromTo(
        section,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none reverse",
            refreshPriority: -1,
          },
        }
      );
    });

    gsap.to(".yellowstarasset", {
      rotate: 360,
      repeat: -1,
      duration: 10,
      ease: "linear",
    });
    gsap.to(".redstarasset", {
      rotate: 360,
      repeat: -1,
      duration: 10,
      ease: "linear",
    });
    gsap.to(".starasset", {
      rotate: 360,
      repeat: -1,
      duration: 10,
      ease: "linear",
    });

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="overflow-x-hidden">
      <div className="h-[10vh] bg-[#F1EEE6]"></div>
      <div className="flex flex-col items-center min-h-screen w-screen max-w-screen bg-[url('/backgrounds/background-paper.png')] bg-contain bg-center bg-[#F1EEE6] pb-20">
        {/* Main Title */}
        <div className="section-reveal relative flex justify-center items-center mt-8 w-full px-4 sm:w-[27.5rem] h-[8.75rem]">
          <h1 className="text-black font-extrabold text-2xl sm:text-4xl z-10 -rotate-3 -top-[1.3rem] sm:-top-[1rem] relative -tracking-[0.08rem] text-center">
            UNION MEMBERS
          </h1>
          <Image
            src="/committee/rectanglecommitteememberback.svg"
            alt="Committee decoration"
            width={150}
            height={150}
            className="absolute left-1/2 -translate-x-1/2 w-[18.5rem] sm:w-full lg:w-full h-auto z-0"
          />
          <Image
            src="/committee/rectanglecommitteememberfront.svg"
            alt="Committee decoration"
            width={150}
            height={150}
            className="absolute left-1/2 -translate-x-1/2 w-[18.5rem] sm:w-full lg:w-full h-auto z-0 top-[0.8rem] sm:-top-[0.05rem]"
          />
          <Image
            src="/committee/paperclip.png"
            alt="Committee decoration"
            width={150}
            height={150}
            className="absolute w-[3.5rem] sm:w-[4.5rem] h-auto z-0 top-[0.8rem] -translate-x-34 sm:left-[7.5rem] sm:top-[0.05rem]"
          />
          <Image
            src="/committee/quoteasset.png"
            alt="Committee decoration"
            width={150}
            height={150}
            className="quoteasset absolute w-[0rem] sm:w-[7rem] h-auto z-0 lg:-translate-x-[42rem] sm:-translate-x-[35rem] -translate-x-[25.5rem]"
          />
          <Image
            src="/committee/bookasset.png"
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
            src="/committee/hodrectangle.svg"
            alt="Committee decoration"
            width={600}
            height={120}
            className="absolute w-[17rem] sm:w-[23rem] lg:w-[23rem] h-auto z-0"
          />
        </div>
        <div className="section-reveal grid grid-cols-2 sm:grid-cols-3 hod-container gap-10 sm:gap-5 mt-6 sm:mt-10 justify-center items-center px-2 sm:px-4">
          <Card
            id="hod-1"
            name="Dave Gideon Tanjung W."
            role="PRESIDENT"
            division="HOD"
            gender="BOY"
            imagesrc="/hod/dave.jpg"
          />
          <Card
            id="hod-2"
            name="Marcellino Indra Wijaya"
            role="VICE PRES"
            division="HOD"
            gender="BOY"
            imagesrc="/hod/acel.jpg"
          />
          <Card
            id="hod-3"
            name="Theressa Natasha Thebez"
            role="SECRETARY"
            division="HOD"
            gender="GIRL"
            imagesrc="/hod/there.jpg"
          />
          <Card
            id="hod-4"
            name="Graciella Chelsea Lu"
            role="SECRETARY"
            division="HOD"
            gender="GIRL"
            imagesrc="/hod/chelsealu.jpg"
          />
          <Card
            id="hod-5"
            name="Priscilia King Chandra"
            role="TREASURER"
            division="HOD"
            gender="GIRL"
            imagesrc="/hod/priscilia.jpg"
          />
          <Card
            id="hod-6"
            name="Chrisensia Abigail Gani"
            role="TREASURER"
            division="HOD"
            gender="GIRL"
            imagesrc="/hod/abbie.jpg"
          />
        </div>

        {/* Internal Division */}
        <div className="section-reveal relative flex justify-center items-center mt-8 mb-2 w-full px-2 sm:px-4 lg:px-0 h-[7rem] sm:h-[8.75rem]">
          <h1 className="text-white font-extrabold text-lg sm:text-2xl z-10 relative top-[1.3rem] sm:top-[2.8rem] rotate-3">
            INTERNAL DIVISION
          </h1>
          <Image
            src="/committee/internalrectangle.svg"
            alt="Committee decoration"
            width={600}
            height={120}
            className="absolute top-[3rem] sm:top-[5rem] w-[15rem] sm:w-[19rem] lg:w-[19rem] h-auto z-0"
          />
          <Image
            src="/committee/yellowstarasset.png"
            alt="Committee decoration"
            width={150}
            height={150}
            className="yellowstarasset absolute w-[6rem] sm:w-[12rem] h-auto z-0 sm:translate-y-[2rem] lg:-translate-x-[46rem] sm:-translate-x-[35rem] translate-x-[-25.5rem] translate-y-[1rem]"
          />
          <Image
            src="/committee/rightcloudasset.png"
            alt="Committee decoration"
            width={150}
            height={150}
            className="rightcloudasset absolute hidden sm:flex lg:flex sm:w-[0rem] lg:w-[14rem] h-auto z-0 lg:translate-x-[39.5rem] translate-y-[4rem] sm:translate-y-[2rem] sm:-translate-x-[-35rem]"
          />
        </div>
        <div className="section-reveal internal-container grid grid-cols-2 sm:grid-cols-3 gap-10 sm:gap-5 mt-6 sm:mt-10 justify-center items-center px-2 sm:px-4">
          <Card
            id="internal-1"
            name="Rinaldy Tanriady Tan"
            role="COORDINATOR"
            division="INTERNAL"
            gender="BOY"
            imagesrc="/internal/rinaldy.jpg"
          />
          <Card
            id="internal-2"
            name="Dave Tristian Nurcahyo"
            role="MEMBER"
            division="INTERNAL"
            gender="BOY"
            imagesrc="/internal/dave.jpg"
          />
          <Card
            id="internal-3"
            name="Amadeus Ian Gunadi"
            role="MEMBER"
            division="INTERNAL"
            gender="BOY"
            imagesrc="/internal/amadeus.jpg"
          />
          <Card
            id="internal-4"
            name="Eileen Cynthia Mark"
            role="MEMBER"
            division="INTERNAL"
            gender="GIRL"
            imagesrc="/internal/eileen.jpg"
          />
          <Card
            id="internal-5"
            name="Angga Dhamika Jaya"
            role="MEMBER"
            division="INTERNAL"
            gender="BOY"
            imagesrc="/internal/angga.jpg"
          />
        </div>

        {/* External Division */}
        <div className="section-reveal relative flex justify-center items-center mt-10 mb-2 w-full px-4 sm:w-[20.75rem] h-[8.75rem]">
          <h1 className="text-white font-extrabold text-xl sm:text-2xl z-10 relative top-[1.2rem] sm:top-[2.7rem] -rotate-2">
            EXTERNAL DIVISION
          </h1>
          <Image
            src="/committee/externalrectangle.svg"
            alt="Committee decoration"
            width={150}
            height={150}
            className="absolute top-[4rem] sm:top-[5rem] w-[15rem] sm:w-[19rem] h-auto z-0"
          />
          <Image
            src="/committee/longpitaasset.png"
            alt="Committee decoration"
            width={150}
            height={150}
            className="pitaasset rotate-70 absolute w-[6rem] lg:translate-y-[1rem] sm:w-[10rem] h-auto z-0 sm:translate-y-[1rem] lg:-translate-x-[50rem] sm:translate-x-[-30rem] translate-x-[-12rem] translate-y-[-1rem]"
          />
        </div>
        <div className="section-reveal grid grid-cols-2 sm:grid-cols-3 external-container gap-10 sm:gap-5 mt-10 justify-center items-center px-4">
          <Card
            id="external-1"
            name="Delvincent Patricio"
            role="COORDINATOR"
            division="EXTERNAL"
            gender="BOY"
            imagesrc="/external/delvincent.jpg"
          />
          <Card
            id="external-2"
            name="Muhammad Altaf Hilmi"
            role="MEMBER"
            division="EXTERNAL"
            gender="BOY"
            imagesrc="/external/altaf.jpg"
          />
          <Card
            id="external-3"
            name="Kristoforus Bertrand W."
            role="MEMBER"
            division="EXTERNAL"
            gender="BOY"
            imagesrc="/external/bb.jpg"
          />
          <Card
            id="external-4"
            name="Nicholas Gerwin Mawardji"
            role="MEMBER"
            division="EXTERNAL"
            gender="BOY"
            imagesrc="/external/niki.jpg"
          />
          <Card
            id="external-5"
            name="Filemon Jose Hagen"
            role="MEMBER"
            division="EXTERNAL"
            gender="BOY"
            imagesrc="/external/jose.jpg"
          />
          <Card
            id="external-6"
            name="Wesley Goeinwan"
            role="MEMBER"
            division="EXTERNAL"
            gender="BOY"
            imagesrc="/external/wesley.jpg"
          />
        </div>

        {/* PDD Design */}
        <div className="section-reveal relative flex justify-center items-center mt-10 mb-2 w-full px-4 sm:w-[20.75rem] h-[8.75rem]">
          <h1 className="text-white font-extrabold text-xl sm:text-2xl z-10 relative top-[1rem] sm:top-[2.3rem]">
            PDD DESIGN
          </h1>
          <Image
            src="/committee/pdddesignrectangle.svg"
            alt="Committee decoration"
            width={150}
            height={150}
            className="absolute top-[4rem] sm:top-[5rem] w-[10rem] sm:w-[12rem] h-auto z-0"
          />
          <Image
            src="/committee/leftcloudasset.png"
            alt="Committee decoration"
            width={150}
            height={150}
            className="leftcloudasset absolute hidden lg:flex lg:w-[10rem] h-auto z-0 translate-y-[2rem] lg:-translate-x-[43.5rem] -translate-x-[27rem]"
          />
          <Image
            src="/committee/redstarasset.png"
            alt="Committee decoration"
            width={150}
            height={150}
            className="redstarasset absolute w-[6rem] sm:w-[12rem] h-auto z-0 lg:translate-x-[44rem] sm:translate-y-[1rem] sm:-translate-x-[-29rem] -translate-x-[-24rem] translate-y-[1rem]"
          />
        </div>
        <div className="section-reveal pdddesign-container grid grid-cols-2 sm:grid-cols-3 gap-10 sm:gap-5 mt-10 justify-center items-center px-4">
          <Card
            id="pdddesign-1"
            name="Rex Kenny Wirasantoso"
            role="COORDINATOR"
            division="PDD DESIGN"
            gender="BOY"
            imagesrc="/pdddesign/rex.jpg"
          />
          <Card
            id="pdddesign-2"
            name="Chelsea Deanna Husin"
            role="MEMBER"
            division="PDD DESIGN"
            gender="GIRL"
            imagesrc="/pdddesign/cz.jpg"
          />
          <Card
            id="pdddesign-3"
            name="Matahari Dea Zakiara"
            role="MEMBER"
            division="PDD DESIGN"
            gender="GIRL"
            imagesrc="/pdddesign/matahari.jpg"
          />
          <Card
            id="pdddesign-4"
            name="Bryan Charlie Lukito S."
            role="MEMBER"
            division="PDD DESIGN"
            gender="BOY"
            imagesrc="/pdddesign/bc.jpg"
          />
          <Card
            id="pdddesign-5"
            name="Jason Christoper"
            role="MEMBER"
            division="PDD DESIGN"
            gender="BOY"
            imagesrc="/pdddesign/jc.jpg"
          />
          <Card
            id="pdddesign-6"
            name="Jason Tio"
            role="MEMBER"
            division="PDD DESIGN"
            gender="BOY"
            imagesrc="/pdddesign/jason.jpg"
          />
          <Card
            id="pdddesign-7"
            name="Clarice Harijanto"
            role="MEMBER"
            division="PDD DESIGN"
            gender="GIRL"
            imagesrc="/pr/clarice.jpg"
          />
        </div>

        {/* PDD Documentation */}
        <div className="section-reveal relative flex justify-center items-center mt-10 mb-2 w-full px-4 sm:w-[20.75rem] h-[8.75rem]">
          <h1 className="text-white font-extrabold text-xl sm:text-2xl z-10 relative top-[1.7rem] sm:top-[2.6rem] rotate-2">
            PDD DOCUMENTATION
          </h1>
          <Image
            src="/committee/pdddocumentationrectangle.svg"
            alt="Committee decoration"
            width={150}
            height={150}
            className="absolute top-[4.3rem] sm:top-[5rem] w-[18rem] sm:w-[37rem] h-auto z-0"
          />
          <Image
            src="/committee/pin.png"
            alt="Committee decoration"
            width={150}
            height={150}
            className="absolute -translate-x-34  sm:left-[7rem] top-[2.4rem] sm:top-[2rem] w-[2rem] sm:w-[3rem] h-auto z-0"
          />
        </div>
        <div className="section-reveal pdddocumentation-container grid grid-cols-2 sm:grid-cols-4 gap-10 sm:gap-5 mt-10 justify-center items-center px-4">
          <Card
            id="pdddoc-1"
            name="Matthew Regan Hadiwidjaja"
            role="COORDINATOR"
            division="PDD DOCUMENTATION"
            gender="BOY"
            imagesrc="/pdddocum/matthewregan.jpg"
          />
          <Card
            id="pdddoc-2"
            name="Sean Lawton"
            role="MEMBER"
            division="PDD DOCUMENTATION"
            gender="BOY"
            imagesrc="/pdddocum/sean.jpg"
          />
          <Card
            id="pdddoc-3"
            name="Flabianos Jason Muljono"
            role="MEMBER"
            division="PDD DOCUMENTATION"
            gender="BOY"
            imagesrc="/pdddocum/flabianos.jpg"
          />
          <Card
            id="pdddoc-4"
            name="Keane Juan Suryanto"
            role="MEMBER"
            division="PDD DOCUMENTATION"
            gender="BOY"
            imagesrc="/pdddocum/keane.jpg"
          />
        </div>
        <div className="section-reveal pdddocumentation-container relative grid grid-cols-2 sm:grid-cols-3 gap-10 sm:gap-5 mt-5 justify-center items-center px-4">
          <Card
            id="pdddoc-5"
            name="Stevanus Ivan Santoso"
            role="MEMBER"
            division="PDD DOCUMENTATION"
            gender="BOY"
            imagesrc="/pdddocum/ivan.jpg"
          />
          <Card
            id="pdddoc-6"
            name="Clarrence Adrianto H."
            role="MEMBER"
            division="PDD DOCUMENTATION"
            gender="BOY"
            imagesrc="/pdddocum/clarrence.jpg"
          />
          <Card
            id="pdddoc-7"
            name="Kenneth Jonathan Halim"
            role="MEMBER"
            division="PDD DOCUMENTATION"
            gender="BOY"
            imagesrc="/pdddocum/kenneth.jpg"
          />
          <Image
            src="/committee/arrowasset.png"
            alt="Committee decoration"
            width={150}
            height={150}
            className="arrowasset absolute w-[0rem] sm:w-[0rem] lg:w-[16rem] h-auto z-0 lg:-translate-y-[10rem] lg:-translate-x-[31rem] sm:-translate-x-[25rem] sm:-translate-y-[6rem]"
          />
          <Image
            src="/committee/rightcloudasset.png"
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
            src="/committee/publicrelationrectangle.svg"
            alt="Committee decoration"
            width={150}
            height={150}
            className="absolute top-[4rem] sm:top-[5rem] w-[14rem] sm:w-[18rem] h-auto z-0"
          />
          <Image
            src="/committee/catasset.png"
            alt="Committee decoration"
            width={150}
            height={150}
            className="catasset absolute w-[6rem] sm:w-[10rem] h-auto z-0 sm:translate-y-[2rem] lg:-translate-x-[40rem] sm:translate-x-[-30rem] translate-x-[-24rem]"
          />
        </div>
        <div className="section-reveal publicrelation-container grid grid-cols-2 sm:grid-cols-3 gap-10 sm:gap-5 mt-10 justify-center items-center px-4">
          <Card
            id="pr-1"
            name="Felicia Joshlyn Purnomo"
            role="COORDINATOR"
            division="PUBLIC RELATION"
            gender="GIRL"
            imagesrc="/pr/feli.jpg"
          />
          <Card
            id="pr-2"
            name="Shatrya Christiano Chandra"
            role="MEMBER"
            division="PUBLIC RELATION"
            gender="BOY"
            imagesrc="/pr/shatrya.jpg"
          />
          <Card
            id="pr-3"
            name="Dylan Patrick Willyam"
            role="MEMBER"
            division="PUBLIC RELATION"
            gender="BOY"
            imagesrc="/pr/dylan.jpg"
          />
        </div>

        {/* Social Activity */}
        <div className="section-reveal relative flex justify-center items-center mt-10 mb-2 w-full px-4 sm:w-[20.75rem] h-[8.75rem]">
          <h1 className="text-white font-extrabold text-xl sm:text-2xl z-10 relative top-[1rem] sm:top-[2.3rem]">
            SOCIAL ACTIVITY
          </h1>
          <Image
            src="/committee/socialactivityrectangle.svg"
            alt="Committee decoration"
            width={150}
            height={150}
            className="absolute top-[4rem] sm:top-[5rem] w-[13rem] sm:w-[17rem] h-auto z-0"
          />
          <Image
            src="/committee/bigleftcloudasset.png"
            alt="Committee decoration"
            width={150}
            height={150}
            className="bigleftcloudasset absolute w-[0rem] lg:w-[18rem] sm:w-[0rem] h-auto z-0 -translate-y-[2rem] lg:-translate-x-[40rem] sm:-translate-x-[35rem] sm:translate-y-[1rem]"
          />
          <Image
            src="/committee/starasset.png"
            alt="Committee decoration"
            width={150}
            height={150}
            className="starasset absolute w-[6rem] sm:w-[10rem] h-auto z-0 lg:translate-x-[38rem] sm:translate-y-[1rem] sm:-translate-x-[-30rem] -translate-x-[-24rem] translate-y-[-4rem]"
          />
        </div>
        <div className="section-reveal socialactivity-container grid grid-cols-2 sm:grid-cols-4 gap-10 sm:gap-5 mt-10 justify-center items-center px-4">
          <Card
            id="sa-1"
            name="Aaron Asa Soelistiono"
            role="COORDINATOR"
            division="SOCIAL ACTIVITY"
            gender="BOY"
            imagesrc="/sa/aaron.jpg"
          />
          <Card
            id="sa-2"
            name="Hans Vere Liem"
            role="MEMBER"
            division="SOCIAL ACTIVITY"
            gender="BOY"
            imagesrc="/sa/hanz.jpg"
          />
          <Card
            id="sa-3"
            name="Muhammad Dzaky Nabil A."
            role="MEMBER"
            division="SOCIAL ACTIVITY"
            gender="BOY"
            imagesrc="/sa/dzaky.jpg"
          />
          <Card
            id="sa-4"
            name="Jeferey Teddy Santosa"
            role="MEMBER"
            division="SOCIAL ACTIVITY"
            gender="BOY"
            imagesrc="/sa/jeferey.jpg"
          />
        </div>

        {/* Technology */}
        <div className="section-reveal relative flex justify-center items-center mt-10 mb-2 w-full px-4 sm:w-[20.75rem] h-[8.75rem]">
          <h1 className="text-white font-extrabold text-xl sm:text-2xl z-10 relative top-[1rem] sm:top-[2.5rem] -rotate-1">
            TECHNOLOGY
          </h1>
          <Image
            src="/committee/technologyrectangle.svg"
            alt="Committee decoration"
            width={150}
            height={150}
            className="absolute top-[4rem] sm:top-[5rem] w-[12rem] sm:w-[15.5rem] h-auto z-0"
          />
          <Image
            src="/committee/tapeasset.png"
            alt="Committee decoration"
            width={150}
            height={150}
            className="tapeasset absolute w-[9rem] sm:w-[18rem] h-auto z-0 lg:-translate-y-[4rem] lg:-translate-x-[48rem] sm:translate-x-[-40rem] translate-x-[-27rem] translate-y-[-2rem]"
          />
        </div>
        <div className="section-reveal grid grid-cols-2 sm:grid-cols-3 technology-container gap-10 sm:gap-5 mt-10 justify-center items-center px-4">
          <Card
            id="tech-1"
            name="Valentino Manuel Gunawan"
            role="COORDINATOR"
            division="TECHNOLOGY"
            gender="BOY"
            imagesrc="/tech/valen.jpg"
          />
          <Card
            id="tech-2"
            name="Bryan Fernando Dinata"
            role="MEMBER"
            division="TECHNOLOGY"
            gender="BOY"
            imagesrc="/tech/bryan.jpg"
          />
          <Card
            id="tech-3"
            name="Obie Zuriel"
            role="MEMBER"
            division="TECHNOLOGY"
            gender="BOY"
            imagesrc="/tech/obie.jpg"
          />
          <Card
            id="tech-4"
            name="Felix Richardo"
            role="MEMBER"
            division="TECHNOLOGY"
            gender="BOY"
            imagesrc="/tech/felix.jpg"
          />
          <Card
            id="tech-5"
            name="Nicholas Leroy Kurniawan"
            role="MEMBER"
            division="TECHNOLOGY"
            gender="BOY"
            imagesrc="/tech/nicho.jpg"
          />
        </div>
      </div>
    </div>
  );
}
