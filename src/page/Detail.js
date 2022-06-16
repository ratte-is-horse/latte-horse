import React, { useEffect, useState } from "react";
import Header from "../component/header";
import styled from "styled-components";
import Comments from "./Comments";
import apis from "../api/index";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loadCommentJson } from "../redux/modules/comments";
import { deletePostJson } from "../redux/modules/post";
const Detail = () => {
  let { id } = useParams();
  // console.log(id);
  const [Detail, setDetail] = useState(null);
  const [Comment,setComment] =useState(null)
  console.log(Detail);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const getDetaildata = async () => {
    const detailData = await apis.getDetail(id);
    const commentData = await apis.getComments(id);

    dispatch(loadCommentJson(commentData.data.body))
    console.log(commentData.data.body);
    setDetail(detailData.data);
    setComment(commentData.data.body)
  };

  // const getComment = async () => {
  //   const commentData = await apis.getComments(id);
  //   console.log(commentData.data);
  //   setDetail(commentData.data);
  // };

  useEffect(() => {
    getDetaildata();
  }, [dispatch]);


  return (
    <div>
      <Header />
      <Section/>
      <Wrap>
        <TitleWrap>
          <Title> {Detail?.title}</Title>
          <Nickname>{Detail?.nickname}</Nickname>
        </TitleWrap>
        <Image src={Detail?.url}></Image>
        <Content>{Detail?.content}</Content>
        <div>:흰색_하트:</div>
      </Wrap>
      <Comments id={Detail?.id} getDetaildata={getDetaildata} />

      <>
        <button
          onClick={() => {
            const result = window.confirm("정말 삭제할까요?");
            if (result) {
              console.log(id);
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
const Section = styled.h1`
  padding-top: 50px; padding-bottom: 10px;
`;

export default Detail;
