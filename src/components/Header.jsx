import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-scroll";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [selectedTag, setSelectedTag] = useState("home");
  return (
    <div className="bg-primary-color p-4 text-font-color font-poppins sticky top-0 w-full z-50 ">
      <div className="max-w-[1240px] py-[12px]   mx-auto px-5 md:px-0 flex items-center justify-between">
        <div className="text-3xl font-bold font-poppins  ">Portfolio</div>
        {toggle ? (
          <AiOutlineClose
            onClick={() => {
              setToggle(!toggle);
            }}
            className=" text-3xl md:hidden block"
          />
        ) : (
          <AiOutlineMenu
            onClick={() => {
              setToggle(!toggle);
            }}
            className=" text-3xl md:hidden block"
          />
        )}
        <ul className=" hidden md:flex  gap-10 py-3 ">
          <li
            className={`${
              selectedTag === "home"
                ? " border-b-4 border-secondary-color "
                : "borde-b-0"
            } text-xl hover:scale-110 transition-transform duration-300 `}
          >
            <Link
              className={`{}`}
              onClick={() => {
                setSelectedTag("home");
              }}
              to="home"
              smooth={true}
              duration={500}
            >
              Home
            </Link>
          </li>

          <li
            className={`${
              selectedTag === "experience"
                ? " border-b-4 border-secondary-color "
                : "borde-b-0"
            } text-xl hover:scale-110 transition-transform duration-300 `}
          >
            <Link
              className={`{}`}
              onClick={() => {
                setSelectedTag("experience");
              }}
              to="experience"
              smooth={true}
              duration={500}
            >
              Experience
            </Link>
          </li>

          <li
            className={`${
              selectedTag === "projects"
                ? " border-b-4 border-secondary-color "
                : "borde-b-0"
            } text-xl hover:scale-110 transition-transform duration-300 `}
          >
            <Link
              className={`{}`}
              onClick={() => {
                setSelectedTag("projects");
                console.log("im clicked");
              }}
              to="projects"
              smooth={true}
              duration={500}
            >
              Projects
            </Link>
          </li>
          <li
            className={`${
              selectedTag === "contact"
                ? " border-b-4 border-secondary-color "
                : "borde-b-0"
            } text-xl hover:scale-110 transition-transform duration-300 `}
          >
            <Link
              className={`{}`}
              onClick={() => {
                setSelectedTag("contact");
              }}
              to="contact"
              smooth={true}
              duration={500}
            >
              Contact
            </Link>
          </li>
        </ul>
        {/* responsive menu */}

        <ul
          className={` duration-300 md:hidden fixed  w-full h-3/2 text-center top-[92px] bg-gradient-to-b from-black to-gray-900 ${
            toggle ? "left-0" : "left-[-100%]"
          }`}
        >
          <Link to="home" smooth={true} duration={500}>
            <li
              onClick={() => {
                setToggle(!toggle);
                setSelectedTag("home");
              }}
              className={` p-5 cursor-pointer text-xl hover:scale-110 transition-transform duration-300 `}
            >
              Home
            </li>
          </Link>
          <Link to="experience" smooth={true} duration={500}>
            <li
              onClick={() => {
                setToggle(!toggle);
              }}
              className="p-5 cursor-pointer text-xl hover:scale-110 transition-transform duration-300"
            >
              Experience
            </li>
          </Link>
          <Link to="projects" smooth={true} duration={500}>
            <li
              onClick={() => {
                setToggle(!toggle);
              }}
              className="p-5 cursor-pointer text-xl hover:scale-110 transition-transform duration-300"
            >
              Projects
            </li>
          </Link>
          <Link to="contact" smooth={true} duration={500}>
            <li
              onClick={() => {
                setToggle(!toggle);
              }}
              className="p-5 cursor-pointer text-xl hover:scale-110 transition-transform duration-300"
            >
              Contact
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
