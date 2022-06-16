import apis from "../../api/index";
/* ----------------- 모듈의 초기 상태 ------------------ */
let intialstate = {
  list: [],
  detail_list: null,

  heart_list: null,
};
/* ----------------- 액션 타입 ------------------ */

const LOAD_DETAIL = "post_reducer/LOAD";
const LOAD_ID = "post_reducer/LOAD_Id";
const LOAD_POSTS = "post_reducer/LOAD";
const CREATE_POST = "post_reducer/CREATE";
const UPDATE_POST = "post_reducer/UPDATE";
const REMOVE_POST = "post_reducer/REMOVE";
// const CREATE_HEART = "post_reducer/CREATE";

/* ----------------- 액션 생성 함수 ------------------ */
export function loadPosts(payload) {
  return { type: LOAD_POSTS, payload };
}
export function loadId() {
  return { type: LOAD_ID };
}
export function loadDetail(loadDetailData) {
  return { type: LOAD_DETAIL, loadDetailData };
}

export function createPost(payload) {
  console.log("생성중입니다.");
  return { type: CREATE_POST, payload };
}
export function updatePost(post_index) {
  return { type: UPDATE_POST, post_index };
}
export function removePost(post_index) {
  return { type: REMOVE_POST, post_index };
}

// export function createHeart(payload) {
//   console.log("생성중입니다.");
//   return { type: CREATE_HEART, payload };
// }

/* ----------------- 미들웨어 ------------------ */
export const loadPostJson = () => {
  return async function (dispatch) {
    const loadData = await apis.getPosts();
    console.log(loadData.data);
    dispatch(loadPosts(loadData.data));
  };
};
// export const loadDetailJson = (payload) => {
//   console.log(payload);
//   return async function (dispatch) {
//     const DetailData = await apis.getDetail(payload.id);
//     console.log(DetailData.data);
//     dispatch(loadDetail(DetailData.data));
//     // dispatch(loadDetail(loadDetailData));
//   };
// };

export const AddHeartJson = () => {
  return async function (dispatch) {
    dispatch();
  };
};

export const createPostJson = (post) => {
  return async function (dispatch) {
    dispatch(createPost(post));
  };
};
export const updatePostJson = () => {
  return async function (dispatch) {};
};
export const deletePostJson = (id) => {
  return async function (dispatch) {
    try {
      console.log(id);
      const deletePost = await apis.delPost(id);
      console.log(deletePost);

      dispatch(removePost(id));
    } catch (e) {
      console.log("오류");
    }
  };
};
/* ----------------- 리듀서 ------------------ */
export default function Post_reducer(state = intialstate, action) {
  // 새로운 액션 타입 추가시 case 추가한다.
  switch (action.type) {
    case LOAD_POSTS: {
      return { list: action.payload.reverse() };

    }
    case CREATE_POST: {
      return { ...state, list: [...state.list, action.payload] };
    }
    case LOAD_DETAIL: {
      return { ...state, detail_list: action.loadDetailData };
    }
    case REMOVE_POST: {
      return state.filter((list) => list.id !== action.id);
    }
    // case CREATE_HEART: {
    //   return { ...state, list: [...state.list, action.payload] };
    // }
    default:
      return state;
  }
}