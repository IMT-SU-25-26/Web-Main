'use client'
import { useState } from 'react';

export default function StudentDashboard() {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);

  const applications = [
    {
      id: 1,
      title: "Application NPLC",
      status: "Submitted",
      statusColor: "text-green-600",
      statusBg: "bg-green-100",
      description: "National Programming Logic Competition application",
      date: "Submitted on Dec 15, 2023",
      icon: "📝"
    }
  ];

  return (
    <>
      {/* Spacer for fixed navbar */}
      <div className="h-[10vh] bg-gradient-to-br from-[#F1EEE6] to-[#E8E5DD]"></div>
      
      {/* Main Dashboard Container */}
      <div className="min-h-screen bg-gradient-to-br from-[#F1EEE6] to-[#E8E5DD] relative overflow-hidden">
        {/* Background Paper Texture */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: "url('/backgrounds/background-paper.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>
        
        {/* Decorative Elements */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-orange-200 rounded-full opacity-20 blur-xl"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-blue-200 rounded-full opacity-20 blur-xl"></div>
        
        <div className="relative z-10 container mx-auto px-6 py-12">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-7xl font-impact text-gray-800 mb-4 tracking-wide drop-shadow-sm">
              Student Dashboard
            </h1>
            <p className="text-2xl text-gray-600 font-light max-w-2xl mx-auto">
              Welcome back! Here's your application status and recent activities.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-red-400 mx-auto mt-6 rounded-full"></div>
          </div>

          {/* NPLC Application Section */}
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">
              Your NPLC Application
            </h2>
            
            <div className="flex justify-center">
              {applications.map((app) => (
                <div
                  key={app.id}
                  className={`bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-white/30 max-w-md w-full ${
                    selectedCard === app.id ? 'scale-105 ring-4 ring-orange-200' : ''
                  }`}
                  onMouseEnter={() => setSelectedCard(app.id)}
                  onMouseLeave={() => setSelectedCard(null)}
                >
                  {/* Card Header */}
                  <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 border-b border-gray-200">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-4xl">{app.icon}</div>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${app.statusBg} ${app.statusColor}`}>
                        {app.status}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{app.title}</h3>
                    <p className="text-gray-600 text-sm">{app.description}</p>
                  </div>

                  {/* Card Body */}
                  <div className="p-6">
                    <p className="text-gray-500 text-sm mb-6">{app.date}</p>
                    
                    {/* Progress Bar */}
                    <div className="mb-6">
                      <div className="flex justify-between text-sm text-gray-600 mb-2">
                        <span>Application Progress</span>
                        <span>75%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="h-2 rounded-full transition-all duration-500 bg-green-400 w-3/4"></div>
                      </div>
                    </div>

                    <button className="w-full bg-gradient-to-r from-orange-400 to-red-400 text-white font-semibold py-3 px-6 rounded-xl hover:from-orange-500 hover:to-red-500 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1">
                      View Application Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
