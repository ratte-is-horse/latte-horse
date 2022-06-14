import React from "react";
import "../View.css";
import styled from "styled-components";
import { getCookie } from "../shared/Cookie";
import { deleteCookie } from "../shared/Cookie";
import { Link } from "react-router-dom";

export const LeftWrap = () => {
  return (
    <div className="wrapper__left">
      <div className="wrapper__left__header">
        <div className="today">
          TODAY <span className="zero">0</span> | TOTAL{" "}
          <span className="count">12345</span>
        </div>
      </div>
      <div className="wrapper__left__body">
        <div className="header">
          <img alt="img" src="images/profile.PNG" className="headerGrey"></img>
          <div className="line"></div>
          <div className="profileWrapper">
            <div className="profile">
              <i className="fas fa-user"></i> ┌─────＊♡
            </div>
            <div className="profile">
              <i className="fas fa-phone-alt"></i> │ 　ME·
            </div>
            <div className="profile">
              <i className="fas fa-envelope"></i>│ 　LOVE·
            </div>
            <div className="profile">
              <i className="fas fa-star"></i> │ 　FRIEND·
            </div>
            <div className="profile">
              <i className="fas fa-star"></i> └─────＊♡
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
  );
};

export const RightBar = () => {
  return (
    <div className="wrapper_bar">
      <Box>ALL</Box>
      <Box>00's</Box>
      <Box>90's</Box>
      <Box>80's</Box>
      <Box>70's</Box>
    </div>
  );
};

export const Upperbar = () => {
  const cookie = getCookie("token");

  const [is_cookie, setCookie] = React.useState(false);
  console.log(is_cookie);
  React.useEffect(() => {
    if (cookie !== undefined) {
      return setCookie(true);
    }
  }, []);

  const onLogout = (e) => {
    deleteCookie("token");
    setCookie(false);
    alert("로그아웃!");
  };
  return (
    <div className="wrapper__right__header">
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className="wrapper__right__title">
          ☆ㄹr떼좋은 ㅅr람, ㄹr떼 월드☆
        </div>
      </Link>
      <div className="wrapper__right__setting">
        {is_cookie ? (
          <Link
            to="/"
            style={{
              textDecoration: "none",
              marginRight: "18px",
              color: "black",
            }}
          >
            <span onClick={onLogout}>로그아웃</span>
          </Link>
        ) : (
          <Link
            to="/login"
            style={{
              textDecoration: "none",
              marginRight: "18px",
              color: "black",
            }}
          >
            <span>로그인</span>
          </Link>
        )}
        <Link to="/signup" style={{ textDecoration: "none", color: "black" }}>
          <span>회원가입</span>
        </Link>
        <Link
          to="/post"
          style={{ textDecoration: "none", marginLeft: "18px", color: "black" }}
        >
          <span>글작성고고씽</span>
        </Link>
        <i className="fas fa-caret-right bbbb"></i>
      </div>
    </div>
  );
};

const Box = styled.div`
  border: 1px solid #5098b3;
  width: 75px;
  height: 43px;
  margin-bottom: 5px;
  padding-left: 18px;
  display: flex;
  text-align: center;
  align-items: center;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  background-color: #5098b3;
  font-size: 19px;
`;
