import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom"
import styled from 'styled-components'
import apis from "../api";

const Card = ({ item, id }) => {
  // const PostReducer = useSelector((state) => state.Post_reducer.list);
  // console.log(PostReducer);

  const [heart, setHeart] = React.useState(false);

  const onHeart = async (e) => {
    e.preventDefault();
    const heartData = await apis.addheart(item.id);
    console.log(heartData.data);
    // dispatch(AddHeartJson(heartData.data))
    setHeart(heartData.data);
  };

  return (
    <div>
      <title>{item?.title}</title>
      <div>{item?.contents}</div>
      <div>{item?.id}</div>
      <div>{item?.year}</div>
      <button onClick={onHeart}>좋아요</button>
      {heart ? <div>❤</div> : <div>❌</div>}
      <div></div>
      <div></div>
      <Link to={`/detail/${item?.id}`}>
        <img src={`${item?.url}`} />
      </Link>
    </div>
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
