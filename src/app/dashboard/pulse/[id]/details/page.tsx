import { getPulseApplicationById } from "@/lib/service/pulse";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

function FileViewer({
  url,
  alt,
  label,
}: {
  url: string;
  alt: string;
  label: string;
}) {
  const isPdf =
    url.toLowerCase().includes(".pdf") || url.toLowerCase().includes("pdf");

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
      <div className="flex items-center justify-between mb-3">
        <h4 className="text-lg font-semibold text-gray-800 flex items-center">
          {isPdf ? (
            <svg className="w-5 h-5 text-red-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
            </svg>
          ) : (
            <svg className="w-5 h-5 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
            </svg>
          )}
          {label}
        </h4>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center"
        >
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
            <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
          </svg>
          Open
        </a>
      </div>
      
      {isPdf ? (
        <div className="bg-gray-100 rounded-lg p-4">
          <iframe 
            src={url} 
            className="w-full h-96 border rounded-md"
            title={alt}
          />
        </div>
      ) : (
        <div className="bg-gray-100 rounded-lg p-4 flex justify-center">
          <Image
            src={url}
            alt={alt}
            width={500}
            height={400}
            className="max-w-full h-auto object-contain rounded-md shadow-sm"
          />
        </div>
      )}
    </div>
  );
}

export default async function PulseApplicationDetails(props: {
  params: Promise<{ id: string }>;
}) {
  const params = await props.params;
  const id = params.id;
  const application = await getPulseApplicationById(id);

  if (!application) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with Back Button */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-6 py-4">
          <Link
            href="/dashboard/pulse"
            className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors font-medium"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            Back to Applications
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-8 max-w-7xl">
        {/* Application Header */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <div className="mb-6 lg:mb-0">
              <h1 className="text-4xl font-bold text-gray-900 mb-2">
                {application.name}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-gray-600">
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="font-medium">{application.nim}</span>
                </div>
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <span>{application.email}</span>
                </div>
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>
                    Applied:{" "}
                    {new Date(application.createdAt).toLocaleDateString(
                      "en-US",
                      {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      }
                    )}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-start lg:items-end gap-3">
              <div className="bg-blue-50 border border-blue-200 rounded-lg px-4 py-2">
                <div className="text-sm text-blue-600 font-medium">Major</div>
                <div className="text-lg font-semibold text-blue-900">
                  {application.major}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
          {/* Main Content - Takes 3 columns */}
          <div className="xl:col-span-3 space-y-8">
            {/* Personal Information Card */}
            <div className="bg-white rounded-xl shadow-lg">
              <div className="px-8 py-6 border-b border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                  <svg
                    className="w-6 h-6 mr-3 text-blue-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Personal Information
                </h2>
              </div>
              <div className="px-8 py-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm font-medium text-gray-500">
                      Full Name
                    </label>
                    <div className="mt-1 text-lg font-semibold text-gray-900">
                      {application.name}
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-500">
                      Student ID (NIM)
                    </label>
                    <div className="mt-1 text-lg font-semibold text-gray-900">
                      {application.nim}
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-500">
                      Email Address
                    </label>
                    <div className="mt-1 text-lg text-gray-900">
                      {application.email}
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-500">
                      Major
                    </label>
                    <div className="mt-1 text-lg text-gray-900">
                      {application.major}
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-500">
                      Phone Number
                    </label>
                    <div className="mt-1 text-lg text-gray-900">
                      {application.phoneNumber}
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-500">
                      Line ID
                    </label>
                    <div className="mt-1 text-lg text-gray-900">
                      {application.lineId}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Division Preferences Card */}
            <div className="bg-white rounded-xl shadow-lg">
              <div className="px-8 py-6 border-b border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                  <svg
                    className="w-6 h-6 mr-3 text-green-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Division Preferences
                </h2>
              </div>
              <div className="px-8 py-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="text-center">
                    <div className="text-sm font-medium text-gray-500 mb-2">
                      First Choice
                    </div>
                    <div className="inline-flex items-center px-6 py-3 rounded-full text-lg font-bold bg-blue-100 text-blue-800 border-2 border-blue-200">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                      {application.firstChoice}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-medium text-gray-500 mb-2">
                      Second Choice
                    </div>
                    <div className="inline-flex items-center px-6 py-3 rounded-full text-lg font-bold bg-green-100 text-green-800 border-2 border-green-200">
                      <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                      {application.secondChoice}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Motivation Card */}
            <div className="bg-white rounded-xl shadow-lg">
              <div className="px-8 py-6 border-b border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                  <svg
                    className="w-6 h-6 mr-3 text-purple-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Motivation
                </h2>
              </div>
              <div className="px-8 py-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <p className="text-gray-700 leading-relaxed text-lg whitespace-pre-wrap">
                    {application.reason}
                  </p>
                </div>
              </div>
            </div>

            {/* Documents Section */}
            <div className="bg-white rounded-xl shadow-lg">
              <div className="px-8 py-6 border-b border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                  <svg
                    className="w-6 h-6 mr-3 text-orange-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Submitted Documents
                </h2>
              </div>
              <div className="px-8 py-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <FileViewer
                    url={application.idCard}
                    alt="Student ID Card"
                    label="Student ID Card (KTM)"
                  />

                  <FileViewer
                    url={application.cv}
                    alt="Curriculum Vitae"
                    label="Curriculum Vitae (CV)"
                  />

                  <FileViewer
                    url={application.commitmentLetter}
                    alt="Commitment Letter"
                    label="Commitment Letter"
                  />

                  {application.portfolio && (
                    <FileViewer
                      url={application.portfolio}
                      alt="Portfolio"
                      label="Portfolio (Optional)"
                    />
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar - Takes 1 column */}
          <div className="xl:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <svg
                  className="w-5 h-5 mr-2 text-indigo-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                    clipRule="evenodd"
                  />
                </svg>
                Quick Info
              </h3>

              <div className="space-y-4">
                <div className="bg-blue-50 rounded-lg p-4">
                  <div className="text-sm font-medium text-blue-600">
                    Application Status
                  </div>
                  <div className="text-lg font-bold text-blue-900 mt-1">
                    Under Review
                  </div>
                </div>

                <div className="bg-green-50 rounded-lg p-4">
                  <div className="text-sm font-medium text-green-600">
                    Submitted
                  </div>
                  <div className="text-sm text-green-900 mt-1">
                    {new Date(application.createdAt).toLocaleDateString(
                      "en-US",
                      {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                      }
                    )}
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <Link
                  href="/dashboard/pulse"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg font-medium transition-colors flex items-center justify-center"
                >
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Back to Dashboard
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
