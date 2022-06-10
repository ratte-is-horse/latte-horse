import React from "react";
import {Link } from 'react-router-dom'


const Signup = () => {
  const id_ref = React.useRef(null);
  const name_ref = React.useRef(null);
  const pw_ref = React.useRef(null);
  const nickname_ref = React.useRef(null);

  //미들웨어
  // const signupFB = async () => {
  //   const __id = id_ref.current.value
  //   const __name = name_ref.current.value
  //   const __pw = pw_ref.current.value


  //   const user = await createUserWithEmailAndPassword(
  //     auth,
  //     __id,
  //     __pw
  //   );
  //   console.log(user);




  return <div>
      아이디(메일) : <input ref={id_ref} /> <br />
      이름 : <input ref={name_ref} /> <br />
      비밀번호 : <input ref={pw_ref} />
      비밀번호 재확인 : <input></input>
      닉네임 : <input></input>
      <Link to="/"><button>회원가입</button></Link>
  
  </div>;
};

export default Signup;
