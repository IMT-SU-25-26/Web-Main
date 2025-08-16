"use client";

import { useState } from "react";
import StudentDeleteApplicationButton from "@/components/dashboard/StudentDeleteApplicationButton";

export default function DeleteButtonWithConfirmation({ applicationId }: { applicationId: string }) {
  const [showConfirmation, setShowConfirmation] = useState(false);
  
  return (
    <div className="w-full h-full flex justify-center items-center">
      <button 
        onClick={() => setShowConfirmation(true)}
        className="bg-red-600 text-white p-2 rounded hover:bg-red-700"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
          />
        </svg>
      </button>
      
      {showConfirmation && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md md:w-3/4 lg:w-2/3 xl:max-w-md">
            <div className="p-4 sm:p-6">
              <h3 className="text-xl sm:text-lg font-bold mb-2 sm:mb-4">Confirm Deletion</h3>
              <p className="text-lg sm:text-base mb-4 sm:mb-6">Are you sure you want to remove this application? This action cannot be undone.</p>
              <div className="flex flex-col sm:flex-row justify-end gap-2 sm:gap-3">
                <button 
                  onClick={() => setShowConfirmation(false)}
                  className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 transition-colors text-sm sm:text-base w-full sm:w-auto order-2 sm:order-1"
                >
                  Cancel
                </button>
                <div onClick={() => setShowConfirmation(false)} className="w-full sm:w-auto order-1 sm:order-2">
                  <StudentDeleteApplicationButton 
                    applicationId={applicationId} 
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      </div>
  );
}