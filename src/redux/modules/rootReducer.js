import { combineReducers } from "redux";
import Post_reducer from "./post";
import User_reducer from "./user";

const rootReducer = combineReducers({
  post: Post_reducer,
  user: User_reducer,
});

export default rootReducer;
