import React from "react";
import { getCompetitions } from "@/lib/service/competition";
import CompetitionsSearch from "@/components/competition/CompetitionsSearch";
import CompetitionsBackground from "@/components/competition/CompetitionsBackground";

export const metadata = {
  title: "Competitions",
};

export default async function CompetitionsPage() {
  const competitions = await getCompetitions();

  return (
    <>
      {/* Spacer for header */}
      <div className="h-[10vh] bg-[#F1EEE6]" />

      {/* Background Container - Server Component (Static) */}
      <div className="select-none relative overflow-hidden flex flex-col items-center justify-center min-h-[90vh] pt-0 w-full bg-[url('/backgrounds/background-paper.png')] bg-cover bg-center bg-[#F1EEE6]">
        <CompetitionsBackground />
        <CompetitionsSearch competitions={competitions} />
      </div>
    </>
  );
}
