import React from "react";

export function Card({ value, handleClick, index }) {
  console.log(index);
  const { name, image, profession, friends } = value;
  return (
    <>
      <div className="w-52 bg-white rounded ">
        <div className="w-full h-32 bg-sky-200">
          <img
            className="h-full w-full object-cover"
            src={image}
            alt="this is an image "
          />
        </div>
        <div className="w-full p-3">
          <h1>{name}</h1>
          <h5 className="text-xl font-semibold ">{profession} </h5>
          <button
            onClick={() => handleClick(index)}
            className={`px-3 py-1 text-xs text-white ${
              friends ? "bg-blue-600" : "bg-red-400"
            } mt-2`}
          >
            {friends ? "Friends  " : " Add Friends"}
          </button>
        </div>
      </div>
    </>
  );
}

export default Card;
