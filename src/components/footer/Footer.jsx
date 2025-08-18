import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneFlip } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoLogoSkype } from "react-icons/io5";
import logo from "../../assets/logo.png"

function Footer() {
  return (
    <footer className=" w-full mt-50 relative ">
      <div className=" overflow-hidden mb-0 h-fit  bg-[#ffe18d] xs:bg-transparent ">
        <svg
          className=" xs:block h-160 xl:h-105"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#fcaf3c"
            fillOpacity="1"
            d="M0,160L48,144C96,128,192,96,288,101.3C384,107,480,149,576,160C672,171,768,149,864,138.7C960,128,1056,128,1152,149.3C1248,171,1344,213,1392,234.7L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
      <div className="text-neutral-100 overflow-x-auto z-40 px-10 pt-5 leading-5 items-start grid  xs:grid-cols-[0.9fr_minmax(80px,230px)] xs:justify-between gap-y-5 sm:gap-y-3 gap-x-5 grid-cols-1 place-items-baseline text-sm xl:leading-7 xl:flex  xl:justify-between absolute bottom-3 inset-x-0 ">
        <div className="xl:w-1/4">
          <img
            src={logo}
            alt="logo"
            className="w-35 sm:w-40"
          />
          <p className=" xl:leading-6 ">
            We are a young company always looking for new and creative ideas ti
            help you with our products in your everyday work
          </p>
          <p className="text-orange-600 mt-1">Our team</p>
        </div>
        <ul className="flex flex-col flex-wrap  xs:w-full  xl:w-fit text-left">
          <li className="font-semibold text-lg mb-2 ">Contact</li>
          <li className="flex items-center text-left   xl:justify-start">
            <span className="text-orange-500 text-lg -ml-0.5 mr-0.5">
              <IoLocationSharp />
            </span>
            <p>Via Rossini 10,10136 Turin Italy</p>
          </li>
          <li className="flex  items-center  xl:justify-start">
            <span className="text-orange-500 mr-1">
              <FaPhoneFlip />
            </span>
            <p>Phone: (0039) 333 12 68 347</p>
          </li>
          <li className="flex items-center  xl:justify-start">
            <span className="text-orange-500 mr-1">
              <MdEmail />
            </span>
            <p>
              Email: <span className="text-orange-400">hello@domain.com</span>
            </p>
          </li>
          <li className="flex items-center xl:justify-start">
            <span className="text-orange-500 mr-1">
              <IoLogoSkype />
            </span>
            <p>Skype: you_online</p>
          </li>
        </ul>
        <ul className=" xs:w-full xl:w-fit">
          <li className="font-semibold text-lg mb-2">Links</li>
          <li>Home</li>
          <li>Features</li>
          <li>How it works</li>
          <li>Our clients</li>
        </ul>
        <ul className="flex flex-col flex-wrap  *:w-full xs:w-full xl:w-fit ">
          <li className="font-semibold text-lg mb-2 ">About Us</li>
          <li>Plans & pricing</li>
          <li>Affiliates</li>
          <li>Terms</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
