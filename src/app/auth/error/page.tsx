"use client";

import Link from "next/link";

export default function AuthErrorPage() {
  return (
    <>
      <style jsx>{`
        @keyframes float1 {
          0%, 100% { 
            transform: translateX(0) translateY(0) rotate(0deg); 
          }
          25% { 
            transform: translateX(40px) translateY(-30px) rotate(90deg); 
          }
          50% { 
            transform: translateX(-30px) translateY(-50px) rotate(180deg); 
          }
          75% { 
            transform: translateX(-50px) translateY(-15px) rotate(270deg); 
          }
        }
        
        @keyframes float2 {
          0%, 100% { 
            transform: translateX(0) translateY(0) rotate(0deg) scale(1); 
          }
          33% { 
            transform: translateX(-35px) translateY(40px) rotate(120deg) scale(1.2); 
          }
          66% { 
            transform: translateX(50px) translateY(20px) rotate(240deg) scale(0.8); 
          }
        }
        
        @keyframes float3 {
          0%, 100% { 
            transform: translateX(0) translateY(0) rotate(360deg); 
          }
          20% { 
            transform: translateX(30px) translateY(-40px) rotate(288deg); 
          }
          40% { 
            transform: translateX(-25px) translateY(-20px) rotate(216deg); 
          }
          60% { 
            transform: translateX(-45px) translateY(30px) rotate(144deg); 
          }
          80% { 
            transform: translateX(15px) translateY(45px) rotate(72deg); 
          }
        }
        
        @keyframes float4 {
          0%, 100% { 
            transform: translateX(0) translateY(0) rotate(0deg) scale(1); 
          }
          30% { 
            transform: translateX(-40px) translateY(-35px) rotate(-120deg) scale(1.3); 
          }
          70% { 
            transform: translateX(45px) translateY(40px) rotate(-240deg) scale(0.9); 
          }
        }

        @keyframes float5 {
          0%, 100% { 
            transform: translateX(0) translateY(0) rotate(0deg) scale(1); 
          }
          50% { 
            transform: translateX(-70px) translateY(-60px) rotate(180deg) scale(1.4); 
          }
        }

        @keyframes float6 {
          0%, 100% { 
            transform: translateX(0) translateY(0) rotate(360deg); 
          }
          33% { 
            transform: translateX(60px) translateY(-50px) rotate(240deg); 
          }
          66% { 
            transform: translateX(-40px) translateY(70px) rotate(120deg); 
          }
        }

        @keyframes pulse-glow {
          0%, 100% { 
            box-shadow: 0 0 20px rgba(239, 68, 68, 0.3); 
          }
          50% { 
            box-shadow: 0 0 40px rgba(239, 68, 68, 0.6); 
          }
        }
        
        .float1 { animation: float1 9s ease-in-out infinite; }
        .float2 { animation: float2 13s ease-in-out infinite; }
        .float3 { animation: float3 11s ease-in-out infinite; }
        .float4 { animation: float4 16s ease-in-out infinite; }
        .float5 { animation: float5 10s ease-in-out infinite; }
        .float6 { animation: float6 12s ease-in-out infinite; }
        .pulse-glow { animation: pulse-glow 3s ease-in-out infinite; }
      `}</style>
      
      <div className="min-h-screen bg-gradient-to-br from-red-50 via-rose-50 to-pink-50 flex items-center justify-center p-4 relative overflow-hidden">
        {/* Enhanced floating particles */}
        <div className="absolute top-12 left-12 w-24 h-24 bg-red-300 rounded-full opacity-40 float1"></div>
        <div className="absolute top-36 right-24 w-20 h-20 bg-rose-300 rounded-full opacity-50 float2"></div>
        <div className="absolute bottom-24 left-36 w-16 h-16 bg-pink-300 rounded-full opacity-45 float3"></div>
        <div className="absolute bottom-44 right-12 w-28 h-28 bg-red-400 rounded-full opacity-35 float4"></div>

        {/* Additional visible floating particles */}
        <div
          className="absolute top-24 left-1/3 w-14 h-14 bg-orange-300 rounded-full opacity-40 float2"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/3 right-1/4 w-12 h-12 bg-amber-300 rounded-full opacity-45 float1"
          style={{ animationDelay: "4s" }}
        ></div>
        <div
          className="absolute bottom-1/3 left-1/4 w-18 h-18 bg-rose-400 rounded-full opacity-40 float3"
          style={{ animationDelay: "6s" }}
        ></div>
        <div
          className="absolute bottom-20 right-1/3 w-22 h-22 bg-red-500 rounded-full opacity-35 float4"
          style={{ animationDelay: "1s" }}
        ></div>

        {/* Large floating particles */}
        <div
          className="absolute top-1/4 left-20 w-26 h-26 bg-pink-400 rounded-full opacity-30 float5"
          style={{ animationDelay: "3s" }}
        ></div>
        <div
          className="absolute top-3/4 right-20 w-24 h-24 bg-rose-500 rounded-full opacity-35 float6"
          style={{ animationDelay: "5s" }}
        ></div>
        <div
          className="absolute top-1/2 left-10 w-20 h-20 bg-red-300 rounded-full opacity-40 float1"
          style={{ animationDelay: "7s" }}
        ></div>
        <div
          className="absolute top-1/2 right-10 w-22 h-22 bg-orange-400 rounded-full opacity-35 float2"
          style={{ animationDelay: "8s" }}
        ></div>

        {/* Small scattered particles */}
        <div
          className="absolute top-44 left-1/2 w-10 h-10 bg-pink-500 rounded-full opacity-50 float3"
          style={{ animationDelay: "1.5s" }}
        ></div>
        <div
          className="absolute bottom-36 left-2/3 w-8 h-8 bg-rose-600 rounded-full opacity-45 float5"
          style={{ animationDelay: "2.5s" }}
        ></div>
        <div
          className="absolute top-2/3 right-1/2 w-12 h-12 bg-red-600 rounded-full opacity-40 float6"
          style={{ animationDelay: "3.5s" }}
        ></div>

        {/* Main content card with error badge on top */}
        <div className="bg-white/90 backdrop-blur-sm p-12 rounded-2xl shadow-2xl text-center max-w-md w-full border border-white/20 transform transition-all duration-500 hover:scale-105 relative">
          {/* Error badge positioned on top of the card */}
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-6 py-2 rounded-full text-sm font-mono shadow-lg z-10 pulse-glow">
            Auth Error
          </div>

          {/* Email/Warning icon */}
          <div className="mx-auto w-20 h-20 bg-gradient-to-br from-red-400 to-orange-500 rounded-full flex items-center justify-center mb-6 shadow-lg mt-4">
            <svg 
              className="w-10 h-10 text-white" 
              fill="currentColor" 
              viewBox="0 0 20 20"
            >
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
          </div>
          
          <h1 className="text-4xl font-bold bg-gradient-to-r from-red-600 via-rose-600 to-pink-600 bg-clip-text text-transparent mb-4">
            Access Denied
          </h1>
          
          <p className="text-gray-600 mb-8 text-lg leading-relaxed">
            Authentication failed! You must use a valid 
            <span className="font-semibold text-blue-600"> @ciputra.ac.id </span>
            email account to access this application.
          </p>
          
          <div className="space-y-4">
            <Link
              href="/"
              className="inline-block bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              🔄 Try Again
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
