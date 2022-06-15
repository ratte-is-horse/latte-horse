import React, { useEffect } from "react";
import Header from "../component/header";
import styled from "styled-components";
import Comments from "./Comments";
import apis from "../api/index";

import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loadCommentJson } from "../redux/modules/comments";
import {
  loadDetailJson,
  loadIdJson,
  deletePostJson,
  updatePostJson,
} from "../redux/modules/post";

//로그인확인 (1.이 부분 헤더 때문에 필요없을 걸로 예상)
// import { getCookie } from "../shared/Cookie";
// import { deleteCookie } from "../shared/Cookie";

const Detail = () => {
  const id = useParams();
  console.log(id);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //post관련
  const posts = useSelector((store) => store.post.list);
  // const number = useSelector((store) => store.post.list.id);
  // const post = posts.filter((value) => value.id === id)
  //comment관련
  const comments = useSelector((store) => store.comment.comments);
  // const comment = comments.filter((value)=>value.post_id)===id

  // console.log(number);
  const index = id.index - 1;
  console.log(index);
  useEffect(() => {
    dispatch(loadDetailJson(Number(id)));
  }, [dispatch]);

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

      <>
        <button
          onClick={() => {
            const result = window.confirm("정말 삭제할까요?");
            if (result) {
              dispatch(deletePostJson(id));

              console.log(id);
              navigate("/");
            }
          }}
        >
          삭제하기
        </button>
        <button>수정하기</button>
      </>
    </div>
  );
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
