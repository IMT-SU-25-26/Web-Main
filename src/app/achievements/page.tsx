// import AchievementCard from '@/components/AchievementCard';

import { getAchievements } from "@/lib/service/achievement";
import PageClient from "./PageClient";


export const metadata = {
    title: "Achievements",
}

export default async function AchievementsPage() {
    const achievements = await getAchievements();
    
    return (
        <PageClient achievements={achievements} />
    );
}
