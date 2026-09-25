import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/common/Sidebar'

const Dashboard = () => {
  return (
    <div className='grid grid-cols-5'>
      <div className='col-span-1 p-5 bg-blue-900 h-screen'>
        <Sidebar />
      </div>

      <div className='col-span-4 p-5'>
        <Outlet />
      </div>
    </div>
  )
}

export default Dashboard
