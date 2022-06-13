import apis from "../../api/index";
import { setCookie } from "../../shared/Cookie";
/* ----------------- 모듈의 초기 상태 ------------------ */
let intialstate = {
  user_list: [],
};

/* ----------------- 액션 타입 ------------------ */

const LOAD_USER = "user_reducer/LOAD_USER";
// const CREATE_USER = "user_reducer/CREATE";
// 1. 리듀서로 회원가입 정보 보낼 필요 없으니 불필요.
const UPDATE_USER = "user_reducer/UPDATE";
const REMOVE_USER = "user_reducer/REMOVE";

/* ----------------- 액션 생성 함수 ------------------ */
export function loadUser() {
  return { type: LOAD_USER };
}

// export function createUser(payload) {
//   console.log("등록확인");
//   return { type: CREATE_USER, payload };
// }
//  1. 리듀서로 회원가입 정보 보낼 필요 없으니 불필요.
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
// export const createUserJson = (user) => {
//   return async function (dispatch) {
//     const req = await apis.addUser(user);
//     dispatch(createUser(req));
//   };
// };
// 1. !! signup 페이지에서 비동기 통신을 하기 때문에 이는 불필요, 리듀서에 값을 보낼 필요 없어.
export const postUserJson = async (userdata) => {
  console.log(userdata);
  try {
    const response = await apis.postLogin(userdata);
    console.log(response);
    const AccessToken = response.headers.authorization.split("")[1];
    // 아래 setCookie를 통해 Cookie 안에 서버로부터 받은 토큰을 저장한다.
    console.log(AccessToken);
    setCookie("token", AccessToken);
    // 위의 setCookie("token", AccessToken) 안의 매겨변수는 "토큰 이름", 토큰값 이다.
    console.log("postUserJson 로그인 성공");
  } catch (error) {
    console.log("postUserJson Error 발생했습니다");
  }
};
//userdata
// export const loginCheckJson = async () => {
//   try {
//     const LoginCheck = await apis.getLoiginCheck();
//   } catch (error) {
//     console.log("loginCheckJson 실패");
//   }
// };

// export const logoutJson = () => {
//   deleteCookie("token");
// };

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

    // case CREATE_USER:
    //   return { ...state, user_list: action.payload };
    //  1. 리듀서로 회원가입 정보 보낼 필요 없으니 불필요.

    default:
      return state;
  }
}
