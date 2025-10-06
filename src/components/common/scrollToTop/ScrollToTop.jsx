import { useEffect, useState } from "react";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { animateScroll } from "react-scroll";
import { FaCoffee } from "react-icons/fa";

const options = {
  duration: 500,
  smooth: true,
};

const scrollToTop = () => {
  animateScroll.scrollToTop(options);
};

const ScrollToTop = () => {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex flex-col items-end gap-4 fixed bottom-10 right-5 sm:right-10 z-50">
      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`w-10 h-10 sm:w-12 sm:h-12 flex justify-center items-center rounded-full transition-transform duration-500 ease-in-out hover:scale-110 bg-picto-primary hover:bg-picto-primary-dark text-white shadow-lg ${
          position < 200 ? "scale-0" : "scale-100"
        }`}
      >
        <FontAwesomeIcon icon={faAngleUp} size="lg" />
      </button>

      {/* Buy Me a Coffee Button */}
      <a
        href="https://buymeacoffee.com/josephmbugua"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 bg-[#FFDD00] text-black font-semibold py-2 px-4 rounded-full shadow-md hover:bg-yellow-400 transition-all duration-300 text-sm sm:text-base"
      >
        <FaCoffee className="text-[#6f4e37]" />
        <span>Buy Me a Coffee</span>
      </a>
    </div>
  );
};

export default ScrollToTop;
