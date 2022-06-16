import React from "react";
import styled from "styled-components";
// import "../View.css";
import { getCookie } from "../shared/Cookie";
import { deleteCookie } from "../shared/Cookie";
import { Link } from "react-router-dom";

const Header = () => {
  const cookie = getCookie("token");

  const [is_cookie, setCookie] = React.useState(false);

  React.useEffect(() => {
    if (cookie !== undefined) {
      return setCookie(true);
    }
  }, []);

  const onLogout = (e) => {
    deleteCookie("token");
    setCookie(false);
  };
  return (
    <Head>
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
    </Head>
  );
};

const Head = styled.h1`
  top: 110px;
  left: 1300px;
  width: 25%;
  height: 30px;
  margin-left: 40em;
  color: white;
  border-bottom: 1px solid #ffffff00;
`;
export default Header;
