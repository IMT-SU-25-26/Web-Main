'use client'
import FrameImage from '@/components/achievement/FrameImage';
import { Activity } from '@prisma/client'
import React, { useState } from 'react'
import Image from 'next/image';
import ApplyButton from '@/components/utils/ApplyButton';

type ClientActivityDetailsProps = {
    activity: Activity;
}

const ClientActivityDetails = ({activity}: ClientActivityDetailsProps) => {
    const description = activity.description;
    const slicedDescription = description.split("\n");

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

            <div className="flex flex-col mt-10 gap-5 text-xl items-center break-words">
              {slicedDescription.map((line, index) => (
                <p className="break-words w-full" key={index}>{line}</p>
              ))}
              <div className="relative w-fit mt-5">
                <ApplyButton
                  bgColor="#ED4E45"
                  activityId={activity.id}
                  confirmApply={confirmApply}
                  className="w-fit px-10 py-3 text-[35px] font-bold rounded-xl"
                >
                  REGISTER
                </ApplyButton>
                <Image
                  className="absolute -top-8 -right-14"
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
    )
}

export default ClientActivityDetails