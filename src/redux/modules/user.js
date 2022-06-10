/* ----------------- 모듈의 초기 상태 ------------------ */
let intialstate = {
  user_list: [],
};

/* ----------------- 액션 타입 ------------------ */

const LOAD_USER = "User_reducer/LOAD_USER";

/* ----------------- 액션 생성 함수 ------------------ */

/* ----------------- 미들웨어 ------------------ */

/* ----------------- 리듀서 ------------------ */

export default function User_reducer(state = intialstate, action) {
  // 새로운 액션 타입 추가시 case 추가한다.

  switch (action.type) {
    case LOAD_USER:
      return { ...state, user_list: action.list };

    default:
      return state;
  }
}
