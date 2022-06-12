import React from "react";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import apis from "../api";

const Login = () => {
  const id_ref = useRef(null);
  const password_ref = useRef(null);

  const onLoginClick = async (event) => {
    event.preventDefault();
    // console.log(id_ref.current.value);
    const data = await apis.addPost({
      name: id_ref.current.value,
      password: password_ref.current.value,
    });
    console.log(data);
  };

  return (
    <>
      <div>로그인페이지</div>
      <input type="text" ref={id_ref}></input>
      <input type="password" ref={password_ref}></input>
      <button onClick={onLoginClick}>로그인</button>
    </>
  );
};

export default Login;
