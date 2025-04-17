import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

export const DarkModeBtn = () => {
    const [ isDark, setIsDark ] = useState(() =>
        document.documentElement.classList.contains('dark')
    );

    const toggleDarkMode = () => {
        document.documentElement.classList.toggle("dark");
        setIsDark(!isDark);
    };

    return (
        <button onClick={toggleDarkMode}>
        {isDark ? (
            <SunIcon className="h-6 w-6 text-yellow-400" />
        ) : (
            <MoonIcon className="h-6 w-6 text-gray-800" />
        )}
        </button>
    );
};

