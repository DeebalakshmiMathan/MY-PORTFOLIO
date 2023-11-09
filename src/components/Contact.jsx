import React from "react";
import { Element } from "react-scroll";
import Divider from "./Divider";
import { AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { FiPhone } from "react-icons/fi";
import { BsLinkedin } from "react-icons/bs";

const Contact = () => {
  return (
    <Element name="contact" className="bg-primary-color w-full mx-auto  ">
      <div className=" flex md:h-[10%] max-w-fit pt-5 md:pt-0 mb-2 md:mb-0 md:pb-0 text-3xl mx-auto md:hidden text-font-color border-b-2  border-secondary-color font-cinzel">
        Contact Me
      </div>
      <div className="hidden md:block ">
        <Divider title={"Contact Me"} />
      </div>

      <footer className=" py-4 text-font-color mx-auto flex flex-col items-center justify-center">
        <div className="flex items-center justify-center my-2">
          {" "}
          <a
            rel="noopener"
            href="https:linkedin.com/in/deebalakshmi-mathan-479574211"
          >
            {" "}
            <BsLinkedin className=" text-3xl mx-5 hover:scale-150 transition-transform duration-300 cursor-pointer" />
          </a>
          <a
            rel="noopener"
            href="https://github.com/DeebalakshmiMathan
"
          >
            <AiFillGithub className="text-3xl mx-5 hover:scale-150 transition-transform duration-300 cursor-pointer" />
          </a>
        </div>
        <div className="my-2 flex">
          {" "}
          <AiOutlineMail className="text-2xl mt-1 mr-2" />
          <span className="text-xl font-poppins">
            deebalakshmi2019@gmail.com
          </span>
        </div>
        <div className="my-2 flex">
          <FiPhone className="text-2xl pt-1 mr-2" />
          <span className="text-xl font-poppins"> 7550386508</span>
        </div>
      </footer>
    </Element>
  );
};

export default Contact;
