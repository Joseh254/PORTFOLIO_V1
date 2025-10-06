import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const WorkTogether = () => {
  return (
    <div className="py-25 max-w-169 mx-auto px-2">
      <div className="text-center">
        <p className="text-white md:font-semibold text-2xl sm:text-3xl md:text-5xl pb-8">
          Do you have a Project Idea? Let's discuss your project!
        </p>
        <p className="text-[#A5ACB5] text-xs sm:text-lg font-normal text-center pb-8">
          I'm always open to discussing new projects and creative ideas. Let's
          connect and build something amazing together.
        </p>
        <a
          href="https://wa.me/254105379207?text=Hi%20Joseph!%20I%20just%20checked%20out%20your%20portfolio%20and%20would%20love%20to%20work%20with%20you."
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary px-4 md:px-6.5 py-3 md:py-6 text-[12px] md:text-[16px]"
        >
          Let's work together
          <FontAwesomeIcon
            icon={faArrowRight}
            size="l"
            style={{ color: "#FFFFFF" }}
            className="ms-3"
          />
        </a>
      </div>
    </div>
  );
};

export default WorkTogether;
