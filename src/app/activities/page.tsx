import { getActivities } from "@/lib/service/activity";
import ActivitiesSearch from "@/components/activity/ActivitiesSearch";
import ActivityBackground from "@/components/activity/ActivityBackground";

export const metadata = {
  title: "Activities",
};

export default async function ActivityPage() {
  const activities = await getActivities();

  return (
    <>
      {/* Spacer for header */}
      <div className="h-[10vh] bg-[#F1EEE6]" />

      {/* Background Container - Server Component (Static) */}
      <div className="select-none relative overflow-hidden flex flex-col items-center justify-center min-h-[90vh] pt-0 w-full bg-[url('/backgrounds/background-paper.png')] bg-cover bg-center bg-[#F1EEE6]">
        <ActivityBackground />
        <ActivitiesSearch activities={activities} />
      </div>
    </>
  );
}
