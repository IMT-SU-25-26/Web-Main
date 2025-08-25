import React from "react";
import { getActivityById } from "@/lib/service/activity";
import NotFound from "./not-found";
import ActivityBackground from "@/components/activity/details/ActivityBackground";
import ClientActivityDetails from "@/components/activity/details/ClientPage";

export async function generateMetadata(props: {
  params: Promise<{ activityId: string }>;
}) {
  const params = await props.params;
  const activityId = params.activityId;
  const activity = await getActivityById(activityId);

  if (!activity) {
    return {
      title: "Activity Not Found",
    };
  }

  return {
    title: activity.title,
  };
}

const ActivityDetails = async (props: {
  params: Promise<{ activityId: string }>;
}) => {
  const params = await props.params;
  const activity = await getActivityById(params.activityId);

  if (!activity) {
    return <NotFound />;
  }

  return (
    <>
      <div className="h-[6.5vh] bg-[#F1EEE6]"></div>
      <div className="overflow-hidden relative flex flex-col items-center justify-center min-h-[calc(100dvh-6.5vh)] w-full bg-[url('/backgrounds/background-paper.png')] bg-cover bg-center bg-[#F1EEE6] m-0 p-0">
        {/* Decorative Image */}
        <ActivityBackground />

        {/* Client Page */}
        <ClientActivityDetails activity={activity} />
      </div>
    </>
  );
};

export default ActivityDetails;
