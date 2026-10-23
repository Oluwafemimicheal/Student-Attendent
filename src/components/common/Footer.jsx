import React from 'react'

const Footer = () => {
  return (
    <div className='py-10 bg-linear-0 from-blue-800/30 to-transparent border-t border-gray-800'>
      <div className='w-full px-10 lg:px-0 lg:w-300 mx-auto flex lg:flex-row flex-col justify-between items-center'>
        <h1 className='bg-black/20 backdrop-blur-md rounded-md border border-blue-600/60 p-1 text-white'><span className='bg-blue-800 px-1 py-0 rounded-md mr-0.5'>IN</span>sight</h1>
        <p className='text-gray-300 text-lg font-semibold'>Join the platform that solve your workload seamlessly.</p>
      </div>
    </div>
  )
}

export default Footer
