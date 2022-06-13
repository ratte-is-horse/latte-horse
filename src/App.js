import { Routes, Route } from "react-router-dom";
import Main from "./page/Main";
import Post from "./page/Post";
import Detail from "./page/Detail";
import Login from "./page/Login";
import Signup from "./page/Signup";
import Header from "./component/header";
import './View.css'

//npx json-server ./data.json --port 4000

function App() {
  return (
    <>
    <div className="background">
    <div className="outerbox">
      <div className='innerbox'>
        <div className="wrapper">
          <div className="wrapper__left">
            <div className="wrapper__left__header">
              <div className="today">
                TODAY <span className="zero">0</span> | TOTAL <span className="count">12345</span>
              </div>
            </div>
            <div className="wrapper__left__body">
              <div className="header">
                <div className='headerGrey'>
                </div>
                <div className="line"></div>
                <div className="profileWrapper">
                  <div className="profile">
                    <i className="fas fa-user"></i> 이름
                  </div>
                  <div className="profile">
                    <i className="fas fa-phone-alt"></i> Phone
                  </div>
                  <div className="profile">
                    <i className="fas fa-envelope"></i> E-mail
                  </div>
                  <div className="profile">
                    <i className="fas fa-star"></i> Instagram
                  </div>
                </div>
              </div>
              <div className="footer">
                <div className="feelWrapper">
                  <div className="feel">오늘의 기분</div>
                  <select className="feelSelect">
                    <option>기쁨 😀</option>
                    <option>슬픔 😭</option>
                    <option>분노 😡</option>
                    <option>행복 😊</option>
                    <option>귀찮 😒</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="wrapper__right">
            <div className="wrapper__right__header">
              <div className="wrapper__right__title">사이좋은 사람들, 싸이월드</div>
              <div className="wrapper__right__setting">사생활보호설정<i className="fas fa-caret-right bbbb"></i></div>
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
        </div>
      </div>
    </div>
  </div>
    </>
  );
}

export default App;
