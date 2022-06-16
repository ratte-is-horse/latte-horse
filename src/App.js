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
  border: 1px solid white;
  height: 30%;
  width: 45%;
  margin-top: 10%;
  margin-bottom: 10%;
`;
export default App;
