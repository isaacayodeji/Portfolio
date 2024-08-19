/* eslint-disable react/no-unescaped-entities */
import AnimationBoxes from "../features/AnimationBox";
import Image from "../images/profileImg.jpeg";
import { useTypewriter, Cursor } from "react-simple-typewriter";
const Intro = () => {
  const [text] = useTypewriter({
    words: ["ISAAC AYODEJI, I am a Frontend developer"],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 20,
  });
  return (
    <>
      {/* WEB VIEW */}
      <AnimationBoxes />
      <section id="home" className="px-20 max-w-[1000px] mx-auto max-md:hidden">
        <div className="flex md:flex-row flex-col items-center  mx-auto px-6 gap-20 py-28 lg:pb-28 ">
          <h2 className="text-5xl md:w-1/2 leading-tight">
            Hi 👋, My name is {""}
            <br />
            <span className="font-bold text-sky-500">{text}</span>
            <span style={{ color: "black" }}>
              <Cursor cursorStyle="</>" />
            </span>
          </h2>
          <div className="">
            <img
              src={Image}
              className="object-cover w-60 h-60 border-2 border-double border-sky-500  rounded-full max-md:hidden"
            />
          </div>
        </div>
      </section>
      {/* MOBILE VIEW*/}
      <AnimationBoxes />
      <section className="lg:px-20 max-w-[1000px] mx-auto md:hidden">
        <div className="flex md:flex-row flex-col items-center mx-auto px-6 gap-20 py-28">
          <h2 className=" text-[2.1rem] lg:text-5xl lg:w-1/2 leading-tight">
            Hi 👋, My name is {""}
            <span className="font-bold text-sky-500">
              ISAAC AYODEJI,{" "}
              <span className="text-black text-[2.1rem] font-normal">
                I am a
              </span>{" "}
              FRONT DEVELOPER
            </span>
          </h2>

          <img
            src={Image}
            className="w-60 h-60 border-2 border-double border-sky-500  rounded-full "
          />
        </div>
      </section>
    </>
  );
};
export default Intro;
