import React, { useEffect } from "react";
import Typed from "typed.js";
import bg from "../../assets/image.png";
import "./intro.css";
import "../../Styles/Tailwind.css";


/* Your custom styles go here */


const Intro = () => {
  useEffect(() => {
    var typed = new Typed(".skills", {
      strings: [
        "Full-Stack Developer",
        "Back-End Developer",
        "Front-End Developer",
      ],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 500,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section id="intro" className="lg:mx-auto lg:max-w-2xl">
      <div className="text-box">
        <h1>
          <span className="hello">Hello,</span>
          <br /> I'm Uday Kumar
        </h1>
        <h1>
          <span className="skills">Full Stack Developer</span>
        </h1>
        <p>
          I am a Full Stack Web developer with a Passion for Crafting
          Pixel-Perfect Websites
        </p>
        <div className="icon-box">
          <i className="bx bxl-facebook"></i>
          <i className="bx bxl-linkedin"></i>
          <i className="bx bxl-twitter"></i>
        </div>
        <div className="bg-white min-h-[200px] flex items-center justify-center">
          <button className="rounded-2xl border-2 border-dashed border-black bg-white px-6 py-3 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none">
            Hover me
          </button>
          <button className="rounded-2xl border-2 border-dashed border-black bg-white px-6 py-3 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none">
            Hire Me
          </button>
        </div>
      </div>
      <div className="img-box">
        <img src={bg} alt="Profile" draggable="false" />
      </div>
    </section>
  );
};

export default Intro;
