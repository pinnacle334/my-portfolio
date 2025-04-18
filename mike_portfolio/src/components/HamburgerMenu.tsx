import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"; 

export const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden w-full px-4 py-2 bg-transparent shadow-md relative">
        <div>
            <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
                <XMarkIcon className="h-6 w-6 font-col" />
            ) : (
                <Bars3Icon className="h-6 w-6 font-col" />
            )}
            </button>
        </div>

        {/* Mobile dropdown */}
        {isOpen && (
            <div className="md:hidden mt-2 flex flex-col gap-4 bg-white p-4 shadow-md border rounded absolute w-full left-0 top-full z-10">
            <a href="#about" className="text-sm font-medium">About</a>
            <a href="#projects" className="text-sm font-medium">Projects</a>
            <a href="#contact" className="text-sm font-medium">Contact</a>
            </div>
        )}
    </div>
  );
}
