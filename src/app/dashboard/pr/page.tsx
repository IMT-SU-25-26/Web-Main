import Link from "next/link";
import AchievementList from "@/components/achievement/AchievementList";
import SkeletonLoader from "@/components/utils/SkeletonLoader";
import { Suspense } from "react";
import Image from "next/image";

export default function AchievementsPage() {
  const rows = [
    { id: 1, title: "UI Design Contest Winner" },
    { id: 2, title: "Top 10 Hackathon 2025" },
    { id: 3, title: "Dean's List Semester 2" },
    { id: 4, title: "Open Source Contributor" },
    { id: 5, title: "Best Paper Presentation" },
    { id: 6, title: "Android App Release" },
    { id: 7, title: "Web Performance Award" },
    { id: 8, title: "Community Tutor" },
  ];

  return (
    <div className="container mx-auto px-4 py-8 pt-[12vh]">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Achievements</h1>
          <p className="text-gray-600 mt-2">Manage and view all achievements</p>
        </div>
        <Link
          href="/dashboard/pr/create"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors shadow-sm"
        >
          Create New Achievement
        </Link>
      </div>

      {/* <Suspense fallback={<SkeletonLoader />}>
        <AchievementList />
      </Suspense> */}

      {/* Tabel statis */}
      <div className="mt-8">
        <div className="rounded-2xl border-2 border-blue-700 overflow-hidden shadow-sm">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-[#0A56A7] text-white">
                <th className="p-4 text-left">ID</th>
                <th className="p-4 text-left">Title</th>
                <th className="p-4 text-center">Action Buttons</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={r.id} className={i % 2 === 0 ? "bg-pink-300" : "bg-white"}>
                  <td className="p-4 border border-blue-700">{r.id}</td>
                  <td className="p-4 border border-blue-700">{r.title}</td>
                  <td className="p-4 border border-blue-700">
                    <div className="flex items-center justify-center gap-3">
                      <div className="inline-flex items-center justify-center rounded-md p-2 w-10 h-9 bg-[#0A56A7] text-white">
                        <Image src="/dashboard/pr/pencil.svg" alt="pencil" width={20} height={20} />
                      </div>
                      <div className="inline-flex items-center justify-center rounded-md p-2 w-10 h-9 bg-[#E63910] text-white">
                        <Image src="/dashboard/pr/trash.svg" alt="trash" width={20} height={20} />
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}