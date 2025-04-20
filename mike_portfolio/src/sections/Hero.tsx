import { Navbar } from "../components/Navbar"
import { Home } from "./Home"

const Hero = () => {
  return (
    <div className="w-full h-screen">
        <Navbar />
        <Home />
    </div>
  )
}

export default Hero