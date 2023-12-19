import React from "react";
import Card from "./Card";

const Cards = ({ users , handleRemove }) => {
  return (
    <div className="w-full max-h-96 overflow-auto p-4 flex gap-5 flex-wrap justify-center">
      {users.map((item, index) => (
        <Card handleRemove ={handleRemove} key={index} users={item} index={index} />
      ))}
    </div>
  );
};

export default Cards;
