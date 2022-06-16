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
  const [getcomment, setGetcomment] = useState(null);
  console.log(getcomment);
  const boardId = props.id;
  console.log(boardId);
  //코멘트 로드
  //게시물아이디
  const commentReducer = useSelector((state) => state.comment.comment_list);
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(createCommentJson(props.id, comment));
    // setComment("");
  };

  const detailData = async () => {
    const commentdata = await apis.getComments(boardId);
    console.log(commentdata);
    setGetcomment(commentdata);
  };

  useEffect(() => {
    detailData();
  }, []);
  return (
    <div>
      <Commentlist>
        <div style={{ margin: "10px 100px" }}>:말풍선:</div>
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
        {commentReducer?.map((item, index) => {
          console.log();
          return (
            <div key={index}>
              <Comment>
                <Nickname>{item?.nickname}</Nickname>
                <Title>{item?.comment}</Title>
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
