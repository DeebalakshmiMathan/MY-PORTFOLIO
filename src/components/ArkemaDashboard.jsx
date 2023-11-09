import React from "react";
import page1 from "../assets/arkema/page1.png";
import page2 from "../assets/arkema/page2.png";
import page3 from "../assets/arkema/page3.png";
import page4 from "../assets/arkema/page4.png";
import page5 from "../assets/arkema/page5.png";
import page6 from "../assets/arkema/page6.png";

import Carousel from "./Carousel";
import { NavLink } from "react-router-dom";
import { IoArrowBackOutline } from "react-icons/io5";

const ArkemaDashboard = () => {
  const slides = [page1, page2, page3, page4, page5, page6];
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

export default ArkemaDashboard;
