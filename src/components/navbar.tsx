import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

function navbar() {
  return (
    <nav className='z-[1000] fixed flex items-center px-12 justify-between w-screen min-h-[10vh] bg-[#fff] border-b-2 border-[#E93400] text-black'>
        <Image src={"/logos/su-logo.svg"} width={75} height={75} alt='su-logo'></Image>
        <div className='flex gap-4 items-center'>
            <Link href="/">Events</Link>
            <Link href="/">Achievements</Link>
            <Link href="/">Activities</Link>
            <Link href="/">Comittee</Link>
        </div>
    </nav>
  )
}

export default navbar