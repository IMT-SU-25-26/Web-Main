'use client'
import React, { useState } from 'react'
import ActivityBackground from './ActivityBackground'
import ActivitiesSearch from './ActivitiesSearch'
import { Activity, Category } from '@prisma/client';

type ClientPageActivitiesProps = {
    activities: Activity[];
    categories: Category[];
}

function ClientPageActivities({activities, categories }: ClientPageActivitiesProps) {
  const [showConfirm, setShowConfirm] = useState(false);
  const [pendingAction, setPendingAction] = useState<(() => Promise<void>) | null>(null);
  
  const confirmApply = (onConfirm: () => Promise<void>) => {
    setShowConfirm(true);
    setPendingAction(() => onConfirm); // store async function
  };

  const handleConfirm = async () => {
    if (pendingAction) await pendingAction();
    setShowConfirm(false);
    setPendingAction(null);
  };

  const handleCancel = () => {
    setShowConfirm(false);
    setPendingAction(null);
  };

  return (
    <>
      {/* Spacer for header */}
      <div className="h-[10vh] bg-[#F1EEE6]" />

      {/* Background Container */}
      <div className="select-none relative overflow-hidden flex flex-col items-center justify-center min-h-[90vh] pt-0 w-full bg-[url('/backgrounds/background-paper.png')] bg-cover bg-center bg-[#F1EEE6]">
        <ActivityBackground />
        <ActivitiesSearch activities={activities} confirmApply={confirmApply} categories={categories} />
      </div>

      {/* Confirmation Popup */}
      {showConfirm && (
        <div className="fixed z-10 inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 shadow-lg max-w-sm w-full text-center">
            <h2 className="text-lg font-semibold mb-4">Confirm Application</h2>
            <p className="mb-6">Are you sure you want to apply for this activity?</p>
            <div className="flex justify-center gap-4">
              <button
                onClick={handleConfirm}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                Yes
              </button>
              <button
                onClick={handleCancel}
                className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400"
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ClientPageActivities