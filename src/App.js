import { Routes, Route } from "react-router-dom";
import React from "react";
import Main from "./page/Main";
import Post from "./page/Post";
import Detail from "./page/Detail";
import Login from "./page/Login";
import Signup from "./page/Signup";
import "./style.css";
import styled from "styled-components";
import { LeftWrap, RightBar, Upperbar } from "./component/view";
import Header from "./component/header";

//npx json-server ./data.json --port 4000

function App() {
  return (
    <Background>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/post" element={<Post />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Background>
  );
}

const Background = styled.div`
  background-image: url("https://i.pinimg.com/originals/13/3f/7a/133f7a644b1076a9804e30a63f51cb47.gif");
  background-size: 25%;
  /* background-size: cover; */
`;

//
//1.
// https://i.pinimg.com/originals/c6/a9/a1/c6a9a1615d443bd2e4b558f5d29b9bc1.gif
//2.
// https://i.pinimg.com/originals/f3/26/cd/f326cd8b7633e8080e59eb81b7854c54.gif
//3.
// https://i.pinimg.com/originals/b4/71/d6/b471d641c2fb84308dfb016cbf4ac6bb.gif
//4.맨 처음 꺼
// https://i.pinimg.com/originals/13/3f/7a/133f7a644b1076a9804e30a63f51cb47.gif
export default App;
