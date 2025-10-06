import WorkSteps from "./WorkSteps";

const workStepData = [
  {
    id: 1,
    title: "Plan & Research",
    description:
      "I start by understanding project goals and user needs, conducting in-depth analysis to design scalable architectures and efficient database schemas with PostgreSQL and Prisma.",
    svgPath:
      "M21.3333 18.6667H10.6667C10.313 18.6667 9.97391 18.8072 9.72386 19.0573C9.47381 19.3073 9.33333 19.6465 9.33333 20.0001C9.33333 20.3537 9.47381 20.6928 9.72386 20.9429C9.97391 21.1929 10.313 21.3334 10.6667 21.3334H21.3333C21.687 21.3334 22.0261 21.1929 22.2761 20.9429C22.5262 20.6928 22.6667 20.3537 22.6667 20.0001C22.6667 19.6465 22.5262 19.3073 22.2761 19.0573C22.0261 18.8072 21.687 18.6667 21.3333 18.6667Z",
  },
  {
    id: 2,
    title: "Develop & Integrate",
    description:
      "I build robust RESTful APIs with Express and Node.js, connect them with PostgreSQL through Prisma, and integrate third-party APIs such as Daraja for seamless transactions.",
    svgPath:
      "M9.33333 21.3334C9.86377 21.3334 10.3725 21.1227 10.7475 20.7476C11.1226 20.3726 11.3333 19.8638 11.3333 19.3334C11.3398 19.2669 11.3398 19.1999 11.3333 19.1334L15.0533 15.4134H15.36H15.6667L17.8133 17.5601C17.8133 17.5601 17.8133 17.6267 17.8133 17.6667C17.8133 18.1972 18.024 18.7059 18.3991 19.081C18.7742 19.456 19.2829 19.6667 19.8133 19.6667Z",
  },
  {
    id: 3,
    title: "Design & Test",
    description:
      "I create clean, responsive UIs using React, ensuring smooth user experiences. I also implement automated testing and debugging to maintain reliability and performance.",
    svgPath:
      "M29.3333 9.65319C29.3343 9.47772 29.3007 9.30377 29.2343 9.14132C29.168 8.97887 29.0702 8.83111 28.9466 8.70653L23.2933 3.05319C23.1687 2.92962 23.021 2.83185 22.8585 2.7655C22.6961 2.69915 22.5221 2.66551 22.3466 2.66653C22.1712 2.66551 21.9972 2.69915 21.8348 2.7655C21.6723 2.83185 21.5246 2.92962 21.4 3.05319L17.6266 6.82653L3.05331 21.3999Z",
  },
  {
    id: 4,
    title: "Deploy & Automate",
    description:
      "I use Docker, Jenkins, and GitHub Actions to containerize, automate, and deploy full-stack PERN applications, ensuring continuous integration and delivery for faster, reliable updates.",
    svgPath:
      "M28 18.6668H26.6666V9.3335C26.6666 8.27263 26.2452 7.25521 25.4951 6.50507C24.7449 5.75492 23.7275 5.3335 22.6666 5.3335H9.33329C8.27243 5.3335 7.25501 5.75492 6.50487 6.50507C5.75472 7.25521 5.33329 8.27263 5.33329 9.3335V18.6668H3.99996C3.64634 18.6668 3.3072 18.8073 3.05715 19.0574C2.8071 19.3074 2.66663 19.6465 2.66663 20.0002V22.6668C2.66663 23.7277 3.08805 24.7451 3.8382 25.4953C4.58834 26.2454 5.60576 26.6668 6.66663 26.6668H25.3333C26.3942 26.6668 27.4116 26.2454 28.1617 25.4953C28.9119 24.7451 29.3333 23.7277 29.3333 22.6668V20.0002C29.3333 19.6465 29.1928 19.3074 28.9428 19.0574C28.6927 18.8073 28.3536 18.6668 28 18.6668Z",
  },
];

const WorkProcess = () => {
  return (
    <div
      className="content grid xl:grid-cols-2 xl:items-center px-2 py-5 md:py-10 lg:py-25 xl:py-35 max-xxl:px-4"
      id="work-process"
    >
      <div className="lg:pe-10 xl:pe-35.75 max-xs:mb-3 max-xl:mb-8">
        <p className="section-title max-xl:text-center">Work Process</p>
        <p className="mt-6 mb-4 md:text-[18px] text-sm font-normal max-xl:text-center text-gray-500">
          As a PERN stack developer, I transform ideas into scalable digital
          solutions. My process involves researching, designing, developing, and
          automating deployments using modern DevOps tools.
        </p>
        <p className="mt-6 md:text-[18px] text-sm font-normal max-xl:text-center text-gray-500">
          From backend logic to frontend design and deployment pipelines, I
          ensure that every step is efficient, maintainable, and
          production-ready.
        </p>
      </div>

      <div className="grid xs:grid-cols-2 justify-end my-2 w-fit mx-auto">
        {workStepData.map((data, index) => {
          return (
            <WorkSteps
              data={data}
              style={`max-xs:mt-3 p-4 sm:p-8 bg-white aspect-auto sm:max-w-78 ${
                index % 2 == 1 ? "xs:ms-3 xs:mt-6 " : "xs:mb-6"
              }`}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default WorkProcess;
