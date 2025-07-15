'use client'
import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

function navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <nav className='z-[1000] fixed flex items-center px-12 justify-between w-screen min-h-[10vh] bg-[#fff] border-b-2 border-[#E93400] text-black'>
      <Link href="/" className='cursor-pointer'>
        <Image src={"/logos/su-logo.svg"} width={75} height={75} alt='su-logo'></Image>
      </Link>
      <div className='hidden lg:flex gap-4 items-center'>
        <Link className='cursor-pointer hover:underline hover:text-red-500' href="/events">Events</Link>
        <Link className='cursor-pointer hover:underline hover:text-blue-500' href="/achievements">Achievements</Link>
        <Link className='cursor-pointer hover:underline hover:text-yellow-500' href="/activities">Activities</Link>
        <Link className='cursor-pointer hover:underline hover:text-purple-500' href="/comittee">Comittee</Link>
      </div>
      
      {/* Hamburger Menu Button */}
      <div className='flex lg:hidden flex-col gap-1 items-center cursor-pointer z-[1001]' onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
        <div className={`w-7 h-1 bg-black transition-transform duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
        <div className={`w-7 h-1 bg-black transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></div>
        <div className={`w-7 h-1 bg-black transition-transform duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className='fixed top-[10vh] left-0 w-screen bg-slate-50/90 backdrop-blur-sm shadow-lg bg-opacity-50 z-[1000]' onClick={() => setMobileMenuOpen(false)}>
          <div className='flex flex-col gap-4'>
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
            </div>
        </div>
      )}
    </nav>
  )
}

export default navbar