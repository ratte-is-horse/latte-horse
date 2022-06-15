import React from "react";

const Card = ({ item }) => {
  return (
    <>
      <>
        <title>{item?.title}</title>
        <div>{item?.content}</div>
        <div>{item?.id}</div>
        <div>{item?.year}</div>
        <img src={`${item?.url}`} />
      </>
      ;
    </>
  );
};

export default Card;
