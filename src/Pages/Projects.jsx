import React from "react";
import { ExternalLink, Github, Folder, Download } from "lucide-react";
// Yahan data import karein
import { projectsData } from "../Data/ProjectsData"; 

const Projects = () => {
  return (
    <section className="relative w-full h-full flex flex-col bg-transparent overflow-hidden">
      {/* Header Area */}
      <div className="mb-6 shrink-0 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 animate-fadeInSlow">
        <div>
          <h2 className="text-indigo-600 font-bold tracking-widest uppercase text-[10px] mb-1">Recent Work</h2>
          <h1 className="text-2xl lg:text-4xl font-black text-gray-900 dark:text-white">
            My <span className="text-indigo-600">Projects</span>
          </h1>
        </div>

        <a href="/puneetDwivediResume.pdf" download className="flex items-center gap-2 bg-indigo-600 text-white px-5 py-2.5 rounded-xl text-xs font-bold shadow-lg shadow-indigo-500/20">
          <Download size={16} /> DOWNLOAD CV
        </a>
      </div>

      {/* Grid Area */}
      <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Ab projectsData par map karein */}
          {projectsData.map((project) => (
            <div key={project.id} className="group flex flex-col bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-[2rem] overflow-hidden hover:shadow-2xl transition-all duration-500">
              <div className="relative h-40 overflow-hidden bg-gray-100 dark:bg-gray-800">
                {project.image ? (
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                ) : (
                  <div className="flex items-center justify-center h-full text-gray-400 text-xs">No Preview Available</div>
                )}
              </div>

              <div className="p-5 flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Folder size={14} className="text-indigo-600" />
                    <h3 className="font-bold text-gray-900 dark:text-white text-base">{project.title}</h3>
                  </div>
                  <div className="flex gap-3">
                    <a href={project.github} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-indigo-600"><Github size={18} /></a>
                    <a href={project.live} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-indigo-600"><ExternalLink size={18} /></a>
                  </div>
                </div>
                <p className="text-[12px] text-gray-500 dark:text-gray-400 line-clamp-2 h-10">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tech.map((t, i) => (
                    <span key={i} className="px-2.5 py-1 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 text-[9px] font-bold rounded-lg border border-indigo-100/50">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;