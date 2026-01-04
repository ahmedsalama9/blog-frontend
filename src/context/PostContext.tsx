import { createContext, useEffect, useReducer } from "react";
import { getPosts } from "../api/post.api";
import { postReducer } from "../reducer/PostReducer";

export const PostContext = createContext();

export const PostProvider = ({ children }) => {
  const [state, dispatch] = useReducer(postReducer, {
    posts: [],
    loading: false,
    error: null,
  });

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await getPosts();
        dispatch({ type: "SET_POST", payload: data });
      } catch (error) {
        dispatch({ type: "ERROR", payload: error.message });
      }
    };

    fetchPosts();
  }, []);

  return (
    <PostContext.Provider value={{ state, dispatch }}>
      {children}
    </PostContext.Provider>
  );
};
