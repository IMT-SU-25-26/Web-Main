import React from "react";
import Image from "next/image";
import FrameImage from "@/components/achievement/FrameImage";
import { getCompetitionById } from "@/lib/service/competition";
import Button from "@/components/Button";
import NotFound from "./not-found";
import Link from "next/link";

export async function generateMetadata(props: {
  params: Promise<{ competitionId: string }>;
}) {
  const params = await props.params;
  const competitionId = params.competitionId;
  const competition = await getCompetitionById(competitionId);

  if (!competition) {
    return {
      title: "Competition Not Found",
    };
  }

  return {
    title: competition.name,
  };
}

const ActivityDetails = async (props: {
  params: Promise<{ competitionId: string }>;
}) => {
  const params = await props.params;
  const competitionId = params.competitionId;
  const competition = await getCompetitionById(competitionId);

  if (!competition) {
    return <NotFound />;
  }

  const title = competition.name;
  const urlImg = competition.imageUrl;
  const description = competition.description;
  const slicedDescription = description.split("\n");

  return (
    <>
      <div className="h-[10vh] bg-[#F1EEE6]"></div>
      <div className="overflow-hidden relative flex flex-col items-center justify-center min-h-[calc(100dvh-10vh)] w-full bg-[url('/backgrounds/background-paper.png')] bg-cover bg-center bg-[#F1EEE6] m-0 p-0">
        {/* Decorative Image */}
        <div className="select-none">
          <Image
            className="select-none absolute -right-3 -top-7 md:-top-15 w-[100px] md:w-[180px] xl:w-[300px] lg:w-[230px]"
            src="/activities/activityDetails/top-right.webp"
            alt=""
            width={300}
            height={327}
            draggable={false}
          ></Image>

          <Image
            className="absolute right-0 bottom-0 w-[200px] md:w-[300px] xl:w-[500px] lg:w-[370px]"
            src="/activities/activityDetails/bottom-right.svg"
            alt=""
            width={500}
            height={251}
            draggable={false}
          ></Image>

          <Image
            className="hidden xl:block absolute right-0 bottom-10 w-[200px] md:w-[300px] lg:w-[370px] xl:w-[300px]"
            src="/activities/activityDetails/bottom-right2.webp"
            alt=""
            width={500}
            height={251}
            draggable={false}
          ></Image>

          <Image
            className="hidden md:block absolute -left-5 -top-23 w-[300px] lg:w-[250px] xl:w-[250px] "
            src="/activities/activityDetails/top-left.svg"
            alt=""
            width={450}
            height={287}
            draggable={false}
          ></Image>

          <Image
            className="hidden lg:block absolute left-50 top-0 w-[300px] lg:w-[250px] xl:w-[150px] "
            src="/activities/activityDetails/top-left2.webp"
            alt=""
            width={450}
            height={287}
            draggable={false}
          ></Image>

          <Image
            className=" absolute -left-50 md:-left-0 -bottom-5 w-[350px] md:w-[300px] xl:w-[450px] lg:w-[200px]"
            src="/activities/activityDetails/bottom-left.webp"
            alt=""
            width={450}
            height={287}
            draggable={false}
          ></Image>

          <Image
            className="absolute -left-45 top-40 md:top-80 xl:top-53 w-[300px] md:w-[350px]  z-0"
            src="/activities/activityDetails/red-fan.svg"
            alt=""
            width={720}
            height={701}
            draggable={false}
          ></Image>
        </div>

        <div className="flex flex-col md:flex-row md:justify-center items-center md:items-start w-full z-0 gap-10 ">
          <div className="block md:hidden mt-10 text-center">
            <h1 className="font-impact font-bold text-4xl">{title}</h1>
          </div>
          <div className="w-[300px] md:w-[300px] xl:w-[450px] h-[300px] md:h-[350px] xl:h-[472px] mt-0 md:mt-35 xl:mt-0 relative">
            {urlImg && (
              <FrameImage
                src={urlImg}
                className="w-[280px] md:w-[270px] xl:w-[400px] top-0 xl:top-20 left-0 -rotate-10 drop-shadow-[0_4px_8px_rgba(0,0,0,0.4)]"
              />
            )}
          </div>
          <div className="md:w-[40%] md:mt-10 w-[80%] z-10 mb-[12vh] ">
            <div className="relative w-fit">
              <h1 className="hidden md:block font-impact font-bold text-5xl">
                {title}
              </h1>

              <Image
                className="hidden xl:block absolute left-[105%] top-0 xl:w-[100px]"
                src="/activities/activityDetails/among-us.svg"
                alt=""
                width={300}
                height={327}
                draggable={false}
              ></Image>
            </div>

            <div className="flex flex-col mt-10 gap-5 text-xl items-center">
              {slicedDescription.map((line, index) => (
                <p key={index}>{line}</p>
              ))}

              <Link href="https://bit.ly/compucimt">
                <div className="relative w-fit mt-5">
                  <Button
                    bgColor="#ED4E45"
                    className="w-fit px-10 py-3 text-[35px] font-bold rounded-xl"
                  >
                    REGISTER
                  </Button>
                  <Image
                    className="absolute -top-8 -right-14"
                    src="/activities/activityDetails/button-decor.webp"
                    alt=""
                    width={100}
                    height={65}
                    draggable={false}
                  ></Image>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ActivityDetails;
