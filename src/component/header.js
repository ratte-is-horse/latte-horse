import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import '../App.css';

const Header = () => {
  return (
    <>
    <Head>   
      <Title>
        <Link to="/" className='link'> 라떼는 말이야... </Link>
      </Title>   
     <Link to="/login" className='link'> <Login>로그인</Login></Link>
      <Link to = "/signup" className='link'><Signin>회원가입</Signin></Link>
    {/* 로그인시에만 아래에 버튼 보이게 해야해 */}
      {/*  <Link to="/" className='link'> <Logout>로그아웃</Logout> </Link>*/}
    </Head>
    <Empty/>
    </>
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
top: 10px;
right: 120px;
`
const Signin = styled.div`
position: fixed;
top: 10px;
right: 40px;
`
const Empty = styled.div`
padding-top: 100px; padding-bottom: 10px;
`
const Logout = styled.div`
position: fixed;
top: 10px;
right: 40px;
`

export default Header