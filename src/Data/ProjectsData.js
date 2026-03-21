import img1 from '../assets/Project1_image.png'; 
import img2 from '../assets/myNoteBookImage.png';

import img3 from '../assets/newsAppImage.png';
import img4 from '../assets/HanumantTechImg.png'
import img5 from '../assets/StudySync.png';
import img6 from '../assets/Stop_watch.png'
import img7 from '../assets/ToDoList.png'
import img8 from '../assets/logInPage.png'
import img9 from '../assets/colourGenImg.png'
import img10 from '../assets/GithubProfileProvider.png'
import img11 from '../assets/flexBankImg.png'
import img12 from '../assets/PersonalPortfolioAppImg.png'

export const projectsData = [
   {
    id: 1,
    title: "myNoteBook",
    description: "MERN stack application with JWT authentication, allowing users to manage personal notes securely with full CRUD functionality.",
    tech: ["MongoDB", "Express", "React", "Node"],
    category: "mern",
    github: "https://github.com/puneetdwivedi81/noteBook",
    live: "https://itspnotebook.netlify.app/",
    image: img2 
  },
   {
    id: 2,
    title: "personalPortfolio",
    description: "A professional, high-performance React.js portfolio website designed with Tailwind CSS and Framer Motion for smooth UI transitions. It features a dynamic project filtering system, integrated dark/light mode, and a responsive sidebar, showcasing my full-stack development journey and technical expertise.",
    tech: ["React.js", "Tailwind CSS", "Lucide-React", "Context API"],
    category: "react",
    github: "https://github.com/puneetdwivedi81/News_App",
    live: "https://reliable-banoffee-6121eb.netlify.app/login",
    image: img12
  },
   {
    id: 3,
    title: "React NewsApp",
    description: "Modern News application fetching global headlines across categories like Business, Tech, and Sports using React state management.",
    tech: ["React", "Tailwind CSS", "API Integration"],
    category: "react",
    github: "https://github.com/puneetdwivedi81/News_App",
    live: "https://reliable-banoffee-6121eb.netlify.app/login",
    image: img3
  },
   {
    id: 4,
    title: "FlexiBank",
    description: "A comprehensive React.js digital wallet application featuring real-time balance tracking, secure deposit, and withdrawal functionalities. It offers a seamless user experience with an integrated Dark/Light mode toggle, demonstrating advanced state management and responsive UI design",
    tech: ["React", "Tailwind CSS",],
    category: "react",
    github: "https://github.com/puneetdwivedi81/Context_Api",
    live: "https://contextpapi.netlify.app/",
    image: img11
  },


  {
    id: 5,
    title: "Global Country Finder",
    description: "A dynamic web application built with Vanilla JavaScript that integrates the REST Countries API to fetch and display real-time data of nations worldwide. This project highlights my expertise in Asynchronous Programming (Fetch API), dynamic DOM manipulation, and search filtering logic, allowing users to explore country details like population, region, and capital in a clean, responsive interface.",
    tech: ["JavaScript", "HTML5", "CSS3", "Fetch API"],
    category: "javascript", 
    github: "https://github.com/puneetdwivedi81/GlobalCountryFinder",
    live: "https://euphonious-biscochitos-d54db2.netlify.app",
    image: img1
  },
   {
    id: 6,
    title: "colourGenrator",
    description: "A dynamic JavaScript utility that generates random HEX color codes and allows users to copy them to the clipboard with a single click. It features real-time DOM updates and background transitions, demonstrating efficient event handling and CSS variable manipulation.",
    tech: ["JavaScript", "HTML5", "CSS3", ],
    category: "javascript", 
    github: "https://github.com/puneetdwivedi81/Color_genrater",
    live: "https://colorgenratorapp.netlify.app/",
    image: img9,
  },
   {
    id: 7,
    title: "githubProfileProvider",
    description: "A dynamic web tool built with JavaScript that fetches real-time user data from the GitHub REST API. It features a clean, minimal UI to display profile details like bio, repositories, and followers, demonstrating expertise in Asynchronous Fetch and JSON data handling",
    tech: ["JavaScript", "HTML5", "CSS3", ],
    category: "javascript", 
    github: "https://github.com/puneetdwivedi81/Github_profile_provider_project",
    live: "https://githubprofileprovider.netlify.app/",
    image: img10,
  },
   {
    id: 8,
    title: "stopWatch",
    description: "A fully functional digital Stopwatch built with  JavaScript, HTML5, and CSS3. This project highlights my expertise in DOM Manipulation and state management using , featuring accurate time-tracking with Start, Pause, and Reset functionalities in a sleek dark-mode interface.",
    tech: ["JavaScript", "HTML5", "CSS3",],
    category: "javascript", 
    github: "https://github.com/puneetdwivedi81/Stop_Watch",
    live: "https://stopjwatch.netlify.app/",
    image: img6
  },
 
  {
    id: 9,
    title: "toDoList",
    description: "A functional Task Management application built with Vanilla JavaScript that enables users to add, track, and delete daily tasks efficiently. It utilizes Local Storage to ensure data persistence, allowing your list to remain saved even after a page refresh.",
    tech: ["JavaScript","CSS"],
    category: "javascript",
    github: "https://github.com/puneetdwivedi81/To_Do_list",
    live: "https://todoplistapp.netlify.app/",
    image: img7
  },
 
  
  {
  id: 10, 
  title: "Hanuman Institute Clone",
  description: "A professional landing page clone of a training institute, built entirely with HTML5 and CSS3 to master layout positioning and responsive design.",
  tech: ["HTML5", "CSS3", "Responsive Design", "Flexbox"],
  category: "html-css", 
  github: "https://github.com/puneetdwivedi81/Hanumant_tech_webpage_with_css", 
  live: "https://app.netlify.com/projects/hanumanttechweb/overview", 
  image:img4 
},
  
  {
  id: 11,
  title: "StudySync Clone",
  description: "A high-fidelity landing page clone of the StudySync platform, focusing on modern web aesthetics, responsive layouts, and smooth CSS transitions.",
  tech: ["HTML5", "CSS3", "Responsive Design", "Flexbox"],
  category: "html-css", 
  github: "https://github.com/puneetdwivedi81/study-sync-project",
  live: "https://stydypsync.netlify.app/", 
  image:img5  }
,
 {
  id: 12, 
  title: "loginPageWithAnimation",
  description: "A modern and visually appealing Login Page featuring smooth CSS3 keyframe animations and transitions for an interactive user experience. Designed with a mobile-first approach, it focuses on clean UI/UX, custom-styled input fields, and responsive layout structures",
  tech: ["HTML5", "CSS3", "Responsive Design", "Flexbox"],
  category: "html-css", 
  github: "https://github.com/puneetdwivedi81/Login_page_with_animation", 
  live: "https://loginpagewithanimation.netlify.app/", 
  image: img8  
}

  
];