'use client';
import React, { useState, useEffect } from 'react';
import DashboardBackground from '@/components/dashboard/DashboardBackground';
import SearchBar from '@/components/SearchBar';
import Image from 'next/image';
import { getUserById } from '@/lib/service/user';
import { getActivityById } from '@/lib/service/activity';
import { getApplications, setStatusApplication, getAmountApprovedApplication, deleteApplication } from '@/lib/service/application';
import { Status } from "@prisma/client";
import { useOptionalSideNav } from '@/lib/contexts/SANavContext';
import gsap from "gsap";

// Applicant interface now represents fully merged data from Application, User, Activity
interface Applicant {
  id: string; // Application ID
  name: string;
  email: string;
  status: Status;
  activityId: string;
  activityName: string;
  activityQuota: number;
  title?: string; // For SearchableItem compatibility
}

// Helpers
const getStatusColor = (status: Status): string => {
  switch (status) {
    case Status.APPROVED:
      return 'bg-green-100 text-green-800';
    case Status.REJECTED:
      return 'bg-red-100 text-red-800';
    case Status.PENDING:
    default:
      return 'bg-yellow-100 text-yellow-800';
  }
};

export default function ApplicationsPage() {
  const [applicants, setApplicants] = useState<Applicant[]>([]);
  const [selectedApplicant, setSelectedApplicant] = useState<Applicant | null>(null);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  const sideNav = useOptionalSideNav();

  // --- FETCH DATA ---
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const apps = await getApplications(); // [{id, userId, activityId, status}]
        const merged: Applicant[] = [];

        for (const app of apps) {
          const user = await getUserById(app.userId);
          const activity = await getActivityById(app.activityId);

          if (!user || !activity) continue;

          merged.push({
            id: app.id,
            name: user.name!,
            email: user.email!,
            status: app.status as Status,
            activityId: app.activityId,
            activityName: activity.title,
            activityQuota: activity.quota,
            title: activity.title, // For search functionality
          });
        }

        setApplicants(merged);  
      } catch (err) {
        console.error('Error fetching applications:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Animate all left-starting cards
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

    // Animate all right-starting cards
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
    
    // Animate all bottom-starting cards
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

  // --- HANDLERS ---
  const handleStatusChange = async (applicant: Applicant, newStatus: Status) => {
    // If approving, check quota first
    if (newStatus === Status.APPROVED) {
      const approvedCount = await getAmountApprovedApplication(applicant.activityId);
      if (approvedCount >= applicant.activityQuota) {
        alert(`Cannot approve more applicants for "${applicant.activityName}". Quota reached.`);
        return;
      }
    }

    const res = await setStatusApplication(applicant.id, newStatus);
    if (res.success) {
      setApplicants(prev =>
        prev.map(app =>
          app.id === applicant.id ? { ...app, status: newStatus } : app
        )
      );
    } else {
      alert(res.error || 'Failed to update status.');
    }
  };

  const handleDeleteClick = (applicant: Applicant) => {
    setSelectedApplicant(applicant);
    setDeleteModalOpen(true);
  };

  const handleDeleteConfirm = async () => {
    if (!selectedApplicant) return;

    const res = await deleteApplication(selectedApplicant.id);
    if (res.success) {
      setApplicants(prev => prev.filter(app => app.id !== selectedApplicant.id));
    } else {
      alert(res.error || 'Failed to delete application.');
    }
    setDeleteModalOpen(false);
    setSelectedApplicant(null);
  };

  return (
    <>
      <div className="overflow-hidden relative flex flex-col items-center justify-start min-h-[93.5vh] w-full bg-[url('/backgrounds/background-paper.png')] bg-cover bg-center bg-[#F1EEE6] m-0 p-0">
        {/* decor image */}
        <DashboardBackground />

        {/* Main content */}
        <div className="h-full w-[90vw] max-w-5xl flex flex-col items-start justify-start z-1 pt-10 gap-2">
          <h1
            className={`font-family-impact text-5xl start-left cursor-pointer xl:cursor-default`}
            onClick={sideNav?.handleSideNav}
          >
            Applications
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

          <SearchBar<Applicant>
            items={applicants}
            placeholder="Search by activity name..."
            getSearchValue={(item) => item.activityName}
            className="start-left"
          >
            {(filteredApplicants) => (
              <div className="rounded-2xl overflow-hidden start-left border-4 border-[#003772] bg-[#0555AB] w-full mt-5">
                {loading ? (
                  <div className="flex justify-center items-center h-64 bg-white">
                    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-[#0555AB]"></div>
                  </div>
                ) : filteredApplicants.length === 0 ? (
                  <div className="text-center py-12 bg-white">
                    <p className="text-gray-500 text-lg">
                      No applications found
                    </p>
                  </div>
                ) : (
                  <div className="overflow-x-auto thin-scroll">
                    <table className="w-full border-collapse table-fixed min-w-[800px]">
                      <thead className="bg-[#0555AB] text-white">
                        <tr className="border-b-2 border-[#003772]">
                          <th className="w-3/8 border-r-2 border-[#003772] px-4 py-2">
                            Applicant
                          </th>
                          <th className="w-2/8 border-r-2 border-[#003772] px-4 py-2">
                            Activity
                          </th>
                          <th className="w-1/8 border-r-2 border-[#003772] px-4 py-2">
                            Status
                          </th>
                          <th className="w-2/8 px-4 py-2">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {filteredApplicants.map((applicant) => (
                          <tr
                            key={applicant.id}
                            className="odd:bg-[#ff7cb9] even:bg-white border-b-2 border-[#003772] start-left"
                          >
                            <td className="border-r-2 border-[#003772] px-4 py-2">
                              <div>
                                <div className="text-sm font-medium text-center text-black">
                                  {applicant.name}
                                </div>
                                <div className="text-sm text-gray-800 text-center">
                                  {applicant.email}
                                </div>
                              </div>
                            </td>
                            <td className="border-r-2 border-[#003772] px-4 py-2">
                              <div className="text-sm text-black text-center">
                                {applicant.activityName}
                              </div>
                              <div className="text-sm text-gray-800 text-center">
                                Quota: {applicant.activityQuota}
                              </div>
                            </td>
                            <td className="border-r-2 border-[#003772] px-4 py-2 text-center">
                              <span
                                className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(
                                  applicant.status
                                )}`}
                              >
                                {applicant.status}
                              </span>
                            </td>
                            <td className="px-4 py-2">
                              <div className="flex gap-2 justify-center">
                                {/* Approve Button */}
                                <button
                                  onClick={() =>
                                    handleStatusChange(
                                      applicant,
                                      Status.APPROVED
                                    )
                                  }
                                  className="bg-green-600 hover:bg-green-700 rounded-md w-[2.5rem] h-[2.5rem] relative cursor-pointer transition-colors duration-200"
                                  title="Approve Application"
                                >
                                  <div className="flex items-center justify-center h-full">
                                    <svg
                                      className="w-4 h-4 text-white"
                                      fill="currentColor"
                                      viewBox="0 0 20 20"
                                    >
                                      <path
                                        fillRule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clipRule="evenodd"
                                      />
                                    </svg>
                                  </div>
                                </button>

                                {/* Reject Button */}
                                <button
                                  onClick={() =>
                                    handleStatusChange(
                                      applicant,
                                      Status.REJECTED
                                    )
                                  }
                                  className="bg-red-600 hover:bg-red-700 rounded-md w-[2.5rem] h-[2.5rem] relative cursor-pointer transition-colors duration-200"
                                  title="Reject Application"
                                >
                                  <div className="flex items-center justify-center h-full">
                                    <svg
                                      className="w-4 h-4 text-white"
                                      fill="currentColor"
                                      viewBox="0 0 20 20"
                                    >
                                      <path
                                        fillRule="evenodd"
                                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                      />
                                    </svg>
                                  </div>
                                </button>

                                {/* Pending Button */}
                                <button
                                  onClick={() =>
                                    handleStatusChange(
                                      applicant,
                                      Status.PENDING
                                    )
                                  }
                                  className="bg-yellow-600 hover:bg-yellow-700 rounded-md w-[2.5rem] h-[2.5rem] relative cursor-pointer transition-colors duration-200"
                                  title="Set as Pending"
                                >
                                  <div className="flex items-center justify-center h-full">
                                    <svg
                                      className="w-4 h-4 text-white"
                                      fill="currentColor"
                                      viewBox="0 0 20 20"
                                    >
                                      <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                                        clipRule="evenodd"
                                      />
                                    </svg>
                                  </div>
                                </button>

                                {/* Delete Button */}
                                <button
                                  onClick={() => handleDeleteClick(applicant)}
                                  className="bg-[#E93400] hover:bg-[#d42d00] rounded-md w-[2.5rem] h-[2.5rem] relative cursor-pointer transition-colors duration-200"
                                  title="Delete Application"
                                >
                                  <Image
                                    src="/achievements/dashboard/trash-logo.svg"
                                    alt="Delete Application"
                                    fill
                                    className="object-contain py-[0.5rem]"
                                  />
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            )}
          </SearchBar>
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      {isDeleteModalOpen && selectedApplicant && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-6 w-96 shadow-lg flex flex-col gap-4">
            <h2 className="text-lg font-bold">Confirm Delete</h2>
            <p>
              Are you sure you want to delete the application from{" "}
              <strong>{selectedApplicant.name}</strong> for{" "}
              <strong>{selectedApplicant.activityName}</strong>? This action
              cannot be undone.
            </p>
            <div className="flex justify-end gap-4">
              <button
                onClick={() => setDeleteModalOpen(false)}
                className="px-4 py-2 bg-gray-300 rounded-lg"
              >
                Cancel
              </button>
              <button
                onClick={handleDeleteConfirm}
                className="px-4 py-2 bg-[#E93400] text-white rounded-lg"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
