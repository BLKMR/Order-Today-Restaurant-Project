import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className="h-12 md:h24 p-4 lg:p-20 xl:p-40 text-red-500 flex items-center">
      <Link href="/">BARDOG TAVERN</Link>
      <p>ALL RIGHTS RESERVED</p>    
    </div>
  )
}

export default Footer