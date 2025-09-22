"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { User } from "@/types/service/user";
import { Activity } from "@/types/service/activity";
import { Competition } from "@/types/service/competition";
import { Application } from "@/types/service/application";
import EditProfileModal from "@/components/dashboard/EditProfileModal";
import DeleteButtonWithConfirmation from "@/components/dashboard/DeleteButtonWithConfirmation";

interface StudentDashboardClientProps {
  userInfo: User;
  activityApplications: Application[];
  competitionApplications: Application[];
  activities: Activity[];
  competitions: Competition[];
  stats: {
    total: number;
    approved: number;
    pending: number;
    rejected: number;
  };
  activityStats: {
    total: number;
    approved: number;
    pending: number;
    rejected: number;
  };
  competitionStats: {
    total: number;
    approved: number;
    pending: number;
    rejected: number;
  };
}

export default function StudentDashboardClient({
  userInfo,
  activityApplications,
  competitionApplications,
  activities,
  competitions,
  stats,
}: StudentDashboardClientProps) {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  // Helper function to render application table
  const renderApplicationTable = (
    applications: Application[],
    items: (Activity | Competition)[],
    type: 'activity' | 'competition'
  ) => {
    if (applications.length === 0) {
      return (
        <div className="text-center py-16">
          <div className="mb-6">
            <div className="mx-auto w-32 h-32 bg-gradient-to-br from-[#F8A5C2]/20 to-[#0555AB]/20 rounded-full flex items-center justify-center mb-6 shadow-lg">
              <svg
                className="w-16 h-16 text-[#0555AB]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
          </div>
          <h3 className="text-2xl font-bold text-[#0555AB] mb-3 font-family-impact">
            No {type === 'activity' ? 'Activity' : 'Competition'} Applications Yet
          </h3>
          <p className="text-gray-600 mb-8 text-lg font-family-gill max-w-md mx-auto">
            You haven&apos;t applied for any {type === 'activity' ? 'activities' : 'competitions'} yet. Start
            exploring opportunities and build your experience!
          </p>
          <Link
            href={`/${type === 'activity' ? 'activities' : 'competitions'}`}
            className="inline-flex items-center bg-[#0555AB] hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1 font-family-gill"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            Browse {type === 'activity' ? 'Activities' : 'Competitions'}
          </Link>
        </div>
      );
    }

    return (
      <div className="overflow-hidden rounded-xl border-2 md:border-4 border-[#0555AB] shadow-lg">
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="bg-gradient-to-r from-[#0555AB] to-blue-700">
                <th className="text-xs md:text-sm font-bold text-white uppercase px-4 md:px-8 py-3 md:py-4 text-left tracking-wider">
                  <span>Title</span>
                </th>
                <th className="text-xs md:text-sm font-bold text-white uppercase px-4 md:px-8 py-3 md:py-4 text-center tracking-wider">
                  <div className="flex items-center justify-center space-x-2">
                    <span>Status</span>
                  </div>
                </th>
                <th className="text-xs md:text-sm font-bold text-white uppercase px-4 md:px-8 py-3 md:py-4 text-center tracking-wider">
                  <div className="flex items-center justify-center space-x-2">
                    <span className="hidden sm:inline">Applied Date</span>
                    <span className="sm:hidden">Date</span>
                  </div>
                </th>
                <th className="text-xs md:text-sm font-bold text-white uppercase px-4 md:px-8 py-3 md:py-4 text-center tracking-wider">
                  <div className="flex items-center justify-center space-x-2">
                    <span>Actions</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {applications.map((app, idx) => {
                const item = items[idx];
                return (
                  <tr
                    key={app.id}
                    className="border-b-2 border-[#0555AB]/20 bg-white hover:bg-black/10 transition-colors duration-200"
                  >
                    <td className="px-4 md:px-8 py-4 md:py-6">
                      <div>
                        <div className="font-bold text-[#0555AB] text-sm md:text-lg">
                          {type === 'activity' 
                            ? (item as Activity)?.title || "Unknown Activity"
                            : (item as Competition)?.name || "Unknown Competition"
                          }
                        </div>
                      </div>
                    </td>
                    <td className="px-4 md:px-8 py-4 md:py-6 text-center">
                      <span
                        className={`inline-flex items-center px-2 md:px-4 py-1 md:py-2 rounded-full text-xs md:text-sm font-bold shadow-md ${
                          app.status === "APPROVED"
                            ? "bg-green-100 text-green-800 border-2 border-green-200"
                            : app.status === "REJECTED"
                            ? "bg-red-100 text-red-800 border-2 border-red-200"
                            : "bg-yellow-100 text-yellow-800 border-2 border-yellow-200"
                        }`}
                      >
                        {app.status === "APPROVED" && (
                          <svg
                            className="w-3 h-3 md:w-4 md:h-4 mr-1"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        )}
                        {app.status === "REJECTED" && (
                          <svg
                            className="w-3 h-3 md:w-4 md:h-4 mr-1"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                        )}
                        {app.status === "PENDING" && (
                          <svg
                            className="w-3 h-3 md:w-4 md:h-4 mr-1"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                              clipRule="evenodd"
                            />
                          </svg>
                        )}
                        <span className="hidden sm:inline">{app.status}</span>
                        <span className="sm:hidden">{app.status.substring(0, 3)}</span>
                      </span>
                    </td>
                    <td className="px-4 md:px-8 py-4 md:py-6 text-center">
                      <div className="flex items-center justify-center space-x-1 md:space-x-2 text-gray-600">
                        <span className="font-medium text-xs md:text-sm">
                          {app.createdAt
                            ? new Date(app.createdAt).toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "short",
                                day: "numeric",
                              })
                            : "N/A"}
                        </span>
                      </div>
                    </td>
                    <td className="px-4 md:px-8 py-4 md:py-6">
                      <div className="flex justify-center">
                        <DeleteButtonWithConfirmation applicationId={app.id} />
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="min-h-screen bg-[#F1EEE6] bg-[url('/backgrounds/background-paper.png')] bg-cover bg-center">
        <div className="h-[6vh] bg-[#F1EEE6] w-full"></div>

        <div className="flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 lg:p-[5%]">
          {/* User Info Section */}
          <div className="w-full mb-8">
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 sm:p-6 md:p-8 shadow-xl border-4 border-[#0555AB] relative overflow-hidden">
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#F8A5C2]/20 to-[#0555AB]/20 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-[#0555AB]/10 to-[#F8A5C2]/10 rounded-full translate-y-12 -translate-x-12"></div>

              <div className="relative z-10">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 flex-1 relative">
                    {/* Mobile Edit Button */}
                    <button
                      onClick={() => setIsEditModalOpen(true)}
                      className="absolute top-0 right-0 md:hidden flex items-center justify-center w-8 h-8 bg-transparent hover:bg-blue-50 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg group z-10"
                    >
                      <Image
                        src="/achievements/dashboard/pencil-logo.svg"
                        alt="Edit Profile"
                        width={14}
                        height={14}
                        className="object-contain filter invert group-hover:scale-110 transition-transform"
                      />
                    </button>

                    <div className="relative">
                      <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-[#0555AB] to-[#F8A5C2] p-1 shadow-lg">
                        <Image
                          src={userInfo?.image || "/placeholder/person.png"}
                          alt="Profile"
                          width={80}
                          height={80}
                          className="rounded-full w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-5 h-5 md:w-6 md:h-6 bg-green-500 border-2 md:border-3 border-white rounded-full shadow-md"></div>
                    </div>
                    <div className="text-center sm:text-left">
                      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-family-impact text-[#0555AB] mb-1">
                        Welcome back,{" "}
                        {userInfo?.name?.split(" ")[0] || "Student"}! 👋
                      </h1>
                      <p className="text-gray-700 font-family-gill text-sm sm:text-base md:text-lg flex items-center justify-center sm:justify-start">
                        <svg
                          className="w-4 h-4 mr-2 text-gray-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                        <span className="break-all">{userInfo?.email}</span>
                      </p>
                    </div>
                  </div>

                  {/* Desktop Edit Button */}
                  <button
                    onClick={() => setIsEditModalOpen(true)}
                    className="hidden md:flex items-center justify-center w-14 h-14 lg:w-16 lg:h-16 bg-transparent hover:bg-blue-50 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg ml-4 flex-shrink-0 group"
                  >
                    <Image
                      src="/achievements/dashboard/pencil-logo.svg"
                      alt="Edit Profile"
                      width={20}
                      height={20}
                      className="object-contain filter invert w-6 h-6 lg:w-7 lg:h-7 group-hover:scale-110 transition-transform"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Statistics Cards */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8 md:mb-10">
            <div className="group bg-white border-4 border-[#0555AB] rounded-xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#0555AB]/5 to-transparent"></div>
              <div className="relative z-10 text-center">
                <div className="flex items-center justify-center mb-2 md:mb-3">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-[#0555AB]/10 rounded-full flex items-center justify-center group-hover:bg-[#0555AB]/20 transition-colors">
                    <svg
                      className="w-5 h-5 md:w-6 md:h-6 text-[#0555AB]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0555AB] mb-1 md:mb-2 group-hover:scale-110 transition-transform">
                  {stats.total}
                </div>
                <div className="text-xs md:text-sm font-semibold text-gray-700 uppercase tracking-wide">
                  Total Applications
                </div>
              </div>
            </div>

            <div className="group bg-white border-4 border-green-600 rounded-xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent"></div>
              <div className="relative z-10 text-center">
                <div className="flex items-center justify-center mb-2 md:mb-3">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-green-500/10 rounded-full flex items-center justify-center group-hover:bg-green-500/20 transition-colors">
                    <svg
                      className="w-5 h-5 md:w-6 md:h-6 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-green-600 mb-1 md:mb-2 group-hover:scale-110 transition-transform">
                  {stats.approved}
                </div>
                <div className="text-xs md:text-sm font-semibold text-gray-700 uppercase tracking-wide">
                  Approved
                </div>
              </div>
            </div>

            <div className="group bg-white border-4 border-yellow-500 rounded-xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 to-transparent"></div>
              <div className="relative z-10 text-center">
                <div className="flex items-center justify-center mb-2 md:mb-3">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-yellow-400/10 rounded-full flex items-center justify-center group-hover:bg-yellow-400/20 transition-colors">
                    <svg
                      className="w-5 h-5 md:w-6 md:h-6 text-yellow-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-yellow-600 mb-1 md:mb-2 group-hover:scale-110 transition-transform">
                  {stats.pending}
                </div>
                <div className="text-xs md:text-sm font-semibold text-gray-700 uppercase tracking-wide">
                  Pending
                </div>
              </div>
            </div>

            <div className="group bg-white border-4 border-red-500 rounded-xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent"></div>
              <div className="relative z-10 text-center">
                <div className="flex items-center justify-center mb-2 md:mb-3">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-red-500/10 rounded-full flex items-center justify-center group-hover:bg-red-500/20 transition-colors">
                    <svg
                      className="w-5 h-5 md:w-6 md:h-6 text-red-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-red-600 mb-1 md:mb-2 group-hover:scale-110 transition-transform">
                  {stats.rejected}
                </div>
                <div className="text-xs md:text-sm font-semibold text-gray-700 uppercase tracking-wide">
                  Rejected
                </div>
              </div>
            </div>
          </div>

          {/* Activity Applications Section */}
          <div className="w-full mb-8 bg-white/95 backdrop-blur-sm rounded-2xl p-4 sm:p-6 md:p-8 shadow-xl border-4 border-[#0555AB] relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-[#F8A5C2]/10 to-transparent rounded-full -translate-y-20 translate-x-20"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-[#0555AB]/10 to-transparent rounded-full translate-y-16 -translate-x-16"></div>

            <div className="relative z-10">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 md:mb-8 space-y-4 sm:space-y-0">
                <div className="flex items-center space-x-3 md:space-x-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-[#0555AB] rounded-xl flex items-center justify-center shadow-lg">
                    <svg
                      className="w-5 h-5 md:w-6 md:h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                  </div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-family-impact text-[#0555AB]">
                    Activity Applications
                  </h2>
                </div>
                {activityApplications.length > 0 && (
                  <div className="hidden md:flex items-center space-x-2 bg-[#F8A5C2]/20 rounded-lg px-4 py-2 border border-[#F8A5C2]/30">
                    <span className="text-sm font-medium text-[#0555AB]">
                      {activityApplications.length} Activity Applications
                    </span>
                  </div>
                )}
              </div>
              {renderApplicationTable(
                activityApplications,
                activities,
                "activity"
              )}
            </div>
          </div>

          {/* Competition Applications Section */}
          <div className="w-full bg-white/95 backdrop-blur-sm rounded-2xl p-4 sm:p-6 md:p-8 shadow-xl border-4 border-[#0555AB] relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-[#0555AB]/10 to-transparent rounded-full -translate-y-20 translate-x-20"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-[#F8A5C2]/10 to-transparent rounded-full translate-y-16 -translate-x-16"></div>

            <div className="relative z-10">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 md:mb-8 space-y-4 sm:space-y-0">
                <div className="flex items-center space-x-3 md:space-x-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-[#0555AB] rounded-xl flex items-center justify-center shadow-lg">
                    <svg
                      className="w-5 h-5 md:w-6 md:h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                      />
                    </svg>
                  </div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-family-impact text-[#0555AB]">
                    Competition Applications
                  </h2>
                </div>
                {competitionApplications.length > 0 && (
                  <div className="hidden md:flex items-center space-x-2 bg-[#0555AB]/20 rounded-lg px-4 py-2 border border-[#0555AB]/30">
                    <span className="text-sm font-medium text-[#0555AB]">
                      {competitionApplications.length} Competition Applications
                    </span>
                  </div>
                )}
              </div>
              {renderApplicationTable(
                competitionApplications,
                competitions,
                "competition"
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Edit Profile Modal */}
      <EditProfileModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        userInfo={userInfo}
      />
    </>
  );
}
