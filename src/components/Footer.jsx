import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { FaFacebook, FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { BsLinkedin } from "react-icons/bs";
const Footer = () => {
  return (
    <div className="bg-black min-h-72">
      <div className="flex flex-col justify-center items-center ">
        <div className="flex gap-2 mt-12">
          <img className="size-7" src={logo} alt="" />
          <h3 className="text-2xl text-white">Law.BD</h3>
        </div>
        <div className=" mt-5 flex gap-3 text-sm text-gray-400">
          <Link>Home</Link>
          <Link>My-Bookings</Link>
          <Link>Blogs</Link>
          <Link>Contact</Link>
          <Link>Contact</Link>
        </div>
        <div className="border border-gray-600-900 border-dashed mt-10 w-full"></div>

        <p className="flex gap-3 mt-10">
          <a
            href="https://facebook.com/mdkausar.ahammed.925"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="text-green-500 text-2xl" />
          </a>
          <a href="https://x.com/AhammedKau20909" target="_blank">
            <FaSquareXTwitter className="text-2xl text-white" />
          </a>
          <a href="">
            <BsLinkedin className="text-2xl text-blue-500" />
          </a>
          <a href="https://www.youtube.com/watch?v=AzzbuA9x0dg&list=PLNvrH2ljtIEcsQfYdjUXZlpBgxwxRBMJ3" target="_blank">
            <FaYoutube className="text-2xl text-red-400"></FaYoutube>
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
