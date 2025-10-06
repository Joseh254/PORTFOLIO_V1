// import { Helmet } from "react-helmet-async";
import Introduction from "../components/introduction/Introduction";
import Profile from "../components/profile/Profile";
import WorkProcess from "../components/workProcess/WorkProcess";
import Portfolio from "../components/portfolio/Portfolio";
import WorkTogether from "../components/workTogether/WorkTogether";
import Blog from "../components/blog/Blog";
import Profession from "../components/profession/Profession";
import HappyClients from "../components/happyClients/HappyClients";
import Testimonial from "../components/testimonial/Testimonial";
import Contact from "../components/contact/Contact";
import "../../index.css";
import { Helmet } from "react-helmet-async";
const Home = () => {
  return (
    <>
      <Helmet>
        <title>Joseph Mbugua | Full Stack Developer Portfolio</title>
        <meta
          name="description"
          content="Explore the portfolio of Joseph Mbugua — a Full Stack Developer skilled in React, Node.js, Express, PostgreSQL, and Python. View projects, case studies, and contact details."
        />
        <meta
          name="keywords"
          content="Joseph Mbugua, Full Stack Developer, React Developer, Express, Node.js, PostgreSQL, Python, Portfolio,web developer,web designer,mobile app developer"
        />
        <meta name="author" content="Joseph Mbugua" />
        <meta property="og:title" content="Joseph Mbugua | Portfolio" />
        <meta
          property="og:description"
          content="Full Stack Developer portfolio featuring React, Express, and Python projects."
        />
        <meta
          property="og:image"
          content="https://joseph-mbugua-portfolio.vercel.app/preview.png"
        />
        <meta
          property="og:url"
          content="https://joseph-mbugua-portfolio.vercel.app"
        />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <div className="relative">
        <div className="introduction-profile-background">
          <div className="content">
            <Introduction />
            <Profile />
          </div>
        </div>

        <div className="bg-soft-white pt-30">
          <WorkProcess />
        </div>

        <Portfolio />

        <div className="bg-gray-900">
          <WorkTogether />
        </div>

        <div className="blog-background">
          <Blog />
        </div>

        <div className="bg-soft-white">
          <Profession />
        </div>

        <HappyClients />
        <Testimonial />
        <Contact />
      </div>
    </>
  );
};

export default Home;
