import { faArrowRight, faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Projects = ({ data }) => {
  return (
    <div
      id="projects"
      className="max-w-106 rounded-lg outline-[#FFFFFF] hover:shadow-2xl duration-300 transition-all shadow-gray-300 border border-gray-200"
    >
      <img
        src={data?.image}
        alt={`${data?.title} image`}
        className="w-full rounded-t-lg"
      />
      <div className="p-4 xs:p-8">
        <p className="text-gray-400 text-xs font-medium">{data?.category}</p>
        <p className="text-gray-900 text-md xxs:text-lg font-semibold pt-1 mb-3">
          {data?.title}
        </p>
        <p
          style={{ lineHeight: "20px", letterSpacing: "0%" }}
          className="text-gray-600 text-xs xxs:text-[14px] text-wrap"
        >
          {data?.description}
        </p>

        <div className="flex flex-wrap gap-3 mt-5">
          {/* Case Study Button */}
          <a
            href={data?.link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn hover:border-picto-primary hover:text-picto-primary bg-white text-sm xs:text-[16px] font-semibold hover:gap-3 xs:hover:gap-4 transition-all duration-300 py-3 px-5 border border-gray-300 rounded-md flex items-center gap-2"
          >
            Case Study
            <FontAwesomeIcon icon={faArrowRight} size="sm" />
          </a>

          {/* View Live Button */}
          {data?.live && (
            <a
              href={data?.live}
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-picto-primary text-white text-sm xs:text-[16px] font-semibold hover:bg-picto-primary-dark transition-all duration-300 py-3 px-5 rounded-md flex items-center gap-2"
            >
              <FontAwesomeIcon icon={faEye} size="sm" />
              View Live
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
