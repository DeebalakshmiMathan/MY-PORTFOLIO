import React from "react";
import { Element } from "react-scroll";
import { saveAs } from "file-saver";
import resume from "../assets/resume.pdf";

const Home = () => {
  // const RESUME = "http://localhost:3000/resume.pdf";

  const handleDownload = () => {
    saveAs(resume, "deeba-resume.pdf");
  };

  return (
    <Element name="home" className="text-font-color bg-primary-color">
      <div className="max-w-[80%]  mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center ">
        <h1 className=" md:text-5xl text-4xl font-bold py-6 md:pb-6 ">
          <span className=" font-normal">Hi</span>,{" "}
          <span className=" text-secondary-color">I'm Deebalakshmi Mathan</span>
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-3xl  text-xl  py-4">
            a passionate web developer who specializes in frontend development.
            For more details please refer to my resume.
          </p>
        </div>
        <div className="flex justify-center items-center">
          <p className="md:text-2xl  text-lg  py-4 ">
            Tech : Javascript, Python, React Js, Python Dash, Flutter
          </p>
        </div>
        <button
          onClick={handleDownload}
          className="bg-secondary-color w-[200px] rounded-md  my-6 mx-auto py-3 text-white"
        >
          Get Resume
        </button>
      </div>
    </Element>
  );
};

export default Home;
