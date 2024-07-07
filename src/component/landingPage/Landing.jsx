import React from "react";
import Header from "./header/Header";
import About from "./about/About";
import Menu from "./menu/Menu";
import Product from "./product/Product";
import Booking from "./booking/Booking";

const Landing = () => {
  return (
    <div className="w-full h-screen">
      <div className="header_section">
        <Header></Header>
      </div>
      <div className="about_us">
        <About></About>
      </div>
      <div className="coffee_menu bg-gray-400 p-10">
        <Menu></Menu>
      </div>
      <div>
        <Product></Product>
      </div>
      <div>
        <Booking></Booking>
      </div>
    </div>
  );
};

export default Landing;
