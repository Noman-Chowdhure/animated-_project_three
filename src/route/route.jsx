import { createBrowserRouter } from "react-router-dom";
import Layout from "../component/layout/Layout";
import Landing from "../component/landingPage/Landing";
import LocomotiveScroll from 'locomotive-scroll';

const locomotiveScroll = new LocomotiveScroll();

export const router = createBrowserRouter([
  {
    path: "/",
    element:<Layout></Layout>,
    children:[
      {
        path:'/',
        element:<Landing></Landing>
      }
    ]
  },

]);
