'use client'
import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const { data: session, status } = useSession();

  const isLoggedIn = !!session;
  const isLoading = status === "loading";

  return (
    <nav className='z-[1000] fixed flex items-center px-12 justify-between w-screen min-h-[10vh] bg-[#fff] border-b-2 border-[#E93400] text-black'>
      <Link href="/" className='w-[38px] sm:w-[32px] md:w-[52px] lg:w-[48px] xl:w-[48px] 2xl:w-[75px] h-auto cursor-pointer'>
        <Image src={"/logos/su-logo.svg"} width={100} height={100} alt='su-logo'></Image>
      </Link>
      <div className='hidden lg:text-xl xl:text-xl 2xl:text-2xl lg:flex gap-4 xl:gap-8 items-center'>
        <Link className='cursor-pointer hover:underline hover:text-red-500' href="/events">Events</Link>
        <Link className='cursor-pointer hover:underline hover:text-blue-500' href="/achievements">Achievements</Link>
        <Link className='cursor-pointer hover:underline hover:text-yellow-500' href="/activities">Activities</Link>
        <Link className='cursor-pointer hover:underline hover:text-purple-500' href="/comittee">Comittee</Link>
        
        <div className="relative">
          {isLoading ? (
            <div className="animate-pulse bg-gray-300 w-10 h-10 rounded-full"></div>
          ) : (
            <div 
              className='flex items-center gap-2 cursor-pointer hover:bg-gray-50 rounded-lg px-2 py-1 transition-all'
              onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
            >
              <div className='profile-image rounded-full w-10 h-10 flex items-center justify-center hover:ring-2 hover:ring-blue-300 transition-all'>
                {isLoggedIn ? (
                  <div className="w-full h-full bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                    {session.user?.name?.charAt(0).toUpperCase() || session.user?.email?.charAt(0).toUpperCase() || "U"}
                  </div>
                ) : (
                  <div className="w-full h-full bg-gray-400 rounded-full flex items-center justify-center overflow-hidden">
                    <Image src={"/logos/guest-avatar.svg"} width={40} height={40} alt="Guest Avatar" />
                  </div>
                )}
              </div>
            </div>
          )}

          {profileDropdownOpen && (
            <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-[1002]">
              {isLoggedIn ? (
                <>
                  <div className="px-4 py-3 border-b border-gray-200">
                    <p className="text-sm font-medium text-gray-900">{session.user?.name || "User"}</p>
                    <p className="text-xs text-gray-500">{session.user?.email}</p>
                  </div>
                  
                  <div className="py-1">
                    <Link
                        href="/dashboard/student"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setProfileDropdownOpen(false)}
                      >
                        Dashboard
                      </Link>
                    {session.user?.role === "TECH" && (
                      <Link
                        href="/dashboard/student"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setProfileDropdownOpen(false)}
                      >
                        Tech Dashboard
                      </Link>
                    )}
                    {(session.user?.role === "SA" || session.user?.role === "TECH" || session.user?.role === "LECTURER") && (
                      <Link
                        href="/dashboard/sa"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setProfileDropdownOpen(false)}
                      >
                        SA Dashboard
                      </Link>
                    )}
                    {(session.user?.role === "PR" || session.user?.role === "TECH") && (
                      <Link
                        href="/dashboard/pr"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setProfileDropdownOpen(false)}
                      >
                        PR Dashboard
                      </Link>
                    )}
                  </div>
                  
                  <div className="border-t border-gray-200 py-1">
                    <button
                      onClick={() => {
                        signOut({ callbackUrl: "/" });
                        setProfileDropdownOpen(false);
                      }}
                      className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                    >
                      Sign Out
                    </button>
                  </div>
                </>
              ) : (
                <div className="py-1">
                  <button
                    onClick={() => {
                      signIn("google");
                      setProfileDropdownOpen(false);
                    }}
                    className="w-full text-left px-4 py-2 text-sm text-blue-600 hover:bg-blue-50"
                  >
                    Sign in with Google
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      
      <div className='flex lg:hidden flex-col gap-1 items-center cursor-pointer z-[1001]' onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
        <div className={`w-7 h-1 bg-black transition-transform duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
        <div className={`w-7 h-1 bg-black transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></div>
        <div className={`w-7 h-1 bg-black transition-transform duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
      </div>

      {mobileMenuOpen && (
        <div className='fixed top-[10vh] left-0 w-screen bg-slate-50/90 backdrop-blur-sm shadow-lg bg-opacity-50 z-[1000]' onClick={() => setMobileMenuOpen(false)}>
          <div className='flex flex-col gap-4 p-6'>
              <Link 
                className='text-black text-right mr-14 hover:text-red-500 py-2 text-lg' 
                href="/events"
                onClick={() => setMobileMenuOpen(false)}
              >
                Events
              </Link>
              <Link 
                className='text-black text-right mr-14 hover:text-blue-500 py-2 text-lg' 
                href="/achievements"
                onClick={() => setMobileMenuOpen(false)}
              >
                Achievements
              </Link>
              <Link 
                className='text-black text-right mr-14 hover:text-yellow-500 py-2 text-lg' 
                href="/activities"
                onClick={() => setMobileMenuOpen(false)}
              >
                Activities
              </Link>
              <Link 
                className='text-black text-right mr-14 hover:text-purple-500 py-2 text-lg' 
                href="/comittee"
                onClick={() => setMobileMenuOpen(false)}
              >
                Comittee
              </Link>

              {/* Mobile Auth Section */}
              <div className='flex justify-end mr-14'>
                {isLoggedIn ? (
                  <div className="text-right">
                    <p className="text-sm text-gray-600">{session.user?.email}</p>
                    <button
                      onClick={() => {
                        signOut({ callbackUrl: "/" });
                        setMobileMenuOpen(false);
                      }}
                      className="text-red-600 hover:text-red-700 text-sm mt-1"
                    >
                      Sign Out
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => {
                      signIn("google");
                      setMobileMenuOpen(false);
                    }}
                    className="text-blue-600 hover:text-blue-700 text-sm"
                  >
                    Sign in with Google
                  </button>
                )}
              </div>
            </div>
        </div>
      )}

      {profileDropdownOpen && (
        <div 
          className="fixed inset-0 z-[1001]" 
          onClick={() => setProfileDropdownOpen(false)}
        ></div>
      )}
    </nav>
  )
}

export default Navbar