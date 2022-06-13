import React from "react";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import { useDispatch } from "react-redux/es/exports";
import { postUserJson } from "../redux/modules/user";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const id_ref = useRef(null);
  const password_ref = useRef(null);

  const onLogin = (event) => {
    event.preventDefault(); //1. !!아마 왼쪽꺼 필요없는 걸로 암.
    console.log(id_ref.current.value);
    dispatch(
      postUserJson({
        username: id_ref.current.value,
        password: password_ref.current.value,
      })
    );
    console.log(id_ref.current.value);
  };

  return (
    <>
      <div>로그인페이지</div>
      <form onSubmit={onLogin}>
        <input type="text" ref={id_ref}></input>
        <input type="password" ref={password_ref}></input>
        <button type="submit">로그인</button>
      </form>
    </>
  );
};

// const onLoginClick = async (event) => {
//   event.preventDefault();
//   // console.log(id_ref.current.value);
//   const data = await apis.addPost({
//     username: id_ref.current.value,
//     password: password_ref.current.value,
//   });
//   console.log(data);
// };

export default Login;
