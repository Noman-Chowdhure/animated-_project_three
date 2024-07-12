import React, { useEffect, useState } from "react";
import Title from "../../common/Title";

const Menu = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((info) => setProduct(() => info.slice(0, 9)));
  }, []);
  return (
    <div>
      <div className="menu_body grid justify-center justify-items-center space-y-10">
        <Title head="coffee menu"></Title>
        <div className="item grid grid-cols-2 md:grid-cols-3 justify-center justify-items-center gap-10 md:gap-20">
          {product.map((xxx) => (
            <MenuCard key={xxx.id} items={xxx}></MenuCard>
          ))}
        </div>
      </div>
    </div>
  );
};

const MenuCard = ({ items }) => {
  const { name, price, image } = items;
  return (
    <div className=" grid md:grid-cols-2 grid-cols-1 justify-center justify-items-center items-center gap-4 md:gap-8 shadow-lg hover:scale-105  duration-150 p-3">
      <div className="img_content max-sm:border-b-[1px]">
        <img className=" w-1/2 h-fit m-auto" src={image} alt="" />
      </div>
      <div className="text_content md:space-y-4">
        <h1 className="font-light md:text-2xl text-lg text-zinc-500">{name}</h1>
        <p className=" text-sm">${price}</p>
        <button className=" text-sm text-amber-400" > wanna buy..?
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className=" w-5 text-orange-800"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Menu;
