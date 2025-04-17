import React, { useEffect, useState } from "react";
import mypp from "/myimg.jpg";
import {
  FaGithub,
  FaLinkedin,
  FaLocationCrosshairs,
  FaMoon,
  FaXTwitter,
} from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { SiCodeforces } from "react-icons/si";
import { IoSunnySharp } from "react-icons/io5";

const Profile = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const storedTheme = localStorage.getItem("vite-ui-theme");
    return storedTheme === "dark" || storedTheme === null; // default to dark
  });

  useEffect(() => {
    const htmlClass = document.documentElement.classList;
    if (darkMode) {
      htmlClass.add("dark");
      localStorage.setItem("vite-ui-theme", "dark");
    } else {
      htmlClass.remove("dark");
      localStorage.setItem("vite-ui-theme", "light");
    }
  }, [darkMode]);

  return (
    <div className="w-[100%] animate__animated animate__rotateInDownLeft">
      {/* image */}
      <figure class="print:hidden w-fit relative animated-hover m-10">
        {" "}
        <img
          class="shadow-lg shadow-skin-hue"
          src={mypp}
          alt="Abdullah Al Nafiu"
          className="w-[150px] h-[150px] rounded-2xl p-2"
        />{" "}
        <div class="pointer-events-none absolute -inset-2">
          {" "}
          <div class="absolute -inset-y-8 right-0 w-[3px] bg-skin-hue/50 [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>{" "}
          <div
            class="absolute -inset-y-8 left-0 w-[3px] bg-skin-hue/50 [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"
            data-astro-cid-anhloy43=""
          ></div>{" "}
          <div class="absolute -inset-x-8 bottom-0 h-[3px] bg-skin-hue/50 [mask-image:linear-gradient(to_left,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>{" "}
          <div class="absolute -inset-x-8 top-0 h-[3px] bg-skin-hue/50 [mask-image:linear-gradient(to_left,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>{" "}
        </div>{" "}
      </figure>
      {/* Info */}
      <div className="flex flex-col gap-2 my-8  ">
        <h1 className="text-xl sm:text-2xl md:text-4xl font-bold">
          Abdullah Al Nafiu
        </h1>
        <p className="text-base md:text-lg font-extralight">
          Web Developer <span className="text-chart-4 font-bold">||</span>{" "}
          Competitive Programmer
        </p>
        <p className="flex items-center gap-2 mt-3">
          <FaLocationCrosshairs className="text-chart-4" /> Mirpur, Dhaka,
          Bangladesh
        </p>
      </div>

      {/* social icons */}
      <p className="text-2xl font-extralight my-2">Connect With Me:</p>
      <div className="flex items-center gap-3">
        <a href="">
          <IoMdMail className="text-chart-4 text-4xl rounded-lg p-1 transition-all duration-300 ease-in-out hover:text-primary hover:bg-chart-4" />
        </a>
        <a href="">
          <FaPhoneAlt className="text-chart-4 text-4xl rounded-lg p-1 transition-all duration-300 ease-in-out hover:text-primary hover:bg-chart-4" />
        </a>
        <a href="">
          <FaXTwitter className="text-chart-4 text-4xl rounded-lg p-1 transition-all duration-300 ease-in-out hover:text-primary hover:bg-chart-4" />
        </a>
        <a href="">
          <FaGithub className="text-chart-4 text-4xl rounded-lg p-1 transition-all duration-300 ease-in-out hover:text-primary hover:bg-chart-4" />
        </a>
        <a href="">
          <SiCodeforces className="text-chart-4 text-4xl rounded-lg p-1 transition-all duration-300 ease-in-out hover:text-primary hover:bg-chart-4" />
        </a>
        <a href="">
          <FaLinkedin className="text-chart-4 text-4xl rounded-lg p-1 transition-all duration-300 ease-in-out hover:text-primary hover:bg-chart-4" />
        </a>
      </div>

      {/* about section */}
      <section>
        <p className="text-xl sm:text-2xl md:text-4xl font-semibold my-2">
          About
        </p>
        <p className="w-[100%] text-lg font-extralight">
          Junior Full Stack Developer with a passion for building web
          applications. Currently seeking opportunities to further develop my
          skills in a professional setting.
        </p>
      </section>
      {/* Toggle Button */}
      <div className="flex justify-start items-center gap-2 my-10">
        <p className="text-xl font-bold">Toggle Theme:</p>
        <button onClick={() => setDarkMode(!darkMode)} className="">
          {darkMode ? (
            <IoSunnySharp className="text-chart-4 text-4xl rounded-lg w-[40px] h-[40px] transition-all duration-300 ease-in-out hover:rotate-45" />
          ) : (
            <FaMoon className="text-chart-4 text-4xl rounded-lg w-[40px] h-[40px] transition-all duration-300 ease-in-out hover:text-primary hover:-rotate-90 " />
          )}
        </button>
      </div>
    </div>
  );
};

export default Profile;
