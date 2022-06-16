import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import apis from "../api";
import "../style.css";

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
      <Title>{item?.title}</Title>
      <Image className="text_photo" src={`${item?.url}`} />

      {/* <Item>{item?.contents}</Item> */}
      <Underbar className="underbar">
        {/* {heart ? <Heart onClick={onHeart}>🤍</Heart> : <Heart onClick={onHeart}>❤️</Heart>} */}
        <Link to={`/detail/${item?.id}`} style={{ textDecoration: "none" }}>
          {" "}
          <Dat>💬</Dat>{" "}
        </Link>
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

const Title = styled.div`
  background-color: black;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  color: white;
`;

const Image = styled.img`
  margin-top: 10px;
  width: 330px;
  height: 400px;
`;
const PostBox = styled.div`
  height: 300px;
  width: 300px;
`;
const Item = styled.div``;

const Heart = styled.h2`
  width: 8%;
`;
const Dat = styled.h2`
  width: 8%;
  margin-left: 60%;
`;

const Years = styled.div`
  border: 0.1px solid black;
  width: 30%;
  border-radius: 40px;
  margin-left: 60%;
  text-align: center;
  padding-top: 3px;
  background-color: navy;
  color: white;
`;

const Underbar = styled.div`
  margin-top: 5px;
  display: flex;
  flex-direction: row;
`;
export default Card;
