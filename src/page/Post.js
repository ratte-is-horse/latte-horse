import React, { useState } from "react";
import { Button } from "react-bootstrap";
import apis from "../api/index";
import { storage } from "../firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createPostJson } from "../redux/modules/post";
import Header from "../component/header";
import { configure } from "@testing-library/react";
import styled from "styled-components";

const Post = () => {
  const navigate = useNavigate();
  const fileInputRef = React.useRef();
  const dispatch = useDispatch();

  const [title, setTitle] = React.useState("");
  const [content, setContent] = React.useState("");

  //파일 미리볼 url을 저장해줄 state
  const [fileImage, setFileImage] = React.useState("");

  // 파일 저장
  const saveFileImage = async (e) => {
    setFileImage(URL.createObjectURL(e.target.files[0]));

    // console.log(URL.createObjectURL(e.target.files[0]))
    // // ref로도 확인해봅시다. :)
    // console.log(fileInputRef.current.files[0]);

    const uploaded_file = await uploadBytes(
      ref(storage, `addimages/${e.target.files[0].name}`),
      e.target.files[0]
    );
    // console.log(uploaded_file);

    const file_url = await getDownloadURL(uploaded_file.ref);

    // console.log(file_url);
    fileInputRef.current = { url: file_url };
  };

  const postNew = async (e) => {
    e.preventDefault();

    // dispatch(createPostJson({
    //   title: title,
    //   content: content,
    //   url: fileInputRef.current?.url,
    //   year: age,
    // }))

    const res = await apis
      .addPost({
        title: title,
        contents: content,
        url: fileInputRef.current?.url,
        year: age,
        love: false,
      })
      // 1. !!!! 아마 이 위에 heart의 기본 값 false를 보내야할 것 .
      .then((res) => {
        //res의 타이틀 이런식으로바꿔줘야함
        dispatch(
          createPostJson({
            id: res.id,
            title: res.title,
            contents: res.content,
            url: res.url,
            year: res.age,
            love: res.love,
          })
        );
        // dispatch(createPostJson(res.data)); 서버오픈시 시도
        window.alert("등록성공");
        navigate("/");
      })
      .catch((err) => {
        alert("로그인 후 작성해주세요");
        navigate("/login");
      });
  };

  //년도대 설정
  const [age, setAge] = useState();
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  // 파일 삭제

  return (
    <>
      <Header />
      <Wrap>
        <img src="images/바.png" style={{ width: "100%" }} />
        <Title>게시글 작성</Title>

        <Inputbox
          type="text"
          placeholder="글의 제목을 입력하세용"
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
          style={{ height: "40px" }}
        />
        <Inputbox
          type="text"
          placeholder="내용을 입력하세용"
          value={content}
          onChange={(event) => {
            setContent(event.target.value);
          }}
          style={{ height: "100px" }}
        />
        <div>
          {fileImage && (
            <img
              alt="sample"
              src={fileImage}
              style={{ margin: "auto", maxWidth: "300px", maxHeight: "250px" }}
            />
          )}
          <div
            style={{
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Inputbox
              name="imgUpload"
              type="file"
              accept="image/*"
              ref={fileInputRef}
              onChange={saveFileImage}
              style={{ marginLeft: "20%", marginBottom: "10px" }}
            />
            <div
              style={{
                fontSize: "10px",
                color: "tomato",
                marginLeft: "20%",
                marginBottom: "10px",
              }}
            >
              사진변경하지 말아주세요 오류생겨요...😭
            </div>
            <form>
              <select
                onChange={handleChange}
                style={{ marginLeft: "35%", marginBottom: "10px" }}
              >
                <option value="0">선택하세요</option>
                <option value="2010's">2010's</option>
                <option value="2000's">2000's</option>
                <option value="1990's">1990's</option>
                <option value="1980's">1980's</option>
              </select>
            </form>
            <div>{age}</div>
          </div>
        </div>
        <div>
          <Button2 onClick={postNew} type="submit">
            등록하기
          </Button2>
        </div>
      </Wrap>
    </>
  );
};

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: black;
  margin: 15% auto;
  border: 1px white solid;
  width: 50%;
  background-color: wheat;
`;

const Title = styled.div`
  margin-top: 20px;
  margin-bottom: 10px;
  color: black;
`;

const Inputbox = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 10px;
  width: 90%;
  height: 30%;
`;
const Button2 = styled.button`
  padding: 3px;
  margin-bottom: 20px;
`;
export default Post;
