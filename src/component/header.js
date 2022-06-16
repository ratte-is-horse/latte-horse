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
        <img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FmDOpI%2FbtrEWplWUj2%2FbIZArF1r9h2v3OndtGa9gK%2Fimg.png"
        style={{width:"350px"}}/>
        </Link>
        {is_cookie ? (
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "white",
            }}
          >
            <h1 onClick={onLogout}>로그아웃</h1>
          </Link>
        ) : (
          <>
          <Link
            to="/login"
            style={{
              textDecoration: "none",
              color: "white",
              marginBottom:"40px"
            }}
          >
            <h1>로그인</h1>
          </Link>
           <Link to="/signup" style={{ textDecoration: "none", color: "white", marginBottom:"40px" }}>
          <h1>회원가입</h1>
        </Link>
        </>
        )}
       
        <Link
          to="/post"
          style={{ textDecoration: "none", color: "white" }}
        >
          <h1>글작성고고씽</h1>
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
  top:150px;left:0;width:100%; height:50px;
  border-bottom: 1px solid #ffffff00;
  margin:100px;
  width: 30%;
`;

export default Header;
