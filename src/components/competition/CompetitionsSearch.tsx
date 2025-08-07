"use client";

import React from "react";
import { CompetitionCard } from "@/components/competition/CompetitionCard";
import SearchBar from "@/components/SearchBar";
import { Competition } from "@/types/competition";

interface CompetitionsSearchProps {
  competitions: Competition[];
}

export default function CompetitionsSearch({ competitions }: CompetitionsSearchProps) {
  return (
    <div className="z-10 w-full px-4 md:px-8 lg:px-32">
      <SearchBar items={competitions} getSearchValue={(item)=>(item.name)}>
        {(filteredCompetitions) => (
          <section className="p-2 z-10 mb-10">
            <div className="flex flex-wrap justify-center gap-4 px-0">
              {filteredCompetitions.map((competition, index) => (
                <CompetitionCard
                  key={competition.id}
                  competition={competition}
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
