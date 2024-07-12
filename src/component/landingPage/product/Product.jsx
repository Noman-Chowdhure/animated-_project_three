import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-creative";

import "../../common/common.css";

// import required modules
import { EffectCreative } from "swiper/modules";
import Title from "../../common/Title";
const Product = () => {
    const [rotate, setRotate] = useState(0);
    useEffect(() => {
        window.addEventListener("mousemove", (e) => {
          let mouseX = e.clientX;
          let mouseY = e.clientY;
    
          let daltaX = mouseX - window.innerWidth / 2;
          let daltaY = mouseY - window.innerHeight / 2;
    
          var angel = Math.atan2(daltaY, daltaX) * (180 / Math.PI);
          setRotate(angel - 180);
        });
      }, []);
  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 my-28">
      <div className="title">
        <Title head="our product"></Title>
        <div className="eye">
        <div className="eyes w-full h-[40vh] -z-10 flex justify-center gap-40 justify-items-center items-center max-sm:hidden ">
          <div className="box w-64 h-64 border-[1px] rounded-full flex justify-center items-center">
            <div className="box-child bg-black w-1/2 h-1/2 rounded-full flex justify-center items-center">
              <div
                style={{ transform: ` rotate(${rotate}deg)` }}
                className="line  w-full h-10"
              >
                <div className="box-child-child bg-white w-8 h-8 rounded-full "></div>
              </div>
            </div>
          </div>

          <div className="box w-64 h-64 border-[1px] rounded-full flex justify-center items-center">
            <div className="box-child bg-black w-1/2 h-1/2  rounded-full flex justify-center items-center">
              <div
                style={{ transform: ` rotate(${rotate}deg)` }}
                className="line  w-full h-10"
              >
                <div className="box-child-child bg-white w-8 h-8 rounded-full "></div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
      <div className="items">
        <Swiper
          grabCursor={true}
          effect={"creative"}
          creativeEffect={{
            prev: {
              shadow: true,
              translate: [0, 0, -400],
            },
            next: {
              translate: ["100%", 0, 0],
            },
          }}
          modules={[EffectCreative]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="box grid grid-cols-2">
            <div className="img_content">
                <img className=" w-1/2" src="https://i.pinimg.com/736x/77/b9/cd/77b9cdea7ac5a540e346a135e0e9cca8.jpg" alt="" />
            </div>
            <div className="text_content space-y-6">
                <h1 className=" uppercase font-mono  text-3xl ">fucking fuck</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis cum quaerat soluta. Amet voluptates, autem perferendis nostrum vitae maiores rem fuga, quae ipsa nam qui, doloribus inventore obcaecati corporis magni!</p>
                <button className=" px-6 py-1 border-[1px] border-orange-500 uppercase">buy...?</button>
            </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="box grid grid-cols-2">
            <div className="img_content">
                <img className=" w-1/2" src="https://i.pinimg.com/564x/52/a0/e6/52a0e69630b98d22a96fa795d5ae1304.jpg" alt="" />
            </div>
            <div className="text_content space-y-6">
                <h1 className=" uppercase font-mono  text-3xl ">fucking fuck</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis cum quaerat soluta. Amet voluptates, autem perferendis nostrum vitae maiores rem fuga, quae ipsa nam qui, doloribus inventore obcaecati corporis magni!</p>
            </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="box grid grid-cols-2">
            <div className="img_content">
                <img className=" w-1/2" src="https://i.pinimg.com/736x/dc/40/16/dc401626d0ef5a4d374c6f1d176840c1.jpg" alt="" />
            </div>
            <div className="text_content space-y-6">
                <h1 className=" uppercase font-mono  text-3xl ">fucking fuck</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis cum quaerat soluta. Amet voluptates, autem perferendis nostrum vitae maiores rem fuga, quae ipsa nam qui, doloribus inventore obcaecati corporis magni!</p>
            </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="box grid grid-cols-2">
            <div className="img_content">
                <img className=" w-1/2" src="https://i.pinimg.com/564x/af/8b/17/af8b17bd5ac1bd7b5dd3831fd5960858.jpg" alt="" />
            </div>
            <div className="text_content space-y-6">
                <h1 className=" uppercase font-mono  text-3xl ">fucking fuck</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis cum quaerat soluta. Amet voluptates, autem perferendis nostrum vitae maiores rem fuga, quae ipsa nam qui, doloribus inventore obcaecati corporis magni!</p>
            </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="box grid grid-cols-2">
            <div className="img_content">
                <img className=" w-1/2" src="https://i.pinimg.com/736x/77/b9/cd/77b9cdea7ac5a540e346a135e0e9cca8.jpg" alt="" />
            </div>
            <div className="text_content space-y-6">
                <h1 className=" uppercase font-mono  text-3xl ">fucking fuck</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis cum quaerat soluta. Amet voluptates, autem perferendis nostrum vitae maiores rem fuga, quae ipsa nam qui, doloribus inventore obcaecati corporis magni!</p>
            </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Product;
