// import apis from "../../api/index";
// import { setCookie } from "../../shared/Cookie";

// /* ----------------- 모듈의 초기 상태 ------------------ */
// let intialstate = {
//   user_list: [],
// };

// /* ----------------- 액션 타입 ------------------ */

// /* ----------------- 액션 생성 함수 ------------------ */

// /* ----------------- 미들웨어 ------------------ */

// // // 1. !! signup 페이지에서 비동기 통신을 하기 때문에 이는 불필요, 리듀서에 값을 보낼 필요 없어.
// // export const postUserJson = async (userdata) => {
// //   console.log(userdata);
// //   try {
// //     const response = await apis.postLogin(userdata);
// //     console.log(response);
// //     const AccessToken = response.headers.authorization.split()[0];
// //     // 아래 setCookie를 통해 Cookie 안에 서버로부터 받은 토큰을 저장한다.
// //     console.log(AccessToken);
// //     setCookie("token", AccessToken);
// //     // 위의 setCookie("token", AccessToken) 안의 매겨변수는 "토큰 이름", 토큰값 이다.
// //     console.log("postUserJson 로그인 성공");
// //   } catch (error) {
// //     console.log("postUserJson Error 발생했습니다");
// //   }
// // };

// // export const logoutJson = () => {
// //   deleteCookie("token");
// // };

// /* ----------------- 리듀서 ------------------ */

// export default function User_reducer(state = intialstate, action) {
//   // 새로운 액션 타입 추가시 case 추가한다.

//   switch (action.type) {
//     default:
//       return state;
//   }
// }
