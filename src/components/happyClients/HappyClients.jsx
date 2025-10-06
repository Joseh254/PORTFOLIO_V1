import Marquee from "react-fast-marquee";
import lapsol from "../../assets/logos/lapsol.png";
import iebc from "../../assets/logos/iebc.jpeg";
import chriswats from "../../assets/logos/chriswats.jpeg";
import teach2give from "../../assets/logos/teach2give.png";

const commonSVGClass = "h-5 sm:h-8 md:h-10";

const brandLogos = [
  <>
    {/* IEBC */}
    <img
      src={iebc} // or wherever your logo file is
      alt="IEBC"
      className={commonSVGClass}
    />
  </>,
  <>
    {/* Lapsol Technologies */}
    <img src={lapsol} alt="Lapsol Technologies" className={commonSVGClass} />
  </>,
  <>
    {/* Chriswats IT Solutions */}
    <img
      src={chriswats}
      alt="Chriswats IT Solutions"
      className={commonSVGClass}
    />
  </>,
  <>
    {/* Teach2Give */}
    <img src={teach2give} alt="Teach2Give" className={commonSVGClass} />
  </>,
];

const HappyClients = () => {
  return (
    <div className="content py-10 md:py-25 flex flex-col items-center px-2">
      <div className="max-w-144.25 text-center ">
        <p className="section-title mb-6">Happy Clients</p>
        <p className="text-[14px] sm:text-lg text-soft-dark font-normal">
          I've had the pleasure of working with a diverse range of companies,
          from startups to established brands.
        </p>
      </div>
      <Marquee pauseOnHover={true} speed={100} className="">
        <p className="flex items-center pt-4 md:pt-10">
          {brandLogos?.map((logo, index) => (
            <span className="ps-5 sm:ps-10 md:ps-20" key={index}>
              {logo}
            </span>
          ))}
        </p>
      </Marquee>
    </div>
  );
};

export default HappyClients;
