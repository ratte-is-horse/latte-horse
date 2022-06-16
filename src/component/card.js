import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom"
import styled from 'styled-components'
import apis from "../api";
import '../style.css'

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
      <div>{item?.title}</div>
      <Image className="text_photo" src={`${item?.url}`} />
      <p id="explain">게시글 보러가기</p>
      {/* <Item>{item?.contents}</Item> */}
      <Underbar className="underbar">
        {heart ? <Heart onClick={onHeart}>🤍</Heart> : <Heart onClick={onHeart}>❤️</Heart>}
        <Link to={`/detail/${item?.id}`} style={{ textDecoration: 'none' }}> <Dat>💬</Dat> </Link>
        <Years>{item?.year}</Years>
      </Underbar>
    </div>
  );
};

// const Imgbox = styled.div`
// height: 600px;
// width: 600px;
// overflow: hidden;
// `

const Image = styled.img`
width: 100%;
&:hover{  

  }
`
const PostBox = styled.div`
height: 300px;
width: 300px;
`
const Item = styled.div`

`

const Heart = styled.h2`
width: 8%;
`
const Dat = styled.h2`
width: 8%;
`

const Years = styled.div`
border: 0.1px solid black;
width: 20%;
border-radius: 40px;
margin-left: 60%;
text-align: center;
`

const Underbar = styled.div`

display: flex;
flex-direction: row;
`
export default Card;
