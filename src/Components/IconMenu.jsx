import React from "react";
import { NavLink } from "react-router-dom";
// Layout icon ko HTML & CSS ke liye use karenge
import { Home, User, Code2, Briefcase, Mail, Layers, Cpu, Layout } from "lucide-react";

const IconMenu = () => {
  const menuItems = [
    { icon: <Home size={22} />, path: "/", title: "Home" },
    { icon: <User size={22} />, path: "/about", title: "About" },
    
    // --- Dynamic Tech Categories ---
    { icon: <Cpu size={22} />, path: "/projects/javascript", title: "JS Projects" },
    { icon: <Code2 size={22} />, path: "/projects/react", title: "React Projects" }, 
    { icon: <Layers size={22} />, path: "/projects/mern", title: "MERN Stack" },
    // HTML & CSS Category yahan add kar di hai
    { icon: <Layout size={22} />, path: "/projects/html-css", title: "HTML & CSS" },
    
    // --- Main Links ---
    { icon: <Briefcase size={22} />, path: "/projects", title: "All Projects" },
    { icon: <Mail size={22} />, path: "/contact", title: "Contact" },
  ];

  return (
    <nav className="flex lg:flex-col gap-3 lg:gap-5 items-center">
      {menuItems.map((item, index) => (
        <NavLink
          key={index}
          to={item.path}
          title={item.title}
          className={({ isActive }) =>
            `p-3 rounded-2xl transition-all duration-300 hover:scale-110 ${
              isActive
                ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/40 scale-110"
                : "text-gray-400 hover:text-indigo-600 dark:hover:text-white hover:bg-indigo-50 dark:hover:bg-gray-800"
            }`
          }
        >
          {item.icon}
        </NavLink>
      ))}
    </nav>
  );
};

export default IconMenu;