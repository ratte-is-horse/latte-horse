import React from "react";
import { useSelector } from "react-redux";
import {Link} from "react-router-dom"

const Card = ({ item }) => {
  // const PostReducer = useSelector((state) => state.Post_reducer.list);
  // console.log(PostReducer);
  return (
   
      <div>
        <title>{item?.title}</title>
        <div>{item?.contents}</div>
        <div>{item?.id}</div>
        <div>{item?.year}</div>
        <Link to={`/detail/${item?.id}`}> <img src={`${item?.url}`} /></Link>
      </div>

  );
};

export default Card;
