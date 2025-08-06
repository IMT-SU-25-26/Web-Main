"use client";

import React from "react";
import AchievementFeatured from "@/components/achievement/AchievementFeatured";
import mockFeaturedAchievements from "@/mockData/mockFeaturedAchievements";
import { AchievementCard } from "@/components/achievement/AchievementCard";
import SearchBar from "@/components/SearchBar";
import { Achievement } from "@/types/achievement";

type colorProps = "blue" | "green" | "pink" | "red" | "yellow" | "gray";

interface AchievementsSearchProps {
  achievements: Achievement[];
}

export default function AchievementsSearch({ achievements }: AchievementsSearchProps) {
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
            <div>
              {mockFeaturedAchievements.map((item, index) => (
                <AchievementFeatured
                  key={index}
                  {...item}
                  imageUrl="/achievements/nplc.png"
                />
              ))}
            </div>
            <section className="flex flex-wrap justify-center gap-4 px-4">
              {filteredAchievements.map((achievement, index) => {
                const colorIndex = index % colors.length;
                const borderColor = colors[colorIndex];
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
