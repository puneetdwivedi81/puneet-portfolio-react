import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { 
  Home, User, Code2, Folder, Mail, 
  ChevronRight, Menu, X, Layers, Cpu, Layout
} from "lucide-react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/", icon: <Home size={20} /> },
    { name: "About", path: "/about", icon: <User size={20} /> },
    { name: "Skills", path: "/skills", icon: <Code2 size={20} /> },
    { name: "All Projects", path: "/projects", icon: <Folder size={20} /> },
    { name: "Contact", path: "/contact", icon: <Mail size={20} /> },
  ];

  const techCategories = [
    { name: "JavaScript", path: "/projects/javascript", icon: <Cpu size={16} /> },
    { name: "React JS", path: "/projects/react", icon: <Code2 size={16} /> },
    { name: "MERN Stack", path: "/projects/mern", icon: <Layers size={16} /> },
    { name: "HTML & CSS", path: "/projects/html-css", icon: <Layout size={16} /> },
  ];

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      <button onClick={toggleSidebar} className="lg:hidden fixed top-4 right-4 z-50 p-2 bg-indigo-600 text-white rounded-lg">
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <aside className={`fixed lg:static inset-y-0 left-0 z-40 w-64 bg-white dark:bg-gray-900 border-r border-gray-100 dark:border-gray-800 transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}>
        <div className="h-full flex flex-col p-6">
          
          <div className="mb-10">
            <h1 className="text-xl font-black text-gray-900 dark:text-white tracking-tighter">
              PUNEET<span className="text-indigo-600">.DEV</span>
            </h1>
            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-1">Bithouli, Lucknow</p>
          </div>

          <nav className="flex-1 space-y-1 overflow-y-auto no-scrollbar">
            <p className="text-[10px] font-black text-gray-400 uppercase mb-4 tracking-widest">Main Menu</p>
            
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) => `
                  flex items-center justify-between px-4 py-3 rounded-xl text-sm font-bold transition-all group
                  ${isActive 
                    ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/20" 
                    : "text-gray-500 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white"}
                `}
              >
                <div className="flex items-center gap-3">
                  {link.icon}
                  {link.name}
                </div>
                <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </NavLink>
            ))}

            <div className="pt-8 mt-4 border-t border-gray-50 dark:border-gray-800">
              <p className="text-[10px] font-black text-gray-400 uppercase mb-4 tracking-widest">Tech Categories</p>
              {techCategories.map((cat) => (
                <NavLink
                  key={cat.name}
                  to={cat.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) => `
                    flex items-center gap-3 px-4 py-2.5 rounded-xl text-xs font-bold transition-all
                    ${isActive ? "text-indigo-600 bg-indigo-50 dark:bg-indigo-900/20" : "text-gray-400 hover:text-indigo-500"}
                  `}
                >
                  {cat.icon}
                  {cat.name}
                </NavLink>
              ))}
            </div>
          </nav>

          <div className="mt-auto pt-6 border-t border-gray-100 dark:border-gray-800 flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold text-xs">P</div>
            <div>
              <p className="text-xs font-bold text-gray-900 dark:text-white">Puneet Dwivedi</p>
              <p className="text-[10px] text-gray-500">MERN Developer</p>
            </div>
          </div>
        </div>
      </aside>
      {isOpen && <div onClick={toggleSidebar} className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30 lg:hidden" />}
    </>
  );
};

export default Sidebar;