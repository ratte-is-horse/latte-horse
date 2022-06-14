import React from "react";
import { Button } from "react-bootstrap";
import axios from "axios";
import apis from "../api/index";

const Post = () => {
  const fileInputRef = React.useRef();
  const titleRef = React.useRef();
  const contentRef = React.useRef();

  const [title, setTitle] = React.useState("");
  const [content, setContent] = React.useState("");

  //파일 미리볼 url을 저장해줄 state
  const [fileImage, setFileImage] = React.useState("");

  // 파일 저장
  const saveFileImage = (e) => {
    setFileImage(URL.createObjectURL(e.target.files[0]));
    console.log(URL.createObjectURL(e.target.files[0]));
    console.log(fileImage);
  };

  const postNew = async (e) => {
    e.preventDefault();
    await apis.addPost({
      title: title,
      content: content,
      url: fileImage,
      year: "",
    });
  };

  // 파일 삭제

  return (
    <>
      <h3>게시글 작성</h3>
      <input
        type="text"
        placeholder="글의 제목을 입력하세용"
        value={title}
        onChange={(event) => {
          setTitle(event.target.value);
        }}
      />
      <input
        type="text"
        placeholder="내용을 입력하세용"
        value={content}
        onChange={(event) => {
          setContent(event.target.value);
        }}
      />
      <div>
        {fileImage && (
          <img alt="sample" src={fileImage} style={{ margin: "auto" }} />
        )}
        <div
          style={{
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <input
            name="imgUpload"
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={saveFileImage}
          />
        </div>
      </div>
      <Button onClick={postNew}>등록하기</Button>
    </>
  );
};
export default Post;
