import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Element } from "react-scroll"; // NavScroll Effect Hide and Show
import { motion, AnimatePresence } from "framer-motion";
import NavLinks from "./NavLinks";
import DarkModeSwitcher from "./DarkModeSwitcher";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0); // NavScroll Effect Hide and Show
  const [visible, setVisible] = useState(true); // NavScroll Effect Hide and Show

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 200);
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos, visible]);

  return (
    <div>
      <Element name="top" />
      <nav
        className={`bg-pink-100 dark:bg-gray-800 fixed mx-auto border-b-2 border-[#eddffc] w-full z-20 top-0 rounded-md dark:border-none backdrop-filter backdrop-blur-lg bg-opacity-80 dark:bg-opacity-80 transition ${
          visible ? "transform translate-y-0" : "transform -translate-y-full"
        }`}
      >
        <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-6">
          <Link to="/" className="flex items-center ">
            <img src="/assets/Minnavlogo.png" className="h-[6vh] mr-3" alt="NEURODIVERSE LOGO" />
          </Link>
          <div className="flex md:order-2">
            <>
              <a href="https://wa.me/9622727372" target="blank">
                <button
                  type="button"
                  className="text-white bg-[#E75F14] hover:bg-[#fca475] animate transition-all duration-500 dark:bg-[#E75F14] dark:hover:bg-[#e29b74] focus:ring-4 focus:outline-none focus:ring-[#E75F14] font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0  dark:focus:cyan-600"
                >
                  Appointment
                </button>
              </a>
            </>

            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <motion.svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </motion.svg>
              ) : (
                <motion.svg
                  className="w-10 h-10"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                </motion.svg>
              )}
            </button>
          </div>
          <AnimatePresence>
            {window.innerWidth <= 1050 ? (
              isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 1 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className={`items-center justify-between ${
                    !isOpen 
                  } w-full md:flex md:w-auto md:order-1`}
                  id="navbar-sticky"
                >
                  <NavLinks />
                </motion.div>
              )
            ) : (
              <>
                <NavLinks />
              </>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
