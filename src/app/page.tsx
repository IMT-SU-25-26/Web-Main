// import AuthButton from "@/components/AuthButton";
import Image from "next/image";
import "@/styles/home.css";
import Link from "next/link";
import HomeServicesCard from "@/components/HomeServicesCard";
export default function Home() {
  return (
    // <div className="flex items-center justify-center min-h-screen">
    //   <AuthButton />
    // </div>
    <>
      <div className="h-[10vh] bg-[#F1EEE6]"></div>
      <div className="overflow-hidden flex flex-col items-center min-h-screen w-screen max-w-screen bg-[url('/backgrounds/background-paper.png')] bg-contain bg-center bg-[#F1EEE6]">
        <div className="relative z-10 w-fit h-full flex items-center justify-center">
          <Image
            className="red-bubble z-[8] top-0"
            src={"/home/su-imt-home-red-bubble.svg"}
            draggable="false"
            width={924}
            height={560}
            alt="red-bubble"
          ></Image>
          <Image
            className="dragon absolute z-[9] w-[12rem] h-auto bottom-[4rem] -left-[12rem]"
            src={"/home/dragon.svg"}
            draggable="false"
            width={628}
            height={380}
            alt="mid-bubble"
          ></Image>
          <Image
            className="among-us absolute z-[9] w-[8rem] h-auto bottom-[4rem] -right-[12rem]"
            src={"/home/among-us.svg"}
            draggable="false"
            width={628}
            height={380}
            alt="mid-bubble"
          ></Image>
          <Image
            className="yellow-bubble absolute z-[9] top-[6rem] left-[5rem]"
            src={"/home/su-imt-home-yellow-bubble.svg"}
            draggable="false"
            width={628}
            height={380}
            alt="mid-bubble"
          ></Image>
          <Image
            className="front-bubble absolute z-[10] top-[7.5rem] left-[8rem]"
            src={"/home/su-imt-home-front-buble.svg"}
            draggable="false"
            width={547}
            height={334}
            alt="front-bubble"
          ></Image>
          <Image
            className="welcome absolute z-[10] top-[8.5rem] left-[14rem]"
            src={"/home/welcome.svg"}
            draggable="false"
            width={324.6}
            height={193.7}
            alt="su-welcome"
          ></Image>
          <Image
            className="demon-cat absolute z-[10] top-[12.5rem] left-[9.5rem]"
            src={"/home/demon-cat.png"}
            draggable="false"
            width={71}
            height={67}
            alt="demon-cat"
          ></Image>
          <Image
            className="stars-left absolute z-[10] top-[16.5rem] left-[11rem]"
            src={"/home/stars.svg"}
            draggable="false"
            width={45}
            height={37}
            alt="stars-left"
          ></Image>
          <Image
            className="stars-right absolute z-[10] top-[10.5rem] right-[20rem]"
            src={"/home/stars.svg"}
            draggable="false"
            width={45}
            height={37}
            alt="stars-right"
          ></Image>
          <Image
            className="to-text absolute z-[10] top-[15rem] left-[40.75%]"
            src={"/home/to.svg"}
            draggable="false"
            width={36.8}
            height={72.9}
            alt="to"
          ></Image>
          <Image
            className="su-imt-text absolute z-[10] top-[15.5rem] right-[19rem]"
            src={"/home/su-imt-text.svg"}
            draggable="false"
            width={426.5}
            height={126}
            alt="stars-right"
          ></Image>

          <div className="title-background absolute -bottom-14 p-12 z-10 w-fit h-fit flex items-center justify-center bg-[url('/home/title-background.svg')] bg-contain bg-center bg-no-repeat">
            <h1 className="title-text text-2xl text-black rotate-[1.25deg] mb-2">
              Student Union Informatics - Your Creative Tech Community
            </h1>
          </div>
        </div>
        <div className="container-student-union mt-15 relative z-10 min-h-screen min-w-screen flex flex-col gap-8 items-center justify-center">
          <Image
            className="sobekan absolute z-[1] w-full h-full bottom-0 left-0"
            src={"/home/pink-big-fracture.svg"}
            draggable="false"
            width={1920}
            height={1080}
            alt="sobekan"
          ></Image>
          <h1 className="what-is-su-imt-text mt-[-10%] relative z-10 text-6xl font-bold text-white font-family-impact">WHAT IS SU IMT</h1>
          <p className="su-imt-description relative z-10 text-xl text-white font-bold max-w-2xl text-center">
            Student Union Information and Multimedia Technology is a student-led organization that serves as a platform for students of the Informatics study program to grow professionally, socially, and academically. SU IMT UC organizes various events, workshops, and initiatives to enhance student engagement, develop leadership skills, and support innovation in technology.
          </p>
          <Link href="/" className="learn-more-button relative font-family-impact z-10 text-4xl bg-[#0E54B2] p-6 px-10 rounded-2xl text-white font-bold">
            Learn More
          </Link>
          <Image
            className="absolute z-[2] w-1/5 top-[27.5%] left-0"
            src={"/home/circle-stick.svg"}
            draggable="false"
            width={422}
            height={376}
            alt="circle-stick-left"
          ></Image>
          <Image
            className="absolute z-[3] w-1/5 top-[27.5%] left-0"
            src={"/home/laptop-on-stick.svg"}
            draggable="false"
            width={422}
            height={376}
            alt="circle-stick-left"
          ></Image>
          <Image
            className="absolute z-[2] w-[22.5%] top-[42.5%] left-0"
            src={"/home/book-laptop.png"}
            draggable="false"
            width={422}
            height={376}
            alt="book-laptop"
          ></Image>

          <Image
            className="absolute z-[2] w-1/5 top-[27.5%] right-0"
            src={"/home/camera.png"}
            draggable="false"
            width={422}
            height={376}
            alt="camera"
          ></Image>
          <Image
            className="absolute z-[1] w-1/5 top-[27.5%] right-0"
            src={"/home/circle-background-right.svg"}
            draggable="false"
            width={422}
            height={376}
            alt="circle-foreground"
          ></Image>
          <Image
            className="absolute z-[1] w-1/5 top-[23.5%] -right-4"
            src={"/home/circle-foreground-right.svg"}
            draggable="false"
            width={422}
            height={376}
            alt="circle-background"
          ></Image>

          <Image
            className="sobekan-biru-kiri absolute z-0 w-[32.5%] top-[-22.5%] -left-[5%]"
            src={"/home/sobekan-bottom-left.png"}
            draggable="false"
            width={422}
            height={376}
            alt="sobekan-left"
          ></Image>
          <Image
            className="sobekan-biru-kanan absolute rotate-y-180 z-0 w-[32.5%] top-[-22.5%] -right-[5%]"
            src={"/home/sobekan-bottom-left.png"}
            draggable="false"
            width={422}
            height={376}
            alt="sobekan-right"
          ></Image>
        </div>

        {/* Our values section */}
        <div className="competition-wrapper relative w-screen flex flex-col justify-start items-center pb-[15%]">
          <h1 className="competition-text font-family-gill-condensed-bold font-extrabold text-6xl">COMPETITIONS</h1>
          <div className="competition-right-left-container mt-14 w-full h-full flex gap-[10rem] justify-center items-center">
            <div className="w-full h-full relative z-10 competition-left-container">
              <Image className="w-[85%] h-auto" src={"/home/compete-bg.svg"} width={500} height={500} alt="background-compete"></Image>
              <Image
                className="absolute z-10 w-[100%] h-auto top-0 left-5"
                src={"/home/compete.svg"}
                draggable="false"
                width={500}
                height={500}
                alt="competition-left"
              ></Image>
              <div className="join-now-text-container absolute w-[350px] h-[120px] bottom-[-5%] left-[47.5%] bg-[#0E54B2] p-4 px-8 rounded-2xl z-[2]">
                <div className="bg-[#ED427C] flex items-center justify-center w-full h-full absolute left-[5%] top-[-10%] rounded-2xl z-[-1]">
                  <h1 className="join-now-text font-family-impact text-6xl text-center text-white">Join Now</h1>
                </div>
              </div>
            </div>
            <div className="competition-right-container w-full h-full">
              <div className="competition-right-background relative rotate-[-2.5deg] w-[40rem] h-[27.5rem] bg-white flex flex-col gap-4 p-4">
                <Image className="competition-right-handle absolute top-[-25%] right-[40%] w-[7.5rem] rotate-90" src={"/home/handle-card.png"} width={500} height={500} alt="handle-card"></Image>
                <Image className="competition-star absolute top-[-15%] right-[-8%] w-[10rem]" src={"/home/star-card.png"} width={500} height={500} alt="star-card"></Image>
                <div className="image-container bg-gray-300 w-full h-1/2"></div>
                <h1 className="competition-title-text font-family-impact text-4xl">HACKATHON 2025</h1>
                <p className="competition-description-text text-xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, omnis?</p>
                <p className="competition-member-text text-xl text-end">Team: 3-4 members</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative w-screen pb-[10%] flex flex-col justify-start items-center overflow-hidden">
           <h1 className="explore-text font-family-gill-condensed-bold font-extrabold text-6xl">EXPLORE OUR</h1>
           <h1 className="explore-text font-family-gill-condensed-bold font-extrabold text-6xl">COMMUNITY SERVICES</h1>
           <div className="home-service-card-container relative flex mt-14">
            <HomeServicesCard className="home-service-card-left absolute left-[25%] top-[3rem] max-h-[18rem]" title="Title" type="Achievements" description="Description for Service 1" color="#0555AB" opacity="75%"/>
            <HomeServicesCard className="home-service-card-center relative z-10" title="Title" type="Achievements" description="Description for Service 1" color="#0555AB" opacity="100%" />
            <HomeServicesCard className="home-service-card-right absolute right-[20%] top-[3rem] max-h-[18rem]" title="Title" type="Achievements" description="Description for Service 1" color="#0555AB" opacity="75%"/>
           </div>
           <div className="relative flex justify-center items-center w-full h-full mt-[10rem]">
           <div className="explore-button absolute w-[350px] h-[120px] bg-[#0E54B2] p-4 px-8 rounded-2xl z-[2]">
                <div className="bg-[#ED427C] flex items-center justify-center w-full h-full absolute left-[5%] top-[-10%] rounded-2xl z-[-1]">
                  <h1 className="explore-button-text font-family-impact text-6xl text-center text-white">EXPLORE</h1>
                </div>
              </div>
            </div>
        </div>

        <div className="h-[10vh] w-screen bg-[#E44843]"></div>
      </div>
    </>
  );
}
