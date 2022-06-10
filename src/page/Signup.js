import React from "react";
import {Link } from 'react-router-dom'


const Signup = () => {
  const id_ref = React.useRef(null);
  const name_ref = React.useRef(null);
  const pw_ref = React.useRef(null);
  const pw2_ref = React.useRef(null);
  const nickname_ref = React.useRef(null);

  //미들웨어
  // const signupFB = async () => {
  //   const username = id_ref.current.value
  //   const nickname= nickname_ref.current.value
  //   const password = pw_ref.current.value
  //    const password2 = pw2_ref.current.value


  //   const user = await createUserWithEmailAndPassword(
  //     auth,
  //     __id,
  //     __pw
  //   );
  //   console.log(user);




  return <div>
      아이디(메일) : <input ref={id_ref} /> <br />
      비밀번호 : <input ref={pw_ref} /><br />
      비밀번호 재확인 : <input ref={pw2_ref}></input><br />
      닉네임 : <input ref={nickname_ref}/><br />
      <Link to="/"><button>회원가입</button></Link>
  
  </div>;
};

export default Signup;
