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
  // console.log(Detail);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const getDetaildata = async () => {
    const detailData = await apis.getDetail(id);
    // const commentData = await apis.getComments(id);

    // dispatch(loadCommentJson(commentData.data.body));
    // console.log(commentData.data.body);
    setDetail(detailData.data);
    // setComment(commentData.data.body);
  };

  const getCommentdata = async () => {
    const commentData = await apis.getComments(id);
    dispatch(loadCommentJson(commentData.data.body));
    // console.log(commentData.data.body);
    setComment(commentData.data.body);
  };
  //1. 아래 하트 따로 보내기 존
  const [heart, setHeart] = React.useState(false);
  const onHeart = async (e) => {
    e.preventDefault();
    const heartData = await apis.addheart(id);
    // console.log(heartData.data);
    setHeart(heartData.data);
  };
  useEffect(() => {
    getDetaildata();
  }, [dispatch, heart]);

  useEffect(() => {
    getCommentdata();
  }, []);

  return (
    <>
      <Header />

      <Wrap>
        <img
          src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcW8oAK%2FbtrEU2FQuwe%2FUNUK6A2BvB1knFPLeK6E6K%2Fimg.png"
          style={{ width: "100%" }}
        />
        <TitleWrap>
          <Title> {Detail?.title}</Title>
          <Nickname>Nickname: {Detail?.nickname}</Nickname>
        </TitleWrap>

        <Image src={Detail?.url}></Image>

        <Wrap2>
          <Content>{Detail?.contents}</Content>
          {Detail?.love ? (
            <Heart onClick={onHeart}>❤️</Heart>
          ) : (
            <Heart onClick={onHeart}>🤍</Heart>
          )}
        </Wrap2>
        <Comments
          className="Comments"
          id={Detail?.id}
          getDetaildata={getDetaildata}
        />

        <>
          <Button2
            onClick={() => {
              const result = window.confirm("정말 삭제할까요?");
              if (result) {
                // console.log(id);
                dispatch(deletePostJson(id));

                // console.log(id);
                navigate("/");
              }
            }}
          >
            삭제하기
          </Button2>
        </>
      </Wrap>
    </>
  );
};

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: black;
  margin: 15% auto;

  width: 80%;
  background-color: wheat;
`;
const Wrap2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;
const Title = styled.div`
  margin-top: 20px;
  margin-bottom: 10px;
  margin-left: 60px;
  width: 60%;
  color: black;
`;

const Inputbox = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 10px;
  width: 90%;
  height: 30%;
`;
const Button2 = styled.button`
  padding: 3px;
  margin-bottom: 20px;
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

const Nickname = styled.div`
  font-family: inherit;
  width: 40%;
`;
const Content = styled.div`
  margin: 20px 0;
  width: 500px;
  text-align: center;
`;
const Section = styled.div`
  padding-top: 50px;
  padding-bottom: 10px;
`;
const Heart = styled.div`
  width: 8%;
  cursor: pointer;
`;
export default Detail;
