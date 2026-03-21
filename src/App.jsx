import { Routes, Route } from "react-router-dom";
import HomeLayout from "./Layout/HomeLayout";
import HomePage from "./Components/HomePage";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import Skill from "./Pages/Skill";
import Blogs from "./Pages/Blogs";
import TechProjects from "./Pages/TechProjects";
import { useTheme } from "./contextapi/ThemeState";
import { useEffect } from "react";
import "./App.css";

function App() {
  const { theme } = useTheme();

  useEffect(() => {
    // Ye line aapki poori website ke root (html tag) ko select karti hai
    const root = window.document.documentElement;

    // Purani theme hatakar nayi apply karna
    root.classList.remove("light", "dark");
    root.classList.add(theme);

    // Debugging ke liye (optional): console.log("Current active theme:", theme);
  }, [theme]);
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />}>
        {/* Default page when at "/" */}
        <Route index element={<HomePage />} />
        
        {/* Navigation Pages */}
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
        <Route path="contact" element={<Contact />} />
        <Route path="skills" element={<Skill />} />
        {/* <Route path="blog" element={<Blogs />} /> */}

        {/* Dynamic Route for specific tech projects */}
        <Route path="projects/:tech" element={<TechProjects />} />
      </Route>
    </Routes>
  );
}

export default App;