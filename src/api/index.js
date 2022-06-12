import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:4000",
});

// export const getPosts = async () => {
//   const response = await api.get("/posts");
//   return response.data;
// };

// export const getPostById = async (id) => {
//   const response = await api.get(`/posts/${id}`);
//   return response.data;
// };

const apis = {
  getPosts: () => api.get("/posts"),
  addPost: (newPost) => api.post("/posts", newPost),
  deletePost: (postId) => api.delete(`/posts/${postId}`),
};

export default apis;
