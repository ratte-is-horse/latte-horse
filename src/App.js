import { Routes, Route } from "react-router-dom";
import React from "react";
import Main from "./page/Main";
import Post from "./page/Post";
import Detail from "./page/Detail";
import Login from "./page/Login";
import Signup from "./page/Signup";
import "./View.css";
import { LeftWrap, RightBar, Upperbar } from "./component/view";
import Header from "./component/header";

//npx json-server ./data.json --port 4000

function App() {
  return (
    <>
      {/* <LeftWrap /> */}

      {/* <Upperbar />               */}

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/post" element={<Post />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>

      {/* <RightBar /> */}
    </>
  );
}

export default App;
