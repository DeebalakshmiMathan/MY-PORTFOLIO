import React from "react";
import page1 from "../assets/maruti_tool/page1.png";
import page2 from "../assets/maruti_tool/page2.png";
import page3 from "../assets/maruti_tool/page3.png";
import Carousel from "./Carousel";
import { NavLink } from "react-router-dom";
import { IoArrowBackOutline } from "react-icons/io5";

const MarutiToolDemo = () => {
  //   const slides = [page1];
  const slides = [page1, page2, page3];
  return (
    <div className="h-screen w-screen bg-primary-color ">
      <div className="h-full w-full flex items-center justify-center rounder-3xl  overflow-hidden relative">
        <NavLink to="/">
          <IoArrowBackOutline className=" text-font-color text-4xl absolute top-10 left-10 hover:scale-125 transition-transform duration-300 " />
        </NavLink>
        <div className=" w-3/4 flex justify-center items-center overflow-hidden ">
          <Carousel>
            {slides.map((s) => (
              <img src={s} alt="slide" />
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default MarutiToolDemo;
