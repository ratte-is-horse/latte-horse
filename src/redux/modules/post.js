import apis from "../../api/index";

/* ----------------- 모듈의 초기 상태 ------------------ */
let intialstate = {
};

/* ----------------- 액션 타입 ------------------ */

const LOAD_POST = "post_reducer/LOAD";
const LOAD_POSTS = "post_reducer/LOAD";
const CREATE_POST = "post_reducer/CREATE";
const UPDATE_POST = "post_reducer/UPDATE";
const REMOVE_POST = "post_reducer/REMOVE";

/* ----------------- 액션 생성 함수 ------------------ */
export function loadPost() {
  return { type: LOAD_POST };
}

export function loadPosts() {
  return { type: LOAD_POSTS };
}

export function createPost(post) {
  return { type: CREATE_POST, post };
}

export function updatePost(post) {
  return { type: UPDATE_POST, post };
}

export function removePost(post) {
  return { type: REMOVE_POST, post };
}

/* ----------------- 미들웨어 ------------------ */
export const loadPostJson = () => {
  return async function (dispatch) {};
};
export const loadPostsJson = () => {
  return async function (dispatch) {};
};
export const createPostJson = (user) => {
  return async function (dispatch) {};
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
    case LOAD_POST:
      return { ...state, post_list: action.list };

    default:
      return state;
  }
}
