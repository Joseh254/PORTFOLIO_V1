import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Navigation, Pagination } from "swiper/modules";
import TestimonialTemplate from "./TestimonialTemplate";
import "./testimonial.css";

const testimonialData = [
  {
    message:
      "Joseph is a highly skilled full-stack developer with a deep understanding of the PERN stack and modern DevOps practices.",
    quote: `He helped us design and deploy a scalable web system using PostgreSQL, Express, React, and Node. His Docker and CI/CD pipeline setup made deployment smooth and efficient. Truly dependable and talented.`,
    name: "Chris Watene",
    designation: "CEO, Chriswats IT Solutions",
  },
  {
    message:
      "Joseph brought structure and clarity to our development workflow and transformed our ideas into robust systems.",
    quote: `He implemented clean APIs, optimized our backend with Prisma, and automated our build process using GitHub Actions and Jenkins. His problem-solving approach and clear communication made collaboration easy.`,
    name: "Denis Otwoma",
    designation: "Project Lead, Tech2Give",
  },
  {
    message:
      "Working with Joseph was a great experience his attention to detail, scalability, and user experience was top-notch.",
    quote: `He developed and containerized a POS system and integrated payment automation with M-Pesa’s Daraja API. His ability to merge backend logic with responsive UI/UX made a lasting impact on our operations.`,
    name: "Victory Njeri",
    designation: "Managing Director, Jovic Globals",
  },
];

const Testimonial = () => {
  return (
    <div className="flex mx-auto justify-center px-2 max-w-218 pb-10 md:pb-25">
      <div className="w-full h-full cursor-grab">
        <p className="section-title mb-6 text-center">Testimonial</p>
        <Swiper
          id="testimonialSwiper"
          spaceBetween={30}
          navigation={false}
          pagination={{
            clickable: true,
          }}
          modules={[EffectFade, Navigation, Pagination]}
        >
          {testimonialData.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <TestimonialTemplate testimonial={testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
