import LocomotiveScroll from "locomotive-scroll";
import { createBrowserRouter } from "react-router-dom";
import Contact from "../component/contactPage/Contact";
import Landing from "../component/landingPage/Landing";
import Layout from "../component/layout/Layout";

const locomotiveScroll = new LocomotiveScroll();

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Landing></Landing>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
    ],
  },
]);
