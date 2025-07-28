import { useState } from "react";
import { NavLink } from "react-router";
import Logo from "../logo/logo";
import { FaTimes } from "react-icons/fa";
import "animate.css";

import { RiMenu4Line } from "react-icons/ri";
import { Link as ScrollLink } from "react-scroll";


const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);



  return (
    <div className="py-3 flex justify-between items-center glass backdrop-blur-3xl px-4 relative">
      {/* Logo */}
      <div className="flex justify-center items-end gap-1 z-10">
        <Logo />
        <h1 className="text-accent-foreground text-3xl h-full font-bold">
          afiu
        </h1>
      </div>

      {/* Hamburger Toggle (for < md) */}
      <div className="flex lg:hidden z-10">
        <button
          onClick={toggleMenu}
          className="text-3xl font-extrabold text-chart-4"
        >
          {isOpen ? <FaTimes /> : <RiMenu4Line />}
        </button>
      </div>

      {/* Menu */}
      <div
        className={`
          ${isOpen ? "flex" : "hidden"}
          flex-col lg:flex lg:flex-row gap-5 text-lg 
          absolute lg:static top-[100%] right-4
           dark:bg-background dark:lg:bg-transparent backdrop-blur-3xl lg:backdrop-blur-none  p-4 lg:p-0 
          rounded-xl shadow-xl lg:shadow-none 
        `}
      >
<ScrollLink to="experience" smooth={true} offset={-130} duration={500} className="animated-hover cursor-pointer">
  💼 Experience
</ScrollLink>
<ScrollLink to="skills" smooth={true} offset={-130} duration={500} className="animated-hover cursor-pointer">
  🛠 Skills
</ScrollLink>
<ScrollLink to="projects" smooth={true} offset={-130} duration={500} className="animated-hover cursor-pointer">
  🖥 Projects
</ScrollLink>
<ScrollLink to="education" smooth={true} offset={-130} duration={500} className="animated-hover cursor-pointer">
  📚 Education
</ScrollLink>
<ScrollLink to="awards" smooth={true} offset={-130} duration={500} className="animated-hover cursor-pointer">
  🏆 Awards
</ScrollLink>

      </div>
    </div>
  );
};

export default Nav;
