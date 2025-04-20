import { DarkModeBtn } from "./DarkModeBtn"
import logo1 from "../assets/icons/logo-wh.svg"
import logo2 from "../assets/icons/logo-dk.svg"
import cv from "../assets/certificates/Resume.pdf"
import { sendEmail } from "../utils/functions";
import { useState } from 'react';
import { Button } from "./Button";
import { HamburgerMenu } from "./HamburgerMenu";

export const Navbar = () => {
    const [ isDark, setIsDark ] = useState(() =>
        document.documentElement.classList.contains('dark')
    );
    const toggleDarkMode = () => {
        document.documentElement.classList.toggle("dark");
        setIsDark(!isDark);
    };
    const handleEmailClick = () => {
        sendEmail();
    };

    return (
        <header className="w-full h-10 flex justify-between items-center">
            <div className="flex justify-between items-center gap-3">
                <HamburgerMenu className="md:hidden" />
                {
                isDark ? <img src={logo2} alt="Logo" className="h-10 w-auto" /> : <img src={logo1} alt="Logo" className="h-10 w-auto" />
                }
            </div>
            <nav className="hidden md:block">
                <ul className="flex space-x-6 text-sm font-medium font-col no-underline">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href={cv} download>Resume</a></li>
                </ul>
            </nav>
            <div className="flex gap-3">
                {/* DARKMODE TOGGLE BUTTON */}
                <DarkModeBtn isDark={isDark} handleDarkMode={toggleDarkMode}/>
                <Button className="hidden md:block" variant="primary" onClick={handleEmailClick}>Email me</Button>
            </div>
        </header>
    )
}
