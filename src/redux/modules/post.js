/* ----------------- 모듈의 초기 상태 ------------------ */
let intialstate = {
  post_list: [],
};

/* ----------------- 액션 타입 ------------------ */

const LOAD_POST   = 'post_reducer/LOAD';
const CREATE_POST  = 'post_reducer/CREATE';
const UPDATE_POST  = 'post_reducer/UPDATE';
const REMOVE_POST  = 'post_reducer/REMOVE';

/* ----------------- 액션 생성 함수 ------------------ */
export function loadPost() {
  return { type: LOAD };
}

export function createPost(post) {
  return { type: CREATE, post };
}

export function updatePost(post) {
  return { type: UPDATE, post };
}

export function removePost(post) {
  return { type: REMOVE, post };
}

/* ----------------- 미들웨어 ------------------ */

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
