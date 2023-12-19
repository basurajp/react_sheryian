import React from "react";

export const Card = ({ obj ,handleClick,index}) => {
  const { image, name, artist, added } = obj;
  return (
    <div className="w-60 bg-zinc-100 p-4 rounded-md ml-4 flex gap-4 pb-10 relative">
      <div className="w-20 h-20 object-cover bg-orange-400 rounded-md overflow-hidden">
        <img className="w-full h-full" src={image} alt="this is image" />
      </div>
      <div>
        <h3 className="text-xl font-semibold leading-none">{name}</h3>
        <h6 className="text-sm">{artist}</h6>
      </div>
      <button onClick={()=>{
        handleClick(index)
      }}
        className={`px-4 py-3 ${
          added ? "bg-green-600" : " bg-orange-500 "
        } absolute text-white rounded-md text-sm -bottom-4 right-7`}
      >
        {added ? "Added" : "Add to Favourite "}
      </button>
    </div>
  );
};

export default Card;
