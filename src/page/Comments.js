import { async } from "@firebase/util";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import apis from "../api";
import { createCommentJson, loadCommentJson } from "../redux/modules/comments";
import { useDispatch, useSelector } from "react-redux";

const Comments = () => {
  const dispatch = useDispatch();
  const commentRef = useRef(null);

  const [comment, setComment] = useState("");

  //코멘트 로드
  const commentReducer = useSelector((state) => state.comment.comment_list);
  console.log(commentReducer);

  useEffect(() => {
    dispatch(loadCommentJson());
  }, [dispatch]);

  //코멘트추가
  const data = {
    comment: comment,
  };
  const newComment = async (e) => {
    e.preventDefault();
    apis
      .addComment(data)
      .then((res) => {
        dispatch(createCommentJson(data));
        window.alert("등록성공");
      })
      .catch((err) => {
        alert("등록실패요");
      });
  };

  return (
    <div>
      <Commentlist>
        <div style={{ margin: "10px 100px" }}>💬</div>
        <Input
          type="text"
          placeholder="댓글을 입력해주세요"
          value={comment}
          onChange={(e) => {
            setComment(e.target.value);
          }}
        ></Input>
        <button onClick={newComment}>등록</button>
        {commentReducer?.map((item, index) => {
          console.log();
          return (
            <div key={index}>
              <Comment>
                {/* <Nickname >{item?.nickname}</Nickname> */}
                <Title>{item?.title}</Title>
              </Comment>
            </div>
          );
        })}
      </Commentlist>
    </div>
  );
};

const Input = styled.input`
  margin: 10px 8px 10px 100px;
  width: 75%;
`;

const Nickname = styled.div`
  border: 1px solid grey;
  width: 20%;
`;
const Content = styled.div`
  border: 1px solid grey;
  width: 40%;
`;
const Title = styled.div`
  border: 1px solid grey;
  width: 80%;
`;

const Commentlist = styled.div`
  border: 1px solid grey;
  width: 80%;
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

export default Comments;
