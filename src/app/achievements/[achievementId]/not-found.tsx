import React from 'react'
import Link from 'next/link'

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center px-4">
      <h1 className="text-4xl md:text-4xl font-bold mb-4 text-red-600">Achievement Not Found</h1>
      <p className="text-lg md:text-xl text-gray-700 mb-6">
        The achievement you're looking for isn't available. It may have been removed or the link is incorrect.
      </p>
      <Link href="/achievements" className='px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition'>
          Back to Achievements
      </Link>
    </div>
  )
}

export default NotFound
