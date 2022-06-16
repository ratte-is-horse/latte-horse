import apis from "../../api/index";

/* ----------------- 모듈의 초기 상태 ------------------ */
let intialstate = {
  comment_list: [],
};

/* ----------------- 액션 타입 ------------------ */

const LOAD_COMMENT = "comment_reducer/LOAD";
const CREATE_COMMENT = "comment_reducer/CREATE";
const UPDATE_COMMENT = "comment_reducer/UPDATE";
const REMOVE_COMMENT = "comment_reducer/REMOVE";

/* ----------------- 액션 생성 함수 ------------------ */
export function loadComment(comment) {
  return { type: LOAD_COMMENT, comment };
}

export function createComment(comment) {
  return { type: CREATE_COMMENT, comment };
}

export function updateComment(comment, id) {
  return { type: UPDATE_COMMENT, comment, id };
}

export function removeComment(comment) {
  return { type: REMOVE_COMMENT, comment };
}

/* ----------------- 미들웨어 ------------------ */
export const loadCommentJson = (comment) => {
  return async function (dispatch) {
      dispatch(loadComment(comment))
  };
};
export const createCommentJson = (id, comment) => {
  return async function (dispatch) {
    try{const data = await apis.addComment(id, {comment:comment})
    console.log(data)
    const commentData = {...comment}
    dispatch(createComment(commentData))
  }
    catch(e){
      console.log('댓글 등록실패')
    }
  };
};

export const updateCommentJson = (comment) => {
  return async function (dispatch) {

  };
};

export const deleteCommentJson = () => {
  return async function (dispatch) { };
};

/* ----------------- 리듀서 ------------------ */

export default function Comment_reducer(state = intialstate, action) {
  // 새로운 액션 타입 추가시 case 추가한다.

  switch (action.type) {
    case LOAD_COMMENT:
      return {
        comment_list: [...action.comment],
      };

    case CREATE_COMMENT:
      return {...state, comment_list: [...state.list, action.comment]}
    default:
      return state;
  }
}
