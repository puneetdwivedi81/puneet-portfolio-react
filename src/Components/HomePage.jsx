import React from "react";
import { ArrowRight, Download, Github, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import my_image from '../assets/photo.jpeg';

const HomePage = () => {
  return (
    /* h-full aur bg-transparent use kiya hai taaki HomeLayout ka background hi dikhe */
    <section className="relative w-full h-full flex flex-col lg:flex-row items-center justify-between bg-transparent transition-all duration-500">
      
      {/* LEFT CONTENT */}
      <div className="z-10 w-full lg:w-1/2 space-y-4 lg:space-y-6 animate-fadeInSlow order-2 lg:order-1 mt-8 lg:mt-0">
        <div className="inline-block px-4 py-1 rounded-full bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-100 dark:border-indigo-800">
          <h4 className="text-indigo-600 font-bold tracking-widest uppercase text-[10px] sm:text-xs">
            Open to Opportunities
          </h4>
        </div>
        
        <div className="space-y-1">
          <h1 className="text-4xl lg:text-7xl font-black text-gray-900 dark:text-white leading-tight">
            Hi, I'm <span className="text-indigo-600">Puneet Dwivedi</span>
          </h1>
          <h2 className="text-xl lg:text-4xl font-bold text-gray-600 dark:text-gray-400">
            MERN Stack Developer & BCA Student
          </h2>
        </div>
        
        <p className="text-base lg:text-lg text-gray-600 dark:text-gray-400 max-w-lg leading-relaxed">
          I am a passionate developer and a BCA student at Maharishi University, graduating in 2026. 
          Based in Bithouli, Lucknow, I specialize in building responsive and user-friendly web 
          applications using React, Node.js, and MongoDB.
        </p>

        <div className="flex items-center gap-2 text-gray-500 dark:text-gray-500 text-sm">
          <MapPin size={16} className="text-indigo-600" />
          <span>Bithouli, Lucknow, UP</span>
        </div>

        <div className="flex flex-wrap gap-4 pt-2">
          <Link
            to="/projects"
            className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 lg:px-8 py-3 lg:py-4 rounded-full font-bold shadow-lg shadow-indigo-500/30 transition-all active:scale-95 text-sm lg:text-base"
          >
            My Work <ArrowRight size={20} />
          </Link>
          <Link
            to="/contact"
            className="flex items-center gap-2 border-2 border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white hover:border-indigo-600 px-6 lg:px-8 py-3 lg:py-4 rounded-full font-bold transition-all text-sm lg:text-base"
          >
            Hire Me <Mail size={20} />
          </Link>
        </div>
      </div>

      {/* RIGHT IMAGE SECTION */}
      <div className="relative w-full lg:w-1/2 flex justify-center lg:justify-end animate-slideInSlow order-1 lg:order-2">
        {/* Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 lg:w-96 lg:h-96 bg-indigo-600/10 dark:bg-indigo-500/5 rounded-full blur-3xl"></div>
        
        {/* Profile Image Frame */}
        <div className="relative w-56 h-56 lg:w-80 lg:h-80 rounded-[2.5rem] lg:rounded-[3rem] overflow-hidden border-4 border-white dark:border-gray-900 shadow-2xl transition-transform duration-500 hover:rotate-2 hover:scale-105">
          <img 
            src={my_image} 
            alt="Puneet Dwivedi" 
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
          />
        </div>

        {/* Floating Quick Links */}
        <div className="absolute -bottom-4 right-4 lg:right-10 bg-white dark:bg-gray-800 p-3 lg:p-5 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 flex flex-col gap-2 lg:gap-3 z-20">
          <p className="text-[8px] lg:text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest">Connect with me</p>
          <div className="flex gap-4">
            <a 
              href="https://github.com/puneetdwivedi81" 
              target="_blank" 
              rel="noreferrer" 
              className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 transition-colors"
            >
              <Github size={20}/>
            </a>
            <a 
              href="/MERN_Stack_Resume.pdf" 
              download="Puneet_Dwivedi_Resume.pdf"
              className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 transition-colors"
            >
              <Download size={20}/>
            </a>
          </div>
        </div>
      </div>

    </section>
  );
};

export default HomePage;