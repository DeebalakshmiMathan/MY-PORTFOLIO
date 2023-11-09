import React from "react";
import { Element } from "react-scroll";
import Divider from "./Divider";
import { SimpleCard } from "./SampleCard";
import { NavLink } from "react-router-dom";

const Projects = () => {
  return (
    <Element
      name="projects"
      className="w-full md:h-screen  text-white  bg-primary-color font-poppins  "
    >
      <div className=" h-full ">
        <div className=" flex md:h-[10%] max-w-fit  mb-4 md:mb-0 md:pb-0 text-3xl mx-auto md:hidden text-font-color border-b-2  border-secondary-color font-cinzel">
          Projects
        </div>
        <div className="md:h-[10%] pb-5 md:pb-0  hidden md:block ">
          <Divider title={"Project Done at Vicara"} />
        </div>
        <div className=" max-w-[90%] md:h-[80%] grid gap-3 grid-cols-1 grid-rows-5 md:grid md:grid-cols-6 md:grid-rows-2 md:gap-10 mx-auto ">
          <div className=" md:col-span-2">
            <NavLink to="/checkinapp">
              <SimpleCard
                title="Vehicle Checkin App"
                discription="This is an android App used at vehicle service area to know about vehicle service details. I have implemented Flutter Favor means same code base Different theme"
                techStach="Flutter"
              />
            </NavLink>
          </div>
          <div className=" md:col-span-2">
            <NavLink to="/batapp">
              <SimpleCard
                title="BAT APP"
                discription="This is desktop app which is communicate with device. we can update device functionality and gesture of device"
                techStach="React Js, Electron"
              />
            </NavLink>
          </div>
          <div className=" md:col-span-2">
            <NavLink to="/arkemadashboard">
              <SimpleCard
                title="Arkema Safty Solution Dashboard"
                discription="This is desktop app  with immediate response mechanism. Real-time tracking of plant personnel is achieved through the use of Vicara Smart Helmet. "
                techStach="Python Dash"
              />
            </NavLink>
          </div>
          <div className="md:col-start-2 md:col-end-4 ">
            <NavLink to="/astratoodemo">
              <SimpleCard
                title="Astra Smart Tool Dash Board"
                discription="we can monitor the performance details of the tools and allows users to view graphical representations of the collected data who worn smart band"
                techStach="Python Dash"
              />
            </NavLink>
          </div>
          <div className="md:col-start-4 md:col-end-6 ">
            <NavLink to="/marutitooldemo">
              <SimpleCard
                title="Maruti Tool Demo Website"
                discription="This is desktpo app to monitor the tools performance at service center"
                techStach="Python Dash"
              />
            </NavLink>
          </div>

          {/* <div className="bg-card-bg-color p-4 border border-card-border-color">
            Item 2
          </div>
          <div className="bg-card-bg-color p-4 border border-card-border-color">
            Item 3
          </div>
          <div className="bg-card-bg-color p-4 border border-card-border-color">
            Item 4
          </div> */}
        </div>
      </div>
    </Element>
  );
};

export default Projects;
