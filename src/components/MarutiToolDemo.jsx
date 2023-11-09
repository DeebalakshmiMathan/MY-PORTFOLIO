import React from 'react'

const marutiToolDemo = () => {
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

export default marutiToolDemo
