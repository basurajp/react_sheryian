import React from "react";

export const Navbar = ({songData}) => {
  return (
    <div className="w-full px-4 py-3 flex justify-between items-center ">
      <h3>Orange</h3>
      <div className="flex p-2 px-20  bg-orange-500 rounded-md text-white gap-1 text-sm ">
        <h3>Favourites</h3>
        <h4>{songData.filter(item=> item.added).length}</h4>
      </div>
    </div>
  );
};

export default Navbar;
