import Roles from "./Roles";

const rolesData = [
  {
    id: 1,
    title: "Backend Development",
    description:
      "I build scalable and secure RESTful APIs using Express.js and Node.js, integrating PostgreSQL through Prisma ORM to ensure efficient data management and performance.",
  },
  {
    id: 2,
    title: "Frontend Development",
    description:
      "I develop responsive and dynamic user interfaces with React, ensuring smooth interaction, optimal performance, and a great user experience across all devices.",
  },
  {
    id: 3,
    title: "CI/CD & DevOps",
    description:
      "I implement continuous integration and deployment pipelines using Docker, GitHub Actions, and Jenkins to automate testing, building, and deployment workflows.",
  },
];

const Profession = () => {
  return (
    <div
      className="content grid md:grid-cols-2 max-xxl:px-4 xxl:px-2 py-10 md:py-15 lg:py-37.5"
      id="services"
    >
      <div className="flex flex-col justify-between h-fit md:pe-8 lg:pe-35.75 max-md:text-center my-auto">
        <p className="section-title max-md:text-center">What I Do?</p>
        <div className="mt-6 text-[14px]">
          <p className="text-xs sm:text-lg font-normal text-gray-400 mb-4">
            I’m a passionate{" "}
            <span className="text-black font-bold">PERN Stack Developer</span>
            who specializes in building robust, scalable, and user-focused web
            applications with seamless frontend and backend integration.
          </p>
          <p className="text-xs sm:text-lg font-normal text-gray-400">
            My workflow combines modern development practices, automation, and
            clean architecture to deliver reliable and high-performing digital
            solutions.
          </p>
        </div>
        <a
          href="mailto:josephkarimambugua@gmail.com"
          className="mt-5 md:mt-12.5 btn btn-primary text-white w-fit md:py-3 md:px-6 text-[12px] sm:text-[16px] font-semibold max-md:mx-auto max-md:mb-5"
        >
          Say Hello!
        </a>
      </div>

      <div>
        {rolesData.map((role, index) => (
          <Roles role={role} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Profession;
