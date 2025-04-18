import { useState } from "react";
import cv from "../assets/certificates/Resume.pdf"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { HomeIcon,
        ArrowRightEndOnRectangleIcon,
        BriefcaseIcon,
        CircleStackIcon,
        AcademicCapIcon
} from "@heroicons/react/24/outline";
  

export const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
        <div>
            <button type="button" className="" id="menu-button" aria-expanded="true" aria-haspopup="true" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
                <XMarkIcon className="h-6 w-6 font-col" />
            ) : (
                <Bars3Icon className="h-6 w-6 font-col" />
            )}
           
            </button>
        </div>
        {isOpen && (
        <div className="absolute left-0 z-10 mt-2 w-56 origin-top-right rounded-md shadow-lg ring-1 ring-black/5 focus:outline-hidden bg-col font-col" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex={-1}>
            <div className="py-1 px-2 flex items-center" role="none">
                <HomeIcon className="h-4 w-4" />
                <a href="#hero" className="block px-4 py-2 text-sm" role="menuitem" tabIndex={-1} id="menu-item-0">Home</a>
            </div>
            <div className="py-1 px-2 flex items-center" role="none">
                <ArrowRightEndOnRectangleIcon className="h-4 w-4" />
                <a href="#about" className="block px-4 py-2 text-sm" role="menuitem" tabIndex={-1} id="menu-item-2">About</a>
            </div>
            <div className="py-1 px-2 flex items-center" role="none">
                <BriefcaseIcon className="h-4 w-4" />
                <a href="#projects" className="block px-4 py-2 text-sm" role="menuitem" tabIndex={-1} id="menu-item-4">Projects</a>
            </div>
            <div className="py-1 px-2 flex items-center" role="none">
                <CircleStackIcon className="h-4 w-4" />
                <a href="#skills" className="block px-4 py-2 text-sm" role="menuitem" tabIndex={-1} id="menu-item-6">Skills</a>
            </div>
            <div className="py-1 px-2 flex items-center" role="none">
                <AcademicCapIcon className="h-4 w-4" />
                <a href={cv} className="block px-4 py-2 text-sm" role="menuitem" tabIndex={-1} id="menu-item-6" download>Resume</a>
            </div>
        </div>
        )}
    </div>
  );
}
