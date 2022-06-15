import React, { useEffect } from "react";
import Header from '../component/header';
import styled from "styled-components";
import Comments from './Comments'
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loadCommentJson } from '../redux/modules/comments'
import { loadPostJson, loadIdJson } from '../redux/modules/post'

const Detail = (props) => {

  const [is_login, setIsLogin] = React.useState(false);
  const [is_user, setIsUser] = React.useState(false);

  const { id } = useParams()
  const dispatch = useDispatch()
  //post관련
  const posts = useSelector((store) => store.post.list)
  const post = posts.filter((value) => value.id === id)
  //comment관련
  const comments = useSelector((store) => store.comment.comments);
  // const comment = comments.filter((value)=>value.post_id)===id
  console.log(post)

  console.log(id)

  useEffect(() => {
    dispatch(loadPostJson());
    dispatch(loadIdJson(id))
    dispatch(loadCommentJson(id))
  }, [id])






  return (
    <div>
      <Header />
      <Wrap>
        <TitleWrap>
          <Title>title ({post.title})</Title>
          <Nickname>nickname({post.nickname})</Nickname>
        </TitleWrap>
        <Image src="https://firebasestorage.googleapis.com/v0/b/latte-horse.appspot.com/o/addimages%2F%EB%A9%A7%EB%8F%8C.jpg?alt=media&token=d3e00825-d8f7-4ff0-aae5-2958b8c2d383"></Image>
        <Content>이자리는 내용이 들어갈 자리야</Content>
        <div>🤍or❤️</div>
      </Wrap>
      <Comments />

    </div>
  )

};

const Wrap = styled.div`
border: 1px solid grey;
width: 80%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
const TitleWrap = styled.div`
width: 40%;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
`
const Image = styled.img`
width: 40%;
`
const Title = styled.div`
border: 1px solid grey;
width: 80%;
`
const Nickname = styled.div`
border: 1px solid grey;
width: 20%;
`
const Content = styled.div`
border: 1px solid grey;
width: 40%;
`

export default Detail;
