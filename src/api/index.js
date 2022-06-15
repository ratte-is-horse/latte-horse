import axios from "axios";
import { getCookie } from "../shared/Cookie";

// Axios Instance를 생성:: 인스턴스를 이용하면 코드 중복을 최소화 할 수 있다.

const api = axios.create({
  baseURL: "http://52.79.226.242",
  // http://localhost:4000
  //http://52.79.226.242
  headers: {
    authorization: `${getCookie("token")}`,
  },
});

// api.interceptors.request.use(
//   function (config) {
//     const accessToken = document.cookie.split("=")[1];
//     config.headers.authorization[X-AUTH-TOKEN] = `BEARER ${accessToken}`;
//     return config;
//   }
// ,
// function (error) {
//     // 요청 에러 직전 호출됩니다.
//     return Promise.reject(error);
// }  // 1. ??!! 이런 방식으로 에러도 잡을 수 있다던데 시간 남으면 테스트 할 것.
// );

// Instance를 생성하고, 여러개의 요청 함수들을 하나의 객체에 넣어서 관리하는 방법도 있습니다!
const apis = {
  //user
  addUser: (newUser) => api.post("/api/user/signup", newUser),
  postLogin: (userdata) => api.post("/api/user/login", userdata),

  //post
  addPost: (contents) => api.post("/api/board/write", contents),
  editPost: (id, contents) => api.post(`/posts/${id}`, contents),
  delPost: (id) => api.delete(`/api/board/${id}`),
  getPosts: () => api.get("/api/boards"),
  getPost: (id) => api.get(`/users/${id}`),

  //
  // addComment: (comments) =>
  //   api.post(`"/api/board/${boardId}/comment/write"`, comments),
  // editComment: (id, comments) => api.post(`/posts/${id}`, comments),
  // delComment: (id) => api.delete(`/users/${id}`),
  // getComments: () => api.get("/users"),
};

export default apis;
