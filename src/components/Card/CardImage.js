import React from "react";

const CardImage = (props) => {
  return (
    <>
      <img
        src={props.Image}
        alt="Avatar"
        width="200px"
        height="200px"
        className="card-image"
      ></img>
    </>
  );
};

export default CardImage;
