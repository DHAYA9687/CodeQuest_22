import React from "react";
const Cards = ({ fruit }) => {
  return (
    <div className=" rounded-xl overflow-hidden shadow-xl transform group hover:scale-110 ease-in-out duration-100 relative">
      <img
        src={fruit.image}
        alt={fruit.name}
        className="w-full bg-cover object-fit"
      />
      <div className="flex flex-col items-center my-2 font-body py-2">
        <span>{fruit.name}</span>
        <span>₹{fruit.price}</span>
        <button className="text-gray-500 bg-gray-300 rounded-lg px-2 invisible group-hover:visible">
          Add to Cart
        </button>
      </div>
      <span className="absolute top-3 right-3 bg-sky-300 text-black  border-sky-300 rounded-lg p-2">
        1% off
      </span>
    </div>
  );
};

export default Cards;
