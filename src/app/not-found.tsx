"use client";

import Link from "next/link";

export default function NotFoundPage() {
  return (
    <>
      <style jsx>{`
        @keyframes float1 {
          0%,
          100% {
            transform: translateX(0) translateY(0) rotate(0deg);
          }
          25% {
            transform: translateX(35px) translateY(-25px) rotate(90deg);
          }
          50% {
            transform: translateX(-25px) translateY(-45px) rotate(180deg);
          }
          75% {
            transform: translateX(-45px) translateY(-12px) rotate(270deg);
          }
        }

        @keyframes float2 {
          0%,
          100% {
            transform: translateX(0) translateY(0) rotate(0deg) scale(1);
          }
          33% {
            transform: translateX(-30px) translateY(35px) rotate(120deg)
              scale(1.1);
          }
          66% {
            transform: translateX(45px) translateY(18px) rotate(240deg)
              scale(0.9);
          }
        }

        @keyframes float3 {
          0%,
          100% {
            transform: translateX(0) translateY(0) rotate(360deg);
          }
          20% {
            transform: translateX(25px) translateY(-35px) rotate(288deg);
          }
          40% {
            transform: translateX(-20px) translateY(-18px) rotate(216deg);
          }
          60% {
            transform: translateX(-40px) translateY(25px) rotate(144deg);
          }
          80% {
            transform: translateX(12px) translateY(40px) rotate(72deg);
          }
        }

        @keyframes float4 {
          0%,
          100% {
            transform: translateX(0) translateY(0) rotate(0deg) scale(1);
          }
          30% {
            transform: translateX(-35px) translateY(-30px) rotate(-120deg)
              scale(1.2);
          }
          70% {
            transform: translateX(40px) translateY(35px) rotate(-240deg)
              scale(0.8);
          }
        }

        @keyframes float5 {
          0%,
          100% {
            transform: translateX(0) translateY(0) rotate(0deg) scale(1);
          }
          50% {
            transform: translateX(-65px) translateY(-55px) rotate(180deg)
              scale(1.3);
          }
        }

        @keyframes float6 {
          0%,
          100% {
            transform: translateX(0) translateY(0) rotate(360deg);
          }
          33% {
            transform: translateX(55px) translateY(-45px) rotate(240deg);
          }
          66% {
            transform: translateX(-35px) translateY(65px) rotate(120deg);
          }
        }

        @keyframes pulse-glow {
          0%,
          100% {
            box-shadow: 0 0 20px rgba(99, 102, 241, 0.3);
          }
          50% {
            box-shadow: 0 0 40px rgba(99, 102, 241, 0.6);
          }
        }

        .float1 {
          animation: float1 8s ease-in-out infinite;
        }
        .float2 {
          animation: float2 12s ease-in-out infinite;
        }
        .float3 {
          animation: float3 10s ease-in-out infinite;
        }
        .float4 {
          animation: float4 15s ease-in-out infinite;
        }
        .float5 {
          animation: float5 9s ease-in-out infinite;
        }
        .float6 {
          animation: float6 11s ease-in-out infinite;
        }
        .pulse-glow {
          animation: pulse-glow 3s ease-in-out infinite;
        }
      `}</style>

      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50 flex items-center justify-center p-4 relative overflow-hidden">
        {/* Enhanced floating particles with better visibility */}
        <div className="absolute top-10 left-10 w-24 h-24 bg-indigo-300 rounded-full opacity-40 float1"></div>
        <div className="absolute top-32 right-20 w-20 h-20 bg-purple-300 rounded-full opacity-50 float2"></div>
        <div className="absolute bottom-20 left-32 w-16 h-16 bg-blue-300 rounded-full opacity-45 float3"></div>
        <div className="absolute bottom-40 right-10 w-28 h-28 bg-indigo-400 rounded-full opacity-35 float4"></div>

        {/* More visible floating particles */}
        <div
          className="absolute top-20 left-1/3 w-12 h-12 bg-violet-300 rounded-full opacity-40 float2"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/3 right-1/4 w-10 h-10 bg-cyan-300 rounded-full opacity-45 float1"
          style={{ animationDelay: "4s" }}
        ></div>
        <div
          className="absolute bottom-1/3 left-1/4 w-14 h-14 bg-purple-400 rounded-full opacity-40 float3"
          style={{ animationDelay: "6s" }}
        ></div>
        <div
          className="absolute bottom-16 right-1/3 w-18 h-18 bg-indigo-500 rounded-full opacity-35 float4"
          style={{ animationDelay: "1s" }}
        ></div>

        {/* Additional large floating particles */}
        <div
          className="absolute top-1/4 left-16 w-22 h-22 bg-blue-400 rounded-full opacity-30 float5"
          style={{ animationDelay: "3s" }}
        ></div>
        <div
          className="absolute top-3/4 right-16 w-20 h-20 bg-purple-500 rounded-full opacity-35 float6"
          style={{ animationDelay: "5s" }}
        ></div>
        <div
          className="absolute top-1/2 left-8 w-16 h-16 bg-indigo-300 rounded-full opacity-40 float1"
          style={{ animationDelay: "7s" }}
        ></div>
        <div
          className="absolute top-1/2 right-8 w-18 h-18 bg-violet-400 rounded-full opacity-35 float2"
          style={{ animationDelay: "8s" }}
        ></div>

        {/* Small scattered particles */}
        <div
          className="absolute top-40 left-1/2 w-8 h-8 bg-blue-500 rounded-full opacity-50 float3"
          style={{ animationDelay: "1.5s" }}
        ></div>
        <div
          className="absolute bottom-32 left-2/3 w-6 h-6 bg-purple-600 rounded-full opacity-45 float5"
          style={{ animationDelay: "2.5s" }}
        ></div>
        <div
          className="absolute top-2/3 right-1/2 w-10 h-10 bg-indigo-600 rounded-full opacity-40 float6"
          style={{ animationDelay: "3.5s" }}
        ></div>

        {/* Main content card with error badge on top */}
        <div className="bg-white/90 backdrop-blur-sm p-12 rounded-2xl shadow-2xl text-center max-w-md w-full border border-white/20 transform transition-all duration-500 hover:scale-105 relative">
          {/* Error code badge positioned on top of the card */}
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-indigo-500 text-white px-6 py-2 rounded-full text-sm font-mono shadow-lg z-10 pulse-glow">
            Error 404
          </div>

          {/* Search/Question mark icon */}
          <div className="mx-auto w-20 h-20 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full flex items-center justify-center mb-6 shadow-lg mt-4">
            <svg
              className="w-10 h-10 text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              />
            </svg>
          </div>

          <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
            Page Not Found
          </h1>

          <p className="text-gray-600 mb-8 text-lg leading-relaxed">
            Oops! The page you&apos;re looking for doesn&apos;t exist. It might
            have been moved, deleted, or you entered the wrong URL.
          </p>

          <div className="space-y-4">
            <Link
              href="/"
              className="inline-block bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              🏠 Back to Home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
