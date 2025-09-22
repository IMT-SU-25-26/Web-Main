"use client";

import { useState } from "react";
import { updateUser } from "@/lib/service/user";
import { User } from "@/types/service/user";

interface EditProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  userInfo: User;
  onSuccess?: () => void;
}

export default function EditProfileModal({
  isOpen,
  onClose,
  userInfo,
  onSuccess,
}: EditProfileModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (!isOpen) return null;

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const formData = new FormData(event.currentTarget);

    try {
      const result = await updateUser(userInfo.id, formData);

      if (result.success) {
        onSuccess?.();
        onClose();
        window.location.reload();
      } else {
        setError(result.error || "Failed to update profile");
      }
    } catch {
      setError("An unexpected error occurred");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl shadow-2xl border-4 border-[#0555AB] w-full max-w-md relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#F8A5C2]/20 to-transparent rounded-full -translate-y-12 translate-x-12"></div>
        <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-[#0555AB]/10 to-transparent rounded-full translate-y-10 -translate-x-10"></div>

        <div className="relative z-10 p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-[#0555AB] rounded-xl flex items-center justify-center shadow-lg">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  />
                </svg>
              </div>
              <h2 className="text-xl font-bold font-family-impact text-[#0555AB]">
                Edit Profile
              </h2>
            </div>
            <button
              onClick={onClose}
              className="flex items-center justify-center w-8 h-8 bg-gray-500 hover:bg-gray-600 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
            >
              <svg
                className="w-4 h-4 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Error Message */}
          {error && (
            <div className="mb-4 p-3 bg-red-100 border border-red-300 rounded-lg">
              <p className="text-red-700 text-sm">{error}</p>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* NIM Field */}
            <div>
              <label
                htmlFor="nim"
                className="block text-sm font-bold text-[#0555AB] mb-2"
              >
                NIM (Student ID)
              </label>
              <input
                type="text"
                id="nim"
                name="nim"
                defaultValue={userInfo.nim || ""}
                placeholder="Enter your NIM (numbers only, 13 characters)"
                className="w-full px-3 py-2 border-2 border-[#0555AB]/30 rounded-lg focus:border-[#0555AB] focus:outline-none transition-colors bg-white/90 text-gray-900 placeholder-gray-500 text-sm"
                disabled={isSubmitting}
              />
              <p className="text-xs text-gray-600 mt-1">
                Make sure your NIM is 13 digits long
              </p>
            </div>

            {/* Phone Number Field */}
            <div>
              <label
                htmlFor="phoneNumber"
                className="block text-sm font-bold text-[#0555AB] mb-2"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                defaultValue={userInfo.phoneNumber || ""}
                placeholder="Enter your phone number (e.g., +62 812 3456 7890)"
                className="w-full px-3 py-2 border-2 border-[#0555AB]/30 rounded-lg focus:border-[#0555AB] focus:outline-none transition-colors bg-white/90 text-gray-900 placeholder-gray-500 text-sm"
                disabled={isSubmitting}
              />
              <p className="text-xs text-gray-600 mt-1">
                Include country code for international numbers
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-3 pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 bg-[#0555AB] hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-1 font-family-gill text-sm"
              >
                {isSubmitting ? "Saving..." : "Save Changes"}
              </button>
              <button
                type="button"
                onClick={onClose}
                disabled={isSubmitting}
                className="flex-1 bg-gray-500 hover:bg-gray-600 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-1 font-family-gill text-sm"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
