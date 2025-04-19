import React from "react";
import Nav from "../Components/Nav";
import Profile from "../Components/Profile";
import TimeZone from "../Components/TimeZone";
import Resume from "../Components/Resume";
import StatusBoard from "../Components/SatusBoard";
import Aos from "aos";
import Skills from "../Components/Skills";
import OnlineProfiles from "../Components/OnlineProfiles";
import Projects from "../Components/Projects";
import Education from "../Components/Education";
import Awards from "../Components/Awards";
import Certificates from "../Components/Certificates";
import ExperienceAndHobbies from "../Components/ExperieneceAndHobbies";
import Footer from "../Components/Footer";

const Layout = () => {
  Aos.init();
  return (
    <div className="w-[70%] mx-auto">
      {/* nav */}
      <nav className="container mx-auto sticky top-10 z-10">
        <Nav></Nav>
      </nav>
      {/* Hero */}
      <section className="w-full mt-30 mb-20 grid grid-cols-11 gap-5">
        <div className="w-full col-span-11 md:col-span-5">
          <Profile />
        </div>
        <div className="w-full col-span-11 md:col-span-6 space-y-5 animate__animated animate__rotateInDownRight">
          <TimeZone />
          <Resume />
        </div>
      </section>
      {/* Status Board */}
      <section data-aos="fade-up">
        <StatusBoard></StatusBoard>
      </section>

      {/* Skills */}
      <section id="skills" className="grid grid-cols-10 gap-5">
        <div className="col-span-10 md:col-span-5 lg:col-span-6">
          <Skills />
        </div>
        <div className="col-span-10 md:col-span-5 lg:col-span-4">
          <OnlineProfiles></OnlineProfiles>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="w-full mt-10 mb-20">
        <div>
          <Projects></Projects>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="mt-10 mb-20">
        <div data-aos="fade-up">
          <Education />
        </div>
      </section>

      {/* Experience & Hobbies */}
      <section data-aos="fade-up" id="experience">
        <ExperienceAndHobbies />
      </section>

      {/* Awards */}
      <section className="grid grid-cols-11 gap-5">
        <div data-aos="fade-up" className="col-span-full md:col-span-4">
          <Awards></Awards>
        </div>
        <div  data-aos="fade-up" className="col-span-full md:col-span-7">
          <Certificates></Certificates>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default Layout;
