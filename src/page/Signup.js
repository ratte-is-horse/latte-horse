import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { storage } from "../firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
// import { createUserJson } from "../redux/modules/user";
// 1. 위의 createUserJson 이건 user 리듀서의 미들웨어가 작동할 필요 없으므로 불필요.
import apis from "../api/index";
import styled from "styled-components";

const Signup = (props) => {
  const navigate = useNavigate();
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const [Password2, setPassword2] = useState("");
  const [Nickname, setNickname] = useState("");
  const [error, setError] = useState();
  const [pwcheck, setPwCheck] = React.useState("");

  const [isLoading, setIsLoading] = useState(false);


  const [fileImage, setFileImage] = React.useState("");
  const fileInputRef = React.useRef();

  const password = React.useRef();
  const password2 = React.useRef();
  const check = React.useRef();

  if (Password && Password2 && Password === Password2) {
    check.current.innerText = "✔️";
  } else if (Password !== Password2) {
    check.current.innerText = "❌";
  }

  //아이디,비번,닉네임 정규식
  const idCheck = (id) => {
    let regExp = /^[0-9a-zA-Z]{4,}$/;
    // 대문자 포함
    return regExp.test(id);
  };
  const pwCheck = (id) => {
    let regExp = /^[0-9a-zA-Z]{8,}$/;
    // 대문자 포함
    return regExp.test(id);
  };
  const nickCheck = (nick) => {
    let regExp = /^[a-zA-Z0-9ㄱ-ㅎ|ㅏ-ㅣ|가-힣!@#$%^&*]/;

    return regExp.test(nick);
  };

  //submit handler
  const onSubmitUserHandler = async (event) => {
    event.preventDefault();
    if (
      Username === "" ||
      Password === "" ||
      Password2 === "" ||
      Nickname === "" ||
      fileImage === ""
    ) {
      window.alert("아이디,비밀번호,닉네임을 모두 입력해주세요!");
      return;
    }

    if (!idCheck(Username)) {
      window.alert("형식을 지켜주세요.");
      return;
    }
    if (!pwCheck(Password, Password2)) {
      window.alert("숫자 및 영어만 입력가능합니다.");
      return;
    }
    if (Password !== Password2) {
      window.alert("비밀번호 불일치 : 고새 까먹었어?");
      return;
    }

    if (!nickCheck(Nickname)) {
      window.alert("올바른 닉네임 형식을 작성해주세요");
      return;
    }

    await apis.addUser({
      username: Username,
      password: Password,
      password2: Password2,
      nickname: Nickname,
      profileurl: fileImage
    });
    navigate("/login");
  };

  //사진 업로드
  const saveFileImage = async (e) => {
    setFileImage(URL.createObjectURL(e.target.files[0]));

    console.log(URL.createObjectURL(e.target.files[0]))
    // ref로도 확인해봅시다. :)
    console.log(fileInputRef.current.files[0]);

    const uploaded_file = await uploadBytes(
      ref(storage, `profileimages/${e.target.files[0].name}`),
      e.target.files[0]
    );
    // console.log(uploaded_file);

    const file_url = await getDownloadURL(uploaded_file.ref);

    console.log(file_url);
    fileInputRef.current = { url: file_url };
  };

  return (
    <div>
      <form onSubmit={onSubmitUserHandler}>
        아이디 :
        <input
          type="text"
          placeholder="아이디를 입력하세요"
          value={Username}
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <br />
        비밀번호 :
        <input
          type="password"
          placeholder="비밀번호를 입력하세요"
          value={Password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
          ref={password}
        />
        <br />
        비밀번호 재확인 :
        <input
          type="password"
          placeholder="비밀번호를 재입력하세요"
          value={Password2}
          onChange={(event) => {
            setPassword2(event.target.value);
          }}
          ref={password2}
        />
        <p ref={check} />
        <br />
        닉네임 :
        <input
          type="text"
          placeholder="예전 느낌 살려서! 큰거온다!!!"
          value={Nickname}
          onChange={(event) => {
            setNickname(event.target.value);
          }}
        />
        <br />
        프로필 사진
        {fileImage && (
          <img
            alt="sample"
            src={fileImage}
            style={{ margin: "auto", maxWidth: "300px", maxHeight: "250px" }}
          />
        )}
        <Input
          name="imgUpload"
          type="file"
          accept="image/*"
          ref={fileInputRef}
          onChange={saveFileImage}
        />
        <div style={{ fontSize: "10px", color: "tomato" }}>사진변경하지 말아주세요 오류생겨요...😭</div>
        <button>{isLoading ? "가입 중... " : "가입하기"}</button>
      </form>
    </div>
  );
};



const Input = styled.input`
 display: ${(props) => props.file_url ? "none" : ""}; 
`
//1. ?? 위에 132번의 isLoading이 왜 필요한지, 그리고 위에 그걸 state로 만들어놨는데 그게 무슨 의미인지?
// 만일 isLoading을 활용하려면 서버에서 id 중복에 대한 response를 받아와서 위의 isLoading의 스테이트 값으로 묶어놔야함
// 받아서 거기에 값 묶어 놓을 방법 추가해야함.

//2. ?? 위의 83번째줄 navigate가 왜 필요한가요?

//3. !! 비밀번호들 아래 조건들 적을 것.

//4. ?? 그전에 어디에서 계속 리로딩이 일어나셨었는지?

//5. !! 위에 84 네비게이트 위에 alert로 가입 성공! 같은 것 있으면 좋을 듯.
export default Signup;
