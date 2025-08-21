import React from "react";
import Image from "next/image";
import FrameImage from "@/components/achievement/FrameImage";
import { getActivityById } from "@/lib/service/activity";
import Button from "@/components/Button";
import NotFound from "./not-found";
import ActivityBackground from "@/components/activity/details/ActivityBackground";

export async function generateMetadata(props: {
  params: Promise<{ activityId: string }>;
}) {
  const params = await props.params;
  const activityId = params.activityId;
  const activity = await getActivityById(activityId);

  if (!activity) {
    return {
      title: "Activity Not Found",
    };
  }

  return {
    title: activity.title,
  };
}

const ActivityDetails = async (props: {
  params: Promise<{ activityId: string }>;
}) => {
  const params = await props.params;
  const activityId = params.activityId;
  const activity = await getActivityById(activityId);

  if (!activity) {
    return <NotFound />;
  }

  const title = activity.title;
  const urlImg = activity.imageUrl;
  const description = activity.description;
  const slicedDescription = description.split("\n");

  return (
    <>
      <div className="h-[6.5vh] bg-[#F1EEE6]"></div>
      <div className="overflow-hidden relative flex flex-col items-center justify-center min-h-[calc(100dvh-6.5vh)] w-full bg-[url('/backgrounds/background-paper.png')] bg-cover bg-center bg-[#F1EEE6] m-0 p-0">
        {/* Decorative Image */}
        <ActivityBackground />

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

            <div className="flex flex-col mt-10 gap-5 text-xl items-center break-words">
              {slicedDescription.map((line, index) => (
                <p className="break-words w-full" key={index}>{line}</p>
              ))}
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ActivityDetails;
