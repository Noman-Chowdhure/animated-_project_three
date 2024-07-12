import React from "react";

const Header = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.7">
      <div className="header_body grid md:grid-cols-3 gap-10 md:gap-20 justify-center justify-items-center items-center ">
        <div className="text_content md:text-left col-span-3 sm:col-span-1 text-center">
          <h1 className=" capitalize text-4xl">
            a rosted{" "}
            <span className=" text-orange-900 text-6xl md:text-5xl xl:text-9xl uppercase font-light">
              coffee
            </span>
            for you
          </h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, molestiae tempore incidunt sapiente adipisci accusamus laborum ex! Est, exercitationem atque.</p>
        </div>
        <div className="img_content col-span-3 md:col-span-2 ">
          <img
            src="https://i.pinimg.com/originals/d9/c3/43/d9c343efe2ac92d5b8830d697b10ce12.gif"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
