import React, { useState } from "react";
import img10 from "../assets/1.jpeg";
import img3 from "../assets/11.jpeg";
import img4 from "../assets/12.jpeg";
import img18 from "../assets/18.jpeg";
import img1 from "../assets/8.jpeg";
import img2 from "../assets/9.jpeg";
import Cards from "./Cards";
const Items = () => {
  const [fruit, setFruit] = useState([
    {
      id: 1,
      image: img1,
      name: "CS OVERVIEW",
      price: 100,
    },
    {
      id: 2,
      image: img2,
      name: "Cambridge IGCSC",
      price: 200,
    },
    {
      id: 3,
      image: img10,
      name: "AEE Rusell mickael",
      price: 250,
    },
    {
      id: 4,
      image: img3,
      name: "CIVIL Intro ",
      price: 300,
    },
    {
      id: 5,
      image: img4,
      name: "SP gupta civil",
      price: 250,
    },
    {
      id: 6,
      image: img18,
      name: "Introduction To Aero",
      price: 150,
    },
  ]);
  return (
    <section className="w-3/4 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 my-10">
      {fruit.map((fruit) => {
        return <Cards key={fruit.id} fruit={fruit} />;
      })}
    </section>
  );
};

export default Items;
