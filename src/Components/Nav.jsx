import { useState } from "react";
import { NavLink } from "react-router";
import Logo from "../logo/logo";
import { FaTimes } from "react-icons/fa";
import 'animate.css';

import { RiMenu4Line } from "react-icons/ri";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="py-5 flex justify-between items-center glass px-4 relative">
      {/* Logo */}
      <div className="flex justify-center items-end gap-1 z-10">
        <Logo />
        <h1 className="text-accent-foreground text-3xl h-full font-bold">afiu</h1>
      </div>

      {/* Hamburger Toggle (for < md) */}
      <div className="flex lg:hidden z-10">
        <button onClick={toggleMenu} className="text-3xl font-extrabold text-chart-4">
          {isOpen ? <FaTimes /> : <RiMenu4Line />
          }
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
        <NavLink href="#" className="animated-hover">💼 Experience</NavLink>
        <NavLink href="#" className="animated-hover">🛠 Skills</NavLink>
        <NavLink href="#" className="animated-hover">🖥 Projects</NavLink>
        <NavLink href="#" className="animated-hover">📚 Education</NavLink>
        <NavLink href="#" className="animated-hover">🏆 Awards</NavLink>
      </div>
    </div>
  );
};

export default Nav;
