"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Achievement } from "@/types/achievement";
import { deleteAchievement } from "@/lib/service/achievement";

interface AchievementListProps {
  achievements: Achievement[];
}

export default function AchievementList({
  achievements,
}: AchievementListProps) {
  const [filteredAchievements, setFilteredAchievements] =
    useState<Achievement[]>(achievements);
  const [searchTerm, setSearchTerm] = useState("");
  const [deletingId, setDeletingId] = useState<string | null>(null);

  useEffect(() => {
    const filtered = achievements.filter((achievement) =>
      achievement.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredAchievements(filtered);
  }, [searchTerm, achievements]);

  const handleDelete = async (id: string, title: string) => {
    if (!confirm(`Are you sure you want to delete "${title}"?`)) {
      return;
    }

    setDeletingId(id);
    try {
      const result = await deleteAchievement(id);

      if (result.success) {
        // Remove from local state
        setFilteredAchievements((prev) =>
          prev.filter((achievement) => achievement.id !== id)
        );
        alert(result.message || "Achievement deleted successfully!");
      } else {
        alert(result.error || "Failed to delete achievement");
      }
    } catch (error) {
      console.error("Delete error:", error);
      alert("Failed to delete achievement. Please try again.");
    } finally {
      setDeletingId(null);
    }
  };

  if (achievements.length === 0) {
    return (
      <div className="text-center py-20 px-6">
        <div className="w-32 h-32 mx-auto mb-8 text-gray-300 animate-pulse">
          <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            className="w-full h-full"
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        </div>
        <h3 className="text-3xl font-bold text-gray-900 mb-4">
          No achievements yet
        </h3>
        <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
          Get started by creating your first achievement and showcase your
          accomplishments.
        </p>
        <Link
          href="/dashboard/pr/create"
          className="inline-flex items-center px-8 py-3 text-base font-semibold rounded-xl text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
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
              d="M12 4v16m8-8H4"
            />
          </svg>
          Create Achievement
        </Link>
      </div>
    );
  }

  return (
    <div className="mt-8 mb-10">
      {/* Search Bar */}
      <div className="mb-6 flex justify-center z-30 relative">
        <div className="relative w-[80%] sm:w-[40%] flex gap-4">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg
              className="h-5 w-5 text-[#E93400]"
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
          </div>
          <input
            type="text"
            placeholder="Search achievements..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="block w-full pl-10 pr-3 py-2 border-3 border-[#E93400] rounded-xl leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-orange-500 focus:border-orange-500"
          />
          <Link
            href="/dashboard/pr/create"
            className="flex items-center hover:scale-110 transition-transform duration-200"
          >
            <Image
              src="/dashboard/pr/plus.svg"
              alt="plus"
              width={20}
              height={20}
              className="w-[2.5rem]"
            />
          </Link>
        </div>
      </div>

      {/* Table */}
      <div className="rounded-2xl border-2 border-blue-700 overflow-x-auto shadow-sm z-[20] relative">
        <table className="w-full border-collapse z-[20] relative">
          <thead>
            <tr className="bg-[#0555AB] text-white">
              <th className="p-4 text-center">ID</th>
              <th className="p-4 text-center">Title</th>
              <th className="p-4 text-center">Action Buttons</th>
            </tr>
          </thead>
          <tbody>
            {filteredAchievements.map((achievement, index) => (
              <tr
                key={achievement.id}
                className={index % 2 === 0 ? "bg-[#ED4291ae]" : "bg-white"}
              >
                <td className="p-4 text-center border border-blue-700 w-[8rem]">
                  {achievement.id}
                </td>
                <td className="p-4 text-center border border-blue-700 w-[40rem]">
                  {achievement.title}
                </td>
                <td className="p-4 text-center border border-blue-700">
                  <div className="flex items-center justify-center gap-8">
                    <Link
                      href={`/dashboard/pr/${achievement.id}/edit`}
                      className="inline-flex items-center justify-center rounded-md p-2 w-15 h-9 bg-[#0A56A7] text-white hover:bg-blue-800 transition-colors"
                    >
                      <Image
                        src="/dashboard/pr/pencil.svg"
                        alt="pencil"
                        width={20}
                        height={20}
                      />
                    </Link>
                    <button
                      onClick={() =>
                        handleDelete(achievement.id, achievement.title)
                      }
                      disabled={deletingId === achievement.id}
                      className="inline-flex items-center justify-center rounded-md p-2 w-15 h-9 bg-[#E63910] text-white hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {deletingId === achievement.id ? (
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <Image
                          src="/dashboard/pr/trash.svg"
                          alt="trash"
                          width={20}
                          height={20}
                        />
                      )}
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* No results message */}
      {filteredAchievements.length === 0 && searchTerm && (
        <div className="text-center py-8">
          <p className="text-gray-500">
            No achievements found matching &quot;{searchTerm}&quot; Title
          </p>
        </div>
      )}
    </div>
  );
}
