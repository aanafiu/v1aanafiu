import { StrictMode } from 'react'
import './index.css'
import 'animate.css';
import {
  RouterProvider,
} from "react-router";

import React from "react";
import ReactDOM from "react-dom/client";
import { router } from './Routes/Router';

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
