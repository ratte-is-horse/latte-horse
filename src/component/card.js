import React from "react";
import { Link } from "react-router-dom";

const Card = ({ item }) => {
  console.log(item);
  return (
    <div>
      <title>{item?.title}</title>
      <div>{item?.content}</div>
      <div>{item?.id}</div>
      <div>{item?.year}</div>
      <Link to={`/detail/${item?.id}`}>
        {" "}
        <img src={`${item?.url}`} />
      </Link>
    </div>
  );
};

export default Card;
