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
width: 50%;
height: 80%;
margin: auto;

`
const Wrap = styled.div`

`

const Cardbox = styled.div`
/* width: 300px;
height: 300px; */
border: 1px solid black;
margin: 10px;
padding: 10px;
`
export default Main;
