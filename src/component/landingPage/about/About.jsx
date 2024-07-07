import React from "react";
import Title from "../../common/Title";

const About = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".2" className="">
      <div className="about_body grid md:grid-cols-2 md:gap-20 gap-10 justify-center justify-items-center items-center">
        <div className="text_content space-y-10 ">
           <Title head="about us"></Title>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            sunt illo cumque reprehenderit minima, eos voluptatum doloribus
            temporibus, asperiores sequi cupiditate molestiae. Veritatis
            tenetur, harum eius tempora distinctio fugiat ducimus.
          </p>
        </div>
        <div className="img_content">
            <img src="https://i.pinimg.com/564x/cd/29/31/cd2931eb633fb0ffa10e5ff439bc544b.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
