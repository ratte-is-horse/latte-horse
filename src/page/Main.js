import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { getCookie } from "../shared/Cookie";
import { deleteCookie } from "../shared/Cookie";

const Main = () => {
  const cookie = getCookie("token");

  const [is_cookie, setCookie] = useState(false);

  useEffect(() => {
    if (cookie !== undefined) {
      return setCookie(true);
    }
  }, []);

  const onLogout = (e) => {
    deleteCookie("token");
    setCookie(false);
  };

  //1. !! 아래
  console.log(cookie);

  const onSubmit = async (e) => {
    e.preventDefault();
    e.persist();

    let files = e.target.profile_files.files;
    let formData = new FormData();
    for (let i = 0; i < files.length; i++) {
      formData.append("files", files[i]);
    }

    let dataSet = {
      name: "Hong gil dong",
      phone: "010-1234-1234",
      birth: "2001-09-11",
    };

    formData.append("data", JSON.stringify(dataSet));

    const postSurvey = await axios({
      method: "POST",
      url: "http://localhost:4000/posts",
      mode: "cors",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      data: formData,
    });

    console.log(postSurvey);
  };

  console.log(document.cookie);

  return (
    <>
      메인화면 이겠지요ㅕ
      {is_cookie ? (
        <button onClick={onLogout}>로그아웃</button>
      ) : (
        <Link to="/login">
          <button>로그인</button>
        </Link>
      )}
      <Link to="/signup">
        <button>회원가입</button>
      </Link>
      <Link to="/post">
      </Link>
    </>
  );
};

export default Main;
