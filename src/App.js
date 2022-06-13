import { Routes, Route } from "react-router-dom";
import Main from "./page/Main";
import Post from "./page/Post";
import Detail from "./page/Detail";
import Login from "./page/Login";
import Signup from "./page/Signup";
import Header from "./component/header";

//npx json-server ./data.json --port 4000

function App() {
  return (
    <>
    <Header/>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/post" element={<Post />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
