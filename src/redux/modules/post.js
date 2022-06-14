import apis from "../../api/index";

/* ----------------- 모듈의 초기 상태 ------------------ */
let intialstate = {
  list:[

  ]
};

/* ----------------- 액션 타입 ------------------ */

const LOAD_POST = "post_reducer/LOAD";
const LOAD_POSTS = "post_reducer/LOAD";
const CREATE_POST = "post_reducer/CREATE";
const UPDATE_POST = "post_reducer/UPDATE";
const REMOVE_POST = "post_reducer/REMOVE";

/* ----------------- 액션 생성 함수 ------------------ */
export function loadPost(post_list) {
  return { type: LOAD_POST ,post_list};
}

export function loadPosts() {
  return { type: LOAD_POSTS };
}

export function createPost(post) {
  console.log("생성중입니다.")
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

  };
};
export const loadPostsJson = () => {
  return async function (dispatch) {

  };
};
export const createPostJson = (post) => {
  return async function (dispatch) {
    apis
          .addPost(post)
          .then((res)=>{
                    console.log(res)
                    dispatch(createPost(res))
                    window.alert('등록 성공!')
          })
          .catch((err)=>{
                    window.alert('등록에 실패했습니다.')
          })
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
    case "post_reducer/LOAD":
      {
        return { ...state, post_list: action.list };
      }
    case "post_reducer/CREATE": 
    {
      console.log('리듀서 돌리는중이야')
      const new_post_list = [...state.list, action.post]
    }
    
    default:
      return state;
  }
}
