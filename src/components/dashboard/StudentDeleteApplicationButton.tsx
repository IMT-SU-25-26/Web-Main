'use client'
import React from "react";
import { deleteApplication } from "@/lib/service/application";

export default function StudentDeleteApplicationButton({ applicationId }: { applicationId: string }) {
  const handleDelete = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    await deleteApplication(applicationId);
  };

  return (
    <button onClick={handleDelete} className="w-full bg-red-600 text-white rounded hover:bg-red-700 px-4 py-2 transition-colors">
      Remove
    </button>
  );
}
