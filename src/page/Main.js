import React from "react";
import axios from "axios";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { getCookie } from "../shared/Cookie";

const Main = () => {
  const onCookie = (event) => {
    event.preventDefault();
    getCookie("token");
  };

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
      <button onClick={onCookie}>쿠키 얻기</button>
    </>
  );
};
export default Main;

const Footer = styled.div`
  position: fixed;
  bottom: 0;
  left: 80%;
  margin-bottom: 60px;
  height: 90px;
  width: 110px;
  background-color: tomato;
`;
