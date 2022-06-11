import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { createUserJson } from '../redux/modules/user';
import apis from "../api/index";


const Signup = (props) => {

  const navigate =useNavigate()
  const dispatch = useDispatch();
  const [Username, setUsername] = useState("")
  const [Password, setPassword] = useState("")
  const [Password2, setPassword2] = useState("")
  const [Nickname, setNickname] = useState("")
  const [error, setError] = useState();
  const [pwcheck, setPwCheck] = React.useState('');

  const [isLoading, setIsLoading] = useState(false);

  const password = React.useRef();
  const password2 = React.useRef();
  const check = React.useRef();

  if (Password && Password2 && Password === Password2) {
    check.current.innerText = '✔️';
  } else if (Password !== Password2) {
    check.current.innerText = '❌';
  }

  // const onUsernameHandler = (event) => {
  //   setUsername(event.target.value)
  // }
  // const onPasswordHandler = (event) => {
  //   setPassword(event.target.value)
  // }
  // const onPassword2Handler = (event) => {
  //   setPassword2(event.target.value)
  // }
  // const onNicknameHandler = (event) => {
  //   setNickname(event.target.value)
  // }

  //아이디,비번,닉네임 정규식
  const idCheck = (id) => {
    let regExp = /^[0-9a-zA-Z]{4,}$/;
    // 대문자 포함
    return regExp.test(id)
  }
  const pwCheck = (id) => {
    let regExp = /^[0-9a-zA-Z]{8,}$/;
    // 대문자 포함
    return regExp.test(id)
  }
  const nickCheck = (nick) => {
    let regExp = /^[a-zA-Z0-9ㄱ-ㅎ|ㅏ-ㅣ|가-힣!@#$%^&*]{8,20}$/;

    return regExp.test(nick)
  }

  //submit handler
  const onSubmitUserHandler = async (event) => {
    event.preventDefault();
    if (Username === '' || Password === '' || Password2 === '' || Nickname === '') {
      window.alert('아이디,비밀번호,닉네임을 모두 입력해주세요!');
      return;
    }

    if (!idCheck(Username)) {
      window.alert('형식을 지켜주세요.');
      return;
    }
    if (!pwCheck(Password, Password2)) {
      window.alert('숫자 및 영어만 입력가능합니다.');
      return;
    }
    if (Password !== Password2) {
      window.alert('비밀번호 불일치 : 고새 까먹었어?');
      return;
    }

    if (!nickCheck(Nickname)) {
      window.alert('올바른 닉네임 형식을 작성해주세요');
      return;
    }

    dispatch(createUserJson(
      {
        username: Username,
        password: Password,
        password2: Password2,
        nickname: Nickname
      }
    ))
    navigate('/login')
  }

  return <div>
    <form onSubmit={onSubmitUserHandler}>
      아이디 :
      <input
        type="text"
        placeholder="아이디를 입력하세요"
        value={Username}
        onChange={(event) => {
          setUsername(event.target.value)
        }}
      />
      <br />
      비밀번호 :
      <input
        type="password"
        placeholder="비밀번호를 입력하세요"
        value={Password}
        onChange={(event) => {
          setPassword(event.target.value)
        }}
        ref={password} />
      <br />
      비밀번호 재확인 :
      <input
        type="password"
        placeholder="비밀번호를 재입력하세요"
        value={Password2}
        onChange={(event) => {
          setPassword2(event.target.value)
        }}
        ref={password2} />
      <p ref={check} />
      <br />
      닉네임 :
      <input
        type="text"
        placeholder='예전 느낌 살려서! 큰거온다!!!'
        value={Nickname}
        onChange={(event) => {
          setNickname(event.target.value)
        }} />
      <br />
     <button>{isLoading ? "가입 중... " : "가입하기"}</button>
    </form>
  </div>;
};

export default Signup;
