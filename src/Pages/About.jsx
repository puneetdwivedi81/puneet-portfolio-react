import React from "react";
import { User, GraduationCap, Download, MapPin, Code2 } from "lucide-react";

const About = () => {
const education = [
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Maharishi University of Information Technology, Lucknow",
      year: "2023 - 2026",
    },
    {
      degree: "Intermediate (12th Standard)",
      institution: "Vijay Singh Inter College, Lucknow",
      year: "2021 - 2023",
    },
    {
      degree: "High School (10th Standard)",
      institution: "Vijay Singh Inter College, Lucknow",
      year: "2019 - 2021",
    }
  ];

  return (
    <section className="relative w-full h-full flex flex-col bg-transparent overflow-hidden">
      
      {/* Header */}
      <div className="mb-6 shrink-0 animate-fadeInSlow">
        <h2 className="text-indigo-600 font-bold uppercase text-[10px] tracking-widest mb-1">Introduction</h2>
        <h1 className="text-3xl lg:text-4xl font-black text-gray-900 dark:text-white">
          About <span className="text-indigo-600">Me</span>
        </h1>
      </div>

      <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Bio Section */}
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-indigo-600 font-bold text-xs uppercase">
                <Code2 size={16} /> <span>Professional Summary</span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                I am an **Aspiring MERN Stack Developer** and a dedicated BCA student graduating in 2026. 
                My expertise lies in building responsive, user-centric web applications using 
                **React, Node.js, Express, and MongoDB**.
                <br /><br />
                I am passionate about writing clean, maintainable code and constantly learning 
                new technologies in the ever-evolving web ecosystem. My goal is to contribute 
                to impactful projects while growing as a full-stack professional.
              </p>
              <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-xs">
                <MapPin size={14} /> <span>Lucknow, Uttar Pradesh</span>
              </div>
            </div>

            {/* Resume Download Button */}
            <div className="pt-4">
              <a 
                href="/puneetDwivediResume.pdf" 
                download="Puneet_Dwivedi_Resume.pdf"
                className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-2xl font-bold transition-all active:scale-95 shadow-lg shadow-indigo-500/20"
              >
                <Download size={18} /> Download CV
              </a>
            </div>
          </div>

          {/* Education Timeline */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-indigo-600 font-bold text-xs uppercase mb-2">
              <GraduationCap size={18} /> <span>Education Journey</span>
            </div>
            
            <div className="relative pl-6 border-l-2 border-gray-100 dark:border-gray-800 ml-2">
              {education.map((edu, index) => (
                <div key={index} className="relative mb-6 last:mb-0">
                  <div className="absolute -left-[31px] top-1 w-3 h-3 bg-indigo-600 rounded-full shadow-[0_0_10px_rgba(79,70,229,0.5)]"></div>
                  <div className="bg-white dark:bg-gray-900 p-4 rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-indigo-100 dark:hover:border-indigo-900/50 transition-colors">
                    <span className="text-[10px] font-bold text-indigo-600 uppercase tracking-tight">{edu.year}</span>
                    <h3 className="font-bold text-gray-900 dark:text-white text-sm mt-1">{edu.degree}</h3>
                    <p className="text-[11px] text-gray-500 dark:text-gray-400">{edu.institution}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;