import React from "react";
import astroI from "/astro.svg";
const Footer = () => {
  return (
    <footer className="glass py-4 mt-7">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Copyright */}
        <p className="text-xs text-center md:text-right">
          &copy; 2024 by Nafiu
        </p>

        {/* Text */}
        <p className="text-sm text-center md:text-left">
          Concept Taken From Astro. Built with{" "}
          <span className="text-blue-400">React</span> and{" "}
          <span className="text-teal-400">Tailwind</span>
        </p>

        {/* Logos */}
        <div className="flex items-center gap-4">
          <img
            src="https://www.svgrepo.com/show/374118/tailwind.svg"
            alt="Tailwind CSS"
            className="h-6"
          />
          <img src={astroI} className="h-6 drop-shadow-2xl drop-shadow-accent" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
