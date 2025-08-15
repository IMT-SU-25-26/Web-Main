"use client";

import React, { useEffect } from "react";
import { ActivityCard } from "@/components/activity/ActivityCard";
import SearchBar from "@/components/SearchBar";
import { Activity } from "@/types/activity";
import gsap from "gsap";

interface ActivitiesSearchProps {
  activities: Activity[];
}

export default function ActivitiesSearch({ activities }: ActivitiesSearchProps) {

  // Animate all left-starting cards
  useEffect(() => {
    gsap.fromTo(
      ".start-left",
      { opacity: 0, x: -30 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        delay: 0.2,
        ease: "power1.out",
        stagger: 0.1,
      }
    );

    // Animate all right-starting cards
    gsap.fromTo(
      ".start-right",
      { opacity: 0, x: 30 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        delay: 0.2,
        ease: "power1.out",
        stagger: 0.1,
      }
    );
    
    // Animate all bottom-starting cards
    gsap.fromTo(
      ".start-bottom",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: 0,
        ease: "power1.out",
        stagger: 0.1,
        clearProps: "transform",
      }
    );
  }, []);

  return (
    <div className="z-10 w-full px-4 md:px-8 lg:px-32">
      <SearchBar items={activities} className="start-bottom">
        {(filteredActivities) => (
          <section className="p-2 z-10 mb-10">
            <div className="flex flex-wrap justify-center gap-4 px-0">
              {filteredActivities.map((activity, index) => (
                <div className="start-bottom" key={activity.id}>
                  <ActivityCard
                    activity={activity}
                    index={index}
                  />
                </div>
              ))}
            </div>
          </section>
        )}
      </SearchBar>
    </div>
  );
}
