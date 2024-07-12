import React from "react";
import { useForm } from "react-hook-form";
import Title from "../../common/Title";
const Booking = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 justify-center ">
      <div className="img_content max-sm:absolute -z-10">
        <img src="https://i.pinimg.com/originals/b8/38/d6/b838d614ddd2f5f389a50c1c0b8cc2d7.gif" alt="" />
      </div>
      <div className="space-y-10">
        <Title head="book your table"></Title>
        <form
          action=""
          onSubmit={handleSubmit(onSubmit)}
          className=" grid grid-cols-2 gap-10"
        >
          <input
            className=" border-b-[1px] bg-transparent outline-none ps-4 capitalize"
            type="text"
            {...register("fastname")}
            placeholder="fast name"
          />
          <input
            className=" border-b-[1px] bg-transparent outline-none ps-4 capitalize"
            type="text"
            {...register("lastname")}
            placeholder="last name"
          />
          <input
            className=" border-b-[1px] bg-transparent outline-none ps-4 capitalize"
            type="email"
            {...register("email")}
            placeholder="email"
          />
          <input
            className=" border-b-[1px] bg-transparent outline-none ps-4 capitalize"
            type="time"
            {...register("time")}
            placeholder="time"
          />
          <input
            className=" border-b-[1px] bg-transparent outline-none ps-4 capitalize"
            type="date"
            {...register("date")}
            placeholder="date"
          />
          <input
            className=" border-b-[1px] bg-transparent outline-none ps-4 capitalize"
            type="number"
            {...register("number")}
            placeholder=" members"
          />
          <input
            className=" border-b-[1px] bg-transparent outline-none ps-4 capitalize col-span-2 w-full"
            type=" textarea"
            {...register("textarea")}
            placeholder="your comment"
          />
          <input
            className=" bg-red-400 rounded-full p-3"
            type="submit"
            value="submit"
          />
        </form>
      </div>
    </div>
  );
};

export default Booking;
