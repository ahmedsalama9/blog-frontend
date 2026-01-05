import type { ReactNode } from "react";
import { createContext, useEffect, useReducer } from "react";
import { getPosts } from "../api/post.api";
import { postReducer } from "../reducer/PostReducer";
import * as React from "react";

interface Reactions {
  likes: number;
  dislikes: number;
}

export interface Post {
  id: number;
  title: string;
  body?: string;
  reactions?: Reactions;
  views: number;
  tags?: string[];
}

export interface State {
  posts: Post[];
  loading: boolean;
  error: string | null;
}

export type PostAction =
  | { type: "SET_POST"; payload: Post[] }
  | { type: "ERROR"; payload: string };

export interface PostState {
  state: State;
  dispatch: React.Dispatch<PostAction>;
}

// create context
export const PostContext = createContext<PostState | null>(null);

// for provider
interface ProviderPorps {
  children: ReactNode;
}
export const PostProvider = ({ children }: ProviderPorps) => {
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
