import { NavLink } from "react-router-dom"
import { Navbar } from "../../utils/logout"
import { useAuth } from "../../hooks/useAuth"
import { BiSolidDashboard, BiSolidSpreadsheet } from "react-icons/bi";
import { FaDirections } from "react-icons/fa";
import { TbReportAnalyticsFilled } from "react-icons/tb";
import { PiStudentBold } from "react-icons/pi";

const links = [
  {
    title: "Dashboard",
    apiRoute: "/dashboard",
    icon: <BiSolidDashboard size={20} />
  },
  {
    title: "Daily Attendance",
    apiRoute: "/daily-Attendance",
    icon: <BiSolidSpreadsheet size={20} />
  },
  {
    title: "Student Directory",
    apiRoute: "/student-directory",
    icon: <FaDirections size={20} />
  },
  {
    title: "Weekly Progress Report",
    apiRoute: "/weekly-progress",
    icon: <TbReportAnalyticsFilled size={20} />
  },
  {
    title: "Individual Student",
    apiRoute: "/individual-student",
    icon: <PiStudentBold size={20} />
  },
]


const Sidebar = ({ action }) => {
  const {data: user} = useAuth()
  return (
    <div className="flex flex-col gap-10 h-full">
      <div className='bg-blue-900 flex items-center gap-4 bg-white/10 border border-white/10 backdrop-blur-2xl p-3 rounded-lg'>
        <div className='bg-white p-2 rounded-md'>
          <h1 className='text-blue-900 font-bold text-lg'>NH</h1>
        </div>
        <div>
          <h1 className='text-white text-lg font-bold'>{user.username.length >= 16 ? user.username.slice(0, 10) + "..." : user.username}</h1>
          <p className='text-sm text-gray-300'>Center: <span className="font-semibold text-white">{user.center}</span></p>
        </div>
      </div>

      <ul className="grow space-y-3">
        {
          links.map((link, index) => (
            <li key={index}>
              <NavLink onClick={() => action(false)} key={index} to={link.apiRoute} className={({ isActive }) => `transition-all flex items-center gap-2 p-2 rounded-md font-semibold ${isActive ? "bg-white text-blue-900" : "text-white bg-transparent"} hover:bg-white/10 hover:border border border-transparent hover:border-white/20 backdrop-blur-2xl hover:text-white`} >{link.icon} {link.title}</NavLink>
            </li>
          ))
        }
      </ul>
      <div>

        <Navbar />
      </div>
    </div>
  )
}

export default Sidebar
