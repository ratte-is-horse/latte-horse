import React from "react";
import { useSelector } from "react-redux";
import {Link} from "react-router-dom"
import styled from 'styled-components'
import apis from "../api";

const Card = ({ item ,id }) => {
  // const PostReducer = useSelector((state) => state.Post_reducer.list);
  // console.log(PostReducer);
  const onHeart = async (e) => {
    e.preventDefault();
    const heartData = await apis.addHeart(item.id);
    console.log(heartData.data);
  };

  return (
   
      <PostBox>
        <div><Link to={`/detail/${item.id}`}> <Image src={`${item?.url}`} /></Link></div>
        <title>{item?.title}</title>
        <div>{item?.contents}</div>
        <div>{item?.id}</div>
        <div>{item?.year}</div>
        <div onClick={onHeart}>🤍</div>
      </PostBox>

  );
};

// const Imgbox = styled.div`
// height: 600px;
// width: 600px;
// overflow: hidden;
// `

const Image = styled.img`

`
const PostBox = styled.div`

height: 300px;
width: 300px;
`
export default Card;
