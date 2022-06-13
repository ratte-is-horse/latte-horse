import React from "react";
import { Button } from 'react-bootstrap';

const Post = () => {
  return (
    <form >
      <input type="file" name="profile_files" multiple="multiple" />
      <div>제목<input type="text"/></div>
      <div>내용<input type="text"/></div>


      <button type="submit">제출</button>
    </form>
  )
};

export default Post;
