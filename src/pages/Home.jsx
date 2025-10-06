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
import Seo from "../components/SEO/Seo";
import { Helmet } from "react-helmet-async";
const Home = () => {
  return (
    <>
 <Helmet>
  <title>
    Joseph Mbugua | Full Stack Web & Software Developer in Kenya | React, Node.js, DevOps
  </title>

  <meta
    name="description"
    content="Hire Joseph Mbugua — a Full Stack Web and Software Developer based in Kenya. I specialize in React, Node.js, Express, PostgreSQL, DevOps, and Windows/Office installation and activation. I build scalable systems, web apps,point of sales` and digital solutions for businesses."
  />

  <meta
    name="keywords"
    content="Full Stack Developer Kenya, Web Developer Kenya, Software Developer Kenya, React Developer, Node.js Developer, Express Developer, DevOps Engineer, Hire Web Developer, Portfolio Developer, Windows Installation Expert, Office Activation, IT Support, Freelance Developer, Joseph Mbugua"
  />

  <meta name="author" content="Joseph Mbugua" />
  <meta name="robots" content="index, follow" />

  {/* Open Graph for Social Media */}
  <meta property="og:title" content="Joseph Mbugua | Full Stack & Software Developer in Kenya" />
  <meta
    property="og:description"
    content="Explore my portfolio showcasing full-stack applications, React projects, POS systems, and software solutions. I also provide Windows and Office setup and activation."
  />
  <meta
    property="og:image"
    content="https://joseph-mbugua-portfolio.vercel.app/preview.png"
  />
  <meta property="og:url" content="https://joseph-mbugua-portfolio.vercel.app" />
  <meta property="og:type" content="website" />

  {/* For better search results */}
  <link rel="canonical" href="https://joseph-mbugua-portfolio.vercel.app/" />
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
        <Seo/>
      </div>
    </>
  );
};

export default Home;
