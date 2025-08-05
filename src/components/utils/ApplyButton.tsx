"use client";

import React from "react";
import { useSession } from "next-auth/react";
import { createApplication } from "@/lib/service/application";

type ButtonProps = {
  bgColor: string;
  children: React.ReactNode;
  className?: string;
  activityId: string;
};

export default function ApplyButton({
  bgColor,
  children,
  className,
  activityId,
}: ButtonProps) {
  const { data: session, status } = useSession();

  const handleApply = async () => {
    if (!session?.user?.id) {
      alert("Please log in to apply");
      return;
    }

    const result = await createApplication(session.user.id, activityId);
    if (result.success) {
      alert("Application submitted successfully!");
    } else {
      alert(`Error: ${result.error}`);
    }
  };

  if (status === "loading") {
    return <button disabled>Loading...</button>;
  }

  if (!session) {
    return <button disabled>Login to Apply</button>;
  }

  return (
    <button
      type="button"
      className={`inline-block transition-all duration-300 hover:shadow-[0_0_10px_4px] hover:ring-2 text-white text-[12px] px-4 py-1 rounded-md ease-in-out hover:brightness-90 ${className}`}
      style={{ backgroundColor: bgColor }}
      onClick={handleApply}
    >
      {children}
    </button>
  );
}
