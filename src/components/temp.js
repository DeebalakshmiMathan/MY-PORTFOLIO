import React from "react";
import { useState } from "react";

const Navbar = () => {
  const [isSelected, setSelected] = useState("");
  const [menuOpend, setMenuOpend] = useState(false);
  const showMenu = () => {
    setMenuOpend(!menuOpend);
  };

  return (
    <nav className=" flex w-full h-20 pt-3 fixed">
      <div className="md:flex justify-center w-5/6 md:max-w-7xl mx-auto">
        <div className="md:hidden pt-3 flex justify-between ">
          <div className="text-font-color font-medium text-2xl">
            My Portfolio
          </div>
          <button onClick={showMenu}>
            {!menuOpend ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className=" w-8 h-8 text-font-color"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8 text-font-color"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </button>
        </div>
        <div
          className={`flex justify-end ${
            menuOpend ? "block" : "hidden"
          } md:block`}
        >
          <ul className="md:flex md:space-x-10 w-1/2 md:w-auto space-y-3 p-4 text-center md:p-0 md:space-y-0 bg-gradient-to-b from-black to-gray-950 md:bg-transparent">
            <li
              onClick={() => {
                setSelected("home");
                showMenu();
              }}
              className={`menu ${
                isSelected === "home"
                  ? "border-b-0 md:border-b-4 bg-secondary-color rounded-md md:rounded-none md:bg-transparent"
                  : "border-b-0"
              }`}
            >
              <a href="#about">Home</a>
            </li>
            <li
              onClick={() => {
                setSelected("exprience");
                showMenu();
              }}
              className={`menu ${
                isSelected === "exprience"
                  ? "border-b-0 md:border-b-4 bg-secondary-color rounded-md md:rounded-none md:bg-transparent"
                  : "border-b-0"
              }`}
            >
              <a href="#exprience">Experience</a>
            </li>
            <li
              onClick={() => {
                setSelected("projects");
                showMenu();
              }}
              className={`menu ${
                isSelected === "projects"
                  ? "border-b-0 md:border-b-4 bg-secondary-color rounded-md md:rounded-none md:bg-transparent"
                  : "border-b-0"
              }`}
            >
              <a href="#projects">Projects</a>
            </li>
            <li
              onClick={() => {
                setSelected("contacts");
                showMenu();
              }}
              className={`menu ${
                isSelected === "contacts"
                  ? "border-b-0 md:border-b-4 bg-secondary-color rounded-md md:rounded-none md:bg-transparent"
                  : "border-b-0"
              }`}
            >
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
