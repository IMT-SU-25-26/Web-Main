import { getApplicationsByUserId } from "@/lib/service/application";
import { getActivityById } from "@/lib/service/activity";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import DeleteButtonWithConfirmation from "@/components/dashboard/DeleteButtonWithConfirmation";

export default async function StudentDashboard() {
  const session = await getServerSession(authOptions);

  if (!session?.user?.id) {
    // You can redirect, throw, or return an error UI here
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-red-600">User session not found.</p>
      </div>
    );
  }

  const applications = await getApplicationsByUserId(session.user.id);

  // Fetch activities for all applications
  const activities = await Promise.all(
    applications.map((app) => getActivityById(app.activityId))
  );

  return (
    <div className="min-h-screen bg-[#F1EEE6] bg-[url('/backgrounds/background-paper.png')] bg-cover bg-center flex flex-col">
      <div className="h-[6vh] bg-[#F1EEE6] w-full"></div>
      <div className="flex flex-col items-center justify-center p-[5%]">
        <h1 className="text-6xl w-full text-start font-bold font-family-impact mb-6 text-black">
          Your Applications
        </h1>
        <div className="w-full">
          {applications.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16">
              <p className="text-2xl font-family-gill text-gray-700 text-center mb-2">
                You have not applied for anything yet
              </p>
            </div>
          ) : (
            <>
              <div className="overflow-x-auto min-h-[300px]">
                <table
                  className="min-w-full table-auto"
                  style={{
                    borderCollapse: "separate",
                    borderSpacing: 0,
                    borderRadius: 16,
                    overflow: "hidden",
                    border: "4px solid #1e40af", // blue-800, thicker outer border
                    boxShadow: "0 2px 8px rgba(0,0,0,0.03)",
                  }}
                >
                  <thead>
                    <tr>
                      <th className="text-xs font-semibold text-white uppercase px-6 py-3 text-center bg-[#0555AB] border-b-2 border-blue-800 first:rounded-tl-xl last:rounded-tr-xl">
                        Title
                      </th>
                      <th className="text-xs font-semibold text-white uppercase px-6 py-3 text-center bg-[#0555AB] border-b-2 border-blue-800">
                        Status
                      </th>
                      <th className="text-xs font-semibold text-white uppercase px-6 py-3 text-center bg-[#0555AB] border-b-2 border-blue-800">
                        Date
                      </th>
                      <th className="text-xs font-semibold text-white uppercase px-6 py-3 text-center bg-[#0555AB] border-b-2 border-blue-800">
                        Action Buttons
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {applications.map((app, idx) => {
                      const activity = activities[idx];
                      return (
                        <tr
                          key={app.id}
                          className={`${
                            idx % 2 === 0 ? "bg-[#F8A5C2]" : "bg-white"
                          }`}
                          style={{
                            borderBottom: "2px solid #1e40af", // blue-800
                          }}
                        >
                          <td className="font-medium px-6 py-4 border-r-2 border-blue-800 first:rounded-bl-xl text-center">
                            {activity?.title || "-"}
                          </td>
                          <td className="px-6 py-4 border-r-2 border-blue-800 text-center">
                            <span
                              className={`inline-block px-3 py-1 rounded-lg text-xs font-semibold
                          ${
                            app.status === "PENDING"
                              ? idx % 2 === 0
                                ? "bg-white text-yellow-900"
                                : "bg-[#e1cadd] text-black"
                              : app.status === "REJECTED"
                              ? idx % 2 === 0
                                ? "bg-white text-yellow-900"
                                : "bg-[#e1cadd] text-black"
                              : app.status === "APPROVED"
                              ? idx % 2 === 0
                                ? "bg-white text-yellow-900"
                                : "bg-[#e1cadd] text-black"
                              : idx % 2 === 0
                              ? "bg-white text-yellow-900"
                              : "bg-[#e1cadd] text-black"
                          }
                        `}
                              style={{ minWidth: "100px" }}
                            >
                              {app.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 border-r-2 border-blue-800 text-center">
                            {app.createdAt
                              ? new Date(app.createdAt).toLocaleDateString()
                              : "-"}
                          </td>
                            <td className="px-6 w-full h-full last:rounded-br-xl md:px-6 md:py-4 md:flex md:justify-center md:items-center">
                              <div className="flex justify-center w-auto items-center h-full md:w-auto md:h-auto">
                                <DeleteButtonWithConfirmation applicationId={app.id} />
                              </div>
                            </td>
                        </tr>
                      );
                    })}

                    {/* Empty rows */}
                    {applications.length < 4 &&
                      Array(4 - applications.length)
                        .fill(0)
                        .map((_, index) => (
                          <tr
                            key={`empty-${index}`}
                            className={`${
                              (index + applications.length) % 2 === 0
                                ? "bg-[#F8A5C2]"
                                : "bg-white"
                            }`}
                            style={{
                              borderBottom: "2px solid #1e40af",
                            }}
                          >
                            <td className="px-6 py-4 border-r-2 border-blue-800 text-center">
                              &nbsp;
                            </td>
                            <td className="px-6 py-4 border-r-2 border-blue-800 text-center">
                              &nbsp;
                            </td>
                            <td className="px-6 py-4 border-r-2 border-blue-800 text-center">
                              &nbsp;
                            </td>
                            <td className="px-6 py-4 flex justify-center space-x-2">
                               &nbsp;
                            </td>
                          </tr>
                        ))}
                  </tbody>
                </table>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
