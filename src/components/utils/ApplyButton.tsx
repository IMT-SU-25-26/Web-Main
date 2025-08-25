"use client";

import React, { useEffect, useState } from "react";
import { signIn, useSession } from "next-auth/react";
import { createApplication, getStatusApplication } from "@/lib/service/application";

type ButtonProps = {
  bgColor: string;
  children: React.ReactNode;
  className?: string;
  activityId: string;
  confirmApply?: (onConfirm: () => Promise<void>) => void;
  startDate?: Date;
  quota?: number;
  approvedCount?: number;
};

export default function ApplyButton({
  bgColor,
  children,
  className,
  activityId,
  confirmApply,
  startDate,
  quota,
  approvedCount
}: ButtonProps) {
  const { data: session, status } = useSession();
  const [applicationStatus, setApplicationStatus] = useState<string | undefined>(undefined);

  useEffect(() => {
    async function fetchStatus() {
      if (session) {
        const status = await getStatusApplication(activityId, session.user.id);
        setApplicationStatus(status);
      }
    }
    fetchStatus();
  }, [session, activityId]);

  const handleApply = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    
    // Prevent application if activity has passed or quota is full
    if (isActivityPassed || isQuotaFull) {
      return;
    }
    
    if (!session?.user?.id) {
      signIn("google");
      return;
    }

    if(!applicationStatus){
      confirmApply?.(async () => {
        // prevent multiple applications
        const result = await createApplication(session.user.id, activityId);
        if (result.success) {
          setApplicationStatus("PENDING");
        } else {
          alert(`Error: ${result.error}`);
        }
      });
    }
    
  };

  let childrenTemp = children;
  const now = new Date();
  const isActivityPassed = startDate ? new Date(startDate) < now : false;
  const isQuotaFull = quota && approvedCount !== undefined ? approvedCount >= quota : false;

  if (status === "loading") {
    childrenTemp = "Loading...";
  } else if (!session) {
    childrenTemp = "Please Log In to Apply";
  } else if (isActivityPassed) {
    childrenTemp = "Activity Has Ended";
  } else if (isQuotaFull) {
    childrenTemp = "Quota Full";
  } else if (applicationStatus === "APPROVED") {
    childrenTemp = "Accepted";
  } else if (applicationStatus === "REJECTED") {
    childrenTemp = "Rejected";
  } else if (applicationStatus === "PENDING") {
    childrenTemp = "Waiting for Approval";
  }

  return (
    <button
      type="button"
      className={`inline-block transition-all duration-300 hover:shadow-[0_0_10px_4px] hover:ring-2 text-white text-[0.9rem] px-4 py-1 rounded-md ease-in-out hover:brightness-90 ${className} ${
        isActivityPassed || isQuotaFull ? 'cursor-not-allowed' : ''
      }`}
      style={{ backgroundColor: childrenTemp !== children ? "#a0a0a0" : bgColor }}
      onClick={handleApply}
      disabled={isActivityPassed || isQuotaFull}
    >
      {childrenTemp}
    </button>
  );
}

