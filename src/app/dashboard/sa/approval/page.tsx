'use client';
import React, { useState, useRef, useEffect, FC } from 'react';

// Using a TypeScript enum for status types ensures type safety.
export enum Status {
  Pending = 'Pending',
  Approved = 'Approved',
  Rejected = 'Rejected',
}

// Defining an interface for the Applicant object, now with activityName.
export interface Applicant {
  id: number;
  name: string;
  email: string;
  status: Status;
  activityName: string; // New column added
}

// Mock data for applicants, updated with the new activityName property.
const initialApplicants: Applicant[] = [
  { id: 1, name: 'John Doe', email: 'john.doe@example.com', status: Status.Pending, activityName: 'Community Cleanup' },
  { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', status: Status.Approved, activityName: 'Charity Marathon' },
  { id: 3, name: 'Sam Wilson', email: 'sam.wilson@example.com', status: Status.Rejected, activityName: 'Tech Workshop' },
  { id: 4, name: 'Alice Johnson', email: 'alice.j@example.com', status: Status.Pending, activityName: 'Community Cleanup' },
  { id: 5, name: 'Bob Brown', email: 'bob.brown@example.com', status: Status.Approved, activityName: 'Art Festival' },
];

// Helper to get status color, with the status argument typed.
const getStatusColor = (status: Status): string => {
  switch (status) {
    case Status.Approved:
      return 'bg-green-100 text-green-800';
    case Status.Rejected:
      return 'bg-red-100 text-red-800';
    case Status.Pending:
    default:
      return 'bg-yellow-100 text-yellow-800';
  }
};

// Main App Component - All logic and JSX is now contained here.
export default function App() {
  // --- STATE MANAGEMENT ---
  const [applicants, setApplicants] = useState<Applicant[]>(initialApplicants);
  const [selectedApplicant, setSelectedApplicant] = useState<Applicant | null>(null);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState<boolean>(false);
  const [isStatusModalOpen, setStatusModalOpen] = useState<boolean>(false);
  const [openMenuId, setOpenMenuId] = useState<number | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);

  // --- HANDLERS ---
  const handleStatusChange = (id: number, newStatus: Status) => {
    setApplicants(applicants.map(app => (app.id === id ? { ...app, status: newStatus } : app)));
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

  const confirmDelete = () => {
    if (selectedApplicant) {
      setApplicants(applicants.filter(app => app.id !== selectedApplicant.id));
    }
    setDeleteModalOpen(false);
    setSelectedApplicant(null);
  };

  const confirmStatusChange = (newStatus: Status) => {
    if (selectedApplicant) {
      handleStatusChange(selectedApplicant.id, newStatus);
    }
    setStatusModalOpen(false);
    setSelectedApplicant(null);
  };
  
  // --- EFFECTS ---
  // Effect to close the submenu if clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpenMenuId(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);


  // --- RENDER ---
  return (
    <>
        <div className='h-[6.5vh]'></div>
        <div className="min-h-screen bg-gray-100 p-4 sm:p-6 lg:p-8">
        <div className="max-w-6xl mx-auto">
            <h1 className="text-2xl font-semibold text-gray-800 mb-6">Activity Applicants</h1>
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
                <table className="min-w-full table-auto">
                {/* Table Header */}
                <thead>
                    <tr className="bg-gray-50 text-gray-600 uppercase text-sm leading-normal">
                    <th className="py-3 px-6 text-left">Name</th>
                    <th className="py-3 px-6 text-left">Activity Name</th>
                    <th className="py-3 px-6 text-center">Status</th>
                    <th className="py-3 px-6 text-center">Actions</th>
                    </tr>
                </thead>
                {/* Table Body */}
                <tbody className="text-gray-600 text-sm font-light">
                    {applicants.length > 0 ? (
                    applicants.map(applicant => (
                        <tr key={applicant.id} className="border-b border-gray-200 hover:bg-gray-50">
                        {/* Name & Email */}
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
                        {/* Activity Name */}
                        <td className="py-3 px-6 text-left font-medium">{applicant.activityName}</td>
                        {/* Status */}
                        <td className="py-3 px-6 text-center">
                            <span className={`py-1 px-3 rounded-full text-xs ${getStatusColor(applicant.status)}`}>
                            {applicant.status}
                            </span>
                        </td>
                        {/* Actions */}
                        <td className="py-3 px-6 text-center">
                            <div className="flex item-center justify-center space-x-2">
                            <button onClick={() => handleStatusChange(applicant.id, Status.Rejected)} className="bg-red-500 text-white py-1 px-3 rounded-md hover:bg-red-600 transition duration-200 text-sm">
                                Reject
                            </button>
                            <button onClick={() => handleStatusChange(applicant.id, Status.Approved)} className="bg-green-500 text-white py-1 px-3 rounded-md hover:bg-green-600 transition duration-200 text-sm">
                                Approve
                            </button>
                            {/* Submenu Trigger */}
                            <div className="relative">
                                <button onClick={() => setOpenMenuId(openMenuId === applicant.id ? null : applicant.id)} className="text-gray-500 hover:text-gray-700">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                                </svg>
                                </button>
                                {/* Submenu Panel */}
                                {openMenuId === applicant.id && (
                                <div ref={menuRef} className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10 border border-gray-200">
                                    <div className="py-1">
                                    <button onClick={() => handleChangeStatusClick(applicant)} className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                        Change Status
                                    </button>
                                    <button onClick={() => handleDeleteClick(applicant)} className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100">
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
            </div>
            </div>
        </div>

        {/* --- MODALS --- */}
        {/* Delete Confirmation Modal */}
        {isDeleteModalOpen && (
            <div className="fixed inset-0 bg-gray-900 bg-opacity-25 backdrop-blur-sm z-40 flex justify-center items-center">
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
            <div className="fixed inset-0 bg-gray-900 bg-opacity-25 backdrop-blur-sm z-40 flex justify-center items-center">
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
