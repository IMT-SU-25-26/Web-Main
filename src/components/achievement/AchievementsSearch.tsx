'use client'

import React from "react";
import AchievementFeatured from "@/components/achievement/AchievementFeatured";
import { AchievementCard } from "@/components/achievement/AchievementCard";
import SearchBar from "@/components/SearchBar";
import { Achievement } from "@/types/achievement";

type colorProps = "blue" | "green" | "pink" | "red" | "yellow" | "gray";

interface AchievementsSearchProps {
  achievements: Achievement[];
  featuredAchievements?: Achievement[];
}

export default function AchievementsSearch({ achievements, featuredAchievements }: AchievementsSearchProps) {
  const colors: colorProps[] = [
    "blue",
    "red",
    "pink",
    "green",
    "yellow",
    "gray",
  ];

  return (
    <div className="flex flex-col items-center justify-center w-full md:w-max-[80vw] h-full mt-8 pt-[10rem]">
      <SearchBar items={achievements}>
        {(filteredAchievements) => (
          <>
            <div className="flex flex-col gap-4">
              {featuredAchievements && featuredAchievements.map((item, index) => {
                const borderColor = colors[index % colors.length];
                return (
                  <AchievementFeatured
                    key={index}
                    {...item}
                    type="Achivement"
                    borderColor={borderColor}
                  />
                )
              })}
            </div>
            <section className="flex flex-wrap justify-center gap-4 px-4">
              {filteredAchievements.map((achievement, index) => {
                const borderColor = colors[index % colors.length];
                return (
                  <AchievementCard
                    key={achievement.id}
                    {...achievement}
                    borderColor={borderColor}
                    type="Achievement"
                  />
                );
              })}
            </section>
          </>
        )}
      </SearchBar>
    </div>
  );
}
