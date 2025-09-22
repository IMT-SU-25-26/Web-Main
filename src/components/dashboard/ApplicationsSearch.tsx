"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import SearchBar from "@/components/SearchBar";
import { ApplicationWithDetails } from "@/types/service/application";
import { Status } from "@prisma/client";
import gsap from "gsap";
import { ActionResult } from "@/types/action";
import { useOptionalSideNav } from "@/lib/contexts/SANavContext";

type ApplicationsSearchProps = {
  applications: ApplicationWithDetails[];
  updateApplicationStatus: (
    id: string,
    status: Status
  ) => Promise<ActionResult<void>>;
  label?: string;
  additionalElements?: React.ReactNode;
};

type ConfirmAction = {
  id: string;
  action: "approve" | "reject" | "pending";
  applicantName: string;
};

const getStatusColor = (status: Status): string => {
  switch (status) {
    case Status.APPROVED:
      return "bg-green-100 text-green-800";
    case Status.REJECTED:
      return "bg-red-100 text-red-800";
    case Status.PENDING:
    default:
      return "bg-yellow-100 text-yellow-800";
  }
};

const getTypeDisplay = (application: ApplicationWithDetails): string => {
  if (application.activity) {
    return "Activity";
  } else if (application.competition) {
    return "Competition";
  }
  return "Unknown";
};

const getActivityName = (application: ApplicationWithDetails): string => {
  if (application.activity) {
    return application.activity.title;
  } else if (application.competition) {
    return application.competition.name;
  }
  return "N/A";
};

