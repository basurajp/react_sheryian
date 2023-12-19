import React, { useState } from "react";

import Card from "./components/Card";

export const App = () => {
  const data = [
    {
      name: "John Doe",
      profession: "Engineer",
      image: "https://picsum.photos/200/300?random=1",
      friends: false,
    },
    {
      name: "Jane Smith",
      profession: "Doctor",
      image: "https://picsum.photos/200/300?random=2",
      friends: false,
    },
    {
      name: "Bob Johnson",
      profession: "Teacher",
      image: "https://picsum.photos/200/300?random=3",
      friends: false,
    },
    {
      name: "Alice Brown",
      profession: "Artist",
      image: "https://picsum.photos/200/300?random=4",
      friends: false,
    },
  ];
  const [realDtata, setRealData] = useState(data);

  const handleFriendButton = (relIndex) => {
    setRealData((previous) => {
      return previous.map((item, index) => {
        if (index === relIndex) {
          return {
            ...item,
            friends: !item.friends,
          };
        }
        return item;
      });
    });
  };

  return (
    <>
      <div className="w-full h-screen bg-zinc-300 flex gap-4 items-center justify-center">
        {realDtata.map((item, index) => (
          <Card
            key={index}
            index={index}
            value={item}
            handleClick={handleFriendButton}
          />
        ))}
      </div>
    </>
  );
};

export default App;
