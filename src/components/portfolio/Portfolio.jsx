import Projects from "./Projects";
import card1 from "../../assets/images/portfolio-images/card-1.png";
import card2 from "../../assets/images/portfolio-images/card-2.png";
import card3 from "../../assets/images/portfolio-images/card-3.png";
import card4 from "../../assets/images/portfolio-images/card-4.png";
import card5 from "../../assets/images/portfolio-images/card-5.png";
import card6 from "../../assets/images/portfolio-images/card-6.png";
import card7 from "../../assets/images/portfolio-images/card-7.png";
import card8 from "../../assets/images/portfolio-images/card-8.png";
import card9 from "../../assets/images/portfolio-images/card-9.png";
import card10 from "../../assets/images/portfolio-images/card-10.png";

const projectData = [
  {
    id: 1,
    image: card2,
    category: "E-COMMERCE WEBSITE",
    title: "JosTech Computers Website",
    description:
      "A full-stack e-commerce platform built with the PERN stack — featuring product listings, cart, checkout, admin dashboard, and responsive design.",
    link: "https://github.com/Joseh254/JosTech-Computers-website",
    live: "https://jos-tech-computers-website-uxdd.vercel.app/",
  },
  {
    id: 2,
    image: card3,
    category: "FULL STACK APP",
    title: "Lipa na M-Pesa Integration",
    description:
      "A full-stack app integrating Safaricom’s Daraja API. The frontend (React) communicates with the backend (Express, Node.js) to initiate M-Pesa STK Push payments with token management and transaction tracking.",
    link: "https://github.com/Joseh254/LIPA-NA-MPESA-PROJECT",
  },
  {
    id: 3,
    image: card4,
    category: "FULL STACK / MACHINE LEARNING",
    title: "VSD (Ventricular Septal Defect) Detection System",
    description:
      "A full-stack PERN application integrated with a Flask-based machine learning model to detect VSD (Ventricular Septal Defect). Includes hospital recommendations, emergency reporting, and medical record tracking.",
    link: "https://github.com/Joseh254/VSD",
  },
  {
    id: 4,
    image: card10,
    category: "PORTFOLIO WEBSITE",
    title: "Personal Portfolio Website",
    description:
      "A sleek personal portfolio built with React and Tailwind CSS, showcasing my skills, projects, and contact information with smooth animations and responsive design.",
    link: "https://github.com/Joseh254/portfolio",
    live: "https://joseph-mbugua-portfolio.vercel.app/",
  },
  {
    id: 5,
    image: card5,
    category: "LANDING PAGE",
    title: "DevSoft Landing Page",
    description:
      "A professional landing page for a software solutions company built using React and Tailwind CSS, focused on promoting technology services and modern UI aesthetics.",
    link: "https://github.com/Joseh254/DevSoft-Landing-Page",
    live: "https://mog-rex-task2-ovii.vercel.app/",
  },
  {
    id: 6,
    image: card6,
    category: "WEB APP",
    title: "Random Joke Generator",
    description:
      "A fun JavaScript web app that fetches and displays random jokes using an external API. Designed for humor and simple UI/UX experience.",
    link: "https://github.com/Joseh254/Random-Joke-Generator",
    live: "https://random-joke-generator-alpha.vercel.app/",
  },
  {
    id: 7,
    image: card7,
    category: "WEB APP",
    title: "GitHub Finder App",
    description:
      "A React app that uses the GitHub API to search and display user profiles and repositories dynamically, showcasing API integration and UI performance optimization.",
    link: "https://github.com/Joseh254/Github-Finder-App",
    live: "https://github-finder-app-one-omega.vercel.app/",
  },
  {
    id: 8,
    image: card8,
    category: "INSTITUTION WEBSITE",
    title: "MUT Tech Club Website",
    description:
      "An official website for Murang’a University Tech Club showcasing events, programs, and club activities. Built with modern UI and responsive design.",
    link: "https://github.com/Joseh254/MUT-Tech-Club-Website",
    live: "https://mut-tech-club-website.vercel.app/",
  },
  {
    id: 9,
    image: card9,
    category: "TOURISM WEBSITE",
    title: "Zaph Tours Website",
    description:
      "A modern tourism web platform for Zaph Tours, featuring destination showcases, trip planning, and a clean, visually appealing layout.",
    link: "https://github.com/Joseh254/Zaph-Tours-Website",
    live: "https://zaph-tours-website.vercel.app/",
  },
];

const Portfolio = () => {
  return (
    <div
      className="content mt-10 md:mt-15 xl:mt-25 mb-10 md:mb-25 max-xxl:p-2"
      id="portfolio"
    >
      <div className="xl:mb-17.5 mb-5">
        <div className="max-sm:px-2 text-center mx-auto max-w-144.25">
          <p className="section-title ">Portfolio</p>
          <p className="font-normal text-[18px] max-sm:text-[14px] pt-6 text-gray-400">
            Here's a selection of my recent work, showcasing my skills in
            creating user-centric and visually appealing interfaces.
          </p>
        </div>
      </div>
      <div className="mx-auto flex justify-center">
        <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-6">
          {projectData.map((data, index) => (
            <Projects data={data} key={index} />
          ))}
        </div>
      </div>
      <div className="text-center">
        <a
          href="https://github.com/Joseh254"
          target="_blank"
          className="btn btn-primary py-3 px-6 mt-12.5 text-center text-[16px] font-semibold"
        >
          More Project
        </a>
      </div>
    </div>
  );
};

export default Portfolio;
