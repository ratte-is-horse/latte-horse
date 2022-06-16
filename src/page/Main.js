import React, { useEffect } from "react";
import Header from "../component/header";
import Card from "../component/card";
import { useDispatch } from "react-redux";
import { loadPostJson } from "../redux/modules/post";
import { useSelector } from "react-redux";
import axios from "axios";
import { async } from "@firebase/util";
import apis from "../api";
import styled from 'styled-components'
import { getCookie } from "../shared/Cookie";

const Main = () => {
  const dispatch = useDispatch();
  getCookie("token");
  const PostReducer = useSelector((state) => state.post.list);

  console.log(PostReducer);

  useEffect(() => {
    dispatch(loadPostJson());
  }, [dispatch]);

  // const love = async()=>{axios.post("http://52.79.226.242/api/board/1/like")}
  // const love = axios.post("http://52.79.226.242/api/board/1/like")

  // const love = async (e) => {
  //    e.preventDefault();
  //    await apis.putHeart({heart:1})
  // }

  return (
    <Box>

      <Header />
      <Section/>
      <Wrap>
      {PostReducer?.map((item, index) => {
        console.log(item)
        return (
          <Cardbox key={index}>
            <Card
              item={item}
            />
          </Cardbox>
        );
      })}
     </Wrap>

    </Box>
  );
};

const Box = styled.div`


/* width: 50%; */
/* max-width: 1200px; */
height: 80%;


`
const Wrap = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: center;
align-items: center;
`

const Cardbox = styled.div`
width: 350px;
height: 500px;
border: 1px solid black;
border-radius: 10px;
margin: 10px;
padding: 10px;
background-color: white;
`

const Section = styled.h1`
  padding-top: 50px; padding-bottom: 10px;
`;
export default Main;
