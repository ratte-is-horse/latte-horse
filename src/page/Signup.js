import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { createUserJson } from '../redux/modules/user';
import apis from "../api/index";


const Signup = (props) => {

  const dispatch = useDispatch();
  const [Username, setUsername] = useState(" ")
  const [Password, setPassword] = useState(" ")
  const [Password2, setPassword2] = useState(" ")
  const [Nickname, setNickname] = useState(" ")
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const onUsernameHandler = (event) => {
    setUsername(event.target.value)
  }
  const onPasswordHandler = (event) => {
    setPassword(event.target.value)
  }
  const onPassword2Handler = (event) => {
    setPassword2(event.target.value)
  }
  const onNicknameHandler = (event) => {
    setNickname(event.target.value)
  }


  const onSubmitUserHandler = async (event) => {

    let data = {
      username: Username,
      password: Password,
      password2: Password2,
      nickname: Nickname
    }
    console.log(data)

    event.preventDefault();
  
      dispatch(createUserJson(
        {
          username: Username,
          password: Password,
          password2: Password2,
          nickname: Nickname
        }
      ))
        // .then(res => {
        //   //redux로 가져올 경우 payload, axios로 바로 가져올 경우 data
        //   if (res.data.success) {
        //     props.navigate("/");
        //   } else {
        //     alert(res.data.err);
        //   }
        // })
    // } catch (error) {
    //   alert("Error가 발생했습니다.");
    //   setError(error);
    // }

    // //비밀번호와 비밀번호 확인 같을띠 회원가입 되게 함
    // if (Password !== Password2) {
    //   return alert('비밀번호와 비밀번호 확인은 같아야 합니다.')
    // }   //여기서 걸리면 아래로 못감 

  }

  return <div>
    <form onSubmit={onSubmitUserHandler}>
      아이디 : <input type="text" placeholder="아이디를 입력하세요" value={Username} onChange={onUsernameHandler} /> <br />
      비밀번호 : <input type="password" value={Password} onChange={onPasswordHandler} /><br />
      비밀번호 재확인 : <input type="password" value={Password2} onChange={onPassword2Handler}></input><br />
      닉네임 : <input type="text" placeholder='예전 느낌 살려서! 큰거온다!!!' value={Nickname}
        onChange={onNicknameHandler} /><br />
      <button>{isLoading ? "가입 중... " : "가입하기"}</button>
    </form>
  </div>;
};

export default Signup;
