import Html from "../images/logos/html.svg";
import Github from "../images/logos/github.svg";
import Css from "../images/logos/css.svg";
import Js from "../images/logos/js.svg";
import Tailwind from "../images/logos/tailwind.svg";
import Redux from "../images/logos/redux.svg";
import Vs from "../images/logos/vs.svg";
import Git from "../images/logos/git.svg";
import React from "../images/logos/react.svg";

const TechStack = () => {
  return (
    <section id="tech" className="px-18 max-w-[1000px] mx-auto py-20">
      {/* Container */}
      <div className=" px-10 flex flex-col">
        {/* Heading */}
        <div
          data-aos="flip-left"
          data-aos-duration="3000"
          className="text-center space-y-2"
        >
          <h2 className="font-bold text-2xl text-sky-500">My Tech Stack</h2>
          <p className="text-[#666666]">
            Technologies I’ve been working with recently
          </p>
        </div>
        {/* Logos */}
        <div
          data-aos="zoom-in"
          data-aos-duration="3000"
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5  lg:p-6 space-y-6 justify-items-center"
        >
          <img className="pt-7" src={Html} alt="" />
          <img src={Css} alt="" />
          <img src={Js} alt="" />
          <img src={React} alt="" />
          <img src={Redux} alt="" />
          <img src={Tailwind} alt="" />
          <img src={Git} alt="" />
          <img src={Git} alt="" />
          <img src={Vs} alt="" />
          <img src={Github} alt="" />
        </div>
      </div>
    </section>
  );
};
export default TechStack;
