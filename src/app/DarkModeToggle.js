'use client';
import { useEffect, useState } from "react";

export default function DarkModeToggle() {
    const [dark, setDark] = useState(false);

    useEffect(() => {
        const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
        setDark(isDarkMode);
    }, []);

    useEffect(() => {
        if (dark) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [dark]);

    return (
        <button
            aria-label="Toggle dark mode"
            onClick={() => setDark((d) => !d)}
            className="fixed top-4 right-4 z-50 bg-gray-200 dark:bg-gray-800 rounded-full p-2 shadow hover:bg-orange-400 dark:hover:bg-blue-600 transition-colors"
        >
            {dark ? (
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M17.75 15.5A6.75 6.75 0 0 1 8.5 6.25a.75.75 0 0 0-.75-.75A8 8 0 1 0 20 16.25a.75.75 0 0 0-.75-.75.75.75 0 0 0-.75.75z" /></svg>
            ) : (
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12zm0 2a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm0-9.25a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5z" /></svg>
            )}
        </button>
    );
} 