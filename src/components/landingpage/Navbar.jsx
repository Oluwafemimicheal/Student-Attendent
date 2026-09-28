import { FaChevronDown, FaUser } from "react-icons/fa"
import { Link } from "react-router-dom"
import { BtnSec, BtnPry } from "../common/Button"
import { useAuth } from "../../hooks/useAuth"
import { useState } from "react"
import { Logout } from "../../utils/logout"
import { FiSettings } from "react-icons/fi";
import SignUp from "../auth/SignUp"
import Dropdown from "../common/Dropdown"



const links = [
  {
    title: "Product",
    apiRoute: "",
    icon: <FaChevronDown size={10} className="mt-1" />,
    isDropDown: true
  },
  {
    title: "Solution",
    apiRoute: "",
    icon: <FaChevronDown size={10} className="mt-1" />,
    isDropDown: true
  },
  {
    title: "Resources",
    apiRoute: "",
    icon: <FaChevronDown size={10} className="mt-1" />,
    isDropDown: true
  },
  {
    title: "Pricing",
    apiRoute: "/price",
    icon: "",
    isDropDown: false
  },

]


const Navbar = () => {
  const [showProfile, setShowProfile] = useState(false)
  const [signUp, setSignUp] = useState(false)
  const [dropDown, setDropDown] = useState(false)
  const { data: user } = useAuth()
  return (
    <header className="py-5">
      <nav onClick={() => setShowProfile(false)} className="w-300 mx-auto flex justify-between items-center relative">

        <div>
          <Link to={"/"} className="p-2 rounded-lg bg-clip-text  bg-linear-70 from-blue-800 to-orange-600  text-white font-semibold">INsight</Link>
        </div>

        <ul className="flex items-center gap-8 relative">
          {
            links.map((link, index) => (
              <div key={index} >

                {
                  <li to={link.apiRoute} onClick={(e) => setDropDown(e.t)} className={`flex items-center gap-1 text-white transition-all p-1 rounded-md font-semibold cursor-pointer`}>{link.title} {link.icon}</li>
                }
                <div className="absolute top-10 left-0 w-full">{dropDown && link.isDropDown && <Dropdown data={link} />}</div>

              </div>
            ))
          }
        </ul>

        <>
          {
            user ?
              <div className="flex items-center gap-3">
                <Link to={"/dashboard"}>
                  <BtnPry text={"Dashboard"} />
                </Link>
                <button onClick={(e) => { e.stopPropagation(), setShowProfile(true) }} className="w-10 h-10 font-bold text-lg flex justify-center items-center bg-blue-800 rounded-full border border-white/30 cursor-pointer text-white">
                  {user.fullName.slice(0, 2).toUpperCase()}
                </button>
              </div> :
              <div className="space-x-3">
                <Link to={"/auth"}>
                  <BtnPry text={"Login"} />
                </Link>

                {
                  signUp && <div onClick={() => setSignUp(false)} className="fixed top-0 left-0 w-full flex justify-center items-center h-screen z-99 bg-black/20 backdrop-blur-xs">
                    <div onClick={(e) => { e.stopPropagation() }}>
                      <SignUp action={() => { setSignUp(true) }} />
                    </div>
                  </div>
                }

                <BtnSec text={"Sign Up"} onClick={() => setSignUp(true)} />
              </div>
          }
        </>

        <>
          {
            showProfile && <div onClick={(e) => { e.stopPropagation(), setShowProfile(true) }} className="absolute top-14 right-0 w-50 shadow-lg  bg-white/10 text-white font-bold border border-white/20 rounded-md p-3  z-10">
              <ul className="space-y-2">
                <li onClick={(e) => { e.stopPropagation(), setShowProfile(false) }} className='flex items-center gap-4 cursor-pointer text-white font-bold  rounded-md p-1 w-full'>
                  <FaUser /> Profile
                </li>
                <li onClick={(e) => { e.stopPropagation(), setShowProfile(false) }} className='flex items-center gap-4 cursor-pointer text-white font-bold  rounded-md p-1 w-full'>
                  <FiSettings /> Setting
                </li>
                <li onClick={(e) => { e.stopPropagation(), setShowProfile(false) }} className="">
                  <Logout />
                </li>
              </ul>
            </div>
          }
        </>
      </nav>
    </header>
  )
}

export default Navbar
