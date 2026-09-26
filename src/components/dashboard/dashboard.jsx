import { FaNoteSticky } from "react-icons/fa6"
import { useAuth } from "../../hooks/useAuth"

const Dashboard = () => {
  const { data: user } = useAuth()
  return (
    <div className='flex flex-col gap-5 h-full scrollbar-none'>
      <div className='bg-gray-300/30 border border-blue-800/30 p-3 rounded-lg flex justify-between items-center'>
        <div></div>
        <div className="flex items-center gap-2">
          <button className="px-3 py-1 rounded-md bg-blue-800 font-semibold text-white cursor-pointer">+ New Student</button>
          <button className="py-1 px-3 rounded-md bg-white/40 border border-blue-800/30">B</button>
          <button className="py-1 px-3 rounded-md bg-white/40 border border-blue-800/30">B</button>
          <button className="py-1 px-3 rounded-md bg-white/40 border border-blue-800/30"><FaNoteSticky /></button>

          <div className="py-1 px-3 rounded-md bg-white">
            <img src={user?.image} alt="profile image" />
          </div>
        </div>
      </div>
      <div className='grid lg:grid-cols-2 gap-5 h-40'>
        <div className='bg-white/40 border border-blue-800/30 p-5 rounded-lg'></div>
        <div className='bg-white/50 border border-blue-800/30 p-5 rounded-lg'></div>

      </div>
      <div className='bg-white/50 border border-blue-800/30 p-5 rounded-lg grow'>
      </div>
    </div>
  )
}

export default Dashboard
