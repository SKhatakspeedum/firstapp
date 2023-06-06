import React from "react";

export default function ArrayWithMap() {
  const arr = [
    {
      id: 1,
      title: "Blue sky",
      auth: "S.R.Khtak",
      location: "London",
    },
    {
      id: 2,
      title: "Green tree",
      auth: "Dora Marok",
      location: "Delhi",
    },
    {
      id: 3,
      title: "Red Heart",
      auth: "A.K.Arora",
      location: "New York",
    },
  ];

  const arrmap = arr.map((item,pos) => {
    console.log(item);
    return (
      <div key={pos}>
     <span>Id {item.id} <h2> {item.title}</h2></span>  
        <h3>Author: {item.auth}</h3>
        <p>Location: {item.location}</p>
      </div>
    );
  });

  return <div>{arrmap}</div>;
}
