import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import Signup from '../page/Signup';

const Header = () => {
  return (
    <Head>   
      <Title>
        <Link to="/" style={{textDecoration:"none", color:"black"}}>
        라떼는 말이야...
        </Link>
      </Title>   
      <Login>로그인</Login>
      <Signin>회원가입</Signin>
    </Head>
  )
}


const Head = styled.div`
position: fixed;
top:0;left:0;width:100%; height:100px;background-color:#ED5B3A;
border-bottom:1px solid #DDD;
`
const Title = styled.h2`
 font-size:1.8rem;
  line-height:49px;
  text-align:center;
`
const Login = styled.div`
position: fixed;
top: 0;
right: 120px;
`
const Signin = styled.div`
position: fixed;
top: 0;
right: 40px;
`

export default Header