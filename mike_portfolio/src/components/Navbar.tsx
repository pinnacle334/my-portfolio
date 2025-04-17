import { DarkModeBtn } from "./DarkModeBtn"
import logo1 from "../assets/logo-wh.svg"
import logo2 from "../assets/logo-dk.svg"

export const Navbar = () => {
//WHERE I STOPPED
//Still working on the navbar. I was trying to remove the the padding form the .svg logo so it can look a bit bigger with the h-10.
//after that, I need to display the two logo (logo-wh and logo-bk) based on the theme
// then continue with the header to finish up
    return (
        <header className="w-full h-10 border-2 border-red-800 border-dashed">
            <div>
                <img src={logo1} alt="Logo" className="h-10 w-auto" />
            </div>
            <nav>
                <ul className="flex space-x-6 text-sm font-medium font-col">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li>
                    <a href="/your-cv.pdf" download className="underline">Resume</a>
                    </li>
                </ul>
            </nav>
            <DarkModeBtn />
        </header>
    )
}
