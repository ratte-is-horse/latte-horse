import axios from "axios";
import apis from "../../api/index";

/* ----------------- 모듈의 초기 상태 ------------------ */
let intialstate = {
  user_list: [],
};

/* ----------------- 액션 타입 ------------------ */

const LOAD_USER = "user_reducer/LOAD_USER";
const CREATE_USER = "user_reducer/CREATE";
const UPDATE_USER = "user_reducer/UPDATE";
const REMOVE_USER = "user_reducer/REMOVE";

/* ----------------- 액션 생성 함수 ------------------ */
export function loadUser() {
  return { type: LOAD_USER };
}

export function createUser(payload) {
  console.log("등록확인");
  return { type: CREATE_USER, payload };
}

export function updateUser(user) {
  return { type: UPDATE_USER, user };
}

export function removeUser(user) {
  return { type: REMOVE_USER, user };
}

/* ----------------- 미들웨어 ------------------ */
export const loadUserJson = () => {
  return async function (dispatch) {};
};
export const createUserJson = (user) => {
  return async function (dispatch) {
    const req = await apis.addUser(user);
    dispatch(createUser(req));
  };
};

export const updateUserJson = () => {
  return async function (dispatch) {};
};

export const deleteUserJson = () => {
  return async function (dispatch) {};
};

/* ----------------- 리듀서 ------------------ */

export default function User_reducer(state = intialstate, action) {
  // 새로운 액션 타입 추가시 case 추가한다.

  switch (action.type) {
    case LOAD_USER:
      return { ...state, user_list: action.list };

    case CREATE_USER:
      return { ...state, user_list: action.payload };

    default:
      return state;
  }
}
