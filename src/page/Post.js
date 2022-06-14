import React, { useState } from "react";
import { Button } from "react-bootstrap";
import apis from "../api/index";
import { storage } from "../firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useNavigate } from "react-router-dom";

const Post = () => {
  const navigate = useNavigate()
  const fileInputRef = React.useRef();

  const [title, setTitle] = React.useState("");
  const [content, setContent] = React.useState("");

  //파일 미리볼 url을 저장해줄 state
  const [fileImage, setFileImage] = React.useState("");

  // 파일 저장
  const saveFileImage = async (e) => {
    setFileImage(URL.createObjectURL(e.target.files[0]));

    console.log(URL.createObjectURL(e.target.files[0]))
    // ref로도 확인해봅시다. :)
    console.log(fileInputRef.current.files[0]);

    const uploaded_file = await uploadBytes(
      ref(storage, `addimages/${e.target.files[0].name}`),
      e.target.files[0]
    );
    // console.log(uploaded_file);

    const file_url = await getDownloadURL(uploaded_file.ref);

    console.log(file_url);
    fileInputRef.current = { url: file_url };

  };

  const postNew = async (e) => {

    e.preventDefault();


    await apis.addPost({
      title: title,
      content: content,
      url: fileImage,
      year: age,
    });
  };
  const [age, setAge] = useState();
  const handleChange = (event) => {
    setAge(event.target.value);
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
          <input
            name="imgUpload"
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={saveFileImage}
          />
          <form>
            <select onChange={handleChange}>
              <option value="00's">00's</option>
              <option value="90's">90's</option>
              <option value="80's">80's</option>
              <option value="70's">70's</option>
            </select>
          </form>
          <div>{age}</div>
        </div>
      </div>
      <Button onClick={postNew} type="submit">
        등록하기
      </Button>
    </>
  );
};
export default Post;
