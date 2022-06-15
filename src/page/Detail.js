import React, { useEffect } from "react";
import Header from "../component/header";
import styled from "styled-components";
import Comments from "./Comments";
import apis from "../api/index";

import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loadCommentJson } from "../redux/modules/comments";
import {
  loadPostJson,
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
  const number = useSelector((store) => store.post.list.id);
  // const post = posts.filter((value) => value.id === id)
  //comment관련
  const comments = useSelector((store) => store.comment.comments);
  // const comment = comments.filter((value)=>value.post_id)===id

  console.log(number);
  const index = number.index - 1;
  console.log(index);
  useEffect(() => {
    dispatch(loadPostJson());
  }, []);

  // //로그인확인  (1. 불필요 예상)
  //   const cookie = getCookie("token");
  //   const [is_cookie, setCookie] = React.useState(false);
  //   React.useEffect(() => {
  //     if (cookie !== undefined) {
  //       return setCookie(true);
  //     }
  //   }, []);

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
      {/* <Comments /> */}
      {/* {is_cookie && posts[index].username==='쿠키속유저네임'?( */}
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
      {/* ):('')} */}
    </div>
  );

  // }
};

// const result = window.confirm("정말 삭제할까요?");
// if (result) {
//   dispatch(deletePostJson(params));
// }
// console.log(params);
// navigate("/");
// }}

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
