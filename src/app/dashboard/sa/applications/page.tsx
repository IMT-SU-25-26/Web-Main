"use client";

import React, { useState, useEffect } from "react";
import DashboardBackground from "@/components/dashboard/DashboardBackground";
import ApplicationsSearch from "@/components/dashboard/ApplicationsSearch";
import { getApplicationsWithDetails, setStatusApplication } from "@/lib/service/application";
import { ApplicationWithDetails } from "@/types/service/application";
import { Status } from "@prisma/client";
import { ActionResult } from "@/types/action";

export default function ApplicationsPage() {
  const [applications, setApplications] = useState<ApplicationWithDetails[]>([]);

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const data = await getApplicationsWithDetails();
        setApplications(data);
      } catch (error) {
        console.error("Error fetching applications:", error);
      } 
    };

    fetchApplications();
  }, []);

  const handleStatusUpdate = async (id: string, status: Status): Promise<ActionResult<void>> => {
    try {
      const result = await setStatusApplication(id, status);
      
      if (result.success) {
        setApplications(prev => 
          prev.map(app => 
            app.id === id ? { ...app, status } : app
          )
        );
      }
      
      return {
        success: result.success,
        message: result.message,
        error: result.error,
      };
    } catch (error) {
      console.error("Error updating application status:", error);
      return {
        success: false,
        error: "An unexpected error occurred while updating the application status.",
      };
    }
  };

  return (
    <div className="overflow-hidden relative flex flex-col items-center justify-start min-h-screen w-full bg-[url('/backgrounds/background-paper.png')] bg-cover bg-center bg-[#F1EEE6]">
      <DashboardBackground />
      <ApplicationsSearch
        applications={applications}
        updateApplicationStatus={handleStatusUpdate}
        label="Applications"
      />
    </div>
  );
}