import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';

interface DarkModeProps {
    isDark: boolean;
    handleDarkMode: () => void;
}

export const DarkModeBtn = ({ isDark, handleDarkMode }: DarkModeProps) => {
    return (
        <button onClick={handleDarkMode}>
        {isDark ? (
            <SunIcon className="h-6 w-6 text-yellow-400" />
        ) : (
            <MoonIcon className="h-5 w-5 text-gray-800" />
        )}
        </button>
    );
};

