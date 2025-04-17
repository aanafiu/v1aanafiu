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
  ]);