import React from 'react'
import styled from "styled-components";

const Comments = () => {
  return (
    <div>
      <Commentlist>
        <div style={{ margin: "10px 100px" }}>💬</div>
        <Comment>
          <Nickname >닉네임</Nickname>
          <Title>댓글 내용 야루이ㅣㅣ</Title>
        </Comment>
        <Comment>
          <Nickname>닉네임</Nickname>
          <Title>댓글 내용 야루이ㅣㅣ</Title>
        </Comment>
        <Comment>
          <Nickname>닉네임</Nickname>
          <Title>댓글 내용 야루이ㅣㅣ</Title>
        </Comment>
      </Commentlist>
    </div>
  )
}
const Nickname = styled.div`
border: 1px solid grey;
width: 20%;
`
const Content = styled.div`
border: 1px solid grey;
width: 40%;
`
const Title = styled.div`
border: 1px solid grey;
width: 80%;
`

const Commentlist = styled.div`
border: 1px solid grey;
width: 80%;
`

const Comment = styled.div`
border: 1px solid grey;
width: 80%;
margin: auto;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
`

export default Comments