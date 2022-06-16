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
      <Header />
      <Wrap>
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
  width: 1000px;
  margin-top: 10%;
  overflow-x: hidden;
  overflow-y: auto;
`;
export default App;
