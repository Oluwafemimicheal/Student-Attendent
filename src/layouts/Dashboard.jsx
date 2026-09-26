import { Outlet } from 'react-router-dom'
import Sidebar from '../components/common/Sidebar'

const DashboardLayout = () => {
  return (
    <div className='grid grid-cols-5'>
      <div className='col-span-1 p-5 bg-blue-900 h-screen border-r border-blue-950'>
        <Sidebar />
      </div>

      <div className='col-span-4 p-5 bg-gray-100 h-screen overflow-hidden'>
        <Outlet />
      </div>
    </div>
  )
}

export default DashboardLayout
