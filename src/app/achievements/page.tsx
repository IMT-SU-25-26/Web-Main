import Image from "next/image"; 
// import AchievementCard from '@/components/AchievementCard';
import AchievementFeatured from '@/components/achievement/AchievementFeatured';
import mockFeaturedAchievements from '@/mockData/mockFeaturedAchievements';
import { AchievementCard } from '@/components/achievement/AchievementCard';
import { mockAchievements } from '@/mockData/mockAchievements';
import { getAchievements } from "@/lib/service/achievement";
import { CldOgImage } from "next-cloudinary";

export default async function AchievementsPage() {
    const achieveData = await getAchievements();
    console.log(achieveData);

    return (
        <>

        <div className="overflow-hidden relative flex flex-col items-center justify-center min-h-screen w-full bg-[url('/backgrounds/background-paper.png')] bg-cover bg-center bg-[#F1EEE6] m-0 p-0">

            {/* Decorative Elements */}
            <>
                
                <Image
                className="z-10 absolute top-[1.8rem] left-[50%] translate-x-[-50%] w-[20rem]"
                src="/achievements/page-title.png"
                alt="page title"
                width={480}
                height={160}
                />
                <Image
                className="hidden md:block absolute top-[0.5rem] left-[0.5rem] w-[12rem]"
                src="/achievements/star-laptop.svg"
                alt="star laptop"
                width={120}
                height={120}
                />
                <Image
                className="hidden md:block absolute top-[11rem] left-0 w-[4rem]"
                src="/achievements/blue-fan.svg"
                alt="blue fan"
                width={100}
                height={100}
                />
                <Image
                className="hidden md:block absolute top-[4rem] right-0 w-[4rem]"
                src="/achievements/red-fan.svg"
                alt="red fan"
                width={100}
                height={100}
                />
                <Image
                className="hidden md:block absolute top-[19rem] right-[0rem] w-[8rem]"
                src="/achievements/green-arrow.svg"
                alt="green arrow"
                width={60}
                height={60}
                />
                <Image
                className="hidden md:block absolute top-[28rem] left-[0rem] w-[6.5rem]"
                src="/achievements/red-tape.svg"
                alt="red tape"
                width={100}
                height={30}
                />
                <Image
                className="hidden md:block absolute top-[28rem] right-[0rem] w-[5rem]"
                src="/achievements/yellow-tape.svg"
                alt="yellow tape"
                width={100}
                height={30}
                />
                <Image
                className="hidden md:block absolute bottom-[0rem] left-0 w-[10rem]"
                src="/achievements/bottom-left-decor.svg"
                alt="bottom left"
                width={80}
                height={80}
                />
                <Image
                className="hidden md:block absolute bottom-[0rem] right-0 w-[10rem]"
                src="/achievements/bottom-right-decor.svg"
                alt="bottom right"
                width={80}
                height={80}
                />
            </>

            {/* Main Content */}
            <div className="flex flex-col items-center justify-center w-full h-full">
                <div className="pt-[10rem]">
                    {mockFeaturedAchievements.map((item, index) => (
                        <AchievementFeatured key={index} {...item} />
                    ))}
                </div>
                <section className="flex flex-wrap justify-center gap-4 px-4">
                {mockAchievements.map((achievement) => (
                    <AchievementCard key={achievement.id} {...achievement} />
                ))}
                </section>
            </div>
        </div>
        </>
    );
}
