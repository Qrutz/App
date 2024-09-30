import { useEffect, useState } from 'react';

const DarkModeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        // On initial load, set dark mode based on localStorage or user system preferences
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme) {
            setIsDarkMode(storedTheme === 'dark');
            document.documentElement.classList.toggle('dark', storedTheme === 'dark');
        } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setIsDarkMode(true);
            document.documentElement.classList.add('dark');
        }
    }, []);

    const toggleDarkMode = () => {
        const newDarkMode = !isDarkMode;
        setIsDarkMode(newDarkMode);

        // Toggle the dark class on the HTML element
        if (newDarkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark'); // Persist theme in localStorage
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    };

    return (
        <button
            onClick={toggleDarkMode}
            className=" bg-gray-300 dark:bg-gray-700 rounded-lg w-10 h-10 flex items-center justify-center "
        >
            {isDarkMode ? '☀️ ' : '🌙 '}
        </button>
    );
};

export default DarkModeToggle;
