import React from "react";
import { 
  Code2, 
  Database, 
  Layout, 
  Server, 
  Terminal,
  Globe
} from "lucide-react";

const Skills = () => {
  // Percentages ko 14% se reduce kiya gaya hai realistic dikhne ke liye
  const skillSet = [
    { name: "Frontend", tech: "React, Tailwind, JS", icon: <Layout size={24} className="text-blue-500" />, level: "71%" },
    { name: "Backend", tech: "Node.js, Express", icon: <Server size={24} className="text-green-500" />, level: "61%" },
    { name: "Database", tech: "MongoDB,", icon: <Database size={24} className="text-emerald-500" />, level: "56%" },
    { name: "Languages", tech: ", JavaScript", icon: <Code2 size={24} className="text-yellow-500" />, level: "66%" },
    { name: "Tools", tech: "Git, GitHub, Postman", icon: <Terminal size={24} className="text-gray-500" />, level: "76%" },
    { name: "Web Protocols", tech: "HTTP, REST APIs", icon: <Globe size={24} className="text-purple-500" />, level: "61%" },
  ];

  return (
    <section className="relative w-full h-full flex flex-col bg-transparent transition-all duration-500">
      
      {/* Header Area */}
      <div className="mb-8 animate-fadeInSlow">
        <h2 className="text-indigo-600 font-bold tracking-widest uppercase text-[10px] sm:text-xs mb-1">
          Technical Proficiency
        </h2>
        <h1 className="text-3xl lg:text-5xl font-black text-gray-900 dark:text-white">
          My <span className="text-indigo-600">Skillset</span>
        </h1>
      </div>

      {/* Skills Grid - Fixed Layout with scroll if needed */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 overflow-y-auto pr-2 custom-scrollbar pb-6">
        {skillSet.map((skill, index) => (
          <div 
            key={index}
            className="group p-5 rounded-3xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md hover:border-indigo-500/30 transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-2xl bg-gray-50 dark:bg-gray-800/50 group-hover:bg-indigo-50 dark:group-hover:bg-indigo-900/20 transition-colors">
                {skill.icon}
              </div>
              <div className="min-w-0">
                <h3 className="font-bold text-gray-900 dark:text-white text-sm lg:text-base truncate">
                  {skill.name}
                </h3>
                <p className="text-[10px] lg:text-xs text-gray-500 dark:text-gray-400 truncate">
                  {skill.tech}
                </p>
              </div>
            </div>

            {/* Simple Progress Bar */}
            <div className="space-y-1.5">
              <div className="flex justify-between items-center text-[10px] font-bold text-gray-400 uppercase">
                <span>Skill Level</span>
                <span>{skill.level}</span>
              </div>
              <div className="w-full h-1.5 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-indigo-600 rounded-full transition-all duration-1000 group-hover:bg-indigo-400" 
                  style={{ width: skill.level }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Simplified Status Badge (Footer removed as requested) */}
      <div className="mt-auto py-4 flex items-center justify-end">
        <div className="px-3 py-1 bg-green-500/10 text-green-600 dark:text-green-400 rounded-full text-[10px] font-bold flex items-center gap-2">
          <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
          Open for Internship & Full-time
        </div>
      </div>

    </section>
  );
};

export default Skills;