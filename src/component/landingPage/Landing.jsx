import React from "react";
import "../common/common.css";
import About from "./about/About";
import Booking from "./booking/Booking";
import Header from "./header/Header";
import Menu from "./menu/Menu";
import Product from "./product/Product";



const Landing = () => {
  return (
    <div className="">
      <div className="header_section">
        <Header></Header>
      </div>
      <div className="about_us">
        <About></About>
      </div>
      <div className="coffee_menu p-10">
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
