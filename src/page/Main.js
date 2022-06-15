<<<<<<< HEAD
import React, { useEffect } from "react";
import Header from "../component/header";
import Card from "../component/card";
import { useDispatch } from "react-redux";
import { loadPostJson } from "../redux/modules/post";
import { useSelector } from "react-redux";
=======
import React from 'react'
import Header from '../component/header';
import { LeftWrap, RightBar, Upperbar } from "../component/view";
>>>>>>> 8250a0c8157a57bf47be40c50d931cfd5c302be1

const Main = () => {
  const dispatch = useDispatch();

  const PostReducer = useSelector((state) => state.Post_reducer.list);
  console.log(PostReducer);

  useEffect(() => {
    dispatch(loadPostJson());
  }, [dispatch]);

  return (
    <>
      <Header />
      {PostReducer?.map((item) => {
        return (
          <>
            <Card item={item} key={item.id} />
          </>
        );
      })}

    </>
  );
};

export default Main;
