import React from "react";
import AchievementsBackground from "@/components/achievement/AchievementsBackground";

import {
  getAchievementsExcludingFeatured,
  getFeaturedAchievements,
} from "@/lib/service/achievement";
import AchievementsSearch from "@/components/achievement/AchievementsSearch";

export const metadata = {
  title: "Achievements",
};

export default async function AchievementsPage() {
  const featuredAchievements = await getFeaturedAchievements();
  const achievementElse = await getAchievementsExcludingFeatured();

  return (
    <>
      {/* Background Container - Server Component (Static) */}
      <div className="overflow-hidden relative flex flex-col items-center justify-center min-h-screen w-full bg-[url('/backgrounds/background-paper.png')] bg-cover bg-center bg-[#F1EEE6] m-0 p-0">
        <AchievementsBackground />

        {/* Main Content */}
        <AchievementsSearch
          achievements={achievementElse}
          featuredAchievements={featuredAchievements}
        />
      </div>
    </>
  );
}
