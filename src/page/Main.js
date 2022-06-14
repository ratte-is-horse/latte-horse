import React from "react";
import axios from "axios";
import styled from 'styled-components'
import{ Link} from 'react-router-dom'

const Main = () => {
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

  return (
   <>
  메인화면 이겠지요ㅕ

   
   <Link to ="/login"><button>로그인</button></Link>
   <Link to ="/signup"><button>회원가입</button></Link>
   <Link to="/post" ><Footer>글쓰러가기</Footer></Link>
   </>
  );
};
export default Main;

const Footer= styled.div`
  position: fixed; 
  bottom: 0; left: 80%;
  margin-bottom: 60px;
  height: 90px;
  width: 110px;
  background-color: tomato;
`