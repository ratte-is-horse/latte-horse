import React, { useState } from "react";
import { Link } from "react-router-dom";
import apis from "../api";

const Card = ({ item, id }) => {
  // const PostReducer = useSelector((state) => state.Post_reducer.list);
  // console.log(PostReducer);
  const [heart, setHeart] = useState(false);

  const onHeart = async (e) => {
    e.preventDefault();
    const heartData = await apis.addheart(item.id);
    console.log(heartData.data);
    // dispatch(AddHeartJson(heartData.data))
    setHeart(heartData.data);
  };

  return (
    <div>
      <title>{item?.title}</title>
      <div>{item?.contents}</div>
      <div>{item?.id}</div>
      <div>{item?.year}</div>
      <button onClick={onHeart}>좋아요</button>
      {heart ? <div>❤</div> : <div>❌</div>}
      <div></div>
      <div></div>
      <Link to={`/detail/${item?.id}`}>
        <img src={`${item?.url}`} />
      </Link>
    </div>
  );
};

export default Card;
