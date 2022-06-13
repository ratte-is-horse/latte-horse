import axios from "axios";

// Axios Instance를 생성:: 인스턴스를 이용하면 코드 중복을 최소화 할 수 있다.

const api = axios.create({
  baseURL: "http://localhost:4000",
  // http://localhost:4000
  //http://52.79.226.242
});

// Instance를 생성하고, 여러개의 요청 함수들을 하나의 객체에 넣어서 관리하는 방법도 있습니다!
const apis = {
  //user
  addUser: (newUser) => api.post("/api/user/signup", newUser),
  postLogin: (userdata) => api.post("/api/user/login", userdata),

  //post
  addPost: (contents) => api.post("/users", contents),
  editPost: (id, contents) => api.post(`posts/${id}`, contents),
  delPost: (id) => api.delete(`posts/${id}`),
  getPosts: () => api.get("/posts"),
  getPost: (id) => api.get(`posts/${id}`),
};
export default apis;
