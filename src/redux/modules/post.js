/* ----------------- 모듈의 초기 상태 ------------------ */
let intialstate = {
  post_list: [],
};

/* ----------------- 액션 타입 ------------------ */

const LOAD_POST = "post_reducer/LOAD_POST";

/* ----------------- 액션 생성 함수 ------------------ */

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
