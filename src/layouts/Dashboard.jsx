import { Outlet } from 'react-router-dom'
import Sidebar from '../components/common/Sidebar'
import { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { useTime } from '../utils/time'
import { LuSunMoon } from 'react-icons/lu'

const DashboardLayout = () => {
  const [showSidebar, setShowSidebar] = useState(false)
  const time = useTime()
  return (
    <div className='grid grid-col-1 lg:grid-cols-5 h-screen relative z-99'>
      <div className={`${showSidebar ? "translate-x-0" : "-translate-x-full"} absolute h-screen transform transition ease-linear lg:translate-0 lg:static lg:col-span-1 p-5 bg-blue-900 w-full lg:w-auto`}>
        <Sidebar action={setShowSidebar} />
      </div>

      <div className='col-span-4 lg:p-5 p-2.5 bg-gray-100 h-screen overflow-hidden'>
        <div className='lg:hidden bg-gray-300/30  border-blue-800/30 p-2 mb-3 rounded-lg flex justify-between items-center'>
          <div className="flex justify-between items-center w-full">
            <div>
              <button onClick={() => setShowSidebar(prev => !prev)} className='block lg:hidden flex justify-center items-center gap-1 w-8 h-8 p-1 rounded-md bg-blue-800 text-white border border-blue-800/30 cursor-pointer font-semibold text-sm'><FaBars /></button>
            </div>

            <div className='flex items-center gap-2'>
              <button className="flex justify-center items-center gap-1 w-max h-8 p-2 rounded-md bg-white/40 border border-blue-800/30 cursor-pointer font-semibold"><LuSunMoon /> {time.includes("PM") ? "Afternoon Session" : "Morning Session"} </button>

              <span className="flex justify-center items-center gap-1 w-25 h-8 p-1 rounded-md bg-blue-800 text-white border border-blue-800/30 cursor-pointer font-semibold text-sm">{useTime()}</span>

            </div>
          </div>
        </div>

        <Outlet />
      </div>
    </div>
  )
}

export default DashboardLayout
