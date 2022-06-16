import { async } from "@firebase/util";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import apis from "../api";
import { createCommentJson, loadCommentJson } from "../redux/modules/comments";
import { loadPostJson } from "../redux/modules/post";
import { useDispatch, useSelector } from "react-redux";

const Comments = (props) => {
  const dispatch = useDispatch();
  const [comment, setComment] = useState("");
  //게시물아이디
  const boardId = props.id;
  // console.log(boardId);
  //코멘트 로드

  // const detailData =async()=> await apis.getComments(boardId);

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(createCommentJson(props.id, comment));
  };

  useEffect((dispatch) => {
    props.getDetaildata();
  }, []);

  const commentReducer = useSelector((state) => state.comment.comment_list);

  return (
    <div>
      <Commentlist>
        <Wrap>
          <div style={{ margin: "10px" }}>💬</div>

          <div>
            <Input
              type="text"
              placeholder="댓글을 입력해주세요"
              value={comment}
              onChange={(e) => {
                setComment(e.target.value);
              }}
            ></Input>

            <button type="submit" onClick={onSubmit}>
              등록
            </button>
          </div>
        </Wrap>
        {commentReducer?.map((item, index) => {
          // console.log();
          return (
            <div key={index}>
              <Comment>
                <Nickname>{item?.userNickname}</Nickname>
                <Title>{item?.comment}</Title>
              </Comment>
            </div>
          );
        })}
      </Commentlist>
    </div>
  );
};
const Wrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 600px;
`;
const Input = styled.input`
  width: 400px;
`;
const Nickname = styled.div`
  border: 1px solid grey;
  width: 20%;
`;
const Content = styled.div`
  border: 1px solid grey;
  width: 70%;
`;
const Title = styled.div`
  border: 1px solid grey;
  width: 80%;
`;
const Commentlist = styled.div`
  text-align: center;
  width: 600px;
  margin: 20px 0;
`;
const Comment = styled.div`
  border: 1px solid grey;
  width: 80%;
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Section = styled.h1`
  padding-top: 50px;
  padding-bottom: 10px;
`;
export default Comments;
