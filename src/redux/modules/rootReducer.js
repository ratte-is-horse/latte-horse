import { combineReducers } from "redux";
import Post_reducer from "./post";

const rootReducer = combineReducers({
  post: Post_reducer,
});

//아 user_reducer를 사용 안 하고 거기서 미들웨어만 사용하니 그래도 문제없이 굴러간다.

export default rootReducer;
