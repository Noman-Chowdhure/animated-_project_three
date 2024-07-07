import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="contact-body grid sm:grid-cols-3 grid-cols-1 justify-center justify-items-center items-center sm:gap-40 gap-10 w-full h-screen  p-10">
        <div className="img max-sm:hidden">
          <img
            src="https://i.pinimg.com/originals/ba/3d/73/ba3d738757089a28da691cf46235428b.gif"
            alt=""
          />
        </div>
        <div className="contact grid col-span-2 sm:grid-cols-2 grid-cols-1 justify-center justify-items-center items-center sm:gap-20 gap-5">
          <div className="heading">
            <h1 className=" text-2xl xl:text-8xl font-light capitalize">
              contact
            </h1>
          </div>
          <div className="paragraf">
            <p>
              Thank you for considering MyDiber. Please use the form below to
              contact us for inquiries or services. We'll respond promptly.
            </p>
          </div>
          <div className="viva_social">hello dear</div>
          <div className="contact_form p-10 w-full ">
            <form
              action="https://formspree.io/f/xvgpopyz"
              method="POST"
              className=" grid grid-rows-1 gap-y-4"
            >
              <input
                className=" border-b-[1px] my-4 w-full outline-0 ps-10 bg-transparent"
                type="text"
                name="username"
                placeholder="username"
                autoComplete="off"
                required
              />
              <input
                className=" border-b-[1px] my-4 w-full outline-0 ps-10 bg-transparent"
                type="email"
                name="email"
                placeholder="email"
                autoComplete="off"
                required
              />
              <textarea
                className=" border-b-[1px] w-full outline-0 ps-10 bg-transparent"
                name="message"
                placeholder="message type here"
                id=""
                cols="30"
                rows="10"
                autoComplete="off"
                required
              ></textarea>
              <input
                className=" border-b-[1px] w-28 m-auto text-center outline-0 bg-orange-700 "
                type="submit"
                value="send"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
