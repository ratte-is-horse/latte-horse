import { Routes, Route } from "react-router-dom";
import React from "react";
import Main from "./page/Main";
import Post from "./page/Post";
import Detail from "./page/Detail";
import Login from "./page/Login";
import Signup from "./page/Signup";
import "./View.css";
import styled from 'styled-components'
import { LeftWrap, RightBar, Upperbar } from "./component/view";
import Header from "./component/header";

//npx json-server ./data.json --port 4000

function App() {
  return (



    <Background >
      <img src="https://yt3.ggpht.com/ytc/AKedOLTZ6SGPR2W56YJjj47COAG1ljUyXTX_qY0oQkpf=s900-c-k-c0x00ffffff-no-rj" />

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
  background-image: url("https://i.gifer.com/iGu.gif");
  background-size: 450px;
  `
export default App;
