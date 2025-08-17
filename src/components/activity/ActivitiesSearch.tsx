"use client";

import React from "react";
import { ActivityCard } from "@/components/activity/ActivityCard";
import SearchBar from "@/components/SearchBar";
import { Activity } from "@/types/activity";

interface ActivitiesSearchProps {
  activities: Activity[];
}

export default function ActivitiesSearch({ activities }: ActivitiesSearchProps) {
  return (
    <div className="z-10 w-full px-4 md:px-8 lg:px-32">
      <SearchBar items={activities}>
        {(filteredActivities) => (
          <section className="p-2 z-10 mb-10">
            <div className="flex flex-wrap justify-center gap-4 px-0">
              {filteredActivities.map((activity, index) => (
                <ActivityCard
                  key={activity.id}
                  activity={activity}
                  index={index}
                />
              ))}
            </div>
          </section>
        )}
      </SearchBar>
    </div>
  );
}
