import { FaChevronDown } from "react-icons/fa"
import { Link, NavLink } from "react-router-dom"



const links = [
  {
    title: "Product",
    apiRoute:"",
    icon: <FaChevronDown size={10} className="mt-1" />
  },
  {
    title: "Solution",
    apiRoute: "",
    icon: <FaChevronDown size={10} className="mt-1" />
  },
  {
    title: "Resources",
    apiRoute: "",
    icon: <FaChevronDown size={10} className="mt-1" />
  },
  {
    title: "Pricing",
    apiRoute: "/price",
    icon: ""
  },

]


const Navbar = () => {
  return (
    <header className="py-5">
      <nav className="w-300 mx-auto flex justify-between items-center">

        <div>
          <Link to={"/"} className="p-2 rounded-lg bg-clip-text  bg-linear-70 from-blue-800 to-orange-600  text-white font-semibold">INsight</Link>
        </div>

        <ul className="flex items-center gap-8">
          {
            links.map((link, index) => (
              <li key={index} to={link.apiRoute} className={`flex items-center gap-1 text-white transition-all p-1 rounded-md font-semibold cursor-pointer`}>{link.title} {link.icon}</li>
            ))
          }
        </ul>

        <div></div>
      </nav>
    </header>
  )
}

export default Navbar