export default function ApplicationsSearch({
  applications,
  updateApplicationStatus,
  label = "Applications",
  additionalElements,
}: ApplicationsSearchProps) {
  const [confirmAction, setConfirmAction] = useState<ConfirmAction | null>(
    null
  );
  const [loading, setLoading] = useState(false);

  const sideNav = useOptionalSideNav();

  const handleStatusChange = async (
    id: string,
    status: Status,
    applicantName: string
  ) => {
    const actionMap = {
      [Status.APPROVED]: "approve" as const,
      [Status.REJECTED]: "reject" as const,
      [Status.PENDING]: "pending" as const,
    };

    setConfirmAction({
      id,
      action: actionMap[status],
      applicantName,
    });
  };

  const executeAction = async () => {
    if (!confirmAction) return;

    setLoading(true);
    try {
      const statusMap = {
        approve: Status.APPROVED,
        reject: Status.REJECTED,
        pending: Status.PENDING,
      };
      await updateApplicationStatus(
        confirmAction.id,
        statusMap[confirmAction.action as keyof typeof statusMap]
      );
    } catch (error) {
      console.error("Error executing action:", error);
    } finally {
      setLoading(false);
      setConfirmAction(null);
    }
  };

  // Animate elements on mount
  useEffect(() => {
    gsap.fromTo(
      ".start-left",
      { opacity: 0, x: -30 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        delay: 0.2,
        ease: "power1.out",
        stagger: 0.1,
      }
    );

    gsap.fromTo(
      ".start-right",
      { opacity: 0, x: 30 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        delay: 0.2,
        ease: "power1.out",
        stagger: 0.1,
      }
    );

    gsap.fromTo(
      ".start-bottom",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: 0.2,
        ease: "power1.out",
        stagger: 0.1,
      }
    );
  }, []);

  return (
    <>
      <div className="h-full w-[90vw] max-w-6xl flex flex-col items-start justify-start z-1 pt-10 gap-2">
        <h1
          className={`font-family-impact text-5xl start-left cursor-pointer xl:cursor-default`}
          onClick={sideNav?.handleSideNav}
        >
          {label}
          {sideNav != null && (
            <Image
              src="/dashboard/block-right-arrow.svg"
              alt="Menu Side Nav"
              width={18}
              height={18}
              className="inline-block ml-3 cursor-pointer xl:hidden"
            />
          )}
        </h1>

        <SearchBar<ApplicationWithDetails>
          items={applications}
          className="start-left"
          additionalElements={additionalElements}
          isCentered={false}
        >
          {(filteredApplications) => (
            <div className="rounded-2xl overflow-hidden start-left border-4 border-[#003772] bg-[#0555AB] w-full mt-5">
              <div className="overflow-x-auto thin-scroll">
                <table className="w-full border-collapse table-fixed min-w-[1000px]">
                  <thead className="bg-[#0555AB] text-white">
                    <tr className="border-b-2 border-[#003772]">
                      <th className="w-2/8 border-r-2 border-[#003772] px-4 py-2">
                        Applicant Information
                      </th>
                      <th className="w-2/8 border-r-2 border-[#003772] px-4 py-2">
                        Activity/Competition Name
                      </th>
                      <th className="w-1/8 border-r-2 border-[#003772] px-4 py-2">
                        Type
                      </th>
                      <th className="w-1/8 border-r-2 border-[#003772] px-4 py-2">
                        Status
                      </th>
                      <th className="w-2/8 px-4 py-2">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredApplications.map((application) => (
                      <tr
                        key={application.id}
                        className="bg-white border-b-2 border-[#003772] start-left hover:bg-gray-50 transition-colors"
                      >
                        <td className="border-r-2 border-[#003772] px-4 py-2">
                          <div className="space-y-1">
                            <div className="font-semibold text-sm text-center">
                              {application.user.name || "N/A"}
                            </div>
                            <div className="text-xs text-gray-600 text-center">
                              Email: {application.user.email || "N/A"}
                            </div>
                            <div className="text-xs text-gray-600 text-center">
                              Phone: {application.user.phoneNumber || "N/A"}
                            </div>
                            <div className="text-xs text-gray-600 text-center">
                              NIM: {application.user.nim || "N/A"}
                            </div>
                          </div>
                        </td>
                        <td className="border-r-2 border-[#003772] px-4 py-2">
                          <div className="font-medium text-sm text-center">
                            {getActivityName(application)}
                          </div>
                        </td>
                        <td className="border-r-2 border-[#003772] px-4 py-2 text-center">
                          <span className="inline-block px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                            {getTypeDisplay(application)}
                          </span>
                        </td>
                        <td className="border-r-2 border-[#003772] px-4 py-2 text-center">
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                              application.status
                            )}`}
                          >
                            {application.status}
                          </span>
                        </td>
                        <td className="px-4 py-2">
                          <div className="flex flex-wrap gap-2 justify-center">
                            {/* Approve Button */}
                            <button
                              onClick={() =>
                                handleStatusChange(
                                  application.id,
                                  Status.APPROVED,
                                  application.user.name || "User"
                                )
                              }
                              disabled={application.status === Status.APPROVED}
                              className={`${
                                application.status === Status.APPROVED
                                  ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                                  : "bg-emerald-500 hover:bg-emerald-600 text-white cursor-pointer shadow-md hover:shadow-lg"
                              } rounded-lg px-3 py-2 text-sm font-semibold transition-all duration-200 flex items-center gap-1`}
                              title="Approve Application"
                            >
                              <svg
                                className="w-4 h-4"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </button>

                            {/* Pending Button */}
                            <button
                              onClick={() =>
                                handleStatusChange(
                                  application.id,
                                  Status.PENDING,
                                  application.user.name || "User"
                                )
                              }
                              disabled={application.status === Status.PENDING}
                              className={`${
                                application.status === Status.PENDING
                                  ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                                  : "bg-amber-500 hover:bg-amber-600 text-white cursor-pointer shadow-md hover:shadow-lg"
                              } rounded-lg px-3 py-2 text-sm font-semibold transition-all duration-200 flex items-center gap-1`}
                              title="Set to Pending"
                            >
                              <svg
                                className="w-4 h-4"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </button>

                            {/* Reject Button */}
                            <button
                              onClick={() =>
                                handleStatusChange(
                                  application.id,
                                  Status.REJECTED,
                                  application.user.name || "User"
                                )
                              }
                              disabled={application.status === Status.REJECTED}
                              className={`${
                                application.status === Status.REJECTED
                                  ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                                  : "bg-red-500 hover:bg-red-600 text-white cursor-pointer shadow-md hover:shadow-lg"
                              } rounded-lg px-3 py-2 text-sm font-semibold transition-all duration-200 flex items-center gap-1`}
                              title="Reject Application"
                            >
                              <svg
                                className="w-4 h-4"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </SearchBar>
      </div>

      {/* Confirmation Popup */}
      {confirmAction !== null && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-6 w-96 shadow-lg flex flex-col gap-4">
            <h2 className="text-lg font-bold">Confirm Action</h2>
            <p>
              Are you sure you want to{" "}
              <span className="font-semibold text-blue-600">
                {confirmAction.action}
              </span>{" "}
              the application from{" "}
              <span className="font-semibold">
                {confirmAction.applicantName}
              </span>
              ?
            </p>
            <div className="flex justify-end gap-4">
              <button
                onClick={() => setConfirmAction(null)}
                disabled={loading}
                className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400 disabled:opacity-50"
              >
                Cancel
              </button>
              <button
                onClick={executeAction}
                disabled={loading}
                className={`px-4 py-2 text-white rounded-lg disabled:opacity-50 ${
                  confirmAction.action === "approve"
                    ? "bg-green-500 hover:bg-green-600"
                    : confirmAction.action === "reject"
                    ? "bg-red-500 hover:bg-red-600"
                    : confirmAction.action === "pending"
                    ? "bg-yellow-500 hover:bg-yellow-600"
                    : "bg-[#E93400] hover:bg-red-700"
                }`}
              >
                {loading
                  ? "Processing..."
                  : `${
                      confirmAction.action.charAt(0).toUpperCase() +
                      confirmAction.action.slice(1)
                    }`}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
