import AchievementList from "@/components/achievement/AchievementList";
import SkeletonLoader from "@/components/utils/SkeletonLoader";
import { Suspense } from "react";
import Image from "next/image";
import { getAchievements } from "@/lib/service/achievement";

export default async function AchievementsPage() {
  const achievements = await getAchievements();
  return (
    <div className="w-full overflow-hidden">
      <div className="h-[6vh] bg-[#F1EEE6]"></div>
      <div className="relative min-h-screen w-full bg-[url('/backgrounds/background-paper.png')] bg-contain bg-center bg-[#F1EEE6] overflow-hidden p-10">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-5xl font-family-impact font-bold text-gray-900 tracking-wide">
              Achievements
            </h1>
          </div>
        </div>

        {
          <Suspense fallback={<SkeletonLoader />}>
            <AchievementList achievements={achievements} />
          </Suspense>
        }
        <Image
          src="/events/pink-oval.svg"
          alt="pink oval"
          width={700}
          height={475}
          className="pink-oval-image bottom-[-10rem] sm:bottom-[-13rem] lg:bottom-[-18rem] left-[-7rem] sm:left-[-5rem] md:left-[-7rem] absolute w-[20rem] sm:w-[25rem] md:w-[30rem] lg:w-[35rem]"
        />
        <Image
          src="/eventsdetails/bottom-left-2.svg"
          alt="bottom left"
          width={700}
          height={475}
          className="bottom-left-image bottom-[-3rem] sm:bottom-[-4rem] md:bottom-[-5rem] left-0 absolute w-[12rem] sm:w-[18rem] md:w-[25rem] lg:w-[25rem] z-1"
        />
      </div>
    </div>
  );
}
