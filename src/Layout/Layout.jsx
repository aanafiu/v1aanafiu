import React from "react";
import Nav from "../Components/Nav";
import Profile from "../Components/Profile";
import TimeZone from "../Components/TimeZone";
import Resume from "../Components/Resume";
import StatusBoard from "../Components/SatusBoard";
import Aos from "aos";
import Skills from "../Components/Skills";

const Layout = () => {
    Aos.init();
  return (
    <div className="w-[70%] mx-auto">
        {/* nav */}
      <nav className="container mx-auto sticky top-10 z-10">
        <Nav></Nav>
      </nav>
      {/* Hero */}
      <section className="mt-30 mb-20 grid grid-cols-11 gap-5">
        <div className="col-span-5">
          <Profile />
        </div>
        <div className="col-span-6 space-y-5 animate__animated animate__rotateInDownRight">
          <TimeZone />
          <Resume/>
        </div>
      </section>
      {/* Status Board */}
      <section data-aos="fade-up" >
        <StatusBoard></StatusBoard>
      </section>

      {/* Skills */}
      <section>
        <Skills/>
      </section>
    </div>
  );
};

export default Layout;
