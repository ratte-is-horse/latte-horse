import { Routes, Route } from "react-router-dom";
import React from "react";
import Main from "./page/Main";
import Post from "./page/Post";
import Detail from "./page/Detail";
import Login from "./page/Login";
import Signup from "./page/Signup";
import styled from "styled-components";
import { LeftWrap, RightBar, Upperbar } from "./component/view";
import Header from "./component/header";
import "./style.css";

//npx json-server ./data.json --port 4000

function App() {
  return (
    <Background>
      <Wrap>
        <img
          src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcW8oAK%2FbtrEU2FQuwe%2FUNUK6A2BvB1knFPLeK6E6K%2Fimg.png"
          style={{ width: "100%" }}
        />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/post" element={<Post />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Wrap>
    </Background>
  );
}

const Background = styled.div`
  border: 0px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrap = styled.div`
  border: 3px solid white;
  border-radius: 10px;
  height: 90vh;

  width: 995px;
  margin-top: 2%;
  margin-bottom: 4%;
  overflow-x: hidden;
  overflow-y: auto;
`;
export default App;
