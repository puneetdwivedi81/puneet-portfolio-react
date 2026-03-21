import React from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Github, ExternalLink, Folder, Code2, LayoutGrid } from "lucide-react";
import { projectsData } from "../Data/ProjectsData"; // External Data Import

const TechProjects = () => {
  const { tech } = useParams();

  // Optimized Filter Logic: Category ya individual tech tag dono se search karega
  const filteredProjects = projectsData.filter(
  (project) => project.category.toLowerCase() === tech.toLowerCase()
);

  return (
    <section className="relative w-full h-full flex flex-col bg-transparent overflow-hidden">
      
      {/* --- HEADER SECTION (Fixed) --- */}
      <div className="mb-8 shrink-0 animate-fadeInSlow">
        <Link 
          to="/projects" 
          className="inline-flex items-center gap-2 text-indigo-600 font-bold text-[10px] uppercase mb-4 hover:translate-x-[-5px] transition-all group"
        >
          <ArrowLeft size={14} className="group-hover:scale-110" /> Back to All Categories
        </Link>
        
        <div className="flex items-center gap-3">
           <div className="p-2.5 bg-indigo-600 rounded-2xl text-white shadow-lg shadow-indigo-500/20">
              <Code2 size={24} />
           </div>
           <div>
             <h1 className="text-3xl lg:text-5xl font-black text-gray-900 dark:text-white capitalize tracking-tight">
              {tech} <span className="text-indigo-600">Showcase</span>
            </h1>
            <p className="text-gray-500 dark:text-gray-400 mt-1 text-xs lg:text-sm font-medium">
              Explore my {tech} based projects and technical implementations.
            </p>
           </div>
        </div>
      </div>

      {/* --- GRID AREA (Scrollable with Custom Scrollbar) --- */}
      <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar pb-20">
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {filteredProjects.map((project) => (
              <div 
                key={project.id} 
                className="group relative bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 p-5 lg:p-7 rounded-[2.5rem] hover:border-indigo-500/40 transition-all duration-500 shadow-sm hover:shadow-2xl hover:-translate-y-1"
              >
                {/* Top Actions */}
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-gray-50 dark:bg-gray-800 text-indigo-600 rounded-2xl group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                    <Folder size={22} />
                  </div>
                  <div className="flex gap-3">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="p-2 text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                      title="View Code"
                    >
                      <Github size={20}/>
                    </a>
                    <a 
                      href={project.live} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="p-2 text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                      title="Live Demo"
                    >
                      <ExternalLink size={20}/>
                    </a>
                  </div>
                </div>

                {/* Project Preview Image (Only if exists) */}
                {project.image && (
                  <div className="relative mb-5 overflow-hidden rounded-[1.5rem] aspect-video bg-gray-100 dark:bg-gray-800 border border-gray-100 dark:border-gray-700">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover grayscale-[40%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                )}

                {/* Info */}
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-3 tracking-tight group-hover:text-indigo-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 leading-relaxed line-clamp-2 group-hover:line-clamp-none transition-all">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((t, i) => (
                    <span 
                      key={i} 
                      className="text-[9px] font-black uppercase px-3 py-1.5 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 rounded-xl border border-indigo-100/50 dark:border-indigo-800/50"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="flex flex-col items-center justify-center py-24 text-center animate-fadeIn">
            <div className="w-20 h-20 bg-gray-50 dark:bg-gray-900 rounded-[2rem] flex items-center justify-center mb-6 border border-gray-100 dark:border-gray-800">
               <LayoutGrid size={32} className="text-gray-300 dark:text-gray-700" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">No {tech} projects found</h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm mt-1 max-w-[250px]">
              I'm currently working on new projects in this category.
            </p>
            <Link 
              to="/projects" 
              className="mt-6 px-6 py-2 bg-indigo-600 text-white text-xs font-bold rounded-full hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-500/20"
            >
              Back to Categories
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default TechProjects;