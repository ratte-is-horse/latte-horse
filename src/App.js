import { Routes, Route, Link } from "react-router-dom";
import Main from "./page/Main";
import Post from "./page/Post";
import Detail from "./page/Detail";
import Login from "./page/Login";
import Signup from "./page/Signup";
import './View.css'
import { LeftWrap, RightBar } from "./component/view";


//npx json-server ./data.json --port 4000

function App() {
  return (
    <>
      <div className="background">
        <div className="outerbox">

          <div className='innerbox'>
            <div className="wrapper">
              <LeftWrap />
              <div className="wrapper__right">
                <div className="wrapper__right__header">
                  <Link to="/" style={{ textDecoration: 'none' }}><div className="wrapper__right__title">사이좋은 사람, 라떼 월드</div></Link>
                  <div className="wrapper__right__setting">
                    <Link to="/login" style={{textDecoration:"none", marginRight:"25px",color:"black"}}><span>로그인</span></Link>
                    <Link to="/signup"style={{textDecoration:"none",color:"black"}}><span>회원가입</span></Link>
                    <i className="fas fa-caret-right bbbb"></i></div>
                </div>

                <div className="wrapper__right__body">
                  <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/post" element={<Post />} />
                    <Route path="/detail" element={<Detail />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/login" element={<Login />} />
                  </Routes>
                </div>
              </div>
              <RightBar />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
