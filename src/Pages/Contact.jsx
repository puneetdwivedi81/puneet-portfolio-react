import React from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";

const Contact = () => {
  return (
  
    <section className="relative w-full h-full flex flex-col bg-transparent overflow-hidden">
      
      {/* 1. Background Watermark (Fixed) */}
      <h1 className="absolute top-0 left-1/2 -translate-x-1/2 text-[80px] lg:text-[150px] font-black text-gray-100 dark:text-gray-800/20 select-none pointer-events-none uppercase z-0">
        Contact
      </h1>

      {/* 2. Header Area (Fixed) */}
      <div className="relative z-10 mb-6 shrink-0 animate-fadeInSlow">
        <h2 className="text-indigo-600 font-bold uppercase text-[10px] tracking-widest mb-1">
          Get in Touch
        </h2>
        <h1 className="text-2xl lg:text-4xl font-black text-gray-900 dark:text-white">
          Let's <span className="text-indigo-600">Connect</span>
        </h1>
      </div>

      {/* 3. Scrollable Content Area */}
      <div className="relative z-10 flex-1 overflow-y-auto pr-2 custom-scrollbar pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          
          {/* Left Side: Real Details from Resume */}
          <div className="space-y-6">
            <p className="text-sm text-gray-500 dark:text-gray-400 max-w-sm leading-relaxed">
              I'm an aspiring MERN Stack Developer based in Lucknow UP. 
              I'm open to discussing new projects, internships, or entry-level roles.
            </p>

            <div className="space-y-4">
              {/* Email */}
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-sm">
                <div className="p-2.5 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 rounded-lg">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-gray-400">Email Me</p>
                  <p className="text-sm font-bold dark:text-white underline decoration-indigo-500/30">dwivedipuneet29@gmail.com</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-sm">
                <div className="p-2.5 bg-red-50 dark:bg-red-900/20 text-red-600 rounded-lg">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-gray-400">Location</p>
                  <p className="text-sm font-bold dark:text-white">Bithouli Lucknow UP</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 pt-4">
              <a href="https://github.com/puneetdwivedi81" target="_blank" rel="noreferrer" className="p-3 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-xl hover:bg-indigo-600 hover:text-white transition-all shadow-sm">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/puneet-dwivedi-0969a82b4/" target="_blank" rel="noreferrer" className="p-3 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-xl hover:bg-indigo-600 hover:text-white transition-all shadow-sm">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Right Side: Formspree Contact Form */}
          <form 
            action="https://formspree.io/f/your_form_id" 
            method="POST"
            className="flex flex-col gap-4 bg-white dark:bg-gray-900 p-6 rounded-[2rem] border border-gray-100 dark:border-gray-800 shadow-xl"
          >
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-gray-400 uppercase ml-1">Full Name</label>
              <input 
                type="text" name="name" placeholder="Enter your name" required
                className="w-full p-3.5 rounded-xl bg-gray-50 dark:bg-black/50 border border-transparent focus:border-indigo-500 outline-none transition-all dark:text-white text-sm"
              />
            </div>

            <div className="space-y-1">
              <label className="text-[10px] font-bold text-gray-400 uppercase ml-1">Email Address</label>
              <input 
                type="email" name="email" placeholder="Enter your email" required
                className="w-full p-3.5 rounded-xl bg-gray-50 dark:bg-black/50 border border-transparent focus:border-indigo-500 outline-none transition-all dark:text-white text-sm"
              />
            </div>

            <div className="space-y-1">
              <label className="text-[10px] font-bold text-gray-400 uppercase ml-1">Message</label>
              <textarea 
                name="message" placeholder="How can I help you?" rows="4" required
                className="w-full p-3.5 rounded-xl bg-gray-50 dark:bg-black/50 border border-transparent focus:border-indigo-500 outline-none transition-all dark:text-white text-sm resize-none"
              ></textarea>
            </div>
            
            <button 
              type="submit"
              className="flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 rounded-xl transition-all active:scale-95 shadow-lg shadow-indigo-500/20 mt-2"
            >
              Send Message <Send size={16}/>
            </button>
          </form>

        </div>
      </div>
    </section>
  );
};

export default Contact;