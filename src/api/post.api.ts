import { apiInstence } from "./axios";
/**
 * Clients returns
 */
// get all posts
export const getPosts = async () => {
  const { data } = await apiInstence.get("/posts");
  return data.posts;
};

// get single post based on slug/title
export const singlePost = async (title) => {
  const { data } = await apiInstence.get(`/posts/${title}`);
  return data;
};

/**
 * Admin returns for controlling
 */
//add new posts
export const addPost = async (postData) => {
  const { data } = await apiInstence.post("/posts", postData);
  return data;
};

// update the post
export const updatePost = async (id, postData) => {
  const { data } = await apiInstence.put(`/posts/${id}`, postData);
  return data;
};

// delete post
export const delPost = async (id) => {
  const { data } = await apiInstence.delete(`/posts/${id}`);
  return data;
};
