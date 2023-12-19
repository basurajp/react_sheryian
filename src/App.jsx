import React, { useState } from "react";
import Card from "./components/Card";
import Navbar from "./components/Navbar";

export const App = () => {
  const data = [
    {
      image: "https://picsum.photos/200/300?random=1",
      name: "Dil Cheez Kariye",
      artist: "Saurabh",
      added: false,
    },
    {
      image: "https://picsum.photos/200/300?random=2",
      name: "Tere Bina Jeena",
      artist: "Zohair",
      added: false,
    },
    {
      image: "https://picsum.photos/200/300?random=3",
      name: "Tum Hi Ho",
      artist: "Pooja",
      added: false,
    },
    {
      image: "https://picsum.photos/200/300?random=4",
      name: " Pal Pal Dil Ke Paas",
      artist: "Mahesh",
      added: false,
    },
    {
      image: "https://picsum.photos/200/300?random=5",
      name: "Tum Mile Dil ",
      artist: "Arthi",
      added: false,
    },
  ];
  const [songData, setSongData] = useState(data);

  const handleClick = (dindex) => {
    setSongData((prev) => {
      return prev.map((item, index) => {
        if (index === dindex) {
          return {
            ...item,
            added: !item.added,

          };
        }
        return item;
      });
    });
  };

  return (
    <>
      <Navbar songData ={songData}/>
      <div className=" flex gap-8 flex-wrap">
        {songData.map((obj, index) => {
          return (
            <Card
              key={index}
              index={index}
              obj={obj}
              handleClick={handleClick}
            />
          );
        })}
      </div>
    </>
  );
};

export default App;
