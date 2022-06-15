import React, { useEffect } from "react";
import Header from "../component/header";
import styled from "styled-components";
import Comments from "./Comments";
import apis from "../api/index";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loadCommentJson } from "../redux/modules/comments";
import { loadPostJson, loadIdJson } from "../redux/modules/post";

const Detail = () => {
  const params = useParams();
  const index = params.index - 1;
  const dispatch = useDispatch();
  //post관련

  // 이건 랜더링 이후에만 작동하는 거니 서버연결해서 데이터만 가져올 상황 만들어놔야함.
  useEffect(() => {
    dispatch(loadPostJson());
  }, [dispatch]);

  useEffect(() => {}, []);

  const posts = useSelector((store) => store.post.list);
  // const post = posts.filter((value) => value.id === id)
  //comment관련
  const comments = useSelector((store) => store.comment.comments);
  // const comment = comments.filter((value)=>value.post_id)===id
  console.log(posts);

  // 이건 만약 새로고침 했을 때 가져올 데이터

  ///하트값 어떤식으로 받아오지?

  // if(heart){
  //    return (
  //   <div>
  //     <Header />
  //     <Wrap>
  //       <TitleWrap>
  //         <Title>title {posts[id].title}</Title>
  //         <Nickname>nickname</Nickname>
  //       </TitleWrap>
  //       <Image src={posts[id].url}></Image>
  //       <Content>{posts[id].content}</Content>
  //           <div>❤️</div>
  //     </Wrap>
  //     <Comments />
  //   </div>
  // )
  // }else{
  return (
    <div>
      <Header />
      <Wrap>
        <TitleWrap>
          <Title>title {posts[index].title}</Title>
          <Nickname>nickname</Nickname>
        </TitleWrap>
        <Image src={posts[index].url}></Image>
        <Content>{posts[index].content}</Content>
        <div>🤍</div>
      </Wrap>
      <Comments />
    </div>
  );

  // }
};

const Wrap = styled.div`
  border: 1px solid grey;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const TitleWrap = styled.div`
  width: 40%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const Image = styled.img`
  width: 40%;
`;
const Title = styled.div`
  border: 1px solid grey;
  width: 80%;
`;
const Nickname = styled.div`
  border: 1px solid grey;
  width: 20%;
`;
const Content = styled.div`
  border: 1px solid grey;
  width: 40%;
`;
const Heart = styled.div``;
export default Detail;
