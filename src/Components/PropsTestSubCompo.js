import React from "react";

export default function PropsTestSubCompo(props) {
    console.log(props);
  return (
    <>
      <div >
        <span>
          Id {props.id}<h2>Title:{props.title}</h2>
        </span>
        <h3>Author: {props.auth}</h3>
        <p>Location: {props.location}</p>
      </div>
    </>
  );
}
