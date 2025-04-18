import { DarkModeBtn } from "./DarkModeBtn"
import { Bars3Icon } from '@heroicons/react/24/outline';
import logo1 from "../assets/icons/logo-wh.svg"
import logo2 from "../assets/icons/logo-dk.svg"
import cv from "../assets/certificates/Resume.pdf"
import { sendEmail } from "../utils/functions";
import { useState } from 'react';
import { Button } from "./Button";

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
        <header className="w-full h-10 flex justify-between items-center border-2 border-red-800 border-dashed">
            <div className="flex justify-between items-center gap-3">
                <Bars3Icon className="md:hidden h-6 w-6 text-[var(--primary-font)]" />
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
                <DarkModeBtn isDark={isDark} handleDarkMode={toggleDarkMode}/>
                <Button className="hidden md:block" variant="primary" onClick={handleEmailClick}>Email me</Button>
            </div>
        </header>
    )
}
