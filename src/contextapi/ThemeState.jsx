import React, { createContext, useContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

function ThemeState({ children }) {

  // 1️⃣ Load theme from localStorage
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "dark"
  );

  // 2️⃣ Save theme whenever it changes
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  // 3️⃣ Theme functions
  function darkMode() {
    setTheme("dark");
  }

  function lightMode() {
    setTheme("light");
  }

  function toggleTheme() {
    setTheme(prev => (prev === "dark" ? "light" : "dark"));
  }

  return (
    <ThemeContext.Provider
      value={{ theme, darkMode, lightMode, toggleTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeState;

export function useTheme() {
  return useContext(ThemeContext);
}
