import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../component/header";
import { useDispatch } from "react-redux";
import { loadPostJson } from "../redux/modules/post";
import { useSelector } from "react-redux";

const Detail = () => {
  const { index } = useParams();
  const dispatch = useDispatch();
  console.log(index);
  //
  const Detail_Title = useSelector((state) => state.post.list[index].title);
  const Detail_content = useSelector((state) => state.post.list[index].content);
  const Detail_id = useSelector((state) => state.post.list[index].id);
  const Detail_year = useSelector((state) => state.post.list[index].year);
  const Detail_url = useSelector((state) => state.post.list[index].url);

  console.log(Detail_Title);

  useEffect(() => {
    dispatch(loadPostJson());
  }, []);

  return (
    <>
      <>
        <Header />
        <title>{Detail_Title}</title>
        <div>{Detail_content}</div>
        <div>{Detail_id}</div>
        <div>{Detail_year}</div>
        <img src={`${Detail_url}`} />
      </>
      ;
    </>
  );
};

export default Detail;
