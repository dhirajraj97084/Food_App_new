import React from 'react'

function Navbar() {
  return (
    <div className='top-0 sticky'>
      <div className="main flex flex-wrap justify-between px-4 lg:px-24 shadow-md bg-[rgb(43,232,93)] text-white items-center py-4">
        {/* left */}
        <div className="left mx-auto lg:mx-0 pb-2">
            <h1 className='text-2xl font-bold cursor-pointer '>Food App</h1>
        </div>
        {/* right */}
        <div className="right mx-auto lg:mx-0">
           <ul className='flex space-x-5 font-semibold'>
            <li className='cursor-pointer'>Home</li>
            <li className='cursor-pointer'>About</li>
            <li className='cursor-pointer'>Contact</li>
            <li className='cursor-pointer'>Services</li>
           </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
