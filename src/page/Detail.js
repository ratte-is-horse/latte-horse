import React, { useEffect, useState } from "react";
import Header from "../component/header";
import styled from "styled-components";
import Comments from "./Comments";
import apis from "../api/index";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loadCommentJson } from "../redux/modules/comments";
import { deletePostJson } from "../redux/modules/post";
import "../style.css";
const Detail = () => {
  let { id } = useParams();
  // console.log(id);
  const [Detail, setDetail] = useState(null);
  const [Comment, setComment] = useState(null);
  console.log(Detail);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const getDetaildata = async () => {
    const detailData = await apis.getDetail(id);
    const commentData = await apis.getComments(id);

    dispatch(loadCommentJson(commentData.data.body));
    console.log(commentData.data.body);
    setDetail(detailData.data);
    // setComment(commentData.data.body);
  };
  //1. 아래 하트 따로 보내기 존
  const [heart, setHeart] = React.useState(false);

  const onHeart = async (e) => {
    e.preventDefault();
    const heartData = await apis.addheart(id);
    console.log(heartData.data);
    setHeart(heartData.data);
  };
  useEffect(() => {
    getDetaildata();
  }, [dispatch, heart]);

  return (
    <>
      <Header />
      <Section />
      <Wrap>
        <TitleWrap>
          <Title> {Detail?.title}</Title>
          <Nickname>{Detail?.nickname}</Nickname>
        </TitleWrap>

        <Image src={Detail?.url}></Image>
        <Content>{Detail?.contents}</Content>
        <div>:흰색_하트:</div>

        <Comments
          className="Comments"
          id={Detail?.id}
          getDetaildata={getDetaildata}
        />

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
          {Detail?.love ? (
            <Heart onClick={onHeart}>❤️</Heart>
          ) : (
            <Heart onClick={onHeart}>🤍</Heart>
          )}
        </>
      </Wrap>
    </>
  );
};
const Wrap = styled.div`
  border: 1px solid grey;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  /* background-color: white; */
`;
const TitleWrap = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const Image = styled.img`
  width: 90%;
  margin: 20px 10px 40px;
`;
const Title = styled.div`
  border: 1px solid grey;
  width: 50%;
`;
const Nickname = styled.div`
  border: 1px solid grey;
  width: 20%;
`;
const Content = styled.div`
  border: 1px solid grey;
  width: 90%;
`;

const Section = styled.h1`
  padding-top: 50px;
  padding-bottom: 10px;
`;

const Heart = styled.h2`
  width: 8%;
  cursor: pointer;
`;

export default Detail;
