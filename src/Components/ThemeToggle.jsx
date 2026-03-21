import React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "../contextapi/ThemeState"; // Aapka context hook

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-6 right-6 lg:right-24 z-50 p-3 rounded-full bg-white dark:bg-gray-800 text-gray-800 dark:text-yellow-400 shadow-xl hover:scale-110 transition-all duration-300 border border-gray-200 dark:border-gray-700"
      aria-label="Toggle Theme"
    >
      {/* Theme state ke basis par icon change hoga */}
      {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
};

export default ThemeToggle;