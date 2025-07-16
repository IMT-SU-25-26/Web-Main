// import AuthButton from "@/components/AuthButton";
import Image from "next/image";
import "@/styles/home.css";
export default function Home() {
  return (
    // <div className="flex items-center justify-center min-h-screen">
    //   <AuthButton />
    // </div>
    <>
    <div className="h-[10vh] bg-[#F1EEE6]"></div>
      <div className="overflow-hidden flex flex-col items-center min-h-screen w-screen max-w-screen bg-[url('/backgrounds/background-paper.png')] bg-cover bg-center bg-[#F1EEE6]">
          <div className="relative z-10 w-fit h-full flex items-center justify-center">
            <Image className="red-bubble z-[8] top-0" src={"/home/su-imt-home-red-bubble.svg"} draggable="false" width={924} height={560} alt="red-bubble"></Image>
            <Image className="yellow-bubble absolute z-[9] top-[6rem] left-[5rem]" src={"/home/su-imt-home-yellow-bubble.svg"} draggable="false" width={628} height={380} alt="mid-bubble"></Image>
            <Image className="front-bubble absolute z-[10] top-[7.5rem] left-[8rem]" src={"/home/su-imt-home-front-buble.svg"} draggable="false" width={547} height={334} alt="front-bubble"></Image>
            <Image className="welcome absolute z-[10] top-[8.5rem] left-[14rem]" src={"/home/welcome.svg"} draggable="false" width={324.6} height={193.7} alt="su-welcome"></Image>
            <Image className="demon-cat absolute z-[10] top-[12.5rem] left-[9.5rem]" src={"/home/demon-cat.png"} draggable="false" width={71} height={67} alt="demon-cat"></Image>
            <Image className="stars-left absolute z-[10] top-[16.5rem] left-[11rem]" src={"/home/stars.svg"} draggable="false" width={45} height={37} alt="stars-left"></Image>
            <Image className="stars-right absolute z-[10] top-[10.5rem] right-[20rem]" src={"/home/stars.svg"} draggable="false" width={45} height={37} alt="stars-right"></Image>
            <Image className="to-text absolute z-[10] top-[15rem] left-[40.75%]" src={"/home/to.svg"} draggable="false" width={36.8} height={72.9} alt="to"></Image>
            <Image className="su-imt-text absolute z-[10] top-[15.5rem] right-[19rem]" src={"/home/su-imt-text.svg"} draggable="false" width={426.5} height={126} alt="stars-right"></Image>
            
            <div className="title-background absolute -bottom-14 p-12 z-10 w-fit h-fit flex items-center justify-center bg-[url('/home/title-background.svg')] bg-contain bg-center bg-no-repeat">
              <h1 className="title-text text-2xl text-black rotate-[1.25deg] mb-2">Student Union Informatics - Your Creative Tech Community</h1>
           </div>
          </div>
          
          <div className="about-us-container mt-20 flex gap-44 justify-center items-center w-screen">
            <div className="relative card-left bg-[#FFFFFF] min-w-[560px] min-h-[330px] rounded-3xl shadow-2xl p-12 flex flex-col items-start justify-start gap-4">
              <h1 className="about-us-title-text text-4xl text-black font-bold">ABOUT US</h1>
              <p className="about-us-description-text max-w-[560px] text-black">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic adipisci praesentium aperiam ab tempora quis recusandae, laborum assumenda delectus! Velit ad, ipsum odit cumque dicta veniam voluptatum dolorum temporibus nesciunt eligendi accusamus fugiat.</p>
              <Image className="handle-card absolute z-[9] top-[4rem] -left-[7rem]" src={"/home/handle-card.png"} draggable="false" width={162.36} height={120} alt="mid-bubble"></Image>
              <Image className="star-card absolute z-[9] -bottom-[2.5rem] -right-[4rem]" src={"/home/star-card.png"} draggable="false" width={152.33} height={140.12} alt="mid-bubble"></Image>
            </div>
            <div className="background-card-right rotate-12 relative min-w-[504px] min-h-[309] bg-[#EAD6B1]">
              <div className="card-right absolute flex flex-col items-center justify-center top-8 right-8 min-w-[504px] min-h-[309] bg-[#FFFFFF] gap-4">
                  <Image className="pin absolute -top-[4.27rem] -right-[5rem] w-[12.5rem] h-auto rotate-[-7deg]" src={"/home/pin.png"} draggable="false" width={113.5} height={193.65} alt="stars-right"></Image>
                  <Image className="triangle absolute -top-[0.15rem] -right-[0.2rem] w-[1.6rem] rotate-[-7deg] h-auto" src={"/home/triangle.svg"} draggable="false" width={113.5} height={193.65} alt="stars-right"></Image>
                <div className="about-us-image-container w-[447.16px] h-[208.59px]">
                  <Image className="w-full h-full object-cover object-center" src={"/home/cat-placeholder-image.gif"} draggable="false" width={426.5} height={126} alt="stars-right"></Image>
                </div>
                <h1 className="photo-title px-8 text-start w-full text-xl">SU IMT Team</h1>
              </div>
            </div>
          </div>

          {/* Our values section */}
          <div className="relative w-screen min-h-screen flex flex-col justify-center items-center">
            <h1 className="our-values-text text-4xl text-black font-bold">OUR VALUES</h1>
            <Image className="step mt-4" src={"/home/step.svg"} draggable="false" width={277.89} height={113} alt="red-bubble"></Image>
            
            <div className="cards-container mt-20 grid grid-cols-4 gap-20">
                {/* card 1 */}
                <div className="strive-card relative bg-[#F7A7C2] rounded-2xl w-[292px] h-[250px]">
                  <div className="inner-card p-4 absolute w-full h-full bg-[#EB427B] rounded-2xl rotate-[-6deg] top-5 left-3 flex flex-col gap-1">
                      <div className="circle-card w-[50px] h-[50px] rounded-full bg-white flex items-center justify-center">
                        <h1 className="text-[#EB427B] font-bold text-2xl">S</h1>
                      </div>
                      <h1 className="mt-4 card-title text-3xl text-white font-bold">STRIVE</h1>
                      <h1 className="card-description text-xl text-white font-normal">Lorem ipsum</h1>
                  </div>
                  <Image className="yellow-pin absolute -top-[3rem] -right-[1rem] w-[4rem] h-auto" width={500} height={500} src="/home/pin-yellow.png" alt="pin-yellow"></Image>
                </div>
                <div className="take-responsibility-card relative mt-4 bg-[#ECD682] rotate-[2.76deg] rounded-2xl w-[292px] h-[250px]">
                  <div className="inner-card p-4 absolute w-full h-full bg-[#F5C309] -top-[1.5rem] -left-[1rem] rounded-2xl flex flex-col gap-1">
                      <div className="circle-card w-[50px] h-[50px] rounded-full bg-white flex items-center justify-center">
                        <h1 className="text-[#F5C309] font-bold text-2xl">T</h1>
                      </div>
                      <h1 className="mt-4 card-title text-3xl text-white font-bold">TAKE</h1>
                      <h1 className="card-title text-3xl text-white font-bold">RESPONSIBILITY</h1>
                      <h1 className="card-description text-xl text-white">Lorem ipsum</h1>
                  </div>
                </div>
                <div className="explore-card relative mt-4 bg-[#AED8AD] rotate-[2.27deg] rounded-2xl w-[292px] h-[250px]">
                  <div className="inner-card p-4 absolute w-full h-full bg-[#37951D] rounded-2xl rotate-[-2.27deg] -left-[0.2rem] -top-[1rem] flex flex-col gap-1">
                      <div className="circle-card w-[50px] h-[50px] rounded-full bg-white flex items-center justify-center">
                        <h1 className="text-[#37951D] font-bold text-2xl">E</h1>
                      </div>
                      <h1 className="mt-4 card-title text-3xl text-white font-bold">EXPLORE</h1>
                      <h1 className="card-description text-xl text-white">Lorem ipsum</h1>
                  </div>
                  <Image className="tape absolute top-[-2rem] right-[25%] w-[9.5rem] h-auto" width={500} height={500} src="/home/tape.png" alt="tape"></Image>
                </div>
                <div className="pioneer-card mt-4 relative bg-[#6CAAFF] rotate-[-13.06deg] rounded-2xl w-[292px] h-[250px]">
                  <div className="inner-card p-4 absolute w-full h-full bg-[#0E53B2] rounded-2xl rotate-[5.61deg] -left-[0.25rem] -top-[0.25rem] flex flex-col gap-1">
                      <div className="circle-card w-[50px] h-[50px] rounded-full bg-white flex items-center justify-center">
                        <h1 className="text-[#0E53B2] font-bold text-2xl">P</h1>
                      </div>
                      <h1 className="mt-4 card-title text-3xl text-white font-bold">PIONEER</h1>
                      <h1 className="card-description text-xl text-white">Lorem ipsum</h1>
                  </div>
                  <Image className="clipper absolute -top-[5rem] -right-[4rem] w-[8.5rem] h-auto" width={500} height={500} src="/home/clipper.png" alt="tape"></Image>
                </div>
            </div>
            <Image className="absolute w-[20%] bottom-0 left-0" src={"/home/sobekan-bottom-left.png"} draggable="false" width={422} height={376} alt="sobekan-left"></Image>
            <Image className="absolute bottom-0 left-0" src={"/home/heart.png"} draggable="false" width={200} height={200} alt="heart"></Image>
            <Image className="absolute w-[20%] bottom-0 right-0" src={"/home/sobekan-bottom-right.png"} draggable="false" width={629} height={400} alt="sobekan-right"></Image>
            <Image className="absolute bottom-0 right-0" src={"/home/laptop.png"} draggable="false" width={313.12} height={238.42} alt="laptop"></Image>
            <Image className="absolute bottom-20 right-22" src={"/home/laptop-spark.png"} draggable="false" width={147} height={185} alt="laptop-spark"></Image>
          </div>
      </div>
    </>
  );
}
