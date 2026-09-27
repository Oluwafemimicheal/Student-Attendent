import { FaBook, FaBookDead, FaBookmark, FaCheck, FaCode, FaCodeBranch, FaCreativeCommonsNcEu, FaMale, FaPlayCircle } from "react-icons/fa"

const Hero = () => {

  function handleSubmit() {
    console.log("Form submission")
  }
  return (
    <div className="w-300 mx-auto h-auto py-20 flex justify-center flex-col relative">
      <div className="flex justify-center flex-col items-center gap-3">
        <span className="bg-white/20 border border-white/30 rounded-2xl flex items-center gap-2 p-1 px-4 text-white text-xs font-semibold"><FaPlayCircle className="text-white" /> Start your interactive demo now!</span>

        <div className="text-center space-y-2">
          <h1 className="text-5xl font-bold text-white leading-14">Time tracking software for <br /> student hybrid workflow</h1>
          <p className="text-lg text-gray-400">Experience the freedom of student progress management</p>
        </div>


        <form onSubmit={handleSubmit} className="bg-white p-1  rounded-full">
          <input type="text" placeholder="Enter your email" name="guest" className="pl-3 font-semibold text-gray-700" />
          <button className="bg-blue-800 text-white p-2 px-5 font-semibold rounded-full cursor-pointer hover:opacity-90">Get Started</button>
        </form>

        <ul className="flex justify-center items-center space-x-10 text-gray-300 mt-8">
          <li className="flex items-center gap-2"><FaCheck />Free 14-day trial</li>
          <li className="flex items-center gap-2"><FaCheck />No credit card required</li>
          <li className="flex items-center gap-2"><FaCheck />Cancel anytime</li>
        </ul>

        <div className="flex justify-center items-end space-x-5 w-200 mt-16">
          <div className="w-100 h-60 bg-white rounded-2xl"></div>
          <div className="w-100 h-72 bg-white rounded-2xl"></div>
          <div className="w-100 h-60 bg-white rounded-2xl"></div>
        </div>

        <div>
          <div className="absolute top-30 left-10 bg-white/20 border border-white/30 rounded-2xl flex items-center gap-2 p-1 px-2 text-white text-sm font-semibold opacity-10 animate-pulse"> <FaCode size={25} /> Programer</div>
          <div className="absolute top-60 right-20 bg-white/20 border border-white/30 rounded-2xl flex items-center  p-1 px-2 text-white text-sm font-semibold opacity-10 animate-pulse anima"> <FaMale size={25} /> Human Resource</div>
        </div>

      </div>

    </div>
  )
}

export default Hero
