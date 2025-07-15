import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

function navbar() {
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
        
        <div className='flex lg:hidden flex-col gap-1 items-center'>
            <div className='w-7 h-1 bg-black'></div>
            <div className='w-7 h-1 bg-black'></div>
            <div className='w-7 h-1 bg-black'></div>
        </div>
    </nav>
  )
}

export default navbar