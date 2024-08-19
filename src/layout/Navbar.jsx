/* eslint-disable no-unused-vars */
import { useLocation } from "react-router-dom";
// import Github from "../images/github.svg";
// import Linkedin from "../images/linkdin.svg";
// import Twitter from "../images/twitter.svg";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { CiMenuBurger } from "react-icons/ci";
import { animateScroll as scroll, scroller } from "react-scroll";
import saveAs from "file-saver";

const Navbar = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  const scrollTo = (element) => {
    scroller.scrollTo(element, {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  const menuVars = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 1],
      },
    },
  };

  const { pathname } = useLocation;
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };

  const content = (
    <>
      {/* <motion.div
        variants={menuVars}
        initial="initial"
        animate="animate"
        exit={"exit"}
      > */}
      <div className="lg:hidden block absolute top-16 w-full left-0 right-0 bg-white transition">
        <ul className="text-center text-xl p-20">
          <a
            onClick={() => {
              scrollTo("home");
            }}
            href="/#home"
          >
            <li
              onClick={handleClick}
              className="my-4 py-4 border-b border-x-slate-800 hover:rounded"
            >
              Home
            </li>
          </a>
          <a
            onClick={() => {
              scrollTo("about");
            }}
            href="/#about-us"
            target=""
          >
            <li
              onClick={handleClick}
              className="my-4 py-4 border-b border-x-slate-800 hover:rounded"
            >
              About
            </li>
          </a>
          <a
            onClick={() => {
              scrollTo("tech_stack");
            }}
            href="/#tech"
            target=""
          >
            <li
              onClick={handleClick}
              className="my-4 py-4 border-b border-x-slate-800 hover:rounded"
            >
              Tech stack
            </li>
          </a>
          <a
            onClick={() => {
              scrollTo("contact");
            }}
            href="/#contact"
            target=""
          >
            <li
              onClick={handleClick}
              className="my-4 py-4 border-b border-x-slate-800 hover:rounded"
            >
              Contact
            </li>
          </a>
          <a
            onClick={() => {
              scrollTo("project");
            }}
            href="/#project"
            target=""
          >
            <li
              onClick={handleClick}
              className="my-4 py-4 border-b border-x-slate-800 hover:rounded"
            >
              Project
            </li>
            <li className="pt-3 flex items-center justify-center">
              <button
                onClick={() =>
                  saveAs(
                    "https://utfs.io/f/e58c3e86-d2c6-40b2-8c77-4e39d74931e3-rgmnxa.docx",
                    "Isaac Ayodeji CV"
                  )
                }
                className="py-2 px-4 rounded-lg bg-black text-white flex gap-2 items-center hover:scale-95 transition-all"
              >
                Download Resume <FiDownload className="h-4 pt-1" />
              </button>
            </li>
          </a>
        </ul>
      </div>
      {/* </motion.div> */}
    </>
  );
  return (
    <div className="flex top-0 z-50 bg-opacity-55 ">
      <section className="p-4  w-full text-center backdrop-blur-sm fixed">
        <navbar className="flex justify-between items-center ">
          <h2 className="font-bold text-[1.2rem] text-sky-500">
            &lt;ZEEKQ /&gt;
          </h2>
          <ul className="flex justify-between gap-4  text-[#666666] max-md:hidden">
            <li className={`hover:text-black  hover:translate-y-1 `}>
              <a
                onClick={() => {
                  scrollTo("home");
                }}
                href="/#home"
              >
                Home
              </a>
            </li>
            <li className={`hover:text-black  hover:translate-y-1 `}>
              <a
                onClick={() => {
                  scrollTo("about");
                }}
                href="/#about"
              >
                About
              </a>
            </li>
            <li className={`hover:text-black  hover:translate-y-1 `}>
              <a
                onClick={() => {
                  scrollTo("tech");
                }}
                href="/#tech"
              >
                Tech stack
              </a>
            </li>
            <li className={`hover:text-black  hover:translate-y-1 `}>
              <a
                onClick={() => {
                  scrollTo("project");
                }}
                href="/#project"
              >
                Projects
              </a>
            </li>
            <li className={`hover:text-black  hover:translate-y-1 `}>
              <a
                onClick={() => {
                  scrollTo("contact");
                }}
                href="/#contact"
              >
                Contact
              </a>
            </li>
          </ul>
          <button
            onClick={() =>
              saveAs(
                "https://utfs.io/f/e58c3e86-d2c6-40b2-8c77-4e39d74931e3-rgmnxa.docx",
                "Isaac Ayodeji CV"
              )
            }
            className="py-2 px-4 rounded-lg bg-sky-500 text-white max-md:hidden flex gap-1 items-center hover:scale-95 transition-all"
          >
            Download Resume <FiDownload className="h-4 " />
          </button>
          {/* <div className=" flex justify-between gap-3 max-md:hidden">
            <a
              className="icons rounded-[50%] hover:bg-sky-500 hover:scale-90 hover:translate-y-1"
              href="https://github.com/isaacayodeji"
              target="_blank"
            >
              <img src={Github} alt="github" />
            </a>
            <a
              className="icons rounded-[50%] hover:bg-sky-500 hover:scale-90 hover:translate-y-1"
              href="https://www.linkedin.com/in/ayodeji-olu-ewulo-a964b924b/"
              target="_blank"
            >
              <img src={Linkedin} alt="linkedin" />
            </a>
            <a
              className="icons rounded-[50%] hover:bg-sky-500 hover:scale-90 hover:translate-y-1"
              href="#"
              target="_blank"
            >
              <img src={Twitter} alt="twitter" />
            </a>
          </div> */}
          <>{click && content}</>

          <button
            className="block md:hidden transition w-[10]"
            onClick={handleClick}
          >
            {click ? <FaTimes className="text-sky-500" /> : <CiMenuBurger className="text-sky-500" />}
          </button>
        </navbar>
      </section>
    </div>
  );
};
export default Navbar;
