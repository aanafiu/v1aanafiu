import {
    createBrowserRouter,
  } from "react-router";
  
  import React from "react";
import Layout from "../Layout/Layout";
import Profile from "../Components/Profile";
import TimeZone from "../Components/TimeZone";
import Resume from "../Components/Resume";
import StatusBoard from "../Components/SatusBoard";
import Skills from "../Components/Skills";
import OnlineProfiles from "../Components/OnlineProfiles";
import Projects from "../Components/Projects";
import Education from "../Components/Education";
import Awards from "../Components/Awards";
import ExperienceAndHobbies from "../Components/ExperieneceAndHobbies";
  
export const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
    },
    {
      path: "/pp",
      element: <Profile/>,
    },
    {
      path: "/tt",
      element: <TimeZone/>,
    },
    {
      path: "/rr",
      element: <Resume/>,
    },
    {
      path: "/sb",
      element: <StatusBoard/>,
    },
    {
      path: "/sk",
      element: <Skills/>,
    },
    {
      path: "/op",
      element: <OnlineProfiles/>,
    },
    {
      path: "/pro",
      element: <Projects/>,
    },
    {
      path: "/edu",
      element: <Education/>,
    },
    {
      path: "/awd",
      element: <Awards/>,
    },
    {
      path: "/eah",
      element: <ExperienceAndHobbies/>,
    },
  ]);