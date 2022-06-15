import { list } from "firebase/storage";
import apis from "../../api/index";

/* ----------------- 모듈의 초기 상태 ------------------ */
let intialstate = {
  list: [],
};
console.log(list);
/* ----------------- 액션 타입 ------------------ */

const LOAD_POST = "post_reducer/LOAD";
const LOAD_ID = "post_reducer/LOAD_Id";
const LOAD_POSTS = "post_reducer/LOAD";
const CREATE_POST = "post_reducer/CREATE";
const UPDATE_POST = "post_reducer/UPDATE";
const REMOVE_POST = "post_reducer/REMOVE";

/* ----------------- 액션 생성 함수 ------------------ */

export function loadPosts(payload) {
  return { type: LOAD_POSTS, payload };
}

export function loadId() {
  return { type: LOAD_ID };
}

export function loadPost() {
  return { type: LOAD_POST };
}

export function createPost(post) {
  console.log("생성중입니다.");
  return { type: CREATE_POST, post };
}

export function updatePost(post_index) {
  return { type: UPDATE_POST, post_index };
}

export function removePost(post_index) {
  return { type: REMOVE_POST, post_index };
}

/* ----------------- 미들웨어 ------------------ */
export const loadPostJson = () => {
  return async function (dispatch) {
    const loadData = await apis.getPosts();
    console.log(loadData.data);

    dispatch(loadPosts(loadData.data));
  };
};

export const loadIdJson = (id) => {
  return async function (dispatch) {
    try {
      const { data } = await apis.getPost(id);
      dispatch(loadId(data));
    } catch (e) {
      console.log("오류");
    }
  };
};

export const loadPostsJson = () => {
  return async function (dispatch) {};
};

export const createPostJson = (post) => {
  return async function (dispatch) {
    // apis
    //       .addPost(post)
    //       .then((res)=>{
    //                 console.log(res)
    //                 dispatch(createPost(res))
    //                 window.alert('등록 성공!')
    //       })
    //       .catch((err)=>{
    //                 window.alert('등록에 실패했습니다.')
    //       })
    dispatch(createPost(post));
  };
};

export const updatePostJson = () => {
  return async function (dispatch) {};
};

export const deletePostJson = () => {
  return async function (dispatch) {};
};
/* ----------------- 리듀서 ------------------ */

export default function Post_reducer(state = intialstate, action) {
  // 새로운 액션 타입 추가시 case 추가한다.

  switch (action.type) {
    case LOAD_POSTS: {
      return { list: action.payload };
    }
    case CREATE_POST: {
      console.log("리듀서 돌리는중이야");
      const new_post_list = [...state.list, action.post];
      console.log(new_post_list);
      return { list: new_post_list };
    }

    default:
      return state;
  }
}
