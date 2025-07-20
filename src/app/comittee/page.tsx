import Card from "@/components/ComitteeCard";
import Image from "next/image";
import styles from "./comittee.module.css";

export default function Home() {
  return (
    <>
      <div className="h-[10vh] bg-[#F1EEE6]"></div>
      <div className="overflow-x-hidden flex flex-col items-center min-h-screen w-screen max-w-screen bg-[url('/backgrounds/background-paper.png')] bg-contain bg-center bg-[#F1EEE6] pb-20">
        {/* Main Title */}
        <div className="relative flex justify-center items-center mt-8 w-full px-4 sm:w-[27.5rem] h-[8.75rem]">
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
        </div>

        {/* HOD Section */}
        <div className="relative flex justify-center items-center mb-2 w-full px-2 sm:px-4 lg:px-0 h-[7rem] sm:h-[8.75rem]">
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
        <div className={`grid grid-cols-1 sm:grid-cols-3 ${styles.lg2} gap-10 sm:gap-5 mt-6 sm:mt-10 justify-center items-center px-2 sm:px-4`}>
          <Card name="Nama Lengkap" role="PRESIDENT" division="HOD" gender="BOY" />
          <Card name="Nama Lengkap" role="VICE PRES" division="HOD" gender="BOY" />
          <Card name="Nama Lengkap" role="SECRETARY" division="HOD" gender="GIRL" />
          <Card name="Nama Lengkap" role="SECRETARY" division="HOD" gender="GIRL" />
          <Card name="Nama Lengkap" role="TREASURER" division="HOD" gender="GIRL" />
          <Card name="Nama Lengkap" role="TREASURER" division="HOD" gender="GIRL" />
        </div>

        {/* Internal Division */}
        <div className="relative flex justify-center items-center mt-8 mb-2 w-full px-2 sm:px-4 lg:px-0 h-[7rem] sm:h-[8.75rem]">
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
        </div>
        <div className={`grid grid-cols-1 sm:grid-cols-3 ${styles.lg21} gap-10 sm:gap-5 mt-6 sm:mt-10 justify-center items-center px-2 sm:px-4`}>
          <Card name="Nama Lengkap" role="PRESIDENT" division="INTERNAL" gender="BOY" />
          <Card name="Nama Lengkap" role="MEMBER" division="INTERNAL" gender="BOY" />
          <Card name="Nama Lengkap" role="MEMBER" division="INTERNAL" gender="BOY" />
          <Card name="Nama Lengkap" role="MEMBER" division="INTERNAL" gender="GIRL" />
          <Card name="Nama Lengkap" role="MEMBER" division="INTERNAL" gender="BOY" />
        </div>

        {/* External Division */}
        <div className="relative flex justify-center items-center mt-10 mb-2 w-full px-4 sm:w-[20.75rem] h-[8.75rem]">
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
        </div>
        <div className={`grid grid-cols-1 sm:grid-cols-3 ${styles.lg2} gap-10 sm:gap-5 mt-10 justify-center items-center px-4`}>
          <Card name="Nama Lengkap" role="PRESIDENT" division="EXTERNAL" gender="BOY" />
          <Card name="Nama Lengkap" role="MEMBER" division="EXTERNAL" gender="BOY" />
          <Card name="Nama Lengkap" role="MEMBER" division="EXTERNAL" gender="BOY" />
          <Card name="Nama Lengkap" role="MEMBER" division="EXTERNAL" gender="BOY" />
          <Card name="Nama Lengkap" role="MEMBER" division="EXTERNAL" gender="BOY" />
          <Card name="Nama Lengkap" role="MEMBER" division="EXTERNAL" gender="BOY" />
        </div>

        {/* PDD Design */}
        <div className="relative flex justify-center items-center mt-10 mb-2 w-full px-4 sm:w-[20.75rem] h-[8.75rem]">
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
        </div>
        <div className={`grid grid-cols-1 sm:grid-cols-3 ${styles.lg2} gap-10 sm:gap-5 mt-10 justify-center items-center px-4`}>
          <Card name="Nama Lengkap" role="PRESIDENT" division="PDD DESIGN" gender="BOY" />
          <Card name="Nama Lengkap" role="MEMBER" division="PDD DESIGN" gender="GIRL" />
          <Card name="Nama Lengkap" role="MEMBER" division="PDD DESIGN" gender="GIRL" />
          <Card name="Nama Lengkap" role="MEMBER" division="PDD DESIGN" gender="BOY" />
          <Card name="Nama Lengkap" role="MEMBER" division="PDD DESIGN" gender="BOY" />
          <Card name="Nama Lengkap" role="MEMBER" division="PDD DESIGN" gender="BOY" />
        </div>

        {/* PDD Documentation */}
        <div className="relative flex justify-center items-center mt-10 mb-2 w-full px-4 sm:w-[20.75rem] h-[8.75rem]">
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
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-10 sm:gap-5 mt-10 justify-center items-center px-4">
          <Card name="Nama Lengkap" role="PRESIDENT" division="PDD DOCUMENTATION" gender="BOY" />
          <Card name="Nama Lengkap" role="MEMBER" division="PDD DOCUMENTATION" gender="BOY" />
          <Card name="Nama Lengkap" role="MEMBER" division="PDD DOCUMENTATION" gender="BOY" />
          <Card name="Nama Lengkap" role="MEMBER" division="PDD DOCUMENTATION" gender="BOY" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-5 mt-10 justify-center items-center px-4">
          <Card name="Nama Lengkap" role="MEMBER" division="PDD DOCUMENTATION" gender="BOY" />
          <Card name="Nama Lengkap" role="MEMBER" division="PDD DOCUMENTATION" gender="BOY" />
          <Card name="Nama Lengkap" role="MEMBER" division="PDD DOCUMENTATION" gender="BOY" />
        </div>

        {/* Public Relation */}
        <div className="relative flex justify-center items-center mt-10 mb-2 w-full px-4 sm:w-[20.75rem] h-[8.75rem]">
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
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-5 mt-10 justify-center items-center px-4">
          <Card name="Nama Lengkap" role="PRESIDENT" division="PUBLIC RELATION" gender="GIRL" />
          <Card name="Nama Lengkap" role="MEMBER" division="PUBLIC RELATION" gender="BOY" />
          <Card name="Nama Lengkap" role="MEMBER" division="PUBLIC RELATION" gender="BOY" />
        </div>

        {/* Social Activity */}
        <div className="relative flex justify-center items-center mt-10 mb-2 w-full px-4 sm:w-[20.75rem] h-[8.75rem]">
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
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-10 sm:gap-5 mt-10 justify-center items-center px-4">
          <Card name="Nama Lengkap" role="PRESIDENT" division="SOCIAL ACTIVITY" gender="BOY" />
          <Card name="Nama Lengkap" role="MEMBER" division="SOCIAL ACTIVITY" gender="BOY" />
          <Card name="Nama Lengkap" role="MEMBER" division="SOCIAL ACTIVITY" gender="BOY" />
          <Card name="Nama Lengkap" role="MEMBER" division="SOCIAL ACTIVITY" gender="BOY" />
        </div>

        {/* Technology */}
        <div className="relative flex justify-center items-center mt-10 mb-2 w-full px-4 sm:w-[20.75rem] h-[8.75rem]">
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
        </div>
        <div className={`grid grid-cols-1 sm:grid-cols-3 ${styles.lg2} gap-10 sm:gap-5 mt-10 justify-center items-center px-4`}>
          <Card name="Nama Lengkap" role="PRESIDENT" division="TECHNOLOGY" gender="BOY" />
          <Card name="Nama Lengkap" role="MEMBER" division="TECHNOLOGY" gender="BOY" />
          <Card name="Nama Lengkap" role="MEMBER" division="TECHNOLOGY" gender="BOY" />
          <Card name="Nama Lengkap" role="MEMBER" division="TECHNOLOGY" gender="BOY" />
          <Card name="Nama Lengkap" role="MEMBER" division="TECHNOLOGY" gender="BOY" />
          <Card name="Nama Lengkap" role="MEMBER" division="TECHNOLOGY" gender="GIRL" />
        </div>
      </div>
    </>
  );
}