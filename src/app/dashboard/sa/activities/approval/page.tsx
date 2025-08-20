'use client';
import React, { useState, useRef, useEffect } from 'react';
import { getUserById } from '@/lib/service/user';
import { getActivityById } from '@/lib/service/activity';
import { getApplications, setStatusApplication, getAmountApprovedApplication, deleteApplication } from '@/lib/service/application';
import { Status } from "@prisma/client";

// Applicant interface now represents fully merged data from Application, User, Activity
interface Applicant {
  id: string; // Application ID
  name: string;
  email: string;
  status: Status;
  activityId: string;
  activityName: string;
  activityQuota: number;
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

export default function App() {
  const [applicants, setApplicants] = useState<Applicant[]>([]);
  const [selectedApplicant, setSelectedApplicant] = useState<Applicant | null>(null);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [isStatusModalOpen, setStatusModalOpen] = useState(false);
  const [openMenuId, setOpenMenuId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const menuRef = useRef<HTMLDivElement | null>(null);

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
    setOpenMenuId(null);
  };

  const handleChangeStatusClick = (applicant: Applicant) => {
    setSelectedApplicant(applicant);
    setStatusModalOpen(true);
    setOpenMenuId(null);
  };

  const confirmDelete = async () => {
    if (selectedApplicant) {
      const res = await deleteApplication(selectedApplicant.id);
      if (res.success) {
        setApplicants(prev =>
          prev.filter(app => app.id !== selectedApplicant.id)
        );
      } else {
        alert(res.error || 'Failed to delete application.');
      }
    }
    setDeleteModalOpen(false);
    setSelectedApplicant(null);
  };

  const confirmStatusChange = async (newStatus: Status) => {
    if (selectedApplicant) {
      await handleStatusChange(selectedApplicant, newStatus);
    }
    setStatusModalOpen(false);
    setSelectedApplicant(null);
  };

  // --- EFFECTS ---
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpenMenuId(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);


  // for adjusting the height of the table container when the menu is open
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [baseHeight, setBaseHeight] = useState<number | null>(null);

  useEffect(() => {
    if (containerRef.current) {
      setBaseHeight(containerRef.current.offsetHeight);
    }
  }, []);

  // --- RENDER ---
  return (
    <>
      <div className='h-[6.5vh]'></div>
      <div className="min-h-[90vh] w-full bg-gray-100 p-4 sm:p-6 lg:p-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-2xl font-semibold text-gray-800 mb-6">Activity Applicants</h1>
          <div className="bg-white shadow-md rounded-lg">
          <div
            ref={containerRef}
            className="overflow-x-auto transition-all duration-300"
          >
              {loading ? (
                <div className="p-6 text-center text-gray-500">Loading...</div>
              ) : (
                <table className="min-w-full table-auto">
                  <thead>
                    <tr className="bg-gray-50 text-gray-600 uppercase text-sm leading-normal">
                      <th className="py-3 px-6 text-left">Name</th>
                      <th className="py-3 px-6 text-left">Activity Name</th>
                      <th className="py-3 px-6 text-center">Status</th>
                      <th className="py-3 px-6 text-center">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-600 text-sm font-light">
                    {applicants.length > 0 ? (
                      applicants.map(applicant => (
                        <tr key={applicant.id} className="border-b border-gray-200 hover:bg-gray-50">
                          <td className="py-3 px-6 text-left">
                            <div className="flex items-center">
                              <div className="mr-4">
                                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center font-bold text-gray-500">
                                  {applicant.name.charAt(0)}
                                </div>
                              </div>
                              <div>
                                <div className="font-medium text-gray-800">{applicant.name}</div>
                                <div className="text-sm text-gray-500">{applicant.email}</div>
                              </div>
                            </div>
                          </td>
                          <td className="py-3 px-6 text-left font-medium">{applicant.activityName}</td>
                          <td className="py-3 px-6 text-center">
                            <span className={`py-1 px-3 rounded-full text-xs ${getStatusColor(applicant.status)}`}>
                              {applicant.status}
                            </span>
                          </td>
                          <td className="py-3 px-6 text-center">
                            <div className="flex item-center justify-center space-x-2">
                              <button
                                onClick={() => handleStatusChange(applicant, Status.REJECTED)}
                                className="bg-red-500 text-white py-1 px-3 rounded-md hover:bg-red-600 transition duration-200 text-sm"
                              >
                                Reject
                              </button>
                              <button
                                onClick={() => handleStatusChange(applicant, Status.APPROVED)}
                                className="bg-green-500 text-white py-1 px-3 rounded-md hover:bg-green-600 transition duration-200 text-sm"
                              >
                                Approve
                              </button>
                              <div className="relative">
                                <button
                                  onClick={() => setOpenMenuId(openMenuId === applicant.id ? null : applicant.id)}
                                  className="text-gray-500 hover:text-gray-700"
                                >
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                                  </svg>
                                </button>
                                {openMenuId === applicant.id && (
                                  <div ref={menuRef} className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10 border border-gray-200">
                                    <div className="py-1">
                                      <button
                                        onClick={() => handleChangeStatusClick(applicant)}
                                        className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                      >
                                        Change Status
                                      </button>
                                      <button
                                        onClick={() => handleDeleteClick(applicant)}
                                        className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                                      >
                                        Delete Application
                                      </button>
                                    </div>
                                  </div>
                                )}
                              </div>
                            </div>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={4} className="text-center py-6 text-gray-500">
                          No applicants found.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        </div>

        {/* Delete Confirmation Modal */}
        {isDeleteModalOpen && (
          <div className="fixed inset-0 bg-opacity-0 backdrop-blur-sm z-40 flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg shadow-xl">
              <h3 className="text-lg font-medium text-gray-900">Confirm Deletion</h3>
              <p className="mt-2 text-sm text-gray-600">Are you sure you want to delete this application?</p>
              <div className="mt-4 flex justify-end space-x-2">
                <button onClick={() => setDeleteModalOpen(false)} className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300">Cancel</button>
                <button onClick={confirmDelete} className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700">Delete</button>
              </div>
            </div>
          </div>
        )}

        {/* Status Change Modal */}
        {isStatusModalOpen && selectedApplicant && (
          <div className="fixed inset-0 bg-opacity-0 backdrop-blur-sm z-40 flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-sm">
              <h3 className="text-lg font-medium text-gray-900">Change Status for {selectedApplicant.name}</h3>
              <div className="mt-4">
                <select
                  defaultValue={selectedApplicant.status}
                  onChange={(e) => confirmStatusChange(e.target.value as Status)}
                  className="w-full p-2 border border-gray-300 rounded-md"
                >
                  {Object.values(Status).map(status => (
                    <option key={status} value={status}>{status}</option>
                  ))}
                </select>
              </div>
              <div className="mt-6 flex justify-end">
                <button onClick={() => setStatusModalOpen(false)} className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300">Close</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
