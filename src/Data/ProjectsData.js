import img1 from '../assets/Project1_image.png'; 
import img2 from '../assets/myNoteBookImage.png';
import img3 from '../assets/newsAppImage.png';
import img4 from '../assets/HanumantTechImg.png';
import img5 from '../assets/StudySync.png';
// import img6 from '../assets/Stop_watch.png';
import img7 from '../assets/ToDoList.png'; // Verified: Match Github case
import img8 from '../assets/logInPage.png';
import img9 from '../assets/colourGenImg.png';
import img10 from '../assets/GithubProfileProvider.png';
import img11 from '../assets/flexBankImg.png';
import img12 from '../assets/PersonalPortfolioAppImg.png';
import img13 from '../assets/passwordGenrator.png'

export const projectsData = [
  {
    id: 1,
    title: "myNoteBook",
    description: "MERN stack application with JWT authentication, allowing users to manage personal notes securely with full CRUD functionality.",
    tech: ["MongoDB", "Express", "React", "Node"],
    category: "mern",
    github: "https://github.com/puneetdwivedi81/noteBook",
    live: "https://note-book-kappa.vercel.app/",
    image: img2 
  },
  {
    id: 2,
    title: "personalPortfolio",
    description: "A professional, high-performance React.js portfolio website designed with Tailwind CSS and Framer Motion for smooth UI transitions.",
    tech: ["React.js", "Tailwind CSS", "Lucide-React", "Context API"],
    category: "react",
    github: "https://github.com/puneetdwivedi81/puneet-portfolio-react",
    live: "https://puneet-portfolio-react.vercel.app/",
    image: img12
  },
  {
    id: 3,
    title: "React NewsApp",
    description: "Modern News application fetching global headlines across categories like Business, Tech, and Sports using React state management.",
    tech: ["React", "Tailwind CSS", "API Integration"],
    category: "react",
    github: "https://github.com/puneetdwivedi81/News_App",
    live: "https://news-app-fawn-phi.vercel.app/",
    image: img3
  },
  {
    id: 4,
    title: "FlexiBank",
    description: "A comprehensive React.js digital wallet application featuring real-time balance tracking and secure transactions.",
    tech: ["React", "Tailwind CSS"],
    category: "react",
    github: "https://github.com/puneetdwivedi81/Context_Api",
    live: "https://contextpapi.netlify.app/",
    image: img11
  },
   {
    id: 5,
    title: "passwordGenerator",
    description: "A responsive Password Generator built using React that creates secure and customizable passwords based on selected length, numbers, and symbols it allows users to instantly generate and copy strong passwords with a clean and user-friendly interface.",
    tech: ["React", "Tailwind CSS"],
    category: "react",
    github: "https://github.com/puneetdwivedi81/password_generator",
    live: "https://passwordpgenerator.netlify.app/",
    image: img13
  },
  {
    id: 6,
    title: "Global Country Finder",
    description: "A dynamic web application built with Vanilla JavaScript that integrates the REST Countries API.",
    tech: ["JavaScript", "HTML5", "CSS3", "Fetch API"],
    category: "javascript", 
    github: "https://github.com/puneetdwivedi81/GlobalCountryFinder",
    live: "https://global-country-finder.vercel.app/",
    image: img1
  },
  {
    id: 7,
    title: "colourGenrator",
    description: "A dynamic JavaScript utility that generates random HEX color codes.",
    tech: ["JavaScript", "HTML5", "CSS3"],
    category: "javascript", 
    github: "https://github.com/puneetdwivedi81/Color_genrater",
    live: "https://colorgenratorapp.netlify.app/",
    image: img9
  },
  {
    id: 8,
    title: "githubProfileProvider",
    description: "A dynamic web tool built with JavaScript that fetches real-time user data from the GitHub REST API.",
    tech: ["JavaScript", "HTML5", "CSS3"],
    category: "javascript", 
    github: "https://github.com/puneetdwivedi81/Github_profile_provider_project",
    live: "https://githubprofileprovider.netlify.app/",
    image: img10
  },
  // {
  //   id: 9,
  //   title: "stopWatch",
  //   description: "A fully functional digital Stopwatch built with JavaScript, HTML5, and CSS3.",
  //   tech: ["JavaScript", "HTML5", "CSS3"],
  //   category: "javascript", 
  //   github: "https://github.com/puneetdwivedi81/Stop_Watch",
  //   live: "https://stopjwatch.netlify.app/",
  //   image: img6
  // },
  {
    id: 10,
    title: "toDoList",
    description: "A functional Task Management application built with Vanilla JavaScript using Local Storage.",
    tech: ["JavaScript","CSS"],
    category: "javascript",
    github: "https://github.com/puneetdwivedi81/To_Do_list",
    live: "https://todoplistapp.netlify.app/",
    image: img7
  },
  {
    id: 11, 
    title: "Hanuman Institute Clone",
    description: "A professional landing page clone of a training institute, built entirely with HTML5 and CSS3.",
    tech: ["HTML5", "CSS3", "Responsive Design", "Flexbox"],
    category: "html-css", 
    github: "https://github.com/puneetdwivedi81/Hanumant_tech_webpage_with_css", 
    live: "https://hanumanttechweb.netlify.app/", 
    image: img4 
  },
  {
    id: 12,
    title: "StudySync Clone",
    description: "A high-fidelity landing page clone of the StudySync platform.",
    tech: ["HTML5", "CSS3", "Responsive Design", "Flexbox"],
    category: "html-css", 
    github: "https://github.com/puneetdwivedi81/study-sync-project",
    live: "https://stydypsync.netlify.app/", 
    image: img5
  },
  {
    id: 13, 
    title: "loginPageWithAnimation",
    description: "A modern Login Page featuring smooth CSS3 keyframe animations.",
    tech: ["HTML5", "CSS3", "Responsive Design", "Flexbox"],
    category: "html-css", 
    github: "https://github.com/puneetdwivedi81/Login_page_with_animation", 
    live: "https://loginpagewithanimation.netlify.app/", 
    image: img8 
  }
];