import React, { useEffect } from "react";
import Header from "../component/header";
import Card from "../component/card";
import { useDispatch } from "react-redux";
import { loadPostJson } from "../redux/modules/post";
import { useSelector } from "react-redux";


const Main = () => {
  const dispatch = useDispatch();

  const PostReducer = useSelector((state) => state.post.list);
  console.log(PostReducer.id);

  useEffect(() => {
    dispatch(loadPostJson());
  }, [dispatch]);

  return (
    <>
      <Header />
      {PostReducer?.map((item, index) => {
        console.log(item.id)
        return (
          <div key={index}>
            <Card
              item={item}

              
            />
          </div>
        );
      }
      )
      }

    </>
  );
};

export default Main;
