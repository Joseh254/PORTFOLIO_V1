import img1 from "../../assets/images/blog/blog-1.webp";
import img2 from "../../assets/images/blog/blog-2.avif";
import img3 from "../../assets/images/blog/blog-3.jpg";
import img4 from "../../assets/images/blog/blog-4.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import MonoBlog from "./MonoBlog";
import "swiper/css";
import "swiper/css/pagination";
import "./blog.css";

// Breakpoints for swiperJS
const custom_breakpoints = {
  640: {
    slidesPerView: 2,
    spaceBetween: 15,
  },
  768: {
    slidesPerView: 3,
    spaceBetween: 15,
  },
  1220: {
    slidesPerView: 4,
    spaceBetween: 24,
  },
};

const blogData = [
  {
    id: 1,
    image: img1,
    date: "12 Jan, 2025",
    comments: 98,
    title: "Building Scalable APIs with Express.js and PostgreSQL",
    link: "#!",
  },
  {
    id: 2,
    image: img2,
    date: "25 Feb, 2025",
    comments: 76,
    title: "Optimizing React Performance in Large-Scale PERN Applications",
    link: "#!",
  },
  {
    id: 3,
    image: img3,
    date: "10 Mar, 2025",
    comments: 112,
    title: "Implementing CI/CD Pipelines with GitHub Actions and Docker",
    link: "#!",
  },
  {
    id: 4,
    image: img4,
    date: "05 Apr, 2025",
    comments: 64,
    title: "Securing Node.js Backends and Protecting API Endpoints",
    link: "#!",
  },
  {
    id: 5,
    image: img2,
    date: "18 May, 2025",
    comments: 89,
    title: "Deploying Full Stack Apps with Docker and Jenkins",
    link: "#!",
  },
  {
    id: 6,
    image: img1,
    date: "30 Jun, 2025",
    comments: 73,
    title: "Database Design Principles for Scalable PERN Applications",
    link: "#!",
  },
];

const Blog = () => {
  return (
    <div className="content py-25 px-2 relative" id="blog">
      <div className="max-w-135 text-center mx-auto pb-17.5">
        <p className="section-title pb-6">Blog</p>
        <p className="text-xs xs:text-[16px] md:text-lg text-gray-400">
          Check out my recent blog posts where I share insights on design,
          development, and the latest industry trends.
        </p>
      </div>
      <Swiper
        grabCursor={true}
        breakpoints={custom_breakpoints}
        pagination={{ clickable: true }}
        modules={[Pagination]}
      >
        {blogData?.map((data, index) => (
          <SwiperSlide
            key={index}
            className="mb-10" /* pagination margin bottom to 40px */
            style={{ backgroundColor: "rgba(0,0,0,0)" }}
          >
            <MonoBlog data={data} key={index} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Blog;
