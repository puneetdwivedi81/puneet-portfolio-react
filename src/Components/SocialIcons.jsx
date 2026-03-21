import React from "react";
import { Github, Linkedin, Twitter, Instagram } from "lucide-react";

const SocialIcons = () => {
  const socials = [
    { icon: <Github size={20} />, link: "https://github.com", color: "hover:text-black dark:hover:text-white" },
    { icon: <Linkedin size={20} />, link: "https://linkedin.com", color: "hover:text-blue-600" },
    { icon: <Twitter size={20} />, link: "https://twitter.com", color: "hover:text-sky-500" },
    { icon: <Instagram size={20} />, link: "https://instagram.com", color: "hover:text-pink-500" },
  ];

  return (
    <div className="fixed bottom-10 left-6 z-40 hidden lg:flex flex-col gap-6 items-center">
      {socials.map((social, index) => (
        <a
          key={index}
          href={social.link}
          target="_blank"
          rel="noopener noreferrer"
          className={`text-gray-400 transition-all duration-300 hover:-translate-y-1 ${social.color}`}
        >
          {social.icon}
        </a>
      ))}
      <div className="w-[2px] h-20 bg-gray-300 dark:bg-gray-800 mt-2"></div>
    </div>
  );
};

export default SocialIcons;