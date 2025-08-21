import React from "react";
import { getActivities } from "@/lib/service/activity";
import DashboardBackground from "@/components/dashboard/DashboardBackground";
import DashboardSearch from "@/components/dashboard/DashboardSearch";
import { deleteActivity } from "@/lib/service/activity";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Activities",
  description: "Activities Dashboard",
};

async function ActivitiesDashboard() {
  const activities = await getActivities();
  return (
    <>
      <div className="overflow-hidden relative flex flex-col items-center justify-start min-h-[93.5vh] w-full bg-[url('/backgrounds/background-paper.png')] bg-cover bg-center bg-[#F1EEE6] m-0 p-0">
        {/* Decor Image */}
        <DashboardBackground />

        {/* Achievement search */}
        <DashboardSearch
          items={activities}
          deleteItem={deleteActivity}
          label="Activities"
          urlForEdit="/dashboard/sa/activities"
          additionalElements={
            <>
              <Link href="/dashboard/sa/activities/approval">
                {/* Nav Button for Approval Page */}
                <button className="rounded-full h-full w-10 flex items-center justify-center aspect-square text-white bg-[#003772] cursor-pointer">
                  <Image
                    width={22}
                    height={22}
                    alt="Add Activity"
                    src="/dashboard/approval-logo.svg"
                    className="text-white object-contain"
                  />
                </button>
              </Link>
            </>
          }
        />  
      </div>
    </>
  );
}

export default ActivitiesDashboard;
