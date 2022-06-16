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
  console.log(Detail);
  const getDetaildata = async () => {
    const detailData = await apis.getDetail(id);
    console.log(detailData.data);
    setDetail(detailData.data);
  };
  useEffect(() => {
    getDetaildata();
  }, []);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div>
      <Header />
      <Wrap>
        <TitleWrap>
          <Title> {Detail?.title}</Title>
          <Nickname>{Detail?.nickname}</Nickname>
        </TitleWrap>
        <Image src={Detail?.url}></Image>
        <Content>{Detail?.content}</Content>
        <div>🤍</div>
      </Wrap>
      <Comments id={Detail?.id} />

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
const Heart = styled.div``;
export default Detail;
