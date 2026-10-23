import Footer from "../components/common/Footer"
import Navbar from "../components/landingpage/Navbar"
import LandingPageSection from "../pages/LandingPageSection"

const LandingPage = () => {
  return (
    <div className="bg-gray-900">
      <Navbar/>
      <LandingPageSection/>
      <Footer />
    </div>
  )
}

export default LandingPage
  