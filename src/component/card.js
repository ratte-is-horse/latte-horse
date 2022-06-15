import React from "react";
import { useSelector } from "react-redux";

const Card = ({ item }) => {
  // const PostReducer = useSelector((state) => state.Post_reducer.list);
  // console.log(PostReducer);
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
