"use client";

import React, { useEffect } from "react";
import { CompetitionCard } from "@/components/competition/CompetitionCard";
import SearchBar from "@/components/SearchBar";
import { Competition } from "@/types/competition";
import gsap from "gsap";

interface CompetitionsSearchProps {
  competitions: Competition[];
}

export default function CompetitionsSearch({ competitions }: CompetitionsSearchProps) {
  
  // Animate all left-starting cards
  useEffect(() => {    
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
      <SearchBar items={competitions} getSearchValue={(item)=>(item.name)} className="start-bottom">
        {(filteredCompetitions) => (
          <section className="p-2 z-10 mb-10">
            <div className="flex flex-wrap justify-center gap-4 px-0">
              {filteredCompetitions.map((competition, index) => (
                <div className="start-bottom" key={competition.id}>
                  <CompetitionCard
                    competition={competition}
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
