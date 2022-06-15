import React from "react";
import { useSelector } from "react-redux";
import {Link} from "react-router-dom"

const Card = ({ item ,id }) => {
  // const PostReducer = useSelector((state) => state.Post_reducer.list);
  // console.log(PostReducer);
  return (
   
      <div>
        <title>{item[id]?.title}</title>
        <div>{item[id]?.contents}</div>
        <div>{item[id]?.id}</div>
        <div>{item[id]?.year}</div>
        <Link to={`/detail/${id}`}> <img src={`${item[id]?.url}`} /></Link>
      </div>

  );
};

export default Card;
