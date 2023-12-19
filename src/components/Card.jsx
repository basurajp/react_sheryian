import React from "react";

const Card = ({ users , handleRemove ,index }) => {
  return (
    <div className="w-40 h-full bg-zinc-100 rounded large flex flex-col items-center p-2   ">
      <div className="image w-10 h-10 rounded-full overflow-hidden bg-cyan-800">
        <img className="w-[10vw] h-[10vw]] overflow-hidden object-cover" src={users.image} />
      </div>
      <h1 className="text-lg font-bold">{users.name}</h1>
      <h4 className="text-sm font-semibold my-1">{users.email}</h4>
      <p className="text-center leading-4 text-sm font-semibold">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta, odio!
      </p>
      <button onClick={()=>handleRemove(index)} className="bg-red-600 py-1 px-3 mt-1  rounded-lg text-sm text-white font-semibold ">
        Delete
      </button>
    </div>
  );
};

export default Card;
