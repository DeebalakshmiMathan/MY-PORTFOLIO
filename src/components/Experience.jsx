import React from "react";
import { Element } from "react-scroll";
import Divider from "./Divider";

const Experience = () => {
  return (
    <Element
      name="experience"
      className="w-full   text-white bg-primary-color font-poppins  "
    >
      <div className=" flex md:h-[15%] max-w-fit  mb-4 md:mb-0 md:pb-0 text-3xl mx-auto md:hidden text-font-color border-b-2  border-secondary-color font-cinzel">
        Experience
      </div>
      <div className=" h-[10%] hidden md:block ">
        <Divider title={"Experience"} />
      </div>
      <div className=" max-w-[90%] h-[90%] flex flex-col md:flex-row mx-auto ">
        <div className=" w-fit h-full mx-auto">
          <div className=" h-1/3 md:py-10 py-5">
            <p className=" md:text-3xl text-2xl font-poppins">
              Vicara Araciv Technology Pvt Lmt.
            </p>
            <p className="text-lg font-poppins py-1">
              Frontend Developer (Feb 2022 - present)
            </p>
            <p></p>
          </div>
          <div className=" h-1/3  md:py-10 py-5">
            <p className=" md:text-3xl text-2xl font-poppins">
              Christian College of Engineering and Technology.
            </p>
            <p className="md:text-xl text-lg font-poppins py-1">
              Assistant Professor (Feb 2021 - Nov 2021)
            </p>
            <p></p>
          </div>
          <div className=" h-1/3  md:py-10 py-5">
            <p className=" md:text-3xl text-2xl font-poppins">
              Sri Andal Alagar College of Engineering.
            </p>
            <p className="md:text-xl text-lg font-poppins py-1">
              Assistant Professor (May 2019 - Jan 2021)
            </p>
            <p></p>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Experience;
