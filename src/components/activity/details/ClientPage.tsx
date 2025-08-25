"use client";

import FrameImage from "@/components/achievement/FrameImage";
import { Activity } from "@prisma/client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import ApplyButton from "@/components/utils/ApplyButton";
import { getApprovedApplicationsCount } from "@/lib/service/activity";

type ClientActivityDetailsProps = {
  activity: Activity;
};

const ClientActivityDetails = ({ activity }: ClientActivityDetailsProps) => {
  const description = activity.description;
  const slicedDescription = description.split("\n");

  const [showConfirm, setShowConfirm] = useState(false);
  const [pendingAction, setPendingAction] = useState<
    (() => Promise<void>) | null
  >(null);
  const [approvedCount, setApprovedCount] = useState<number>(0);

  useEffect(() => {
    const fetchApprovedCount = async () => {
      const count = await getApprovedApplicationsCount(activity.id);
      setApprovedCount(count);
    };
    fetchApprovedCount();
  }, [activity.id]);

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
      <div className="flex flex-col md:flex-row md:justify-center items-center md:items-start w-full z-0 gap-10 ">
        <div className="block md:hidden mt-10 text-center">
          <h1 className="font-impact font-bold text-4xl">{activity.title}</h1>
        </div>
        <div className="w-[300px] md:w-[300px] xl:w-[450px] h-[300px] md:h-[350px] xl:h-[472px] mt-0 md:mt-35 xl:mt-0 relative">
          {activity.imageUrl && (
            <FrameImage
              src={activity.imageUrl}
              className="w-[280px] md:w-[270px] xl:w-[400px] top-0 xl:top-20 left-0 -rotate-10 drop-shadow-[0_4px_8px_rgba(0,0,0,0.4)]"
            />
          )}
        </div>
        <div className="md:w-[40%] md:mt-10 w-[80%] z-10 mb-[12vh] ">
          <div className="relative w-fit">
            <h1 className="hidden md:block font-impact font-bold text-5xl">
              {activity.title}
            </h1>

            <Image
              className="hidden xl:block absolute left-[105%] top-0 xl:w-[100px]"
              src="/activities/activityDetails/among-us.svg"
              alt=""
              width={300}
              height={327}
              draggable={false}
            ></Image>
          </div>

          {/* Activity Information Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-6 sm:mt-8 mb-6 sm:mb-8">
            {/* Location Card */}
            <div className="group bg-white/95 backdrop-blur-sm rounded-xl p-4 sm:p-5 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-4 border-red-500 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent"></div>
              <div className="relative z-10 flex items-start gap-3 sm:gap-4">
                <div className="bg-red-500 p-2 sm:p-3 rounded-full shadow-md">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] sm:text-xs text-gray-600 uppercase tracking-wide font-semibold">Location</p>
                  <p className="text-sm sm:text-lg font-bold text-gray-900">{activity.location}</p>
                </div>
              </div>
            </div>

            {/* Date Card */}
            <div className="group bg-white/95 backdrop-blur-sm rounded-xl p-4 sm:p-5 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-4 border-[#0555AB] relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#0555AB]/5 to-transparent"></div>
              <div className="relative z-10 flex items-center gap-3 sm:gap-4">
                <div className="bg-[#0555AB] p-2 sm:p-3 rounded-full shadow-md">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] sm:text-xs text-gray-600 uppercase tracking-wide font-semibold">Start Date</p>
                  <p className="text-sm sm:text-lg font-bold text-gray-900">
                    {new Date(activity.startDate).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                </div>
              </div>
            </div>

            {/* Credit Points Card */}
            <div className="group bg-white/95 backdrop-blur-sm rounded-xl p-4 sm:p-5 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-4 border-yellow-500 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 to-transparent"></div>
              <div className="relative z-10 flex items-center gap-3 sm:gap-4">
                <div className="bg-yellow-500 p-2 sm:p-3 rounded-full shadow-md">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] sm:text-xs text-gray-600 uppercase tracking-wide font-semibold">Credit Points</p>
                  <p className="text-sm sm:text-lg font-bold text-gray-900">{activity.creditPoint} CP</p>
                </div>
              </div>
            </div>

            {/* Quota Card */}
            <div className="group bg-white/95 backdrop-blur-sm rounded-xl p-4 sm:p-5 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-4 border-green-500 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent"></div>
              <div className="relative z-10 flex items-start gap-3 sm:gap-4">
                <div className="bg-green-500 p-2 sm:p-3 rounded-full shadow-md">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-[10px] sm:text-xs text-gray-600 uppercase tracking-wide font-semibold">Availability</p>
                  <p className="text-sm sm:text-lg font-bold text-gray-900">
                    {approvedCount}/{activity.quota} Registered
                  </p>
                  <div className="w-full bg-gray-200 rounded-full h-2 sm:h-2.5 mt-2">
                    <div 
                      className="bg-green-500 h-2 sm:h-2.5 rounded-full transition-all duration-300 shadow-sm" 
                      style={{ width: `${Math.min((approvedCount / activity.quota) * 100, 100)}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col mt-6 sm:mt-10 gap-5 text-xl items-center break-words">
            <div className="w-full">
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-xl border-4 border-black relative overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-gray-500/10 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-gray-700/10 to-transparent rounded-full translate-y-12 -translate-x-12"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center space-x-3 mb-4 sm:mb-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-black rounded-xl flex items-center justify-center shadow-lg">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <h2 className="text-xl sm:text-2xl font-semibold text-black font-family-impact">Description</h2>
                  </div>
                  <div className="space-y-3">
                    {slicedDescription.map((line, index) => (
                      <p className="break-words w-full text-black leading-relaxed text-sm sm:text-base" key={index}>
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="relative w-fit mt-6 sm:mt-8 self-center">
              <ApplyButton
                bgColor="#ED4E45"
                activityId={activity.id}
                confirmApply={confirmApply}
                className="w-fit px-8 sm:px-12 py-3 sm:py-4 text-[24px] sm:text-[32px] font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                REGISTER NOW
              </ApplyButton>
              <Image
                className="absolute -top-6 sm:-top-8 -right-10 sm:-right-14 w-[80px] sm:w-[100px]"
                src="/activities/activityDetails/button-decor.webp"
                alt=""
                width={100}
                height={65}
                draggable={false}
              ></Image>
            </div>
          </div>
        </div>
      </div>

      {/* Confirmation Popup */}
      {showConfirm && (
        <div className="fixed z-50 inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-8 shadow-2xl max-w-md w-full text-center">
            <div className="mb-6">
              <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Confirm Registration</h2>
              <p className="text-gray-600 leading-relaxed">
                Are you sure you want to register for <span className="font-semibold text-gray-800">{activity.title}</span>?
              </p>
            </div>
            <div className="flex gap-3 justify-center">
              <button
                onClick={handleConfirm}
                className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors duration-200 shadow-md hover:shadow-lg"
              >
                Yes, Register
              </button>
              <button
                onClick={handleCancel}
                className="flex-1 px-6 py-3 bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 transition-colors duration-200"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ClientActivityDetails;
