import React from "react";
import styled from "styled-components";

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
    <>
      <Head>
        <Link to="/">
          <img
            src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FmDOpI%2FbtrEWplWUj2%2FbIZArF1r9h2v3OndtGa9gK%2Fimg.png"
            style={{ width: "60%" }}
          />
        </Link>
        {is_cookie ? (
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "white",
              marginBottom: "40px",
            }}
          >
            <h3 onClick={onLogout}>로그아웃</h3>
          </Link>
        ) : (
          <>
            <Link
              to="/login"
              style={{
                textDecoration: "none",
                color: "white",
                marginBottom: "40px",
              }}
            >
              <h3>로그인</h3>
            </Link>
            <Link
              to="/signup"
              style={{
                textDecoration: "none",
                color: "white",
                marginBottom: "40px",
              }}
            >
              <h3>회원가입</h3>
            </Link>
          </>
        )}

        <Link to="/post" style={{ textDecoration: "none", color: "white" }}>
          <h3>글작성고고씽</h3>
        </Link>
      </Head>
    </>
  );
};

const Head = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 50px;
  top: 150px;
  left: 0;
  width: 20%;
  height: 50px;
  margin-left: 50px;
  text-align: center;
`;

export default Header;
