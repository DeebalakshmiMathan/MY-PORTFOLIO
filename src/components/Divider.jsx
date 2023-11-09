import React from "react";

const Divider = ({ title }) => {
  return (
    <div className=" relative">
      {/* Divider */}
      <div className="absolute inset-0 flex items-center">
        <div className="border border-subtext-color w-9/12 mx-auto"></div>
      </div>
      {/* Text */}
      <div className="flex justify-center relative">
        <div className=" font-cinzel text-subtext-color text-4xl bg-primary-color px-6">
          {title}
        </div>
      </div>
    </div>
  );
};

export default Divider;
