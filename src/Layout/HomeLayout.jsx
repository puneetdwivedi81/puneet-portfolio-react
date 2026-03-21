import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../Components/Sidebar"; // Full Sidebar (Icons + Text)
import IconMenu from "../Components/IconMenu"; // Sirf Icons (Mobile ke liye)
import ThemeToggle from "../Components/ThemeToggle";

const HomeLayout = () => {
  return (
    <div className="h-screen w-full flex flex-col lg:flex-row bg-white dark:bg-black text-gray-900 dark:text-white transition-colors duration-500 overflow-hidden">
      
      {/* --- 1. DESKTOP SIDEBAR (Visible only on Large Screens) --- */}
      <div className="hidden lg:flex shrink-0">
        <Sidebar />
      </div>

      {/* --- 2. MAIN CONTENT AREA --- */}
      <main className="relative flex-1 h-full overflow-hidden flex flex-col">
        
        {/* Fixed Theme Toggle */}
        <div className="fixed top-6 right-6 lg:top-8 lg:right-8 z-50">
          <ThemeToggle />
        </div>

        {/* Dynamic Page Content */}
        <div className="flex-1 overflow-y-auto custom-scrollbar">
          <div className="w-full max-w-6xl mx-auto px-6 lg:px-12 pt-24 pb-32 lg:pb-12 lg:pt-32">
            {/* Yahan About, Projects, TechProjects load honge */}
            <Outlet />
          </div>
        </div>
      </main>

      {/* --- 3. MOBILE NAVIGATION (Visible only on Small Screens) --- */}
      <div className="lg:hidden fixed bottom-0 w-full bg-white/80 dark:bg-black/80 backdrop-blur-xl z-50 border-t border-gray-100 dark:border-gray-800 p-4 flex justify-around items-center">
        {/* Mobile par sirf icons acche lagte hain */}
        <IconMenu />
      </div>

    </div>
  );
};

export default HomeLayout;