import React from "react";
import page1 from "../assets/chick_in_app/page1.png";
import page2 from "../assets/chick_in_app/page2.png";
import page3 from "../assets/chick_in_app/page3.png";
import page4 from "../assets/chick_in_app/page4.png";
import page5 from "../assets/chick_in_app/page5.png";
import page6 from "../assets/chick_in_app/page6.png";
import page7 from "../assets/chick_in_app/page7.png";
import page8 from "../assets/chick_in_app/page8.png";
import page9 from "../assets/chick_in_app/page9.png";
import page10 from "../assets/chick_in_app/page10.png";

import Carousel from "./Carousel";
import { NavLink } from "react-router-dom";
import { IoArrowBackOutline } from "react-icons/io5";

const CheckinApp = () => {
  const slides = [
    page1,
    page2,
    page3,
    page4,
    page5,
    page6,
    page7,
    page8,
    page9,
    page10,
  ];
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

export default CheckinApp;
