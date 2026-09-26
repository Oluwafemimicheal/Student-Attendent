import { useAuth } from "../../hooks/useAuth"
import { useTime } from "../../utils/time"
import { FaPeopleArrows, FaRegBell, FaUserAlt } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import { LuSunMoon } from "react-icons/lu";


const Dashboard = () => {
  const { data: user } = useAuth()
  return (
    <div className='flex flex-col gap-5 h-full scrollbar-none'>
      <div className='hidden bg-gray-300/30  border-blue-800/30 p-2 rounded-lg lg:flex justify-between items-center'>
        <div className="flex items-center gap-2">
          <span className="flex justify-center items-center gap-1 w-26 h-8 p-1 rounded-md bg-blue-800 text-white border border-blue-800/30 cursor-pointer font-semibold text-sm">{useTime()}</span>

          <button className="flex justify-center items-center gap-1 w-max h-8 p-2 rounded-md bg-white/40 border border-blue-800/30 cursor-pointer font-semibold"><LuSunMoon /> Morning Session </button>
        </div>
        <div className="flex items-center gap-2">

          <button className="flex justify-center items-center w-max h-8 p-2 rounded-md bg-blue-800 font-semibold text-white cursor-pointer">+ New Student</button>

          <button className="flex justify-center items-center w-8 h-8 p-2 rounded-md bg-white/40 border border-blue-800/30 cursor-pointer"><FaRegBell size={22} /></button>

          <button className="flex justify-center items-center w-8 h-8 p-1 rounded-md bg-white/40 border border-blue-800/30 cursor-pointer"><FiSettings size={18} /></button>

          <div title="Profile" className="flex justify-center items-center w-8 h-8 p-1.5 rounded-full overflow-hidden! bg-white/40 border border-blue-800/30 cursor-pointer">
            {!user.image ? <img src={user.image} alt="profile image" /> : <FaUserAlt size={30} className="text-blue-800" />}

          </div>
        </div>
      </div>


      <div className='grid lg:grid-cols-4 gap-5 h-40'>
        <div className='flex flex-col gap-5 bg-white/40 border border-blue-800/30 p-5 rounded-lg'>
          <div>
            <FaPeopleArrows size={40} className="text-blue-800" />
          </div>
          <div>
            <h1 className="text-2xl text-gray-900 font-semibold">Total Students</h1>
            <p className="text-gray-700">24 <span>Pupils</span></p>
          </div>
        </div>
        <div className='bg-white/50 border border-blue-800/30 p-5 rounded-lg'></div>
        <div className='col-span-2 bg-white/50 border border-blue-800/30 p-5 rounded-lg'></div>
      </div>



      <div className='bg-white/50 border border-blue-800/30 p-5 rounded-lg grow'>
      </div>
    </div>
  )
}

export default Dashboard
